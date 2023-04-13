import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, finalize } from 'rxjs';
import { TableDataVM, TableService } from 'src/app/common';

import { DepartmentsService } from './departments.service';
import { DepartmentItemVM } from './model';
import { StateService } from 'src/app/common/state';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit, OnDestroy {
  constructor(
    private tableService: TableService,
    private departmentsService: DepartmentsService,
    private stateService: StateService
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
        cell: (element: { [key: string]: string }) =>
          `${(element['school'] as any)?.name}`,
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
      this.departmentsService
        .getDepartments$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((departments) => {
          this.departmentsData = {
            ...this.departmentsData,
            body: departments || [],
          };
          this.tableService.setData(this.departmentsData);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
