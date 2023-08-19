import {
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  finalize,
  lastValueFrom,
  map,
  Observable,
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
import { SubjectVM } from '../subjects/model';
import {
  RowActionSection,
  SectionVM,
} from './model';
import { SectionsService } from './sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit, OnDestroy {
  @Input()
  @HostBinding('class.app-modal')
  modal = false;

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
        columnDef: 'teacher.last_name',
        header: 'Profesor',
        cell: (element: { [key: string]: string }) =>
          `${
            (element['teacher'] as any)?.last_name
              ? (element['teacher'] as any)?.last_name + ','
              : ''
          } ${(element['teacher'] as any)?.first_name}`,
      },
      {
        columnDef: 'subject',
        header: 'Asignatura',
        cell: (element: { [key: string]: string }) =>
            (element['subject'] as any)?.name
              ? (element['subject'] as any)?.name
              : ''
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
  periodId = 4;
  departmentId = 0;
  semester = -1;
  subjectId = 0;
  sectionId = 0;

  showForm = false;

  private sub$ = new Subscription();
  addDisabled = true;

  filteredDepartments!: Observable<DepartmentVM[]>;
  filteredSemesters!: Observable<SemesterVM[]>;
  filteredSubjects!: Observable<SubjectVM[]>;

  queryParamsList!: { [key: string]: string };
  readingFromParams = false;

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private stateService: StateService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    localStorage.setItem('sigeit_section_params', JSON.stringify({}));
    this.sub$.unsubscribe();
    this.modal = false;
    this.sectionsData = {
      ...this.sectionsData,
      body: [],
    };
    this.tableService.setData(this.sectionsData);
  }

  ngOnInit(): void {
    this.createForm();

    this.loadFormParams();
    this.loadDepartments();
    this.sub$.add(
      this.activatedRouter.queryParams.subscribe((params) => {
        localStorage.setItem(
          'sigeit_section_params',
          JSON.stringify({ ...params })
        );
      })
    );
    this.filteredSemesters = this.form.controls['semester'].valueChanges.pipe(
      startWith<string | SemesterVM>(''),
      map((value: any) => {
        if (value !== null) {
          if (value.id) {
            return '';
          } else {
            return typeof value === 'string' ? value : value.name;
          }
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
        if (department && department.id) {
          this.departmentId = +department.id;
          if (!this.readingFromParams) {
            this.form.patchValue({
              semester: this.semesters[0],
              subjectId: null,
            });
          }
          if (!this.data) {
            this.addParams('departmentId', department.id);
          }
          this.loadSubjects();
          this.loadSections();
        }
      })
    );

    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe((semester) => {
        if (semester && semester.id) {
          this.semester = +semester.id;
          if (!this.readingFromParams) {
            this.form.patchValue({
              subjectId: null,
            });
          }
          this.loadSubjects();
          if (!this.data) {
            this.addParams('semesterId', semester.id);
          }
        }
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subject) => {
        if (subject && subject.id) {
          this.subjectId = +subject.id;

          if (!this.data) {
            this.addParams('subjectId', subject.id);
          }
          if (!this.readingFromParams) {
            this.form.patchValue({
              sectionId: null,
            });
          }
          this.loadSections();
        }
      })
    );

    if (this.data) {
      this.periodId = this.data.periodId;
      this.form.patchValue({
        ...this.data,
      });
      this.modal = true;
      this.loadSubjects();
      this.addDisabled = this.form.invalid;
    }

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.addDisabled = this.form.invalid;
      })
    );
  }

  private loadDepartments(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.sectionsService
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
                  if (value.id) {
                    return '';
                  } else {
                    return typeof value === 'string' ? value : value.name;
                  }
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
      this.sectionsService
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
                  if (value.id) {
                    return '';
                  } else {
                    return typeof value === 'string' ? value : value.name;
                  }
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
    this.loading = true;
    this.stateService.setLoading(this.loading);
    const obj = this.subjectId ? this.sectionsService.getSectionsSubject$(this.subjectId, this.periodId) : this.sectionsService.getSections$(this.periodId);
    this.sub$.add(
      obj
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((sections) => {
          this.sectionsData = {
            ...this.sectionsData,
            body: sections || [],
          };
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

  private async loadFormParams(): Promise<void> {
    this.queryParamsList = JSON.parse(
      localStorage.getItem('sigeit_section_params') as string
    );

    if (!!this.queryParamsList && Object?.keys(this.queryParamsList)?.length) {
      this.readingFromParams = true;
      let { departmentId, semesterId, subjectId } = this.queryParamsList;
      let lastDepartment, lastSemester, lastSubject;
      if (departmentId) {
        lastDepartment = (
          await lastValueFrom(this.sectionsService.getDepartaments$(1))
        ).find((dept) => dept.id == +departmentId);

        if (semesterId) {
          lastSemester = this.semesters.find(
            (semestr) => semestr.id == +semesterId
          );

          if (subjectId) {
            lastSubject = (
              await lastValueFrom(
                this.sectionsService.getSubjects$(+departmentId, +semesterId)
              )
            ).find((subj) => subj.id == +subjectId);
          }
        }

        this.form.patchValue({
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
