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

import { DepartmentsService } from './departments.service';
import { FormComponent } from './form';
import {
  DepartmentItemVM,
  RowActionDepartment,
} from './model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent implements OnInit, OnDestroy {

  dataTable: TableDataVM<DepartmentItemVM> = {
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
        columnDef: 'id_school',
        header: 'Escuela',
        cell: (element: { [key: string]: string }) =>
          `${(element['school'] as any)?.abbreviation}`,
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
    private tableService: TableService,
    private departmentsService: DepartmentsService,
    private stateService: StateService,
    public matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.departmentsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.departmentsService.getData$().subscribe((socialPlans) => {
        this.dataTable = {
          ...this.dataTable,
          body: socialPlans || [],
        };

        this.tableService.setData(this.dataTable);
      })
    );
    this.departmentsService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionDepartment.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionDepartment.delete:
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

  showConfirm(item: DepartmentItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar escuela',
          body: `¿Está seguro que desea eliminar el departmento <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.departmentsService.delete(item?.id || 0);
      }
    });
  }
}
