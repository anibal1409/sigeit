import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  finalize,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state';

import {
  TableDataVM,
  TableService,
} from '../../common';
import { UserVM } from './model';
import { UsersService } from './users.service';

@Component({
  selector: 'sigeit-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  usersData: TableDataVM = {
    headers: [
      {
        columnDef: 'id_document',
        header: 'Cedula',
        cell: (element: { [key: string]: string }) =>
          `${element['id_document']}`,
      },
      {
        columnDef: 'last_name',
        header: 'Apellido',
        cell: (element: { [key: string]: string }) => `${element['last_name']}`,
      },
      {
        columnDef: 'firstName',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) =>
          `${element['firstName']}`,
      },
      {
        columnDef: 'role',
        header: 'Rol',
        cell: (element: { [key: string]: string }) => `${element['role']}`,
      },
      {
        columnDef: 'email',
        header: 'Correo',
        cell: (element: { [key: string]: string }) => `${element['email']}`,
      },
      {
        columnDef: 'departmentId',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) =>
          `${(element['department'] as any).name}`,
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
    private stateService: StateService
  ) {
    return;
  }

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.usersService
        .getUsers$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((users: UserVM[] | null) => {
          this.usersData = {
            ...this.usersData,
            body: (users as any) || [],
          };

          this.tableService.setData(this.usersData);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
