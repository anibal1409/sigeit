import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CareerItemVM, CareerVM } from './model';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';
import { CareersService } from './careers.service';
import { StateService } from 'src/app/common/state';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit, OnDestroy {
  constructor(
    private careersService: CareersService,
    private tableService: TableService,
    private stateService: StateService
  ) {}

  sub$ = new Subscription();
  loading = false;
  careersData: TableDataVM<CareerItemVM> = {
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
        columnDef: 'id_department',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) => {
          return `${(element['department'] as any).name}`;
        },
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

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.careersService.getCareers$().subscribe((careers) => {
        this.careersData = {
          ...this.careersData,
          body: careers || [],
        };

        this.tableService.setData(this.careersData);
        this.loading = false;
        setTimeout(() => this.stateService.setLoading(this.loading), 500);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
