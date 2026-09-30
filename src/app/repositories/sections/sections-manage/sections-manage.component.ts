import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {
  ResponseSectionDto,
  ResponseSectionTeacherDto,
  SectionService,
  UpdateSectionDto,
} from 'dashboard-sdk';
import {
  concat,
  defer,
  finalize,
  forkJoin,
  merge,
  Subscription,
  tap,
} from 'rxjs';
import { ToastService } from 'toast';

import {
  computeCoverage,
  ConfirmModalComponent,
  SECTIONS_LOAD_PANEL_KEY,
  SEMESTERS,
  StateService,
  SubjectCoverage,
  SubjectDemandDialogComponent,
  SubjectDemandDialogData,
  SubjectDemandStoreService,
  SubjectDemandSummary,
  UserStateService,
} from '../../../common';
import { DepartmentVM } from '../../departments';
import { SubjectVM } from '../../subjects/model';
import { DEDICATION_OPTIONS } from '../../teachers/model';
import {
  GradeSearchComponent,
  GradeSearchDialogData,
} from '../../teachers/grade-search/grade-search.component';
import {
  ProfileComponent,
  ProfileData,
} from '../../teachers/profile/profile.component';
import { SectionsService } from '../sections.service';

export interface SectionRow {
  id: number;
  name: string;
  capacity: number;
  status: boolean;
  teacherId: number | null;
  teacherName: string;
  saving: boolean;
}

export interface SubjectGroup {
  subject: SubjectVM;
  sections: Array<SectionRow>;
  expanded: boolean;
  demand?: SubjectDemandSummary;
  coverage: SubjectCoverage | null;
  /** Secciones activas */
  active: number;
  /** Cupo de las secciones activas */
  offered: number;
  /** Secciones activas sin profesor */
  unassigned: number;
}

/** Gestión de todas las secciones del departamento en una sola pantalla. */
@Component({
  selector: 'app-sections-manage',
  templateUrl: './sections-manage.component.html',
  styleUrls: ['./sections-manage.component.scss'],
})
export class SectionsManageComponent implements OnInit, OnDestroy {
  readonly semesters = SEMESTERS;

  departments: Array<DepartmentVM> = [];
  departmentIdUser = 0;
  departmentCtrl = new FormControl<number | null>(null);
  semesterCtrl = new FormControl(-1);
  searchCtrl = new FormControl('');
  uncoveredCtrl = new FormControl(false);
  unassignedCtrl = new FormControl(false);

  periodId = 0;
  periodName = '';
  departmentId = 0;
  loading = false;

  groups: Array<SubjectGroup> = [];
  visibleGroups: Array<SubjectGroup> = [];
  suggestions: Array<SubjectVM> = [];
  showLoad = localStorage.getItem(SECTIONS_LOAD_PANEL_KEY) !== 'hidden';
  demandPeriodName = '';
  totals = { sections: 0, unassigned: 0, uncovered: 0 };

  /** Carga del período de los profesores del departamento, de mayor a menor. */
  load: Array<ResponseSectionTeacherDto> = [];
  maxHours = 0;
  hours = new Map<number, number>();
  /** Candidatos por asignatura (historial y notas), cargados al abrir el selector; undefined mientras cargan. */
  candidates = new Map<number, Array<ResponseSectionTeacherDto> | undefined>();

  private summaries = new Map<number, SubjectDemandSummary>();
  private sub$ = new Subscription();

  constructor(
    private sectionsService: SectionsService,
    private sectionService: SectionService,
    private demandStore: SubjectDemandStoreService,
    private stateService: StateService,
    private userStateService: UserStateService,
    private matDialog: MatDialog,
    private toastService: ToastService,
  ) {}

  ngOnInit(): void {
    this.departmentIdUser = this.userStateService.getDepartmentId() || 0;

    this.sub$.add(
      this.sectionsService.getActivePeriod$().subscribe((period) => {
        if (!period?.id) return;
        this.periodId = period.id;
        this.periodName = period.name;
        if (this.departmentIdUser) {
          this.selectDepartment(this.departmentIdUser);
        }
      }),
    );

    if (!this.departmentIdUser) {
      this.sub$.add(
        this.sectionsService
          .getDepartaments$({ schoolId: this.userStateService.getSchoolId(), status: true })
          .subscribe((departments) => (this.departments = departments)),
      );
    }

    this.sub$.add(
      this.departmentCtrl.valueChanges.subscribe((id) => id && this.selectDepartment(+id)),
    );
    this.sub$.add(
      merge(
        this.semesterCtrl.valueChanges,
        this.searchCtrl.valueChanges,
        this.uncoveredCtrl.valueChanges,
        this.unassignedCtrl.valueChanges,
      ).subscribe(() => this.applyFilters()),
    );
    this.sub$.add(
      this.demandStore.getConfigChanges$().subscribe(() => {
        this.groups.forEach((group) => this.recompute(group));
        this.updateTotals();
      }),
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  selectDepartment(departmentId: number): void {
    if (!this.periodId) return;
    this.departmentId = departmentId;
    this.candidates.clear();
    this.setLoading(true);
    this.sub$.add(
      forkJoin([
        this.sectionsService.getSubjects$({ departmentId, status: true }),
        this.sectionService.sectionControllerFindAll(this.periodId, departmentId),
        this.demandStore.getSource$(this.periodId),
      ])
        .pipe(finalize(() => this.setLoading(false)))
        .subscribe(([subjects, sections, source]) => {
          this.summaries = source.summaries;
          this.demandPeriodName =
            source.period && source.period.id !== this.periodId ? source.period.name : '';
          this.groups = this.buildGroups(subjects, sections);
          this.applyFilters();
        }),
    );
    this.refreshLoad();
  }

  /** Carga los candidatos de la asignatura la primera vez que se abre un selector suyo. */
  ensureCandidates(subjectId: number): void {
    if (this.candidates.has(subjectId)) return;
    this.candidates.set(subjectId, undefined);
    this.sub$.add(
      this.sectionService
        .sectionControllerFindTeachers(this.periodId, this.departmentId, subjectId)
        .subscribe({
          next: (items) => (this.candidates = new Map(this.candidates).set(subjectId, items)),
          error: () => this.candidates.delete(subjectId),
        }),
    );
  }

  addSections(group: SubjectGroup, count = 1): void {
    const creations = Array.from({ length: count }, () =>
      defer(() =>
        this.sectionService.sectionControllerCreate({
          name: this.nextName(group),
          capacity: this.demandStore.getConfig(this.periodId, group.subject.id || 0).sectionCapacity,
          status: true,
          subject: { id: group.subject.id || 0 },
          period: { id: this.periodId },
          teacher: null,
        }),
      ).pipe(tap((section) => group.sections.push(toRow(section)))),
    );
    group.expanded = true;
    this.setLoading(true);
    this.sub$.add(
      concat(...creations)
        .pipe(
          finalize(() => {
            this.setLoading(false);
            this.recompute(group);
            this.updateTotals();
          }),
        )
        .subscribe(),
    );
  }

  missingSections(group: SubjectGroup): number {
    return Math.max((group.coverage?.suggestedSections || 0) - group.active, 0);
  }

  changeName(group: SubjectGroup, row: SectionRow, input: HTMLInputElement): void {
    const value = input.value.trim();
    const name = /^\d$/.test(value) ? `0${value}` : value;
    if (!name || name === row.name) {
      input.value = row.name;
      return;
    }
    this.save(group, row, { name }, () => (input.value = row.name));
  }

  changeCapacity(group: SubjectGroup, row: SectionRow, input: HTMLInputElement): void {
    const capacity = Number(input.value);
    if (!Number.isInteger(capacity) || capacity < 1 || capacity === row.capacity) {
      input.value = String(row.capacity);
      return;
    }
    this.save(group, row, { capacity }, () => (input.value = String(row.capacity)));
  }

  changeTeacher(group: SubjectGroup, row: SectionRow, teacherId: number | null): void {
    this.save(group, row, { teacher: teacherId ? { id: teacherId } : null });
  }

  changeStatus(group: SubjectGroup, row: SectionRow, status: boolean): void {
    this.save(group, row, { status }, () => (row.status = !status));
  }

  remove(group: SubjectGroup, row: SectionRow): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar Sección',
          body: `¿Eliminar la sección <strong>${row.name}</strong> de ${group.subject.name}? También se eliminan sus horarios e inscripciones.`,
        },
      },
      hasBackdrop: true,
    });
    dialogRef.componentInstance.closed.subscribe((confirmed: boolean) => {
      dialogRef.close();
      if (!confirmed) return;
      row.saving = true;
      this.sub$.add(
        this.sectionService
          .sectionControllerRemove(row.id)
          .pipe(finalize(() => (row.saving = false)))
          .subscribe(() => {
            group.sections = group.sections.filter((item) => item !== row);
            this.recompute(group);
            this.updateTotals();
            this.refreshLoad();
          }),
      );
    });
  }

  openDemand(group: SubjectGroup): void {
    this.matDialog.open<SubjectDemandDialogComponent, SubjectDemandDialogData>(SubjectDemandDialogComponent, {
      data: {
        periodId: this.periodId,
        subjectId: group.subject.id || 0,
        subjectName: group.subject.name,
        offered: group.offered,
      },
      width: '56rem',
      maxWidth: '95vw',
    });
  }

  openProfile(row: SectionRow): void {
    const [lastName, firstName] = row.teacherName.split(', ');
    const teacher =
      this.load.find((item) => item.teacher.id === row.teacherId)?.teacher ??
      [...this.candidates.values()].flat().find((item) => item?.teacher.id === row.teacherId)?.teacher ??
      { id: row.teacherId || 0, firstName, lastName };
    this.matDialog.open<ProfileComponent, ProfileData>(ProfileComponent, {
      data: { teacher },
      width: '56rem',
      maxWidth: '95vw',
    });
  }

  openGradeSearch(): void {
    this.matDialog.open<GradeSearchComponent, GradeSearchDialogData>(GradeSearchComponent, {
      data: { departmentId: this.departmentId || undefined },
      width: '72rem',
      maxWidth: '95vw',
    });
  }

  toggleLoad(): void {
    this.showLoad = !this.showLoad;
    localStorage.setItem(SECTIONS_LOAD_PANEL_KEY, this.showLoad ? 'visible' : 'hidden');
  }

  get allExpanded(): boolean {
    return this.visibleGroups.every((group) => group.expanded);
  }

  toggleAll(): void {
    const expanded = !this.allExpanded;
    this.visibleGroups.forEach((group) => (group.expanded = expanded));
  }

  dedicationName(item: ResponseSectionTeacherDto): string {
    return DEDICATION_OPTIONS.find((option) => option.value === item.teacher.dedication)?.name || 'Sin dedicación';
  }

  sectionHours(group: SubjectGroup, row: SectionRow): number {
    return row.status ? group.subject.hours || 0 : 0;
  }

  trackGroup = (_: number, group: SubjectGroup) => group.subject.id;
  trackRow = (_: number, row: SectionRow) => row.id;

  /** Guarda un cambio parcial de la sección; si falla, ejecuta `revert`. */
  private save(group: SubjectGroup, row: SectionRow, changes: UpdateSectionDto, revert?: () => void): void {
    row.saving = true;
    this.sub$.add(
      this.sectionService
        .sectionControllerUpdate(row.id, changes)
        .pipe(finalize(() => (row.saving = false)))
        .subscribe({
          next: (section) => {
            Object.assign(row, toRow(section));
            this.recompute(group);
            this.updateTotals();
            if ('teacher' in changes || 'status' in changes) {
              this.refreshLoad();
            }
          },
          error: (error) => {
            revert?.();
            this.toastService.error(
              error?.error?.message === 'Section already exists.'
                ? `Ya existe la sección ${changes.name} en ${group.subject.name}`
                : 'No se pudo guardar el cambio de la sección',
            );
          },
        }),
    );
  }

  private refreshLoad(): void {
    this.sub$.add(
      this.sectionService
        .sectionControllerFindTeachers(this.periodId, this.departmentId)
        .subscribe((items) => {
          this.load = [...items].sort(
            (a, b) => b.hours - a.hours || (a.teacher.lastName || '').localeCompare(b.teacher.lastName || '', 'es'),
          );
          this.maxHours = Math.max(0, ...items.map((item) => item.hours));
          this.hours = new Map(items.map((item) => [item.teacher.id, item.hours]));
        }),
    );
  }

  private buildGroups(subjects: Array<SubjectVM>, sections: Array<ResponseSectionDto>): Array<SubjectGroup> {
    const bySubject = new Map<number, SubjectGroup>();
    const add = (subject: SubjectVM) =>
      bySubject.set(subject.id || 0, {
        subject,
        sections: [],
        expanded: true,
        coverage: null,
        active: 0,
        offered: 0,
        unassigned: 0,
      });
    subjects.forEach(add);
    for (const section of sections) {
      const subject = section.subject as SubjectVM;
      if (!bySubject.has(subject.id || 0)) {
        add(subject);
      }
      bySubject.get(subject.id || 0)?.sections.push(toRow(section));
    }
    const groups = [...bySubject.values()].sort(
      (a, b) =>
        a.subject.semester - b.subject.semester || a.subject.name.localeCompare(b.subject.name, 'es'),
    );
    groups.forEach((group) => this.recompute(group));
    return groups;
  }

  private recompute(group: SubjectGroup): void {
    const id = group.subject.id || 0;
    const active = group.sections.filter((row) => row.status);
    group.sections.sort((a, b) => a.name.localeCompare(b.name, 'es', { numeric: true }));
    group.active = active.length;
    group.offered = active.reduce((sum, row) => sum + (row.capacity || 0), 0);
    group.unassigned = active.filter((row) => !row.teacherId).length;
    group.demand = this.summaries.get(id);
    group.coverage = group.demand
      ? computeCoverage(group.demand, group.offered, this.demandStore.getConfig(this.periodId, id))
      : null;
  }

  private applyFilters(): void {
    const semester = this.semesterCtrl.value ?? -1;
    const words = normalize(this.searchCtrl.value || '').split(' ').filter(Boolean);
    const matches = (group: SubjectGroup) =>
      words.every((word) => normalize(`${group.subject.code} ${group.subject.name}`).includes(word));
    this.suggestions = words.length ? this.groups.filter(matches).slice(0, 8).map((group) => group.subject) : [];
    this.visibleGroups = this.groups.filter(
      (group) =>
        (semester < 0 || group.subject.semester === semester) &&
        matches(group) &&
        (!this.uncoveredCtrl.value || group.coverage?.status === 'low') &&
        (!this.unassignedCtrl.value || group.unassigned > 0),
    );
    this.updateTotals();
  }

  private updateTotals(): void {
    this.totals = {
      sections: this.groups.reduce((sum, group) => sum + group.sections.length, 0),
      unassigned: this.groups.reduce((sum, group) => sum + group.unassigned, 0),
      uncovered: this.groups.filter((group) => group.coverage?.status === 'low').length,
    };
  }

  private nextName(group: SubjectGroup): string {
    const last = Math.max(0, ...group.sections.map((row) => Number(row.name) || 0));
    return String(last + 1).padStart(2, '0');
  }

  private setLoading(loading: boolean): void {
    this.loading = loading;
    this.stateService.setLoading(loading);
  }
}

/** El listado del período trae la entidad (sin `teacherId`); crear y editar traen el DTO. */
function toRow(section: ResponseSectionDto): SectionRow {
  const teacher = section.teacher as { id: number; firstName?: string; lastName?: string } | null;
  return {
    id: section.id,
    name: section.name,
    capacity: section.capacity,
    status: section.status,
    teacherId: teacher?.id ?? null,
    teacherName: teacher ? `${teacher.lastName}, ${teacher.firstName}` : '',
    saving: false,
  };
}

function normalize(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
