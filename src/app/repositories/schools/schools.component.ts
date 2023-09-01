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

import { FormComponent } from './form';
import {
  RowActionSchool,
  SchoolVM,
} from './model';
import { SchoolsService } from './schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, OnDestroy {
  dataTable: TableDataVM<SchoolVM> = {
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

  sub$ = new Subscription();
  loading = false;

  constructor(
    private schoolsService: SchoolsService,
    private tableService: TableService,
    private stateService: StateService,
    public matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.schoolsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.schoolsService.getData$().subscribe((socialPlans) => {
        this.dataTable = {
          ...this.dataTable,
          body: socialPlans || [],
        };

        this.tableService.setData(this.dataTable);
      })
    );
    this.schoolsService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionSchool.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionSchool.delete:
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

  showConfirm(item: SchoolVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar escuela',
          body: `¿Está seguro que desea eliminar la escuela <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.schoolsService.delete(item?.id || 0);
      }
    });
  }
}
