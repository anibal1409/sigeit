import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Subscription } from 'rxjs';
import {
  TableDataVM,
  TableService,
} from 'src/app/common';

import { DepartmentsService } from './departments.service';
import { DepartmentItemVM } from './model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit, OnDestroy {

  constructor(
    private tableService: TableService,
    private departmentsService: DepartmentsService,
  ) {}

  departmentsData: TableDataVM<DepartmentItemVM> = {
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
        cell: (element: { [key: string]: string }) => `${(element['school'] as any)?.name}`,
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
      this.departmentsService
        .getDepartments$()
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
