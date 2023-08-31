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

import { CareersService } from './careers.service';
import { CareerItemVM } from './model';

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
        header: 'Abreviatura',
        cell: (element: { [key: string]: string }) =>
          `${element['abbreviation']}`,
      },
      {
        columnDef: 'departmentId',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) => {
          return `${(element['department'] as any).name}`;
        },
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

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.careersService
        .getCareers$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((careers) => {
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
