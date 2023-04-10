import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeacherVM } from './model';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TableDataVM, TableService } from 'src/app/common';
import { TeachersService } from './teachers.service';
import { StateService } from 'src/app/common/state';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit, OnDestroy {
  constructor(
    private teachersService: TeachersService,
    private tableService: TableService,
    private stateService: StateService
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
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.teachersService.getTeachers$().subscribe((teachers) => {
        this.teachersData = {
          ...this.teachersData,
          body: teachers || [],
        };
        this.tableService.setData(this.teachersData);
        this.loading = false;
        setTimeout(() => this.stateService.setLoading(this.loading), 500);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
