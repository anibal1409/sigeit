import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentVM } from './model';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  constructor(
    private httpClient: HttpClient,
    private tableService: TableService
  ) {}

  departmentsData: TableDataVM<DepartmentVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'abbreviation',
        header: 'Abreviación',
        cell: (element: { [key: string]: string }) =>
          `${element['abbreviation']}`,
      },
      {
        columnDef: 'id_school',
        header: 'Escuela',
        cell: (element: { [key: string]: string }) => `${element['id_school']}`,
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
      this.httpClient
        .get<DepartmentVM[]>('../../../data/departments.json')
        .subscribe((departments) => {
          this.departmentsData = {
            ...this.departmentsData,
            body: departments || [],
          };
          this.departmentsData.body = this.departmentsData.body.map((data) =>
            data['status'] == true
              ? { ...data, status: 'Activo' }
              : { ...data, status: 'Inactivo' }
          );
          this.tableService.setData(this.departmentsData);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
