import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  finalize,
  Subscription,
} from 'rxjs';
import {
  TableDataVM,
  TableService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { PeriodVM } from './model';
import { PeriodsService } from './periods.service';

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
        header: 'Estado',
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
      this.periodsService
        .getPeriods$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((periods) => {
          this.periodsData = {
            ...this.periodsData,
            body: periods || [],
          };
          this.tableService.setData(this.periodsData);
        })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe;
  }
}
