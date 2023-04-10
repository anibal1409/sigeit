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
        columnDef: 'first_name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) =>
          `${element['first_name']}`,
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
        columnDef: 'id_department',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) =>
          `${(element['department'] as any).name}`,
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
        console.log(users);
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
