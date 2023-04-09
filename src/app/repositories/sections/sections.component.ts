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
import {
  ConfirmModalComponent,
  OptionAction,
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

interface SemesterVM { id: number, name: string };

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  departments: Array<DepartmentVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = [
    {
      id: -1,
      name: 'Todos',
    },
    {
      id: 1,
      name: '1',
    },
    {
      id: 2,
      name: '2',
    },
    {
      id: 3,
      name: '3',
    },
    {
      id: 4,
      name: '4',
    },
    {
      id: 5,
      name: '5',
    },
    {
      id: 6,
      name: '6',
    },
    {
      id: 7,
      name: '7',
    },
    {
      id: 8,
      name: '8',
    },
    {
      id: 9,
      name: '9',
    },
    {
      id: 10,
      name: '10',
    },
    {
      id: 55,
      name: '55',
    },
    {
      id: 88,
      name: '88',
    },
    {
      id: 99,
      name: '99',
    },
  ];

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
          `${(element['teacher'] as any)?.last_name ? (element['teacher'] as any)?.last_name + ',' : ''} ${(element['teacher'] as any)?.first_name}`,
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
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.sectionsService.getDepartaments$(1).subscribe(
      (departaments) => {
        this.departments = departaments;
      }
    );
  }

  private createForm(): void {
    this.form = this.fb.group({
      departmentId: [null, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semester: [-1, [Validators.required]]
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe(
        (departmentId) => {
          console.log(departmentId);
          this.departmentId = +departmentId;
          this.loadSubjects();
        }
      )
    );
  
    this.sub$.add(
      this.form.get('semester')?.valueChanges.subscribe(
        (val) => {
          console.log(val);
          this.semester = +val;
          this.loadSubjects();
        }
      )
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe(
        (subjectId) => {
          console.log(subjectId);
          this.subjectId = +subjectId;
          this.loadSections();
        }
      )
    );
  }

  private loadSubjects(): void {
    this.sub$.add(
      this.sectionsService.getSubjects$(+this.departmentId, +this.semester).subscribe(
        (subjects) => {
          this.subjects = subjects;
        }
      )
    );
  }

  loadSections(): void {
    this.sub$.add(
      this.sectionsService.getSections$(this.subjectId, this.periodId).subscribe(
        (sections) => {
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
        }
      )
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
          body: `¿Está seguro que desea eliminar la sección <strong>${
            section.section_name
          }</strong>?`,
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.sectionsService.removeSection$(section?.id || 0).subscribe(
          () => {
            this.loadSections();
          }
        );
      }
    });
  }
}
