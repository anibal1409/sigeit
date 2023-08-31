import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  finalize,
  Subscription,
} from 'rxjs';
import {
  TableDataVM,
  TableService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { ClassroomsService } from './classrooms.service';
import { ClassroomVM } from './model';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss'],
})
export class ClassroomsComponent implements OnInit, OnDestroy {
  constructor(
    private classroomsService: ClassroomsService,
    private tableService: TableService,
    private stateService: StateService
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
        columnDef: 'departmentId',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) =>
          `${(element['department'] as any).name}`,
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

  ngOnInit(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.classroomsService
        .getClassrooms$()
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((classrooms) => {
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
