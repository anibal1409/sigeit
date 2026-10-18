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
import {
  MatPaginator,
  PageEvent,
} from '@angular/material/paginator';
import {
  MatSort,
  Sort,
} from '@angular/material/sort';
import {
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';

import {
  OptionAction,
  RowOptionVM,
  TableDataVM,
} from './model';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { writeUrlQuery } from '../url-query';
import {
  TableService,
} from './table.service'; /** Constants used to fill up our data base. */

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

  getProperty = (obj: any, path: any) => (
    path.split('.').reduce((o: any, p: any) => o && o[p], obj)
  )

  /** Búsqueda, página y orden leídos de la URL al entrar. */
  readonly initialSearch: string;
  private pendingPage: number;
  private pendingSort: Sort | null;

  setDataSourceAttributes() {
    if (!this.dataSource) return;
    this.restoreFromUrl();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
    this.dataSource.sort = this.sort;
  }
  constructor(
    private tableService: TableService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const params = this.route.snapshot.queryParamMap;
    this.initialSearch = params.get('search') || '';
    this.pendingPage = +(params.get('page') || 0);
    const active = params.get('sort');
    const direction = params.get('dir');
    this.currentSearch = this.initialSearch.trim().toLowerCase();
    this.pendingSort = active ? { active, direction: direction === 'desc' ? 'desc' : 'asc' } : null;
  }

  /** Aplica tamaño, orden y página de la URL; la página espera a que haya datos para no recortarse. */
  private restoreFromUrl(): void {
    if (this.paginator) {
      const size = +(this.route.snapshot.queryParamMap.get('size') || 0);
      if (size) this.paginator.pageSize = size;
      if (this.pendingPage && this.dataSource.data.length) {
        this.paginator.pageIndex = this.pendingPage;
        this.pendingPage = 0;
      }
    }
    if (this.sort && this.pendingSort) {
      this.sort.active = this.pendingSort.active;
      this.sort.direction = this.pendingSort.direction;
      this.sort._stateChanges.next();
      this.pendingSort = null;
    }
  }

  onPage(event: PageEvent): void {
    writeUrlQuery(this.router, this.route, {
      page: event.pageIndex || null,
      size: event.pageSize,
    });
  }

  onSort(sort: Sort): void {
    writeUrlQuery(this.router, this.route, {
      sort: sort.direction ? sort.active : null,
      dir: sort.direction || null,
    });
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
      this.dataSource.filter = this.currentSearch;
      this.setDataSourceAttributes();
      this.displayedColumns = this.incomingData.headers.map(
        (c: any) => c.columnDef
      );
    });
  }
  ngAfterViewInit() {
    this.setDataSourceAttributes();
  }

  private currentSearch = '';

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.currentSearch = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.currentSearch;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    writeUrlQuery(this.router, this.route, { search: filterValue.trim(), page: null });
  }
  rowAction(option: RowOptionVM<any>, row: { [key: string]: string }) {
    this.clickOption.emit({ option: option, data: row });
  }
}
