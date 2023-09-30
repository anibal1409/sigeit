import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import {
  ConfirmModalComponent,
  OptionAction,
  TableDataVM,
  TableService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { CareersService } from './careers.service';
import { FormComponent } from './form';
import {
  CareerItemVM,
  RowActionCareer,
} from './model';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit, OnDestroy {

  sub$ = new Subscription();
  loading = false;
  data: TableDataVM<CareerItemVM> = {
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
        columnDef: 'status',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['status']}`,
      },
    ],
    body: [],
    options: [],
  };

  constructor(
    private careersService: CareersService,
    private tableService: TableService,
    private stateService: StateService,
    public matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.careersService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    this.sub$.add(
      this.careersService
        .getData$()
        .subscribe((classrooms) => {
          this.data = {
            ...this.data,
            body: classrooms || [],
          };
          this.tableService.setData(this.data);
        })
    );

    this.careersService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionCareer.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionCareer.delete:
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

  showConfirm(item: CareerItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar carrera',
          body: `¿Está seguro que desea eliminar la carrera <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.careersService.delete(item?.id || 0);
      }
    });
  }
}