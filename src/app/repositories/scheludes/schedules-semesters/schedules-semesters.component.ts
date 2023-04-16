import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import {
  finalize,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state';
import * as XLSX from 'xlsx';

import { SchedulesService } from '../scheludes.service';

export class Group {
  level = 0;
  parent!: Group;
  expanded = true;
  totalCounts = 0;
  get visible(): boolean {
    return !this.parent || (this.parent.visible && this.parent.expanded);
  }
}

@Component({
  selector: 'app-schedules-semesters',
  templateUrl: './schedules-semesters.component.html',
  styleUrls: ['./schedules-semesters.component.scss'],
})
export class SchedulesSemestersComponent {
  title = 'Grid Grouping';

  public dataSource = new MatTableDataSource<any | Group>([]);

  _alldata!: any[];
  columns: any[];
  displayedColumns: string[];
  groupByColumns: string[] = [];

  groupByCtrl = new FormControl('semester');
  groupsBy = [
    {
      field: 'semester',
      text: 'Semestre',
    },
    {
      field: 'teacherName',
      text: 'Profesor',
    },
  ];
  groupsByField = 'semester';

  private sub$ = new Subscription();
  loading = false;

  constructor(
    private schedulesService: SchedulesService,
    private router: Router,
    private stateService: StateService
  ) {
    this.columns = [
      {
        field: 'code',
        text: 'Codigo',
      },
      {
        field: 'name',
        text: 'Asignatura',
      },
      {
        field: 'sectionName',
        text: 'Seccion',
      },
      {
        field: 'dayName',
        text: 'Dia',
      },
      {
        field: 'classroomName',
        text: 'Aula',
      },
      {
        field: 'start',
        text: 'Desde',
      },
      {
        field: 'end',
        text: 'Hasta',
      },
      {
        field: 'documentTeacher',
        text: 'Profesor',
      },
      {
        field: 'teacherName',
        text: 'Nombre',
      },
      {
        field: 'capacity',
        text: 'Capacidad',
      },
    ];
    this.displayedColumns = this.columns.map((column) => column.field);
    this.groupByColumns = ['semester'];
  }

  ngOnInit() {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getSectionsSchedulesSemesterService$(1, 3)
        .pipe(
          finalize(() => {
            this.loading = false;
            this.stateService.setLoading(this.loading);
          })
        )
        .subscribe((subjects) => {
          console.log(subjects);

          this._alldata = subjects;
          this.dataSource.data = this.addGroups(
            this._alldata,
            this.groupByColumns
          );
          this.dataSource.filterPredicate =
            this.customFilterPredicate.bind(this);
          this.dataSource.filter = performance.now().toString();
        })
    );

    this.sub$.add(
      this.groupByCtrl.valueChanges.subscribe((field) => {
        if (field) {
          this.unGroupBy(this.groupsByField);
          this.groupBy(field);
          this.groupsByField = field;
        }
      })
    );
  }

  groupBy(field: string) {
    this.checkGroupByColumn(field, true);
    this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);
    this.dataSource.filter = performance.now().toString();
  }

  navigateBack(): void {
    this.router.navigate(['/dashboard/scheludes']);
  }

  checkGroupByColumn(field: any, add: any) {
    let found = null;
    for (const column of this.groupByColumns) {
      if (column === field) {
        found = this.groupByColumns.indexOf(column, 0);
      }
    }
    if (found != null && found >= 0) {
      if (!add) {
        this.groupByColumns.splice(found, 1);
      }
    } else {
      if (add) {
        this.groupByColumns.push(field);
      }
    }
  }

  unGroupBy(field: string) {
    this.checkGroupByColumn(field, false);
    this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);
    this.dataSource.filter = performance.now().toString();
  }

  // below is for grid row grouping
  customFilterPredicate(data: any | Group, filter: string): boolean {
    return data instanceof Group ? data.visible : this.getDataRowVisible(data);
  }

  getDataRowVisible(data: any): boolean {
    const groupRows = this.dataSource.data.filter((row: Array<any>) => {
      if (!(row instanceof Group)) {
        return false;
      }
      let match = true;
      this.groupByColumns.forEach((column: any) => {
        if (!row[column] || !data[column] || row[column] !== data[column]) {
          match = false;
        }
      });
      return match;
    });

    if (groupRows.length === 0) {
      return true;
    }
    const parent = groupRows[0] as Group;
    return parent.visible && parent.expanded;
  }

  groupHeaderClick(row: any) {
    row.expanded = !row.expanded;
    this.dataSource.filter = performance.now().toString();
  }

  addGroups(data: any[], groupByColumns: string[]): any[] {
    const rootGroup = new Group();
    rootGroup.expanded = true;
    return this.getSublevel(data, 0, groupByColumns, rootGroup);
  }

  getSublevel(
    data: any[],
    level: number,
    groupByColumns: string[],
    parent: Group
  ): any[] {
    if (level >= groupByColumns.length) {
      return data;
    }
    const groups = this.uniqueBy(
      data.map((row) => {
        const result: any = new Group();
        result.level = level + 1;
        result.parent = parent;
        for (let i = 0; i <= level; i++) {
          const field = this.groupsBy.find(
            (item) => item.field === groupByColumns[i]
          );
          result[groupByColumns[i]] = row[groupByColumns[i]];
          result['name'] = field?.text;
        }

        return result;
      }),
      JSON.stringify
    );

    const currentColumn = groupByColumns[level];
    let subGroups: any = [];
    groups.forEach((group: any) => {
      const rowsInGroup = data.filter(
        (row) => group[currentColumn] === row[currentColumn]
      );
      group.totalCounts = rowsInGroup.length;
      const subGroup = this.getSublevel(
        rowsInGroup,
        level + 1,
        groupByColumns,
        group
      );
      subGroup.unshift(group);
      subGroups = subGroups.concat(subGroup);
    });
    return subGroups;
  }

  uniqueBy(a: any, key: any) {
    const seen: any = {};
    return a.filter((item: any) => {
      const k: any = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }

  isGroup(index: any, item: any): boolean {
    return item.level;
  }

  equalPrevious(schedule: any, field: string): boolean {
    let equal = false;
    const index = this._alldata.findIndex(
      (item) => item.scheduleId === schedule.scheduleId
    );
    const fields = ['dayName', 'classroomName', 'start', 'end'];
    if (index > 0) {
      const scheduleData = this._alldata[index - 1];
      equal =
        (schedule[field] === scheduleData[field] &&
          schedule.sectionName === scheduleData.sectionName &&
          !fields.includes(field) &&
          schedule.code === scheduleData.code) ||
        (schedule.code === scheduleData.code && field === 'code') ||
        (schedule.name === scheduleData.name && field === 'name');
    }

    return equal;
  }

  print(...data: any): void {
    console.log(data);
  }

  downloadFile(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this._alldata);
    const workbook: XLSX.WorkBook = { Sheets: { 'Horarios': worksheet }, SheetNames: ['Horarios'] };
    XLSX.writeFile(workbook, 'planificacion.xlsx');
  }
}
