import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
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

import { DepartmentItemVM } from '../departments';
import { FormComponent } from './form';
import {
  RowActionSubject,
  SubjectItemVM,
  SubjectVM,
} from './model';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit, OnDestroy {

  data: TableDataVM<SubjectVM> = {
    headers: [
      {
        columnDef: 'code',
        header: 'Codigo',
        cell: (element: { [key: string]: string }) => `${element['code']}`,
      },
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'credits',
        header: 'Creditos',
        cell: (element: { [key: string]: string }) => `${element['credits']}`,
      },
      {
        columnDef: 'hours',
        header: 'Horas Semanales',
        cell: (element: { [key: string]: string }) => `${element['hours']}`,
      },
      {
        columnDef: 'semester',
        header: 'Semestre',
        cell: (element: { [key: string]: string }) => `${element['semester']}`,
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
  departments: Array<DepartmentItemVM> = [];
  departmentIdCtrl = new FormControl();

  constructor(
    private subjectsService: SubjectsService,
    private tableService: TableService,
    private stateService: StateService,
    private matDialog: MatDialog,
    private userStateService: UserStateService,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.subjectsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    
    this.sub$.add(
      this.subjectsService.getData$().subscribe((data) => {
        this.data = {
          ...this.data,
          body: data || [],
        };

        this.tableService.setData(this.data);
      })
    );
    this.loadDepartments();
    this.loadSubjects(this.userStateService.getDepartmentId());
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  loadSubjects(departmentId?: number): void {
    this.subjectsService.get({
      departmentId,
    });
  }
  
  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionSubject.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionSubject.delete:
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

  showConfirm(item: SubjectItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar asignatura',
          body: `¿Está seguro que desea eliminar el asignatura <strong>${item.name}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.subjectsService.delete(item?.id || 0);
      }
    });
  }

  loadDepartments(): void {
    this.sub$.add(
      this.subjectsService.getDepartaments$(
        this.userStateService.getSchoolId()
      ).subscribe((departments) => {
        this.departments = departments;
      })
    );
  }
}
