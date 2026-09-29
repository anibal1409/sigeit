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
import { GlobalPeriodService } from 'src/app/common/global-period';
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
      {
        columnDef: 'isVacationCourseText',
        header: 'Tipo',
        cell: (element: { [key: string]: string }) => `${element['isVacationCourseText'] || 'Regular'}`,
      },
      {
        columnDef: 'isActiveText',
        header: 'Activo',
        cell: (element: { [key: string]: string }) => `${element['isActiveText'] || 'No'}`,
      },
    ],
    body: [],
    options: [
      { name: 'Editar', value: RowActionPeriod.update, icon: 'edit' },
      { name: 'Activar', value: RowActionPeriod.setActive, icon: 'check_circle' },
      { name: 'Eliminar', value: RowActionPeriod.delete, icon: 'delete' },
    ],
  };

  sub$ = new Subscription();
  loading = false;

  constructor(
    private periodsService: PeriodsService,
    private tableService: TableService,
    private stateService: StateService,
    private globalPeriodService: GlobalPeriodService,
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
      case RowActionPeriod.setActive:
        this.showConfirmSetActive(option.data as any);
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

  showConfirmSetActive(item: PeriodItemVM): void {
    if (!item?.id) {
      return;
    }
    if (item.isActive) {
      return;
    }

    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Activar periodo',
          body: `¿Está seguro que desea marcar como activo el periodo <strong>${item.name}</strong>? El periodo activo actual quedará desactivado.`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.sub$.add(
          this.periodsService.setActive(item.id as number).subscribe((period) => {
            if (period) {
              this.globalPeriodService.updatePeriodFromService(period);
            }
          }),
        );
      }
    });
  }
}
