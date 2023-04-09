import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';
import { TableDataVM, TableService } from '../../common';

import { UserVM } from './model';

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
        columnDef: 'email',
        header: 'Correo',
        cell: (element: { [key: string]: string }) => `${element['email']}`,
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
    private tableService: TableService,
    private usersService: UsersService
  ) {
    return;
  }

  ngOnInit(): void {
    this.sub$.add(
      this.usersService.getUsers$().subscribe((users: UserVM[] | null) => {
        this.data = {
          ...this.data,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          body: (users as any) || [],
        };
        this.data.body = this.data.body.map((data) =>
          data['status'] == true
            ? { ...data, status: 'Inactivo' }
            : { ...data, status: 'Activo' }
        );
        this.tableService.setData(this.data);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
