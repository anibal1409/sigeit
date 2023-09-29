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

import { ClassroomsService } from './classrooms.service';
import { FormComponent } from './form';
import {
  ClassroomItemVM,
  ClassroomVM,
  RowActionClassroom,
} from './model';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss'],
})
export class ClassroomsComponent implements OnInit, OnDestroy {
  constructor(
    private classroomsService: ClassroomsService,
    private tableService: TableService,
    private stateService: StateService,
    public matDialog: MatDialog,
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
    this.sub$.add(
      this.classroomsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    this.sub$.add(
      this.classroomsService
        .getData$()
        .subscribe((classrooms) => {
          this.classroomData = {
            ...this.classroomData,
            body: classrooms || [],
          };
          this.tableService.setData(this.classroomData);
        })
    );

    this.classroomsService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionClassroom.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionClassroom.delete:
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

  showConfirm(item: ClassroomItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar aula',
          body: `¿Está seguro que desea eliminar el aula <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.classroomsService.delete(item?.id || 0);
      }
    });
  }
}

