import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { ConfirmModalComponent } from '../../common/confirm-modal';
import {
  SEMESTERS,
  SemesterVM,
} from '../../common/semester';
import { StateService } from '../../common/state';
import {
  OptionAction,
  TableDataVM,
  TableService,
} from '../../common/table';
import { UserStateService } from '../../common/user-state';
import { DepartmentVM } from '../departments/model';
import { SectionsComponent } from '../sections';
import { SectionVM } from '../sections/model';
import { SubjectVM } from '../subjects/model';
import {
  RowActionSchedule,
  ScheduleVM,
} from './model';
import { SchedulesService } from './schedules.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  departments: Array<DepartmentVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = SEMESTERS;
  sections: Array<SectionVM> = [];

  data: TableDataVM<ScheduleVM> = {
    headers: [
      {
        columnDef: 'id_section',
        header: 'Sección',
        cell: (element: { [key: string]: string }) =>
          `${(element['section'] as any)?.name}`,
      },
      {
        columnDef: 'id_classroom',
        header: 'Aula',
        cell: (element: { [key: string]: string }) =>
          `${(element['classroom'] as any)?.name}`,
      },
      {
        columnDef: 'day',
        header: 'Dia',
        cell: (element: { [key: string]: string }) =>
          `${(element['day'] as any)?.name}`,
      },
      {
        columnDef: 'start',
        header: 'Hora de Inicio',
        cell: (element: { [key: string]: string }) => `${element['start']}`,
      },
      {
        columnDef: 'end',
        header: 'Hora de Culminación',
        cell: (element: { [key: string]: string }) => `${element['end']}`,
      },
      {
        columnDef: 'hours',
        header: 'Horas academicas',
        cell: (element: { [key: string]: string }) => `${element['hours']}`,
      },
    ],
    body: [],
    options: [],
  };

  periodId!: number;
  departmentId!: number;
  semester!: number;
  subjectId!: number;
  sectionId!: number;
  scheduleId!: number;
  teacherId!: number;

  showForm = false;
  loading = false;
  showTableSchedules = false;

  private sub$ = new Subscription();
  addDisabled = true;

  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    private schedulesService: SchedulesService,
    private stateService: StateService,
    private userStateService: UserStateService,
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.sub$.add(
      this.schedulesService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.sub$.add(
      this.schedulesService.getData$().subscribe((data) => {
        this.data = {
          ...this.data,
          body: data || [],
        };

        this.tableService.setData(this.data);
      })
    );

    this.sub$.add(
      this.schedulesService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
        }
      })
    );
    this.sub$.add(
      this.schedulesService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
        }
      })
    );
    this.loadDepartments();
    this.loadTeachers();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    this.clearList();
  }

  clearList(): void {
    this.data = {
      ...this.data,
      body: [],
    };
    this.tableService.setData(this.data);
  }

  private createForm(): void {
    this.form = this.fb.group({
      departmentId: [null, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semester: [null, [Validators.required]],
      sectionId: [null, [Validators.required]],
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe((departmentId) => {
        this.changeShowForm(false);
        this.departmentId = +departmentId;
        this.semester = 0;
        this.subjectId = 0;
        this.sectionId = 0;
        
        this.form.patchValue({
          semester: null,
          subjectId: null,
          sectionId: null,
        });

        this.clearList();

        if (departmentId) {
          this.loadTeachers();
          this.loadSubjects();
          this.validateForm();
          this.form.patchValue({
            semester: this.semesters[0].id,
          });
        } 
      })
    );

    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe((semester) => {
        this.semester = +semester;
        if (semester) {
          this.form.patchValue({
            subjectId: null,
            sectionId: null,
          });
          this.loadSubjects();
        }
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subjectId) => {
        this.subjectId = +subjectId;
        this.form.patchValue({
          sectionId: null,
        });
        if (subjectId) {
          this.loadSubjectSchedules();
          this.loadSections();
          this.validateForm();
        }
      })
    );

    this.sub$.add(
      this.form.get('sectionId')?.valueChanges.subscribe((sectionId) => {
        this.teacherId = 0;
        this.sectionId = +sectionId;
        if (sectionId) {
          const section = this.sections.find((s) => s.id === sectionId);
          if (section?.teacher?.id) {
            this.teacherId = section.teacher.id;
          }
          this.loadSchedules();
          this.validateForm();
        }
      })
    );
    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.addDisabled = this.form.invalid;
      })
    );
  }

  loadTeachers(): void {
    const departmentId = this.form.get('departmentId')?.value;
    this.sub$.add(this.schedulesService.getTeachers$({departmentId}).subscribe());
  }

  private loadSubjectSchedules(): void {
    if (this.subjectId) {
      this.sub$.add(
        this.schedulesService
          .get({ subjectId: this.subjectId, periodId: this.periodId })
      );
    }
  }

  private validateForm(): void {
    if (this.showForm) {
      this.showForm = false;
    }
  }

  private loadDepartments(): void {
    this.sub$.add(
      this.schedulesService
        .getDepartaments$({ schoolId: this.userStateService.getSchoolId() })
        .subscribe((departaments) => {
          this.departments = departaments;
          if (departaments.length) {
            this.form.patchValue({
              departmentId: departaments[0]?.id,
            });
          }
        })
    );
  }

  private loadSubjects(): void {
    if (this.departmentId && this.semester) {
      this.sub$.add(
        this.schedulesService
          .getSubjects$({
            departmentId: +this.departmentId,
            semester: this.semester > 0 ? this.semester : undefined,
          })
          .subscribe((subjects) => {
            this.subjects = subjects;
          })
      );
    }
  }

  private loadSections(): void {
    if (this.subjectId) {
      this.sub$.add(
        this.schedulesService
          .getSections$({
            departmentId: this.departmentId,
            subjectId: this.subjectId,
            periodId: this.periodId,
          })
          .subscribe((sections) => {
            this.sections = sections;
          })
      );
    }
  }

  loadSchedules(): void {
    if (this.sectionId) {
      this.sub$.add(
        this.schedulesService
          .get({ sectionId: this.sectionId, periodId: this.periodId })
      );
    } else {
      this.loadSubjectSchedules();
    }
  }

  changeShowForm(showForm: boolean): void {
    this.showForm = showForm;
    if (!showForm) {
      // this.sectionId = 0;
      this.scheduleId = 0;
    }
  }

  clickOption(event: OptionAction): void {
    switch (event.option.value) {
      case RowActionSchedule.update:
        if (this.teacherId) {
          this.scheduleId = +event.data['id'];
          this.changeShowForm(true);
        }
        break;
      case RowActionSchedule.delete:
        this.showConfirm(event.data as any);
        break;
    }
  }

  showConfirm(schedule: ScheduleVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar hoarario',
          body: `¿Está seguro que desea eliminar el horario desde las <strong>${schedule.start}</strong> hasta las <strong>${schedule.end}</strong>?`,
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.schedulesService.delete(schedule?.id || 0);
      }
    });
  }

  showListSections(): void {
    const dialogRef = this.matDialog.open(SectionsComponent, {
      data: {
        periodId: this.periodId,
        departmentId: this.departments.find(
          (dep) => dep.id == this.departmentId
        ),
        semester: this.semesters.find((sems) => sems.id == this.semester),
        subjectId: this.subjects.find((subj) => subj.id == this.subjectId),
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      this.loadSections();
    });
  }
}
