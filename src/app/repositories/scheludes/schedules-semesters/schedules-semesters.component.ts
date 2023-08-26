import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import moment from 'moment';
import {
  finalize,
  map,
  Observable,
  startWith,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state';
import * as XLSX from 'xlsx';

import { DepartmentVM } from '../../departments';
import { PeriodVM } from '../../periods';
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
  filteredDepartments!: Observable<DepartmentVM[]>;
  departments: Array<DepartmentVM> = [];
  departmentCtrl = new FormControl();
  periodId = 4;
  period!: PeriodVM;
  departmentId = 0;

  dataSource = new MatTableDataSource<any | Group>([]);

  _alldata: any[] = [];
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
    this.sub$.add(
      this.groupByCtrl.valueChanges.subscribe((field) => {
        if (field) {
          this.unGroupBy(this.groupsByField);
          this.groupBy(field);
          this.groupsByField = field;
          this.calculateHourlyLoad();
        }
      })
    );
    this.loadDepartments();
    this.sub$.add(
      this.departmentCtrl?.valueChanges.subscribe((department) => {
        this.departmentId = +department?.id;
        if (department && department?.id) {
          this.loadSchedules();
        }
      })
    );
    this.sub$.add(
      this.schedulesService.findPeriod$(this.periodId).subscribe((period) => {
        this.period = period;
      })
    );
  }

  private loadDepartments(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getDepartaments$(1)
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((departaments) => {
          this.departments = departaments;
          this.departmentCtrl.patchValue(departaments[0]);
          if (departaments?.length) {
            this.filteredDepartments = this.departmentCtrl.valueChanges.pipe(
              startWith<string | DepartmentVM>(''),
              map((value: any) => {
                if (value !== null) {
                  if (value.id) {
                    return '';
                  } else {
                    return typeof value === 'string' ? value : value.name;
                  }
                }
                return '';
              }),
              map((name: any) => {
                return name
                  ? this._departmentFilter(name)
                  : this.departments.slice();
              })
            );
          }
        })
    );
  }

  private _departmentFilter(name: string): DepartmentVM[] {
    const filterValue = name.toLowerCase();
    return this.departments.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private loadSchedules(): void {
    if (this.periodId && this.departmentId) {
      this.loading = true;
      this.stateService.setLoading(this.loading);
      this.sub$.add(
        this.schedulesService
          .getSectionsSchedulesSemesterService$(
            this.departmentId,
            this.periodId
          )
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
            console.log(this.dataSource.data);
            
            this.dataSource.filterPredicate =
              this.customFilterPredicate.bind(this);
            this.dataSource.filter = performance.now().toString();
            this.mapperData();
          })
      );
    }
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

  equalPrevious(schedule: any, field: string, alldata = this._alldata): boolean {
    let equal = false;
    const index = alldata.findIndex(
      (item) => item.scheduleId === schedule.scheduleId
    );
    const fields = ['dayName', 'classroomName', 'start', 'end'];
    if (index > 0) {
      const scheduleData = alldata[index - 1];
      equal =
        (schedule[field] === scheduleData[field] &&
          schedule.sectionName === scheduleData.sectionName &&
          !fields.includes(field) &&
          schedule.code === scheduleData.code) ||
        (schedule.code === scheduleData.code && field === 'code') ||
        (schedule.name === scheduleData.name && field === 'name') ||
        (schedule.teacherName === scheduleData.teacherName && field === 'teacherName');
    }

    return equal;
  }

  print(...data: any): void {
    console.log(data);
  }

  downloadFile(): void {
    if (this._alldata?.length) {
      let countRow = 2;

      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);

      const headers1 = [
        `PLANIFICACION ACADEMICA ${this.departmentCtrl.value?.abbreviation}-${this.period.name}`,
      ];
      XLSX.utils.sheet_add_aoa(worksheet, [headers1], {
        origin: 'B' + countRow,
      });
      countRow += 2;

      const data = this.mapperData();
      Object.keys(data).forEach((key) => {
        const headers2 = [`${this.groupsBy[0]?.text} ${key}`];
        XLSX.utils.sheet_add_aoa(worksheet, [headers2], {
          origin: 'B' + countRow,
        });
        countRow++;
        const headers = [
          'Código',
          'Asignatura',
          'Sección',
          'Día',
          'Aula',
          'Desde',
          'Hasta',
          'Profesor',
          'Nombre',
          'Capacidad',
        ];
        const options = {
          origin: 'B' + countRow,
        };
        XLSX.utils.sheet_add_aoa(worksheet, [headers], options);
        countRow++;
        const options2 = {
          origin: 'B' + countRow,
        };
        XLSX.utils.sheet_add_aoa(worksheet, data[key], options2);
        countRow += data[key].length + 1;
      });

      const workbook: XLSX.WorkBook = {
        Sheets: { Horarios: worksheet },
        SheetNames: ['Horarios'],
      };
      XLSX.writeFile(
        workbook,
        `${this.period.name} planificacion academica departamento de ${
          this.departmentCtrl.value.name
        } ${moment().format('DD-MM-YYYY HH:mm')}.xlsx`
      );
    }
  }

  displayFn(item: DepartmentVM | any): string {
    return item?.name;
  }

  private mapperData(): any {
    const data: any = {};
    this.dataSource.data.forEach((schedule) => {
      if (
        schedule instanceof Group &&
        !data[(schedule as any)?.[this.groupsBy[0]?.field]]
      ) {
        data[(schedule as any)?.[this.groupsBy[0]?.field]] = [];
      } else {
        console.log(schedule);
        const obj: any = {
          Código: !this.equalPrevious(schedule, 'code', this.dataSource.data) ? schedule?.code : '',
          Asignatura: !this.equalPrevious(schedule, 'name', this.dataSource.data)
            ? schedule?.name
            : '',
          Sección: !this.equalPrevious(schedule, 'sectionName', this.dataSource.data)
            ? schedule?.sectionName
            : '',
          Día: schedule?.dayName,
          Aula: schedule?.classroomName,
          Desde: schedule?.start,
          Hasta: schedule?.end,
          Profesor: !this.equalPrevious(schedule, 'documentTeacher', this.dataSource.data)
            ? schedule?.documentTeacher
            : '',
          Nombre: !this.equalPrevious(schedule, 'teacherName', this.dataSource.data)
            ? schedule?.teacherName
            : '',
          Capacidad: schedule?.capacity,
        };
        
        
        data[(schedule as any)?.[this.groupsBy[0]?.field]]?.push(
          Array.from(Object.keys(obj), (key) => obj[key])
        );
      }
    });

    return data;
  }

  calculateHourlyLoad():  void {
    if (this.groupsByField === 'teacherName') {
      let count = 0;
      let index = -1;
      this.dataSource.data.forEach((schedule, i) => {
        if (schedule instanceof Group) {
          if (index > -1) {
            this.dataSource.data[index].teacherName += ` (${count})`;
          }
          count = 0;
          index = i;
        } else {
          const hours = (moment(schedule.end, 'HH:mm').diff(moment(schedule.start, 'HH:mm'), 'minutes'));
          count += Math.floor(hours/this.period.duration);
        }
        if (this.dataSource.data?.length === i + 1) {
          this.dataSource.data[index].teacherName += ` (${count})`;
        }
      });
    }
  }
}
