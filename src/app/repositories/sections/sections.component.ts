import {
  Component,
  EventEmitter,
  Inject,
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
  @Output()
  closed = new EventEmitter();
  form!: FormGroup;

  departments: Array<DepartmentVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = SEMESTERS;

  sectionsData: TableDataVM<SectionVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Sección',
        cell: (element: { [key: string]: string }) =>
          `${element['name']}`,
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

  constructor(
    private sectionsService: SectionsService,
    private fb: FormBuilder,
    private tableService: TableService,
    private matDialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
  ) {}

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    console.log('init');
    this.createForm();
    this.loadDepartments();
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

    console.log(this.data);
    if (this.data) {
      this.periodId = this.data.periodId;
      this.form.patchValue({
        ...this.data,
      });
      this.loadSubjects();
    }
  }

  private loadDepartments(): void {
    this.sub$.add(
      this.sectionsService.getDepartaments$(1).subscribe((departaments) => {
        this.departments = departaments;
      })
    );
  }

  private loadSubjects(): void {
    this.sub$.add(
      this.sectionsService
        .getSubjects$(+this.departmentId, +this.semester)
        .subscribe((subjects) => {
          this.subjects = subjects;
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
}
