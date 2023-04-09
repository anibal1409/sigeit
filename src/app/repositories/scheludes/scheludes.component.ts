import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScheludeVM } from './model';
import { Subscription } from 'rxjs';
import { TableDataVM, TableService } from 'src/app/common';
import { ScheludesService } from './scheludes.service';

@Component({
  selector: 'app-scheludes',
  templateUrl: './scheludes.component.html',
  styleUrls: ['./scheludes.component.scss'],
})
export class ScheludesComponent implements OnInit, OnDestroy {
  constructor(
    private scheludesService: ScheludesService,
    private tableService: TableService
  ) {}

  scheludeData: TableDataVM<ScheludeVM> = {
    headers: [
      {
        columnDef: 'id_classroom',
        header: 'Aula',
        cell: (element: { [key: string]: string }) =>
          `${element['id_classroom']}`,
      },
      {
        columnDef: 'day',
        header: 'Dia',
        cell: (element: { [key: string]: string }) => `${element['day']}`,
      },
      {
        columnDef: 'id_section',
        header: 'Seccion',
        cell: (element: { [key: string]: string }) =>
          `${element['id_section']}`,
      },
      {
        columnDef: 'start',
        header: 'Hora de Inicio',
        cell: (element: { [key: string]: string }) => `${element['start']}`,
      },
      {
        columnDef: 'end',
        header: 'Hora de Culminación',
        cell: (element: { [key: string]: string }) => `${element['end']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();

  ngOnInit(): void {
    this.sub$.add(
      this.scheludesService.getScheludes$().subscribe((scheludes) => {
        this.scheludeData = {
          ...this.scheludeData,
          body: scheludes || [],
        };
        this.tableService.setData(this.scheludeData);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
