/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { OptionAction, RowOptionVM, TableDataVM } from './model';
import { TableService } from './table.service'; /** Constants used to fill up our data base. */

@Component({
  selector: 'sigeit-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnInit {
  incomingData: TableDataVM = {
    headers: [],
    body: [{ option: '' }],
    options: [
      { name: 'Editar', value: 'update', icon: 'edit' },
      { name: 'Eliminar', value: 'delete', icon: 'delete' },
    ],
  };

  dataSource!: MatTableDataSource<any>;
  displayedColumns!: any;
  @Input() emptyMessage = 'No se encontraron datos';
  @Input() emptySearchMessage = 'Ningún resultado coincide con la busqueda';

  @Output() clickOption = new EventEmitter<OptionAction>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private tableService: TableService) {
    return;
  }

  ngOnInit(): void {
    this.tableService.getData.subscribe((data: TableDataVM) => {
      this.incomingData.headers = [
        ...data.headers,
        { columnDef: 'option', header: '', cell: () => 'option' },
      ];
      this.incomingData.body = [...data.body];
      this.incomingData.options =
        data.options.length === 0
          ? this.incomingData.options
          : [...data.options];
      this.dataSource = new MatTableDataSource(this.incomingData.body);
      this.displayedColumns = this.incomingData.headers.map(
        (c: any) => c.columnDef
      );
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  rowAction(option: RowOptionVM<any>, row: { [key: string]: string }) {
    this.clickOption.emit({ option: option, data: row });
  }
}
