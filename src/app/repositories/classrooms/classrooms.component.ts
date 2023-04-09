import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClassroomVM } from './model';
import { HttpClient } from '@angular/common/http';
import { TableDataVM, TableService } from 'src/app/common';
import { Subscription } from 'rxjs';
import { ClassroomsService } from './classrooms.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss'],
})
export class ClassroomsComponent implements OnInit, OnDestroy {
  constructor(
    private classroomsService: ClassroomsService,
    private tableService: TableService
  ) {}

  classroomData: TableDataVM<ClassroomVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'type',
        header: 'Tipo',
        cell: (element: { [key: string]: string }) => `${element['type']}`,
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
        cell: (element: { [key: string]: string }) => `${element['status']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();

  ngOnInit(): void {
    this.sub$.add(
      this.classroomsService.getClassrooms$().subscribe((classrooms) => {
        this.classroomData = {
          ...this.classroomData,
          body: classrooms || [],
        };
        this.tableService.setData(this.classroomData);
      })
    );
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe;
  }
}
