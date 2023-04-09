import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeacherVM } from './model';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TableDataVM, TableService } from 'src/app/common';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit, OnDestroy {
  constructor(
    private teachersService: TeachersService,
    private tableService: TableService
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
        columnDef: 'id_department',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) =>
          `${(element['department'] as any).name}`,
      },
      {
        columnDef: 'status',
        header: 'Estatus',
        cell: (element: { [key: string]: string }) => `${element['status']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  ngOnInit(): void {
    this.sub$.add(
      this.teachersService.getTeachers$().subscribe((teachers) => {
        this.teachersData = {
          ...this.teachersData,
          body: teachers || [],
        };
        this.teachersData.body = this.teachersData.body.map((data) =>
          data['status'] == true
            ? { ...data, status: 'Activo' }
            : { ...data, status: 'Inactivo' }
        );
        this.tableService.setData(this.teachersData);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
