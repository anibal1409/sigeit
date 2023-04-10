import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Observable, Subscription, map, startWith } from 'rxjs';
import {
  ConfirmModalComponent,
  OptionAction,
  SEMESTERS,
  SemesterVM,
  TableDataVM,
  TableService,
} from 'src/app/common';

import { DepartmentVM } from '../departments';
import { SubjectVM } from '../subjects/model';
import { RowActionSection, SectionVM } from './model';
import { SectionsService } from './sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  departments: Array<DepartmentVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = SEMESTERS;

  sectionsData: TableDataVM<SectionVM> = {
    headers: [
      {
        columnDef: 'section_name',
        header: 'Sección',
        cell: (element: { [key: string]: string }) =>
          `${element['section_name']}`,
      },
      {
        columnDef: 'id_teacher',
        header: 'Profesor',
        cell: (element: { [key: string]: string }) =>
          `${
            (element['teacher'] as any)?.last_name
              ? (element['teacher'] as any)?.last_name + ','
              : ''
          } ${(element['teacher'] as any)?.first_name}`,
      },
      {
        columnDef: 'status',
        header: 'Estatus',
        cell: (element: { [key: string]: string }) => `${element['status']}`,
      },
      {
        columnDef: 'capacity',
        header: 'Capacidad',
        cell: (element: { [key: string]: string }) => `${element['capacity']}`,
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

  showForm = false;

  private sub$ = new Subscription();

  filteredDepartments!: Observable<DepartmentVM[]>;
  filteredSemesters!: Observable<SemesterVM[]>;
  filteredSubjects!: Observable<SubjectVM[]>;

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.loadDepartments();
    if (this.semester) {
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

  private createForm(): void {
    this.form = this.fb.group({
      departmentId: [null, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semester: [-1, [Validators.required]],
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe((department) => {
        console.log(department);
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
  }

  private loadDepartments(): void {
    this.sub$.add(
      this.sectionsService.getDepartaments$(1).subscribe((departaments) => {
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
    this.sub$.add(
      this.sectionsService
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
        })
    );
  }

  loadSections(): void {
    this.sub$.add(
      this.sectionsService
        .getSections$(this.subjectId, this.periodId)
        .subscribe((sections) => {
          this.sectionsData = {
            ...this.sectionsData,
            body: sections || [],
          };
          this.sectionsData.body = this.sectionsData.body.map((data) =>
            data['status'] == true
              ? { ...data, status: 'Activo' }
              : { ...data, status: 'Inactivo' }
          );
          this.tableService.setData(this.sectionsData);
        })
    );
  }

  changeShowForm(showForm: boolean): void {
    this.showForm = showForm;
    if (!showForm) {
      this.sectionId = 0;
    }
  }

  displayFn(item: DepartmentVM | SubjectVM | SemesterVM): string {
    return item && item?.name ? item.name : '';
  }

  clickOption(event: OptionAction): void {
    switch (event.option.value) {
      case RowActionSection.update:
        this.sectionId = +event.data['id'];
        this.changeShowForm(true);
        break;
      case RowActionSection.delete:
        this.showConfirm(event.data as any);
        break;
    }
  }

  showConfirm(section: SectionVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar Sección',
          body: `¿Está seguro que desea eliminar la sección <strong>${section.section_name}</strong>?`,
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.sectionsService.removeSection$(section?.id || 0).subscribe(() => {
          this.loadSections();
        });
      }
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
    return this.semesters.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
  private _subjectFilter(name: string): SubjectVM[] {
    const filterValue = name.toLowerCase();
    return this.subjects.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
