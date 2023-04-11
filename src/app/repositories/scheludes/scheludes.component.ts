import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { map, Observable, of, startWith, Subscription } from 'rxjs';
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
import { RowActionSchedule, ScheduleVM } from './model';
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
  sectionId = 1;
  scheduleId = 0;

  showForm = false;
  loading = false;
  reload = true;

  private sub$ = new Subscription();
  submitDisabled = true;

  filteredDepartments!: Observable<DepartmentVM[]>;
  filteredSemesters!: Observable<SemesterVM[]>;
  filteredSubjects!: Observable<SubjectVM[]>;

  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    private schedulesService: SchedulesService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadDepartments();
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
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
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
        if (department && department.id) {
          this.filteredDepartments = of(this.departments);
        }
        this.departmentId = +department.id;
        this.form.patchValue({
          semester: -1,
          subjectId: null,
          sectionId: null,
        });
        this.loadSubjects();
      })
    );

    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe((semester) => {
        if (semester && semester.id) {
          this.filteredSemesters = of(this.semesters);
        }
        this.semester = +semester?.id;
        this.loadSubjects();
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subject) => {
        if (subject && subject.id) {
          this.filteredSubjects = of(this.subjects);
        }
        this.subjectId = +subject?.id;
        this.form.patchValue({
          sectionId: null,
        });
        this.loadSections();
      })
    );

    this.sub$.add(
      this.form.get('sectionId')?.valueChanges.subscribe((section) => {
        this.sectionId = +section?.id;
        this.loadSchedules();
      })
    );
    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );
  }

  private loadDepartments(): void {
    console.log('load dep');

    if (!this.departmentId) {
      console.log('load dep on select');
      this.loading = true;
      this.stateService.setLoading(this.loading);
    }
    this.sub$.add(
      this.schedulesService.getDepartaments$(1).subscribe((departaments) => {
        this.departments = departaments;
        //
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
        //
        this.loading = false;
        setTimeout(() => this.stateService.setLoading(this.loading), 500);
      })
    );
  }

  private loadSubjects(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getSubjects$(+this.departmentId, +this.semester)
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
          this.loading = false;
          setTimeout(() => this.stateService.setLoading(this.loading), 500);
        })
    );
  }

  loadSections(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getSections$(this.subjectId, this.periodId)
        .subscribe((sections) => {
          this.sections = sections;
          this.loading = false;
          setTimeout(() => this.stateService.setLoading(this.loading), 500);
        })
    );
  }

  loadSchedules(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getSectionSchedules$(this.sectionId)
        .subscribe((schedules) => {
          this.scheludeData = {
            ...this.scheludeData,
            body: schedules || [],
          };
          this.tableService.setData(this.scheludeData);
        })
    );
    this.loading = false;
    setTimeout(() => this.stateService.setLoading(this.loading), 500);
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
        this.sectionId = +event.data['id'];
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
          body: `¿Está seguro que desea eliminar la sección <strong>${schedule}</strong>?`,
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.schedulesService
          .removeSchedule$(schedule?.id || 0)
          .subscribe(() => {});
      }
    });
  }

  showListSections(): void {
    const dialogRef = this.matDialog.open(SectionsComponent, {
      data: {
        periodId: this.periodId,
        departmentId: this.departmentId,
        semester: this.semester,
        subjectId: this.subjectId,
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      this.loadSections();
    });
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
