import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { getSpanishPaginatorIntl } from './spanish-paginator';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [
    TableService,
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() },
  ],
  exports: [TableComponent],
})
export class TableModule {}
