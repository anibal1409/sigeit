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

import { Subscription } from 'rxjs';
import {
  ConfirmModalComponent,
  OptionAction,
  SEMESTERS,
  SemesterVM,
  TableDataVM,
  TableService,
  UserStateService,
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

  data: TableDataVM<SectionVM> = {
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
          `${(element['teacher'] as any)?.lastName
            ? (element['teacher'] as any)?.lastName + ','
            : ''
          } ${(element['teacher'] as any)?.firstName}`,
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
        columnDef: 'capacity',
        header: 'Capacidad',
        cell: (element: { [key: string]: string }) => `${element['capacity']}`,
      },
      {
        columnDef: 'status',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['status']}`,
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

  showForm = false;

  private sub$ = new Subscription();
  addDisabled = true;

  queryParamsList!: { [key: string]: string };
  readingFromParams = false;

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) private item: any,
    private stateService: StateService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private userStateService: UserStateService,
  ) { }

  ngOnDestroy(): void {
    localStorage.setItem('sigeit_section_params', JSON.stringify({}));
    this.sub$.unsubscribe();
    this.modal = false;
    this.cleanList();
  }

  ngOnInit(): void {
    this.createForm();

    this.sub$.add(
      this.sectionsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.sub$.add(
      this.sectionsService.getData$().subscribe((data) => {
        this.data = {
          ...this.data,
          body: data || [],
        };

        this.tableService.setData(this.data);
      })
    );

    this.sub$.add(
      this.sectionsService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
        }
      }
      )
    );

    this.loadDepartments();
  }

  cleanList(): void {
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
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe((departmentId) => {
        this.departmentId = departmentId;
        this.semester = 0;
        this.subjectId = 0;
        this.sectionId = 0;
        this.showForm = false;
        this.cleanList();

        if (departmentId) {
          this.semester = this.semesters[0].id;
          this.form.patchValue({
            semester: this.semesters[0].id,
            subjectId: null,
          });
          this.loadSubjects();
          this.loadSections();
        } else {
          this.form.reset({}, { emitEvent: false });
        }
      })
    );

    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe((semester) => {
        this.semester = semester;
        this.subjectId = 0;
        this.sectionId = 0;
        this.showForm = false;
        if (semester) {
          this.form.patchValue({
            subjectId: null,
          });
          this.loadSubjects();
        }
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subjectId) => {
        this.subjectId = subjectId;
        this.sectionId = 0;
        this.showForm = false;
        this.cleanList();
        if (subjectId) {
          this.form.patchValue({
            sectionId: null,
          });
          this.loadSections();
        }
      })
    );

    if (this.item) {
      this.form.patchValue({
        ...this.item,
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
    this.sub$.add(
      this.sectionsService
        .getDepartaments$(this.userStateService.getSchoolId())
        .subscribe((departaments) => {
          this.departments = departaments;
        })
    );
  }

  private loadSubjects(): void {
    this.sub$.add(
      this.sectionsService
        .getSubjects$({
          departmentId: +this.departmentId,
          semester: this.semester > 0 ? this.semester : undefined
        })
        .subscribe((subjects) => {
          this.subjects = subjects;
        })
    );
  }

  loadSections(): void {
    this.sub$.add(
      this.sectionsService.get({
        subjectId: this.subjectId,
        periodId: this.periodId,
        departmentId: this.departmentId,
        semester: this.semester > 0 ? this.semester : undefined,
      })
    );
  }

  changeShowForm(showForm: boolean): void {
    this.showForm = showForm;
    if (!showForm) {
      this.sectionId = 0;
    }
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
        this.sectionsService.delete(section?.id || 0);
      }
    });
  }

  clickClosed(): void {
    this.closed.emit();
  }
}
