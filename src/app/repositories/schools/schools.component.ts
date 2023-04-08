import { Component, OnDestroy, OnInit } from '@angular/core';
import { SchoolVM } from './model';
import { HttpClient } from '@angular/common/http';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, OnDestroy {
  constructor(
    private httpClient: HttpClient,
    private tableService: TableService
  ) {}

  schoolsData: TableDataVM<SchoolVM> = {
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
        .get<SchoolVM[]>('../../../data//schools.json')
        .subscribe((schools) => {
          this.schoolsData = {
            ...this.schoolsData,
            body: schools || [],
          };
          this.schoolsData.body = this.schoolsData.body.map((data) =>
            data['status'] == true
              ? { ...data, status: 'Activo' }
              : { ...data, status: 'Inactivo' }
          );
          this.tableService.setData(this.schoolsData);
        })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
