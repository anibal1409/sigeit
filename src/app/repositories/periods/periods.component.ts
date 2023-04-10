import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeriodVM } from './model';
import { HttpClient } from '@angular/common/http';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';
import { PeriodsService } from './periods.service';
import { StateService } from 'src/app/common/state';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss'],
})
export class PeriodsComponent implements OnInit, OnDestroy {
  constructor(
    private periodsService: PeriodsService,
    private tableService: TableService,
    private stateService: StateService
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
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.periodsService.getPeriods$().subscribe((periods) => {
        this.periodsData = {
          ...this.periodsData,
          body: periods || [],
        };
        this.tableService.setData(this.periodsData);
        this.loading = false;
        setTimeout(() => this.stateService.setLoading(this.loading), 500);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe;
  }
}
