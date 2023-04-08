import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeriodVM } from './model';
import { HttpClient } from '@angular/common/http';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss'],
})
export class PeriodsComponent implements OnInit, OnDestroy {
  constructor(
    private httpClient: HttpClient,
    private tableService: TableService
  ) {}

  periodsData: TableDataVM<PeriodVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'start',
        header: 'Fecha de Inicio',
        cell: (element: { [key: string]: string }) => `${element['start']}`,
      },
      {
        columnDef: 'end',
        header: 'Fecha de Finalización',
        cell: (element: { [key: string]: string }) => `${element['end']}`,
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
        .get<PeriodVM[]>('../../../data/periods.json')
        .subscribe((periods) => {
          this.periodsData = {
            ...this.periodsData,
            body: periods || [],
          };
          this.periodsData.body = this.periodsData.body.map((data) =>
            data['status'] == true
              ? { ...data, status: 'Activo' }
              : { ...data, status: 'Inactivo' }
          );
          this.tableService.setData(this.periodsData);
        })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe;
  }
}
