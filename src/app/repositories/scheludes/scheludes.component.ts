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
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  finalize,
  lastValueFrom,
  map,
  Observable,
  of,
  startWith,
  Subscription,
} from 'rxjs';
import {
  ConfirmModalComponent,
  OptionAction,
  SEMESTERS,
  SemesterVM,
  TableDataVM,
  TableService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { DepartmentVM } from '../departments';
import { SectionVM } from '../sections';
import { SectionsComponent } from '../sections/sections.component';
import { SubjectVM } from '../subjects';
import {
  RowActionSchedule,
  ScheduleVM,
} from './model';
import { SchedulesService } from './scheludes.service';

@Component({
  selector: 'app-scheludes',
  templateUrl: './scheludes.component.html',
  styleUrls: ['./scheludes.component.scss'],
})
export class ScheludesComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  horario = [
    {
      hora: '07:00',
      lunes: 'Matemáticas',
      martes: '',
      miercoles: 'Historia',
      jueves: '',
      viernes: '',
    },
    {
      hora: '08:40',
      lunes: 'Física',
      martes: '',
      miercoles: 'Historia',
      jueves: 'Química',
      viernes: '',
    },
    {
      hora: '11:00',
      lunes: 'Física',
      martes: 'Inglés',
      miercoles: 'Historia',
      jueves: 'Química',
      viernes: '',
    },
    // ...
  ];

  dias = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

  departments: Array<DepartmentVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = SEMESTERS;
  sections: Array<SectionVM> = [];

  scheludeData: TableDataVM<ScheduleVM> = {
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
    ],
    body: [],
    options: [],
  };

  periodId = 3;
  departmentId = 0;
  semester = -1;
  subjectId = 0;
  sectionId = 0;
  scheduleId = 0;
  teacherId = 0;

  showForm = false;
  loading = false;
  reload = true;
  showTableSchedules = false;

  private sub$ = new Subscription();
  addDisabled = true;

  filteredDepartments!: Observable<DepartmentVM[]>;
  filteredSemesters!: Observable<SemesterVM[]>;
  filteredSubjects!: Observable<SubjectVM[]>;

  queryParamsList!: { [key: string]: string };
  readingFromParams = false;

  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    private schedulesService: SchedulesService,
    private stateService: StateService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadFormParams();
    this.loadDepartments();
    this.sub$.add(
      this.activatedRouter.queryParams.subscribe((params) => {
        localStorage.setItem(
          'sigeit_schedule_params',
          JSON.stringify({ ...params })
        );
      })
    );
    if (this.semesters) {
      this.filteredSemesters = this.form.controls['semester'].valueChanges.pipe(
        startWith<string | SemesterVM>(''),
        map((value: any) => {
          if (value !== null) {
            return typeof value === 'string' ? value : value.name;
          }
          return '';
        }),
        map((name: any) => {
          return name ? this._semesterFilter(name) : this.semesters.slice();
        })
      );
    }
    this.sub$.add(
      this.schedulesService.getTeachers$().subscribe()
    );
  }

  ngOnDestroy(): void {
    localStorage.setItem('sigeit_schedule_params', JSON.stringify({}));

    this.sub$.unsubscribe();
    this.scheludeData = {
      ...this.scheludeData,
      body: [],
    };
    this.tableService.setData(this.scheludeData);
  }

  private createForm(): void {
    this.form = this.fb.group({
      departmentId: [null, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semester: [null, [Validators.required]],
      sectionId: [null, [Validators.required]],
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe((department) => {
        this.departmentId = +department?.id;
        if (!this.readingFromParams) {
          this.form.patchValue({
            semester: -1,
            subjectId: null,
            sectionId: null,
          });
        }
        if (department && department?.id) {
          this.filteredDepartments = of(this.departments);
          this.addParams('departmentId', department.id);
          this.loadSubjects();
          this.validateForm();
        }
      })
    );

    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe((semester) => {
        this.semester = +semester?.id;
        if (semester && semester?.id) {
          this.filteredSemesters = of(this.semesters);
          this.addParams('semesterId', semester.id);
          this.loadSubjects();
        }
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subject) => {
        this.subjectId = +subject?.id;
        if (subject && subject?.id) {
          this.loadSubjectSchedules();
        }
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subject) => {
        this.subjectId = +subject?.id;
        if (!this.readingFromParams) {
          this.form.patchValue({
            sectionId: null,
          });
        }
        if (subject && subject?.id) {
          this.filteredSubjects = of(this.subjects);
          this.addParams('subjectId', subject.id);
          this.loadSections();
          this.validateForm();
        }
      })
    );

    this.sub$.add(
      this.form.get('sectionId')?.valueChanges.subscribe((section) => {
        this.teacherId = +section?.teacherId;
        this.sectionId = +section?.id;
        if (section && section?.id) {
          this.addParams('sectionId', section.id);
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

  private loadSubjectSchedules(): void {
    if (this.subjectId) {
      this.loading = true;
      this.stateService.setLoading(this.loading);
      this.sub$.add(
        this.schedulesService.getSubjectSchedules$(
          this.subjectId,
          this.periodId
        )
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe(
          (schedules) => {
            this.tableService.setData({
              ...this.scheludeData,
              body: schedules,
            });
          }
        )
      );
    }
  }

  private validateForm(): void {
    if (this.showForm) {
      this.showForm =  false;
    }
  }

  private loadDepartments(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getDepartaments$(1)
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((departaments) => {
          this.departments = departaments;
          if (departaments) {
            this.filteredDepartments = this.form.controls[
              'departmentId'
            ].valueChanges.pipe(
              startWith<string | DepartmentVM>(''),
              map((value: any) => {
                if (value !== null) {
                  return typeof value === 'string' ? value : value.name;
                }
                return '';
              }),
              map((name: any) => {
                return name
                  ? this._departmentFilter(name)
                  : this.departments.slice();
              })
            );
          }
        })
    );
  }

  private loadSubjects(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getSubjects$(+this.departmentId, +this.semester)
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((subjects) => {
          this.subjects = subjects;
          if (subjects) {
            this.filteredSubjects = this.form.controls[
              'subjectId'
            ].valueChanges.pipe(
              startWith<string | SubjectVM>(''),
              map((value: any) => {
                if (value !== null) {
                  return typeof value === 'string' ? value : value.name;
                }
                return '';
              }),
              map((name: any) => {
                return name ? this._subjectFilter(name) : this.subjects.slice();
              })
            );
          }
        })
    );
  }

  private loadSections(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getSections$(this.subjectId, this.periodId)
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((sections) => {
          this.sections = sections;
        })
    );
  }

  loadSchedules(): void {
    if (this.sectionId) {
      this.loading = true;
      this.stateService.setLoading(this.loading);
      this.sub$.add(
        this.schedulesService
          .getSectionSchedules$(this.sectionId)
          .pipe(
            finalize(() => {
              this.loading = false;
              setTimeout(() => this.stateService.setLoading(this.loading), 500);
            })
          )
          .subscribe((schedules) => {
            this.scheludeData = {
              ...this.scheludeData,
              body: schedules || [],
            };
            this.tableService.setData(this.scheludeData);
          })
      );
    } else {
      this.loadSubjectSchedules();
    }
  }

  changeShowForm(showForm: boolean): void {
    this.showForm = showForm;
    if (!showForm) {
      this.sectionId = 0;
    }
  }

  displayFn(item: DepartmentVM | SubjectVM | SemesterVM | any): string {
    return item?.name;
  }

  clickOption(event: OptionAction): void {
    switch (event.option.value) {
      case RowActionSchedule.update:
        this.scheduleId = +event.data['id'];
        this.changeShowForm(true);
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
          title: 'Eliminar Sección',
          body: `¿Está seguro que desea eliminar el horario desde las <strong>${schedule.start}</strong> hasta las <strong>${schedule.end}</strong>?`,
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.loading = true;
        this.stateService.setLoading(this.loading);
        this.schedulesService
          .removeSchedule$(schedule?.id || 0)
          .pipe(
            finalize(() => {
              this.loading = false;
              setTimeout(() => this.stateService.setLoading(this.loading), 500);
            })
          )
          .subscribe(() => this.loadSchedules());
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

  private async loadFormParams(): Promise<void> {
    this.queryParamsList = JSON.parse(
      localStorage.getItem('sigeit_schedule_params') as string
    );

    if (Object.keys(this.queryParamsList).length !== 0) {
      this.readingFromParams = true;
      let { sectionId, departmentId, semesterId, subjectId } =
        this.queryParamsList;
      let lastDepartment, lastSection, lastSemester, lastSubject;
      if (departmentId) {
        lastDepartment = (
          await lastValueFrom(this.schedulesService.getDepartaments$(1))
        ).find((dept) => dept.id == +departmentId);

        if (semesterId) {
          lastSemester = this.semesters.find(
            (semestr) => semestr.id == +semesterId
          );

          if (subjectId) {
            lastSubject = (
              await lastValueFrom(
                this.schedulesService.getSubjects$(+departmentId, +semesterId)
              )
            ).find((subj) => subj.id == +subjectId);
            if (subjectId) {
              lastSection = (
                await lastValueFrom(
                  this.schedulesService.getSections$(+subjectId, this.periodId)
                )
              ).find((sect) => sect.id == +sectionId);
            }
          }
        }
        this.form.patchValue({
          sectionId: lastSection || '',
          subjectId: lastSubject || '',
          departmentId: lastDepartment || '',
          semester: lastSemester || '',
        });
        this.readingFromParams = false;
        this.router.navigate([], { queryParams: {} });
      }
    }
  }

  private addParams(key: string, value: string): void {
    this.queryParamsList[key] = value;
    this.router.navigate([], { queryParams: this.queryParamsList });
  }

  private _departmentFilter(name: string): DepartmentVM[] {
    const filterValue = name.toLowerCase();
    return this.departments.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private _semesterFilter(name: string): SemesterVM[] {
    const filterValue = name.toLowerCase();
    const data = this.semesters.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
    return data;
  }

  private _subjectFilter(name: string): SubjectVM[] {
    const filterValue = name.toLowerCase();
    return this.subjects.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
