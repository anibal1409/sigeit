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
  UserStateService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { FormComponent } from './form';
import {
  RowActionTeacher,
  TeacherItemVM,
  TeacherVM,
} from './model';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit, OnDestroy {

  data: TableDataVM<TeacherVM> = {
    headers: [
      {
        columnDef: 'id_document',
        header: 'Cédula',
        cell: (element: { [key: string]: string }) =>
          `${element['idDocument']}`,
      },
      {
        columnDef: 'v',
        header: 'Apellido(s)',
        cell: (element: { [key: string]: string }) => `${element['lastName']}`,
      },
      {
        columnDef: 'firstName',
        header: 'Nombre(s)',
        cell: (element: { [key: string]: string }) =>
          `${element['firstName']}`,
      },
      {
        columnDef: 'department',
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
  teacherId = 0;

  constructor(
    private teachersService: TeachersService,
    private tableService: TableService,
    private stateService: StateService,
    private matDialog: MatDialog,
    private userStateService: UserStateService,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.teachersService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.teachersService.getData$().subscribe((data) => {
        this.data = {
          ...this.data,
          body: data || [],
        };

        this.tableService.setData(this.data);
      })
    );
    this.teachersService.get({
      schoolId: this.userStateService.getSchoolId(),
      departmentId: this.userStateService.getDepartmentId(),
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionTeacher.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionTeacher.delete:
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

  showConfirm(item: TeacherItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar profesor',
          body: `¿Está seguro que desea eliminar el profesor <strong>${item.firstName} ${item.lastName}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.teachersService.delete(item?.id || 0);
      }
    });
  }
}

