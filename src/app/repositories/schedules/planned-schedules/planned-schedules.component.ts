import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import {
  ResponseScheduleDto,
  ResponseSectionDto,
  ScheduleService,
  SectionService,
} from 'dashboard-sdk';
import moment from 'moment';
import {
  finalize,
  forkJoin,
  map,
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
import {
  sectionShift,
  Shift,
  SHIFT_LABELS,
} from './shift';

/** Conteo de secciones del período por turno para un departamento. */
export interface ShiftRow extends Record<Shift, number> {
  departmentId: number;
  name: string;
  total: number;
  empty: number;
}

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

  shiftLabels = SHIFT_LABELS;
  shiftRows?: Array<ShiftRow>;
  shiftTotal?: ShiftRow;

  private sub$ = new Subscription();
  loading = false;

  constructor(
    private schedulesService: SchedulesService,
    private router: Router,
    private stateService: StateService,
    private userStateService: UserStateService,
    private globalPeriodService: GlobalPeriodService,
    private dialog: MatDialog,
    private sectionService: SectionService,
    private scheduleService: ScheduleService,
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
          this.loadShiftSummary();
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
          this.loadShiftSummary();
        })
    );
  }

  /** Secciones activas del período por departamento: total, mañana, tarde, mixtas y sin horario. */
  loadShiftSummary(): void {
    const departments = this.departmentIdUser
      ? this.departments.filter((department) => department.id === this.departmentIdUser)
      : this.departments;
    if (!this.periodId || !departments.length) {
      return;
    }
    this.shiftRows = undefined;
    this.sub$.add(
      forkJoin(
        departments.map((department) =>
          forkJoin([
            this.sectionService.sectionControllerFindAll(this.periodId, department.id, undefined, undefined, undefined, undefined, true),
            this.scheduleService.scheduleControllerFindAll(
              this.periodId, undefined, undefined, this.periodId, undefined, undefined, undefined, undefined, department.id, true
            ),
          ]).pipe(map(([sections, schedules]) => this.countShifts(department, sections, schedules)))
        )
      ).subscribe((rows) => {
        this.shiftRows = rows;
        this.shiftTotal = rows.reduce(
          (total, row) => ({
            ...total,
            total: total.total + row.total,
            morning: total.morning + row.morning,
            afternoon: total.afternoon + row.afternoon,
            mixed: total.mixed + row.mixed,
            empty: total.empty + row.empty,
          }),
          { departmentId: 0, name: 'Total', total: 0, morning: 0, afternoon: 0, mixed: 0, empty: 0 }
        );
      })
    );
  }

  private countShifts(
    department: DepartmentVM,
    sections: Array<ResponseSectionDto>,
    schedules: Array<ResponseScheduleDto>
  ): ShiftRow {
    const row: ShiftRow = { departmentId: department.id || 0, name: department.name, total: 0, morning: 0, afternoon: 0, mixed: 0, empty: 0 };
    sections.forEach((section) => {
      const shift = sectionShift(schedules.filter((schedule) => (schedule.section as { id?: number })?.id === section.id));
      row.total++;
      row[shift || 'empty']++;
    });
    return row;
  }

  selectDepartment(row: ShiftRow): void {
    if (!this.departmentIdUser && row.departmentId) {
      this.departmentCtrl.setValue(row.departmentId);
    }
  }

  private loadSchedules(): void {
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

      // Calcular horas si es agrupamiento por profesor
      if (currentColumn === 'teacherName') {
        let totalHours = 0;
        rowsInGroup.forEach((schedule: any) => {
          if (schedule.start && schedule.end) {
            const hours = moment(schedule.end, 'HH:mm').diff(moment(schedule.start, 'HH:mm'), 'minutes');
            totalHours += Math.floor(hours / this.period.duration);
          }
        });
        group.teacherName = `${group.teacherName} (${totalHours})`;
      }

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

    // Filtro por turno: la sección completa debe estar en el turno elegido
    if (config.reportType === 'shift' && config.shiftType !== 'both') {
      const shifts = this.sectionShifts();
      filtered = filtered.filter(item => shifts.get(item.sectionId) === config.shiftType);
    }

    return filtered;
  }

  private sectionShifts(): Map<number, Shift | null> {
    const blocks = new Map<number, Array<{ start: string; end: string }>>();
    this._alldata.forEach((item) => blocks.set(item.sectionId, [...(blocks.get(item.sectionId) || []), item]));
    return new Map([...blocks].map(([sectionId, items]) => [sectionId, sectionShift(items)]));
  }

  private createExcelFile(data: any[], config: ReportConfig): void {
    let countRow = 2;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    const department = this.departments.find(department => department.id === this.departmentId);

    // Título principal
    let title = `PLANIFICACION ACADEMICA ${department?.abbreviation}-${this.period.name}`;
    if (this.period.isVacationCourse) {
      title += ' VACACIONAL';
    }

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
        // Obtener todos los datos del profesor para la lógica de duplicados
        const teacherData = data.filter(s => s.teacherName === teacherKey);
        reportData[teacherKey].push(this.mapScheduleToRow(schedule, config, teacherData));
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
      const shifts = this.sectionShifts();
      const groups: Array<Shift> = config.shiftType === 'both' ? ['morning', 'afternoon', 'mixed'] : [config.shiftType];
      const counts: Record<Shift, number> = { morning: 0, afternoon: 0, mixed: 0 };
      groups.forEach((shift) => {
        const rows = data.filter((schedule) => shifts.get(schedule.sectionId) === shift);
        counts[shift] = new Set(rows.map((schedule) => schedule.sectionId)).size;
        if (rows.length) {
          const title = `${SHIFT_LABELS[shift].toUpperCase()} - ${counts[shift]} secciones`;
          reportData[title] = rows.map((schedule) => this.mapScheduleToRow(schedule, config));
        }
      });
      if (config.shiftType === 'both') {
        const total = counts.morning + counts.afternoon + counts.mixed;
        reportData[`RESUMEN GENERAL (${total} secciones)`] = this.createSummaryRow(counts, total);
      }
    }

    return reportData;
  }

  private mapScheduleToRow(schedule: any, config: ReportConfig, teacherData: any[] = []): any[] {
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
        let shouldShow = true;

        if (config.reportType === 'teacher') {
          // Para reporte por profesor, usar los datos del profesor específico
          shouldShow = !this.equalPreviousInTeacherData(schedule, field, teacherData);
        } else {
          // Para otros reportes, usar la lógica original
          shouldShow = !this.equalPrevious(schedule, field, this._alldata);
        }

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
        // Calcular horas totales del profesor
        const totalHours = this.calculateTeacherTotalHoursFromData(key);
        title = `PROFESOR: ${key} (${totalHours} Horas)`;
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
    if (this.period.isVacationCourse) {
      fileName += ' VACACIONAL';
    }

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

  private getUniqueTeachers(): Array<{document: string, name: string}> {
    const teacherMap = new Map<string, {document: string, name: string}>();

    this._alldata.forEach(item => {
      if (item.documentTeacher && item.teacherName) {
        teacherMap.set(item.documentTeacher, {
          document: item.documentTeacher,
          name: item.teacherName
        });
      }
    });

    return Array.from(teacherMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  private createSummaryRow(counts: Record<Shift, number>, totalCount: number): any[] {
    const summaryRow: any[] = [];

    // Crear una fila de resumen con información de conteos
    summaryRow.push(''); // Código vacío
    summaryRow.push('RESUMEN DE SECCIONES POR TURNO');
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
    detailRow.push(`Mañana: ${counts.morning} | Tarde: ${counts.afternoon} | Mixtas: ${counts.mixed} | Total: ${totalCount}`);
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
    // Las horas ahora se calculan directamente en getSublevel
    // Este método se mantiene por compatibilidad pero ya no es necesario
  }

  private calculateTeacherTotalHoursFromData(teacherName: string): number {
    // Filtrar datos del profesor específico
    const teacherData = this._alldata.filter(schedule => schedule.teacherName === teacherName);

    // Usar la misma lógica que calculateHourlyLoad
    let count = 0;
    teacherData.forEach(schedule => {
      if (schedule.start && schedule.end) {
        const hours = moment(schedule.end, 'HH:mm').diff(moment(schedule.start, 'HH:mm'), 'minutes');
        count += Math.floor(hours / this.period.duration);
      }
    });

    return count;
  }

  private equalPreviousInTeacherData(schedule: any, field: string, teacherData: any[]): boolean {
    let equal = false;
    const index = teacherData.findIndex(
      (item) => item.scheduleId === schedule.scheduleId
    );

    if (index > 0) {
      const previousSchedule = teacherData[index - 1];

      // Para el reporte por profesor, solo comparar si es la misma asignatura
      if (field === 'name' || field === 'code') {
        equal = schedule[field] === previousSchedule[field];
      } else if (field === 'sectionName') {
        equal = schedule.sectionName === previousSchedule.sectionName &&
                schedule.code === previousSchedule.code;
      } else if (field === 'documentTeacher') {
        equal = schedule.documentTeacher === previousSchedule.documentTeacher &&
                schedule.code === previousSchedule.code;
      } else if (field === 'teacherName') {
        equal = schedule.teacherName === previousSchedule.teacherName &&
                schedule.code === previousSchedule.code;
      } else if (field === 'capacity') {
        equal = schedule.capacity === previousSchedule.capacity &&
                schedule.code === previousSchedule.code;
      }
    }

    return equal;
  }
}
