import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import moment from 'moment';
import {
  finalize,
  Subscription,
} from 'rxjs';
import * as XLSX from 'xlsx';

import {
  StateService,
  UserStateService,
} from '../../../common';
import { GlobalPeriodService } from '../../../common/global-period';
import { DepartmentVM } from '../../departments/model';
import { PeriodVM } from '../../periods/model';
import { SchedulesService } from '../schedules.service';
import { ReportConfigModalComponent, ReportConfig } from './report-config-modal';

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
  selector: 'app-planned-schedules',
  templateUrl: './planned-schedules.component.html',
  styleUrls: ['./planned-schedules.component.scss']
})
export class PlannedSchedulesComponent {
  departments: Array<DepartmentVM> = [];
  departmentCtrl = new FormControl();
  periodId!: number;
  period!: PeriodVM;
  departmentId!: number;
  departmentIdUser!: number;

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
    private stateService: StateService,
    private userStateService: UserStateService,
    private globalPeriodService: GlobalPeriodService,
    private dialog: MatDialog,
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
    this.departmentIdUser = this.userStateService.getDepartmentId() || 0;
    this.departmentId = this.departmentIdUser;

    this.sub$.add(
      this.schedulesService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.sub$.add(
      this.schedulesService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
          this.period = period;
          if (this.departmentIdUser) {
            this.loadSchedules();
          }
        }
      })
    );

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
      this.departmentCtrl?.valueChanges.subscribe((departmentId) => {
        this.departmentId = +departmentId;
        if (departmentId) {
          this.loadSchedules();
        }
      })
    );
  }

  private loadDepartments(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getDepartaments$({ schoolId: this.userStateService.getSchoolId(), status: true, })
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
        .subscribe((departaments) => {
          this.departments = departaments;
          if (departaments?.length) {
            if (this.departmentIdUser) {
              this.loadSchedules();
            }
          }
        })
    );
  }

  private loadSchedules(): void {
    console.log(this.periodId, this.departmentId);

    if (this.periodId && this.departmentId) {
      this.loading = true;
      this.stateService.setLoading(this.loading);
      this.sub$.add(
        this.schedulesService
          .getPlannedSchedules$({
            departmentId: this.departmentId,
            periodId: this.periodId,
            status: true,
          })
          .pipe(
            finalize(() => {
              this.loading = false;
              this.stateService.setLoading(this.loading);
            })
          )
          .subscribe((schedules) => {
            this._alldata = schedules;
            this.dataSource.data = this.addGroups(
              this._alldata,
              this.groupByColumns
            );

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
        ((schedule.code === scheduleData.code) && schedule.teacherName === scheduleData.teacherName && field === 'teacherName') ||
        ((schedule.code === scheduleData.code) && schedule.documentTeacher === scheduleData.documentTeacher && field === 'documentTeacher');
    }

    return equal;
  }

  print(...data: any): void {
    console.log(data);
  }

  downloadFile(): void {
    if (this._alldata?.length) {
      const dialogRef = this.dialog.open(ReportConfigModalComponent, {
        width: '800px',
        maxHeight: '90vh',
        disableClose: true,
        data: {
          availableFields: this.columns.map(col => ({ field: col.field, label: col.text })),
          availableSemesters: this.getUniqueSemesters(),
          availableTeachers: this.getUniqueTeachers()
        }
      });

      dialogRef.afterClosed().subscribe((config: ReportConfig) => {
        if (config) {
          this.generateReport(config);
        }
      });
    }
  }

  private generateReport(config: ReportConfig): void {
    let filteredData = this._alldata;

    // Aplicar filtros según la configuración
    filteredData = this.applyFilters(filteredData, config);

    // Generar el archivo Excel
    this.createExcelFile(filteredData, config);
  }

  private applyFilters(data: any[], config: ReportConfig): any[] {
    let filtered = [...data];

    // Filtro por semestre
    if (config.reportType === 'semester' && config.selectedSemesters?.length) {
      filtered = filtered.filter(item =>
        config.selectedSemesters.includes(item.semester)
      );
    }

    // Filtro por profesor
    if (config.reportType === 'teacher') {
      // Mantener todos los datos pero agrupar por profesor
      // El agrupamiento se manejará en la generación del Excel
    }

    // Filtro por turno
    if (config.reportType === 'shift') {
      filtered = filtered.filter(item => {
        const startTime = moment(item.start, 'HH:mm');
        const noon = moment('12:00', 'HH:mm');

        switch (config.shiftType) {
          case 'morning':
            return startTime.isBefore(noon);
          case 'afternoon':
            return startTime.isSameOrAfter(noon);
          case 'both':
          default:
            return true; // Para 'both' no se aplica filtro aquí, se maneja en generateReportData
        }
      });
    }

    return filtered;
  }

  private createExcelFile(data: any[], config: ReportConfig): void {
    let countRow = 2;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    const department = this.departments.find(department => department.id === this.departmentId);

    // Título principal
    let title = `PLANIFICACION ACADEMICA ${department?.abbreviation}-${this.period.name}`;

    if (config.reportType === 'shift') {
      if (config.shiftType === 'morning') {
        title += ` - TURNO MAÑANA`;
      } else if (config.shiftType === 'afternoon') {
        title += ` - TURNO TARDE`;
      } else {
        title += ` - CLASIFICACION POR TURNOS`;
      }
    }

    const headers1 = [title];
    XLSX.utils.sheet_add_aoa(worksheet, [headers1], {
      origin: 'B' + countRow,
    });
    countRow += 2;

    // Generar datos según el tipo de reporte
    const reportData = this.generateReportData(data, config);

    // Agregar datos al Excel
    Object.keys(reportData).forEach((key) => {
      const groupTitle = this.getGroupTitle(key, config);
      XLSX.utils.sheet_add_aoa(worksheet, [groupTitle], {
        origin: 'B' + countRow,
      });
      countRow++;

      // Headers de columnas seleccionadas
      const headers = this.getSelectedHeaders(config);
      XLSX.utils.sheet_add_aoa(worksheet, [headers], {
        origin: 'B' + countRow,
      });
      countRow++;

      // Datos
      XLSX.utils.sheet_add_aoa(worksheet, reportData[key], {
        origin: 'B' + countRow,
      });
      countRow += reportData[key].length + 1;
    });

    const workbook: XLSX.WorkBook = {
      Sheets: { Horarios: worksheet },
      SheetNames: ['Horarios'],
    };

    const fileName = this.generateFileName(config, department);
    XLSX.writeFile(workbook, fileName);
  }

  private generateReportData(data: any[], config: ReportConfig): any {
    const reportData: any = {};

    if (config.reportType === 'teacher') {
      // Agrupar por profesor
      data.forEach(schedule => {
        const teacherKey = schedule.teacherName || 'Sin Profesor';
        if (!reportData[teacherKey]) {
          reportData[teacherKey] = [];
        }
        reportData[teacherKey].push(this.mapScheduleToRow(schedule, config));
      });
    } else if (config.reportType === 'semester') {
      // Agrupar por semestre
      data.forEach(schedule => {
        const semesterKey = `Semestre ${schedule.semester}`;
        if (!reportData[semesterKey]) {
          reportData[semesterKey] = [];
        }
        reportData[semesterKey].push(this.mapScheduleToRow(schedule, config));
      });
    } else if (config.reportType === 'shift') {
      if (config.shiftType === 'both') {
        // Para 'both', mostrar clasificación completa con todos los datos
        const allData = [...data];
        const morningData: any[] = [];
        const afternoonData: any[] = [];

        allData.forEach(schedule => {
          const startTime = moment(schedule.start, 'HH:mm');
          const noon = moment('12:00', 'HH:mm');
          const isMorning = startTime.isBefore(noon);

          if (isMorning) {
            morningData.push(this.mapScheduleToRow(schedule, config));
          } else {
            afternoonData.push(this.mapScheduleToRow(schedule, config));
          }
        });

        // Agregar sección de mañana
        if (morningData.length > 0) {
          reportData[`TURNO MAÑANA (${morningData.length} asignaturas)`] = morningData;
        }

        // Agregar sección de tarde
        if (afternoonData.length > 0) {
          reportData[`TURNO TARDE (${afternoonData.length} asignaturas)`] = afternoonData;
        }

        // Agregar resumen general
        reportData[`RESUMEN GENERAL (${allData.length} asignaturas total)`] = this.createSummaryRow(morningData.length, afternoonData.length, allData.length);
      } else {
        // Para 'morning' o 'afternoon', mostrar solo los datos filtrados
        const shiftLabel = config.shiftType === 'morning' ? 'MAÑANA' : 'TARDE';
        const shiftData = data.map(schedule => this.mapScheduleToRow(schedule, config));
        reportData[`TURNO ${shiftLabel} (${shiftData.length} asignaturas)`] = shiftData;
      }
    }

    return reportData;
  }

  private mapScheduleToRow(schedule: any, config: ReportConfig): any[] {
    const fieldMapping: { [key: string]: string } = {
      'code': 'Código',
      'name': 'Asignatura',
      'sectionName': 'Sección',
      'dayName': 'Día',
      'classroomName': 'Aula',
      'start': 'Desde',
      'end': 'Hasta',
      'documentTeacher': 'Documento Profesor',
      'teacherName': 'Nombre Profesor',
      'capacity': 'Capacidad'
    };

    const row: any[] = [];

    config.selectedFields.forEach(field => {
      const label = fieldMapping[field] || field;
      let value = schedule[field] || '';

      // Aplicar lógica de duplicados para ciertos campos
      if (['code', 'name', 'sectionName', 'documentTeacher', 'teacherName', 'capacity'].includes(field)) {
        const shouldShow = !this.equalPrevious(schedule, field, this._alldata);
        value = shouldShow ? value : '';
      }

      row.push(value);
    });

    return row;
  }

  private getSelectedHeaders(config: ReportConfig): string[] {
    const fieldMapping: { [key: string]: string } = {
      'code': 'Código',
      'name': 'Asignatura',
      'sectionName': 'Sección',
      'dayName': 'Día',
      'classroomName': 'Aula',
      'start': 'Desde',
      'end': 'Hasta',
      'documentTeacher': 'Documento Profesor',
      'teacherName': 'Nombre Profesor',
      'capacity': 'Capacidad'
    };

    return config.selectedFields.map(field => fieldMapping[field] || field);
  }

  private getGroupTitle(key: string, config: ReportConfig): string[] {
    let title = '';

    switch (config.reportType) {
      case 'teacher':
        title = `PROFESOR: ${key}`;
        break;
      case 'semester':
        title = key;
        break;
      case 'shift':
        title = key;
        break;
      default:
        title = key;
    }

    return [title];
  }

  private generateFileName(config: ReportConfig, department: any): string {
    let fileName = `${this.period.name} planificacion academica departamento de ${department?.name}`;

    if (config.reportType === 'shift') {
      if (config.shiftType === 'morning') {
        fileName += ` - TURNO MAÑANA`;
      } else if (config.shiftType === 'afternoon') {
        fileName += ` - TURNO TARDE`;
      } else {
        fileName += ` - CLASIFICACION POR TURNOS`;
      }
    }

    fileName += ` ${moment().format('DD-MM-YYYY HH:mm')}.xlsx`;

    return fileName;
  }

  private getUniqueSemesters(): number[] {
    const semesters = new Set(this._alldata.map(item => item.semester));
    return Array.from(semesters).sort();
  }

  private getUniqueTeachers(): string[] {
    const teachers = new Set(this._alldata.map(item => item.teacherName).filter(Boolean));
    return Array.from(teachers).sort();
  }

  private createSummaryRow(morningCount: number, afternoonCount: number, totalCount: number): any[] {
    const summaryRow: any[] = [];

    // Crear una fila de resumen con información de conteos
    summaryRow.push(''); // Código vacío
    summaryRow.push('RESUMEN DE ASIGNATURAS POR TURNO');
    summaryRow.push(''); // Sección vacía
    summaryRow.push(''); // Día vacío
    summaryRow.push(''); // Aula vacía
    summaryRow.push(''); // Desde vacío
    summaryRow.push(''); // Hasta vacío
    summaryRow.push(''); // Profesor vacío
    summaryRow.push(''); // Nombre vacío
    summaryRow.push(''); // Capacidad vacía

    // Agregar fila con detalles de conteo
    const detailRow: any[] = [];
    detailRow.push(''); // Código vacío
    detailRow.push(`Mañana: ${morningCount} | Tarde: ${afternoonCount} | Total: ${totalCount}`);
    detailRow.push(''); // Sección vacía
    detailRow.push(''); // Día vacío
    detailRow.push(''); // Aula vacía
    detailRow.push(''); // Desde vacío
    detailRow.push(''); // Hasta vacío
    detailRow.push(''); // Profesor vacío
    detailRow.push(''); // Nombre vacío
    detailRow.push(''); // Capacidad vacía

    return [summaryRow, detailRow];
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
          Capacidad: !this.equalPrevious(schedule, 'capacity', this.dataSource.data)
          ? schedule?.capacity
          : '',
        };


        data[(schedule as any)?.[this.groupsBy[0]?.field]]?.push(
          Array.from(Object.keys(obj), (key) => obj[key])
        );
      }
    });

    return data;
  }

  calculateHourlyLoad(): void {
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
          count += Math.floor(hours / this.period.duration);
        }
        if (this.dataSource.data?.length === i + 1) {
          this.dataSource.data[index].teacherName += ` (${count})`;
        }
      });
    }
  }
}
