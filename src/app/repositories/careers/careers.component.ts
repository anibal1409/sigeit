import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CareerItemVM, CareerVM } from './model';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';
import { CareersService } from './careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit, OnDestroy {
  constructor(
    private careersService: CareersService,
    private tableService: TableService
  ) {}

  sub$ = new Subscription();
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
    this.sub$.add(
      this.careersService.getCareers$().subscribe((careers) => {
        this.careersData = {
          ...this.careersData,
          body: careers || [],
        };

        this.tableService.setData(this.careersData);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
