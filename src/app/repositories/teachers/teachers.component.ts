import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  finalize,
  Subscription,
} from 'rxjs';
import {
  TableDataVM,
  TableService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { FormComponent } from './form';
import { TeacherVM } from './model';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit, OnDestroy {

  constructor(
    private teachersService: TeachersService,
    private tableService: TableService,
    private stateService: StateService,
    private matDialog: MatDialog,
  ) {}

  teachersData: TableDataVM<TeacherVM> = {
    headers: [
      {
        columnDef: 'id_document',
        header: 'Cédula',
        cell: (element: { [key: string]: string }) =>
          `${element['id_document']}`,
      },
      {
        columnDef: 'last_name',
        header: 'Apellido(s)',
        cell: (element: { [key: string]: string }) => `${element['last_name']}`,
      },
      {
        columnDef: 'first_name',
        header: 'Nombre(s)',
        cell: (element: { [key: string]: string }) =>
          `${element['first_name']}`,
      },
      {
        columnDef: 'email',
        header: 'Correo Electronico',
        cell: (element: { [key: string]: string }) => `${element['email']}`,
      },
      {
        columnDef: 'departmentId',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) =>
          `${(element['department'] as any).name}`,
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

  sub$ = new Subscription();
  loading = false;
  teacherId = 0;

  ngOnInit(): void {
    this.loadTeachers();
  }

  private loadTeachers(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.teachersService
        .getTeachers$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((teachers) => {
          this.teachersData = {
            ...this.teachersData,
            body: teachers || [],
          };
          this.tableService.setData(this.teachersData);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  showForm(): void {
    const dialogRef = this.matDialog.open(FormComponent, {
      data: {
        teacherId: this.teacherId,
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      this.loadTeachers();
    });
  }
}
