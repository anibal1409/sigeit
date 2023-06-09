import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, finalize } from 'rxjs';
import { TableDataVM, TableService } from 'src/app/common';

import { SchoolVM } from './model';
import { GetSchoolsService } from './use-cases';
import { StateService } from 'src/app/common/state';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, OnDestroy {
  constructor(
    private getSchoolsService: GetSchoolsService,
    private tableService: TableService,
    private stateService: StateService
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
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.getSchoolsService
        .exec()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((schools) => {
          this.schoolsData = {
            ...this.schoolsData,
            body: schools || [],
          };
          this.tableService.setData(this.schoolsData);
        })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
