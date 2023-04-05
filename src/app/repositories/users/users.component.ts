/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  OptionAction,
  ConfirmModalComponent,
  TableDataVM,
  TableService,
} from '../../common';
import { StateService } from '../state';
import { FormComponent } from './form/form.component';
import { RowActionUser, UserVM } from './model';
import { UsersService } from './users.service';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'tecnops-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  usersData: TableDataVM = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) =>
          `${element['firstName']} ${element['lastName']}`,
      },
      {
        columnDef: 'email',
        header: 'Correo',
        cell: (element: { [key: string]: string }) => `${element['email']}`,
      },
      {
        columnDef: 'role',
        header: 'Rol',
        cell: (element: { [key: string]: string | boolean }) =>
          `${(element['role'] as string)
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) {
              return str.toUpperCase();
            })}`,
      },
      {
        columnDef: 'status',
        header: 'Estatus',
        cell: (element: { [key: string]: string | boolean }) =>
          element['status'],
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,
    private tableService: TableService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.usersService.getLoading$().subscribe((loading) => {
        this.stateService.setLoading(loading);
      })
    );
    this.sub$.add(
      this.usersService.getData$().subscribe((usersData: UserVM[] | null) => {
        this.usersData = {
          ...this.usersData,
          body: usersData || [],
        };
        this.usersData.body = this.usersData.body.map((data) =>
          data['status'] == true
            ? { ...data, status: 'Activo' }
            : { ...data, status: 'Inactivo' }
        );
        this.tableService.setData(this.usersData);
      })
    );

    this.usersService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  clickAction(option: OptionAction): void {
    switch (option.option.value) {
      case RowActionUser.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionUser.delete:
        this.showConfirm(option.data as any);
        break;
      case RowActionUser.open:
        this.openView(+option.data['id']);
        break;
    }
  }

  openView(id: number): void {
    const view = this.matDialog.open(ViewComponent, {
      hasBackdrop: true,
      data: {
        id,
      },
    });
    view.componentInstance.closed.subscribe(() => {
      view.close();
    });
  }

  showModal(id?: number): void {
    const modal = this.matDialog.open(FormComponent, {
      hasBackdrop: true,
      data: {
        id,
      },
    });
    modal.componentInstance.closed.subscribe(() => {
      modal.close();
    });
  }

  showConfirm(User: UserVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar Usuario',
          body: `¿Está seguro que desea eliminar al usuario <strong>${
            User.firstName + '' + User.lastName
          }</strong>?`,
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.usersService.delete(User?.id || 0);
      }
    });
  }
}
