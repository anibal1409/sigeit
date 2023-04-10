import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import {
  ConfirmModalComponent,
  OptionAction,
  SEMESTERS,
  SemesterVM,
  TableDataVM,
  TableService,
} from 'src/app/common';

import { DepartmentVM } from '../departments';
import { SectionVM } from '../sections';
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
          `${element['id_classroom']}`,
      },
      {
        columnDef: 'day',
        header: 'Dia',
        cell: (element: { [key: string]: string }) => `${element['day']}`,
      },
      {
        columnDef: 'id_section',
        header: 'Seccion',
        cell: (element: { [key: string]: string }) =>
          `${element['id_section']}`,
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

  showForm = false;

  private sub$ = new Subscription();

  constructor(
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    private schedulesService: SchedulesService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadDepartments();
    this.schedulesService.findPeriod$(this.periodId).subscribe((period) => {
      const intervals = this.schedulesService.generateTimeIntervals(
        period.start_time,
        period.end_time,
        period.duration,
        period.interval
      );
      console.log(intervals);
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private createForm(): void {
    this.form = this.fb.group({
      departmentId: [null, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semester: [-1, [Validators.required]],
      sectionId: [null, [Validators.required]],
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe((department) => {
        this.departmentId = +department.id;
        this.loadSubjects();
      })
    );

    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe((semester) => {
        console.log(semester);
        this.semester = +semester.id;
        this.loadSubjects();
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subject) => {
        console.log(subject);
        this.subjectId = +subject.id;
        this.loadSections();
      })
    );

    this.sub$.add(
      this.form.get('sectionId')?.valueChanges.subscribe((section) => {
        console.log(section);
        this.sectionId = +section.id;
        this.loadSchedules();
      })
    );
  }

  private loadDepartments(): void {
    this.sub$.add(
      this.schedulesService.getDepartaments$(1).subscribe((departaments) => {
        this.departments = departaments;
      })
    );
  }

  private loadSubjects(): void {
    console.log(this.semester);
    this.sub$.add(
      this.schedulesService
        .getSubjects$(+this.departmentId, +this.semester)
        .subscribe((subjects) => {
          console.log(subjects);
          this.subjects = subjects;
        })
    );
  }

  loadSections(): void {
    this.sub$.add(
      this.schedulesService
        .getSections$(this.subjectId, this.periodId)
        .subscribe((sections) => {
          this.sections = sections;
        })
    );
  }

  loadSchedules(): void {
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
  }

  changeShowForm(showForm: boolean): void {
    this.showForm = showForm;
    if (!showForm) {
      this.sectionId = 0;
    }
  }

  displayFn(item: DepartmentVM | SubjectVM | SemesterVM | any): string {
    if (item.section_name) {
      return item.section_name;
    } else {
      return item.name;
    }
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
}
