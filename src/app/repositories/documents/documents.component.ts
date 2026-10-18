import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  DepartmentService,
  ResponseDepartmentDto,
} from 'dashboard-sdk';
import { Subscription } from 'rxjs';

import {
  readUrlNumber,
  UserStateService,
  writeUrlQuery,
} from '../../common';
import { ConfirmModalComponent } from '../../common/confirm-modal';
import { StateService } from '../../common/state';
import {
  OptionAction,
  TableDataVM,
  TableService,
} from '../../common/table';
import { DocumentsFileService } from './documents.service';
import {
  DocumentItemVM,
  RowActionDocument,
} from './model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit, OnDestroy {

  data: TableDataVM<DocumentItemVM> = {
    headers: [
      {
        columnDef: 'name',
        header: 'Nombre',
        cell: (element: { [key: string]: string }) => element['name'],
      },
      {
        columnDef: 'typeText',
        header: 'Tipo',
        cell: (element: { [key: string]: string }) => element['typeText'],
      },
      {
        columnDef: 'departmentName',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) => element['departmentName'],
      },
      {
        columnDef: 'statusText',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => element['statusText'],
      },
    ],
    body: [],
    options: [],
  };

  /** Usuario sin departamento (administrador): puede filtrar por departamento. */
  departmentIdUser = 0;
  departments: Array<ResponseDepartmentDto> = [];
  departmentCtrl = new FormControl<number | null>(null);

  sub$ = new Subscription();
  loading = false;

  constructor(
    private documentsService: DocumentsFileService,
    private departmentService: DepartmentService,
    private tableService: TableService,
    private stateService: StateService,
    private userStateService: UserStateService,
    public matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.departmentIdUser = this.userStateService.getDepartmentId() || 0;
    this.sub$.add(
      this.documentsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );
    this.sub$.add(
      this.documentsService
        .getData$()
        .subscribe((data) => {
          this.data = {
            ...this.data,
            body: data || [],
          };
          this.tableService.setData(this.data);
        })
    );

    if (!this.departmentIdUser) {
      this.sub$.add(
        this.departmentService
          .departmentControllerFindAll(this.userStateService.getSchoolId(), true)
          .subscribe((departments) => (this.departments = departments)),
      );
      this.departmentCtrl.setValue(readUrlNumber(this.route, 'departmentId') || null, { emitEvent: false });
      this.sub$.add(
        this.departmentCtrl.valueChanges.subscribe((departmentId) => {
          writeUrlQuery(this.router, this.route, { departmentId: departmentId || null });
          this.load();
        }),
      );
    }
    this.load();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  /** El backend ya limita al jefe de departamento a su propio departamento. */
  private load(): void {
    this.documentsService.get({ departmentId: this.departmentCtrl.value || undefined });
  }

  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionDocument.update:
        this.goToForm(+option.data['id']);
        break;
      case RowActionDocument.delete:
        this.showConfirm(option.data as any);
        break;
    }
  }

  goToForm(id?: number): void {
    this.router.navigate(['dashboard/formats/form'], {
      queryParams: { id },
    });
  }

  showConfirm(item: DocumentItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar formato',
          body: `¿Está seguro que desea eliminar el formato **${item.name}**?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.documentsService.delete(item?.id || 0);
      }
    });
  }
}
