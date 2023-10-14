import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import moment from 'moment';
import { Subscription } from 'rxjs';
import {
  ConfirmModalComponent,
  OptionAction,
  TableDataVM,
  TableService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { FormComponent } from './form';
import {
  PeriodItemVM,
  PeriodVM,
  RowActionPeriod,
} from './model';
import { PeriodsService } from './periods.service';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss'],
})
export class PeriodsComponent implements OnInit, OnDestroy {

  data: TableDataVM<PeriodVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'start',
        header: 'Fecha de Inicio',
        cell: (element: { [key: string]: string }) => `${moment(element['start']).format('DD/MM/YYYY')}`,
      },
      {
        columnDef: 'end',
        header: 'Fecha de Finalización',
        cell: (element: { [key: string]: string }) => `${moment(element['end']).format('DD/MM/YYYY')}`,
      },
      {
        columnDef: 'stageText',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['stageText']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  loading = false;

  constructor(
    private periodsService: PeriodsService,
    private tableService: TableService,
    private stateService: StateService,
    public matDialog: MatDialog,
  ) {}


  ngOnInit(): void {
    this.sub$.add(
      this.periodsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    this.sub$.add(
      this.periodsService
        .getData$()
        .subscribe((data) => {
          this.data = {
            ...this.data,
            body: data || [],
          };
          this.tableService.setData(this.data);
        })
    );

    this.periodsService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionPeriod.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionPeriod.delete:
        this.showConfirm(option.data as any);
        break;
    }
  }

  showModal(id?: number): void {
    const modal = this.matDialog.open(FormComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        id,
      },
    });
    modal.componentInstance.closed.subscribe(() => {
      modal.close();
    });
  }

  showConfirm(item: PeriodItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar periodo',
          body: `¿Está seguro que desea eliminar el periodo <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.periodsService.delete(item?.id || 0);
      }
    });
  }
}

