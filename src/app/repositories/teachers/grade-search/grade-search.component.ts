import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

import {
  DepartmentService,
  ResponseDepartmentDto,
  ResponseSubjectDto,
  ResponseTeacherDto,
  SubjectService,
  TeacherGradeMatchDto,
} from 'dashboard-sdk';
import {
  finalize,
  from,
  map,
  mergeMap,
  of,
  Subscription,
  switchMap,
  toArray,
} from 'rxjs';
import { UserStateService } from 'src/app/common';

import {
  DEGREE_LEVEL_OPTIONS,
  gradeLabel,
  optionName,
} from '../model';
import {
  ProfileComponent,
  ProfileData,
} from '../profile/profile.component';
import { TeacherAcademicService } from '../teacher-academic.service';

export const DEFAULT_MIN_PERCENT = 70;

/** Presente cuando la búsqueda se abre como modal. */
export interface GradeSearchDialogData {
  departmentId?: number;
}

interface SubjectMatches {
  subject: ResponseSubjectDto;
  matches: Array<TeacherGradeMatchDto>;
}

interface TeacherResult {
  teacher: ResponseTeacherDto;
  /** Solo las asignaturas buscadas que el profesor cumple */
  subjects: Array<SubjectMatches>;
  bestPercent: number;
}

/** Busca profesores que cursaron una o varias asignaturas del departamento con una nota mínima. */
@Component({
  selector: 'app-grade-search',
  templateUrl: './grade-search.component.html',
  styleUrls: ['./grade-search.component.scss'],
})
export class GradeSearchComponent implements OnInit, OnDestroy {
  readonly optionName = optionName;
  readonly gradeLabel = gradeLabel;
  readonly levelOptions = DEGREE_LEVEL_OPTIONS;

  form = this.formBuilder.group({
    departmentId: [null as number | null, Validators.required],
    subjectIds: [[] as Array<number>],
    teacherName: [''],
    minPercent: [DEFAULT_MIN_PERCENT as number | null, [Validators.min(0), Validators.max(100)]],
  });
  departments: Array<ResponseDepartmentDto> = [];
  subjects: Array<ResponseSubjectDto> = [];
  results: Array<TeacherResult> | null = null;
  /** Cantidad de asignaturas de la última búsqueda */
  searchedCount = 0;
  /** La última búsqueda recorrió todas las asignaturas del departamento */
  searchedAll = false;
  loading = false;
  subjectFilter = new FormControl('', { nonNullable: true });

  private sub$ = new Subscription();

  constructor(
    private academicService: TeacherAcademicService,
    private departmentService: DepartmentService,
    private subjectService: SubjectService,
    private userStateService: UserStateService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public dialogData: GradeSearchDialogData | null,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.departmentService
        .departmentControllerFindAll(this.userStateService.getSchoolId(), true)
        .subscribe((departments) => (this.departments = [...departments].sort((a, b) => a.name.localeCompare(b.name, 'es')))),
    );
    const departmentCtrl = this.form.controls.departmentId;
    this.sub$.add(
      departmentCtrl.valueChanges
        .pipe(
          switchMap((departmentId) =>
            departmentId ? this.subjectService.subjectControllerFindAll(undefined, undefined, departmentId, true) : of([]),
          ),
        )
        .subscribe((subjects) => {
          this.subjects = [...subjects].sort((a, b) => a.semester - b.semester || a.name.localeCompare(b.name, 'es'));
          this.form.controls.subjectIds.setValue([]);
        }),
    );
    departmentCtrl.setValue(this.dialogData?.departmentId || this.userStateService.getDepartmentId() || null);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  get selectedNames(): string {
    const ids = this.form.controls.subjectIds.value || [];
    return this.subjects
      .filter((subject) => ids.includes(subject.id))
      .map((subject) => subject.name)
      .join(', ');
  }

  matchesFilter(subject: ResponseSubjectDto): boolean {
    const words = normalize(this.subjectFilter.value).split(' ').filter(Boolean);
    const text = normalize(`${subject.code} ${subject.name} s${subject.semester}`);
    return words.every((word) => text.includes(word));
  }

  onSubjectsOpened(opened: boolean, input: HTMLInputElement): void {
    if (opened) {
      this.subjectFilter.setValue('');
      input.focus();
    }
  }

  /** El filtro escribe en su propio campo: evita que el select use las teclas (espacio selecciona). */
  onFilterKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape' && event.key !== 'Tab') {
      event.stopPropagation();
    }
  }

  /** Resultados filtrados por el nombre del profesor, sin volver a consultar. */
  get visibleResults(): Array<TeacherResult> {
    const words = normalize(this.form.controls.teacherName.value || '').split(' ').filter(Boolean);
    return (this.results || []).filter((result) => {
      const name = normalize(`${result.teacher.firstName} ${result.teacher.lastName} ${result.teacher.idDocument}`);
      return words.every((word) => name.includes(word));
    });
  }

  openProfile(teacher: ResponseTeacherDto): void {
    this.matDialog.open<ProfileComponent, ProfileData>(ProfileComponent, {
      data: { teacher },
      width: '56rem',
      maxWidth: '95vw',
    });
  }

  search(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }
    const { subjectIds, minPercent } = this.form.getRawValue();
    this.searchedAll = !subjectIds?.length;
    const selected = this.searchedAll ? this.subjects : this.subjects.filter((subject) => subjectIds?.includes(subject.id));
    this.loading = true;
    this.searchedCount = selected.length;
    from(selected)
      .pipe(
        mergeMap(
          (subject) =>
            this.academicService.searchByGrade$(subject.name, minPercent ?? undefined).pipe(
              map((rows) =>
                rows.map((row) => ({
                  teacher: row.teacher,
                  // La API busca por palabras: descarta coincidencias equivalentes a otra asignatura.
                  matches: row.matches.filter((match) => !match.subject || match.subject.id === subject.id),
                  subject,
                })),
              ),
            ),
          6,
        ),
        toArray(),
        finalize(() => (this.loading = false)),
      )
      .subscribe((groups) => (this.results = groupByTeacher(groups.flat(), selected)));
  }
}

function groupByTeacher(
  rows: Array<{ teacher: ResponseTeacherDto; subject: ResponseSubjectDto; matches: Array<TeacherGradeMatchDto> }>,
  subjectOrder: Array<ResponseSubjectDto>,
): Array<TeacherResult> {
  const byTeacher = new Map<number, TeacherResult>();
  for (const row of rows.filter((item) => item.matches.length)) {
    const result = byTeacher.get(row.teacher.id) ?? { teacher: row.teacher, subjects: [], bestPercent: 0 };
    result.subjects.push({ subject: row.subject, matches: row.matches });
    result.bestPercent = Math.max(result.bestPercent, ...row.matches.map((match) => match.percent ?? 0));
    byTeacher.set(row.teacher.id, result);
  }
  // mergeMap entrega las respuestas en desorden: se restablece el orden de las asignaturas (semestre, nombre).
  byTeacher.forEach((result) =>
    result.subjects.sort((a, b) => subjectOrder.indexOf(a.subject) - subjectOrder.indexOf(b.subject)),
  );
  return [...byTeacher.values()].sort(
    (a, b) => b.subjects.length - a.subjects.length || b.bestPercent - a.bestPercent,
  );
}

function normalize(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
