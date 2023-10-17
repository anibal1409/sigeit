import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

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
        cell: (element: { [key: string]: string }) => `${element['name']}`,
      },
      {
        columnDef: 'department',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) => `${(element['department'] as any)?.name}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  loading = false;

  constructor(
    private documentsService: DocumentsFileService,
    private tableService: TableService,
    private stateService: StateService,
    public matDialog: MatDialog,
    private router: Router,
  ) {}


  ngOnInit(): void {
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

    this.documentsService.get({});
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
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
      queryParams: {
        id,
      },
    });
  }

  showConfirm(item: DocumentItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar formato',
          body: `¿Está seguro que desea eliminar el formato <strong>${item.name}</strong>?`,
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


