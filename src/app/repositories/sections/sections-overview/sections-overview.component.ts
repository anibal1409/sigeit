import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import moment from 'moment';
import {
  finalize,
  Subscription,
} from 'rxjs';

import {
  StateService,
  UserStateService,
} from '../../../common';
import { DepartmentVM } from '../../departments/model';
import { PeriodVM } from '../../periods/model';
import { SectionsService } from '../sections.service';

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
  selector: 'app-sections-overview',
  templateUrl: './sections-overview.component.html',
  styleUrls: ['./sections-overview.component.scss']
})
export class SectionsOverviewComponent {
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
    private sectionsService: SectionsService,
    private router: Router,
    private stateService: StateService,
    private userStateService: UserStateService,
  ) {
    this.columns = [
      {
        field: 'code',
        text: 'Código',
      },
      {
        field: 'name',
        text: 'Asignatura',
      },
      {
        field: 'semester',
        text: 'Semestre',
        showWhenGroupedBy: 'teacherName', // Solo mostrar cuando se agrupe por profesor
      },
      {
        field: 'sectionName',
        text: 'Sección',
      },
      {
        field: 'teacherName',
        text: 'Profesor',
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
      this.sectionsService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(this.loading);
      })
    );

    this.sub$.add(
      this.sectionsService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
        }
      })
    );

    this.sub$.add(
      this.groupByCtrl.valueChanges.subscribe((field) => {
        if (field) {
          this.unGroupBy(this.groupsByField);
          this.groupBy(field);
          this.groupsByField = field;
          this.updateDisplayedColumns();
        }
      })
    );

    this.loadDepartments();
    
    this.sub$.add(
      this.departmentCtrl?.valueChanges.subscribe((departmentId) => {
        this.departmentId = +departmentId;
        if (departmentId) {
          this.loadSections();
        }
      })
    );

    this.sub$.add(
      this.sectionsService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
          this.period = period;
          if (this.departmentIdUser) {
            this.loadSections();
          }
        }
      })
    );
  }

  private updateDisplayedColumns(): void {
    this.displayedColumns = this.columns
      .filter(column => {
        // Si la columna tiene restricción de agrupación, verificar si debe mostrarse
        if (column.showWhenGroupedBy) {
          return column.showWhenGroupedBy === this.groupsByField;
        }
        // Si no tiene restricción, siempre mostrarla
        return true;
      })
      .map(column => column.field);
  }

  private loadDepartments(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.sectionsService
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
              this.loadSections();
            }
          }
        })
    );
  }

  private loadSections(): void {
    if (this.periodId && this.departmentId) {
      this.loading = true;
      this.stateService.setLoading(this.loading);
      this.sub$.add(
        this.sectionsService
          .getSections$({
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
          .subscribe((sections) => {
            this._alldata = this.mapSectionsData(sections);
            this.updateDisplayedColumns();
            console.log('Sections data:', this._alldata);
            this.dataSource.data = this.addGroups(
              this._alldata,
              this.groupByColumns
            );
            console.log('Grouped data:', this.dataSource.data);

            this.dataSource.filterPredicate =
              this.customFilterPredicate.bind(this);
            this.dataSource.filter = performance.now().toString();
          })
      );
    }
  }

  private mapSectionsData(sections: any[]): any[] {
    return sections.map(section => ({
      ...section,
      code: section.subject?.code || '',
      name: section.subject?.name || '',
      semester: section.subject?.semester || 0,
      sectionName: section.name || '',
      teacherName: section.teacher ? `${section.teacher.firstName} ${section.teacher.lastName}` : '',
    }));
  }

  groupBy(field: string) {
    this.checkGroupByColumn(field, true);
    this.dataSource.data = this.addGroups(this._alldata, this.groupByColumns);
    this.dataSource.filter = performance.now().toString();
  }

  navigateBack(): void {
    this.router.navigate(['/dashboard/sections']);
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
    
    // Ordenar los datos según el tipo de agrupación
    if (this.groupsByField === 'teacherName') {
      // Si se agrupa por profesor, ordenar alfabéticamente por nombre del profesor
      data.sort((a, b) => {
        const teacherNameA = a.teacherName || '';
        const teacherNameB = b.teacherName || '';
        return teacherNameA.localeCompare(teacherNameB, 'es', { sensitivity: 'base' });
      });
    } else if (this.groupsByField === 'semester') {
      // Si se agrupa por semestre, ordenar numéricamente por semestre y luego alfabéticamente por asignatura
      data.sort((a, b) => {
        const semesterA = a.semester || 0;
        const semesterB = b.semester || 0;
        
        if (semesterA !== semesterB) {
          return semesterA - semesterB; // Ordenar por semestre (ascendente)
        } else {
          // Si es el mismo semestre, ordenar alfabéticamente por asignatura
          const subjectNameA = a.name || '';
          const subjectNameB = b.name || '';
          return subjectNameA.localeCompare(subjectNameB, 'es', { sensitivity: 'base' });
        }
      });
    }
    
    return this.getSublevel(data, 0, groupByColumns, rootGroup);
  }

  getSublevel(
    data: any[],
    level: number,
    groupByColumns: string[],
    parent: Group
  ): any[] {
    if (level >= groupByColumns.length) {
      // Si se está agrupando por profesor, ordenar las asignaturas alfabéticamente
      if (this.groupsByField === 'teacherName') {
        return data.sort((a, b) => {
          const subjectNameA = a.name || '';
          const subjectNameB = b.name || '';
          return subjectNameA.localeCompare(subjectNameB, 'es', { sensitivity: 'base' });
        });
      }
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
    const isGroupRow = item.level;
    console.log('isGroup check:', { index, item, isGroupRow });
    return isGroupRow;
  }

  equalPrevious(section: any, field: string, alldata = this.dataSource.data): boolean {
    let equal = false;
    const index = alldata.findIndex(
      (item) => item.id === section.id
    );
    
    if (index > 0) {
      const sectionData = alldata[index - 1];
      
      // Si la fila anterior es un grupo, no hay repetición
      if (sectionData instanceof Group) {
        return false;
      }
      
      // Lógica para determinar si un campo se repite
      if (field === 'code') {
        equal = section.code === sectionData.code;
      } else if (field === 'name') {
        equal = section.code === sectionData.code && section.name === sectionData.name;
      } else if (field === 'semester') {
        equal = section.code === sectionData.code && section.semester === sectionData.semester;
      } else if (field === 'sectionName') {
        equal = section.code === sectionData.code && section.sectionName === sectionData.sectionName;
      } else if (field === 'teacherName') {
        equal = section.code === sectionData.code && section.teacherName === sectionData.teacherName;
      } else if (field === 'capacity') {
        equal = section.code === sectionData.code && section.capacity === sectionData.capacity;
      }
    }

    return equal;
  }

  downloadFile(): void {
    if (this._alldata?.length) {
      // Preparar parámetros para el reporte
      const reportParams = {
        periodId: this.periodId,
        departmentId: this.departmentId,
        groupBy: this.groupsByField,
        semester: this.groupsByField === 'semester' ? undefined : undefined,
        teacherId: this.groupsByField === 'teacherName' ? undefined : undefined,
        status: true
      };

      // Llamar al servicio del API para generar el reporte
      this.sectionsService.generateReport(reportParams).subscribe({
        next: (blob: Blob) => {
          // Crear URL del blob y descargar
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          
          const department = this.departments.find(d => d.id === this.departmentId);
          const now = new Date();
          const formattedDate = now.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }).replace(/\//g, '-');
          const formattedTime = now.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
          }).replace(/:/g, '-');
          
          const fileName = `${this.period.name}_secciones_academicas_${department?.abbreviation}_${formattedDate}_${formattedTime}.xlsx`;
          
          link.download = fileName;
          link.click();
          
          // Limpiar URL
          window.URL.revokeObjectURL(url);
        },
        error: (error) => {
          console.error('Error al generar el reporte:', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      });
    }
  }

  displayFn(item: DepartmentVM | any): string {
    return item?.name;
  }






} 