import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

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
import { SubjectVM } from '../subjects/model';
import { RowActionSection, SectionVM } from './model';
import { SectionsService } from './sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit, OnDestroy {
  @Output()
  closed = new EventEmitter();
  form!: FormGroup;
  loading = false;

  departments: Array<DepartmentVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = SEMESTERS;

  sectionsData: TableDataVM<SectionVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Sección',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
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
  submitDisabled = true;

  filteredDepartments!: Observable<DepartmentVM[]>;
  filteredSemesters!: Observable<SemesterVM[]>;
  filteredSubjects!: Observable<SubjectVM[]>;

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private stateService: StateService
  ) {}

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.loadDepartments();
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

  private createForm(): void {
    this.form = this.fb.group({
      departmentId: [null, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semester: [null, [Validators.required]],
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe((department) => {
        this.departmentId = +department.id;
        if (department && department.id) {
          this.filteredDepartments = of(this.departments);
          this.loadSubjects();
        }
      })
    );

    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe((semester) => {
        this.semester = +semester.id;
        if (semester && semester.id) {
          this.filteredSemesters = of(this.semesters);
          this.loadSubjects();
        }
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subject) => {
        this.subjectId = +subject.id;
        if (subject && subject.id) {
          this.filteredSubjects = of(this.subjects);
          this.loadSections();
        }
      })
    );

    if (this.data) {
      this.periodId = this.data.periodId;
      this.form.patchValue({
        ...this.data,
      });
      this.loadSubjects();
    }

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );
  }

  private loadDepartments(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
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
        this.loading = false;
        setTimeout(() => this.stateService.setLoading(this.loading), 500);
      })
    );
  }

  private loadSubjects(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
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
          this.loading = false;
          setTimeout(() => this.stateService.setLoading(this.loading), 500);
        })
    );
  }

  loadSections(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.sectionsService
        .getSections$(this.subjectId, this.periodId)
        .subscribe((sections) => {
          this.sectionsData = {
            ...this.sectionsData,
            body: sections || [],
          };
          console.log(this.sectionsData);
          this.tableService.setData(this.sectionsData);
          this.loading = false;
          setTimeout(() => this.stateService.setLoading(this.loading), 500);
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
          body: `¿Está seguro que desea eliminar la sección <strong>${section.name}</strong>?`,
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

  clickClosed(): void {
    this.closed.emit();
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
