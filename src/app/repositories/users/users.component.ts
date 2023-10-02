import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { StateService } from 'src/app/common/state';

import {
  ConfirmModalComponent,
  OptionAction,
  TableDataVM,
  TableService,
} from '../../common';
import { FormComponent } from './form';
import {
  RowActionUser,
  UserItemVM,
} from './model';
import { UsersService } from './users.service';

@Component({
  selector: 'sigeit-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  data: TableDataVM = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'roleText',
        header: 'Rol',
        cell: (element: { [key: string]: string }) => `${element['roleText']}`,
      },
      {
        columnDef: 'email',
        header: 'Correo',
        cell: (element: { [key: string]: string }) => `${element['email']}`,
      },
      {
        columnDef: 'department',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) =>
          `${(element['department'] as any)?.name || ''}`,
      },
      {
        columnDef: 'status',
        header: 'Estado',
        cell: (element: { [key: string]: string | boolean }) =>
          element['status'],
      },
    ],
    body: [],
    options: [],
  };

  loading = false;

  sub$ = new Subscription();
  constructor(
    private tableService: TableService,
    private usersService: UsersService,
    private stateService: StateService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.usersService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.usersService.getData$().subscribe((data) => {
        this.data = {
          ...this.data,
          body: data || [],
        };

        this.tableService.setData(this.data);
      })
    );
    this.usersService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionUser.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionUser.delete:
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

  showConfirm(item: UserItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar usuario',
          body: `¿Está seguro que desea eliminar el usuario <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.usersService.delete(item?.id || 0);
      }
    });
  }
}
