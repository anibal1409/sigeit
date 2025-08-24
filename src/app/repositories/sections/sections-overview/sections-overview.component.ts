import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
      let countRow = 2;

      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);

      const department = this.departments.find(department => department.id === this.departmentId);

      // Título principal del reporte
      const headers1 = [
        `SECCIONES ACADEMICAS ${department?.abbreviation}-${this.period.name}`,
      ];
      XLSX.utils.sheet_add_aoa(worksheet, [headers1], {
        origin: 'B' + countRow,
      });
      countRow += 2;

      // Información del departamento y período
      const infoRow = [
        `Departamento: ${department?.name}`,
        `Período: ${this.period.name}`,
        `Fecha de generación: ${moment().format('DD/MM/YYYY HH:mm')}`,
      ];
      XLSX.utils.sheet_add_aoa(worksheet, [infoRow], {
        origin: 'B' + countRow,
      });
      countRow += 2;

      const data = this.mapperData();
      Object.keys(data).forEach((key) => {
        // Encabezado del grupo (Semestre X o Profesor X)
        const groupHeader = `${this.groupsBy.find(g => g.field === this.groupsByField)?.text} ${key}`;
        const headers2 = [groupHeader];
        XLSX.utils.sheet_add_aoa(worksheet, [headers2], {
          origin: 'B' + countRow,
        });
        countRow++;

        // Headers de las columnas
        const headers = this.getExcelHeaders();
        const options = {
          origin: 'B' + countRow,
        };
        XLSX.utils.sheet_add_aoa(worksheet, [headers], options);
        countRow++;

        // Datos del grupo
        const options2 = {
          origin: 'B' + countRow,
        };
        XLSX.utils.sheet_add_aoa(worksheet, data[key], options2);
        countRow += data[key].length + 2; // Espacio adicional entre grupos
      });

      // Resumen final
      const totalSections = this._alldata.length;
      const summaryRow = [`Total de Secciones: ${totalSections}`];
      XLSX.utils.sheet_add_aoa(worksheet, [summaryRow], {
        origin: 'B' + countRow,
      });

      // Aplicar estilos al Excel
      console.log('Aplicando estilos al Excel...');
      this.applyExcelStyles(worksheet);
      console.log('Estilos aplicados. Generando archivo...');

      const workbook: XLSX.WorkBook = {
        Sheets: { Secciones: worksheet },
        SheetNames: ['Secciones'],
      };
      
      // Nombre del archivo más descriptivo
      const fileName = `${this.period.name}_secciones_academicas_${department?.abbreviation}_${moment().format('DD-MM-YYYY_HH-mm')}.xlsx`;
      
      console.log('Descargando archivo:', fileName);
      XLSX.writeFile(workbook, fileName);
    }
  }

  displayFn(item: DepartmentVM | any): string {
    return item?.name;
  }

  private mapperData(): any {
    const data: any = {};
    this.dataSource.data.forEach((section) => {
      if (
        section instanceof Group &&
        !data[(section as any)?.[this.groupsByField]]
      ) {
        data[(section as any)?.[this.groupsByField]] = [];
      } else if (!(section instanceof Group)) {
        const obj: any = [];
        this.displayedColumns.forEach(column => {
          const value = !this.equalPrevious(section, column, this.dataSource.data) ? section[column] : '';
          obj.push(value);
        });

        data[(section as any)?.[this.groupsByField]]?.push(obj);
      }
    });

    return data;
  }

  private getExcelHeaders(): string[] {
    const headers: string[] = [];
    this.displayedColumns.forEach(column => {
      const columnDefinition = this.columns.find(c => c.field === column);
      if (columnDefinition) {
        // Mejoro los nombres de las columnas para el Excel
        let headerText = columnDefinition.text;
        
        // Personalizo algunos headers para mayor claridad
        switch (column) {
          case 'code':
            headerText = 'CÓDIGO';
            break;
          case 'name':
            headerText = 'ASIGNATURA';
            break;
          case 'semester':
            headerText = 'SEMESTRE';
            break;
          case 'sectionName':
            headerText = 'SECCIÓN';
            break;
          case 'teacherName':
            headerText = 'PROFESOR';
            break;
          case 'capacity':
            headerText = 'CAPACIDAD';
            break;
        }
        
        headers.push(headerText);
      }
    });
    return headers;
  }

  private applyExcelStyles(worksheet: XLSX.WorkSheet): void {
    try {
      console.log('Iniciando aplicación de estilos...');
      
      // Aplicar estilos básicos al worksheet
      if (worksheet['!cols']) {
        // Ajustar ancho de columnas
        // Aumentamos asignatura y profesor en 5 veces su tamaño
        worksheet['!cols'] = [
          { width: 2 },   // Columna A (vacía)
          { width: 20 },  // Columna B (títulos)
          { width: 15 },  // Columna C (código)
          { width: 75 },  // Columna D (asignatura) - 15 * 5 = 75
          { width: 15 },  // Columna E (semestre)
          { width: 15 },  // Columna F (sección)
          { width: 75 },  // Columna G (profesor) - 15 * 5 = 75
          { width: 15 },  // Columna H (capacidad)
        ];
        console.log('Ancho de columnas configurado:', worksheet['!cols']);
      }

      // Aplicar estilos a las celdas específicas
      const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
      console.log('Rango del worksheet:', range);
      
      // Estilo para el título principal
      if (worksheet['B2']) {
        worksheet['B2'].s = {
          font: { bold: true, size: 16, color: { rgb: 'FFFFFF' } },
          fill: { fgColor: { rgb: '4684FF' } },
          alignment: { horizontal: 'center' }
        };
        console.log('Estilo aplicado al título principal B2');
      }

      // Estilo para la información del departamento
      if (worksheet['B4']) {
        worksheet['B4'].s = {
          font: { bold: true, size: 12, color: { rgb: '4684FF' } },
          fill: { fgColor: { rgb: 'E3F2FD' } }
        };
        console.log('Estilo aplicado a la información del departamento B4');
      }

      // Estilo para los encabezados de grupo
      let groupHeadersStyled = 0;
      for (let row = 6; row <= range.e.r; row++) {
        const cell = worksheet[`B${row}`];
        if (cell && cell.v && typeof cell.v === 'string' && 
            (cell.v.includes('Semestre') || cell.v.includes('Profesor'))) {
          cell.s = {
            font: { bold: true, size: 14, color: { rgb: 'FFFFFF' } },
            fill: { fgColor: { rgb: 'FF6600' } },
            alignment: { horizontal: 'center' }
          };
          groupHeadersStyled++;
        }
      }
      console.log(`Estilos aplicados a ${groupHeadersStyled} encabezados de grupo`);

      // Estilo para los headers de columnas
      let columnHeadersStyled = 0;
      for (let row = 6; row <= range.e.r; row++) {
        const cell = worksheet[`B${row}`];
        if (cell && cell.v && typeof cell.v === 'string' && 
            (cell.v.includes('CÓDIGO') || cell.v.includes('NOMBRE') || 
             cell.v.includes('SECCIÓN') || cell.v.includes('PROFESOR') || 
             cell.v.includes('CAPACIDAD'))) {
          cell.s = {
            font: { bold: true, size: 12, color: { rgb: 'FFFFFF' } },
            fill: { fgColor: { rgb: '4684FF' } },
            alignment: { horizontal: 'center' }
          };
          columnHeadersStyled++;
        }
      }
      console.log(`Estilos aplicados a ${columnHeadersStyled} headers de columnas`);

      // Estilo para el resumen final
      const lastRow = range.e.r;
      if (worksheet[`B${lastRow}`]) {
        worksheet[`B${lastRow}`].s = {
          font: { bold: true, size: 14, color: { rgb: 'FFFFFF' } },
          fill: { fgColor: { rgb: '28A745' } },
          alignment: { horizontal: 'center' }
        };
        console.log('Estilo aplicado al resumen final');
      }

      // Aplicar estilos a todas las celdas de datos para asegurar que se vean bien
      let dataCellsStyled = 0;
      for (let row = 1; row <= range.e.r; row++) {
        for (let col = 1; col <= range.e.c; col++) {
          const cellAddress = XLSX.utils.encode_cell({ r: row - 1, c: col - 1 });
          const cell = worksheet[cellAddress];
          
          if (cell && !cell.s) {
            // Aplicar estilos básicos a celdas sin estilos
            cell.s = {
              font: { size: 11 },
              alignment: { horizontal: 'left', vertical: 'center' }
            };
            dataCellsStyled++;
          }
        }
      }
      console.log(`Estilos básicos aplicados a ${dataCellsStyled} celdas de datos`);

      // Aplicar estilos específicos a las columnas de datos
      let specificCellsStyled = 0;
      for (let row = 8; row <= range.e.r; row++) {
        // Columna C (Código)
        const codeCell = worksheet[`C${row}`];
        if (codeCell && codeCell.v) {
          codeCell.s = {
            font: { bold: true, size: 11, color: { rgb: '000000' } },
            alignment: { horizontal: 'left', vertical: 'center' }
          };
          specificCellsStyled++;
        }

        // Columna D (Asignatura)
        const nameCell = worksheet[`D${row}`];
        if (nameCell && nameCell.v) {
          nameCell.s = {
            font: { bold: false, size: 11, color: { rgb: '000000' } },
            alignment: { horizontal: 'left', vertical: 'center' }
          };
          specificCellsStyled++;
        }

        // Columna E (Semestre)
        const semesterCell = worksheet[`E${row}`];
        if (semesterCell && semesterCell.v) {
          semesterCell.s = {
            font: { bold: false, size: 11, color: { rgb: '000000' } },
            alignment: { horizontal: 'center', vertical: 'center' }
          };
          specificCellsStyled++;
        }

        // Columna F (Sección)
        const sectionCell = worksheet[`F${row}`];
        if (sectionCell && sectionCell.v) {
          sectionCell.s = {
            font: { bold: false, size: 11, color: { rgb: '000000' } },
            alignment: { horizontal: 'center', vertical: 'center' }
          };
          specificCellsStyled++;
        }

        // Columna G (Profesor)
        const teacherCell = worksheet[`G${row}`];
        if (teacherCell && teacherCell.v) {
          teacherCell.s = {
            font: { bold: false, size: 11, color: { rgb: '000000' } },
            alignment: { horizontal: 'left', vertical: 'center' }
          };
          specificCellsStyled++;
        }

        // Columna H (Capacidad)
        const capacityCell = worksheet[`H${row}`];
        if (capacityCell && capacityCell.v) {
          capacityCell.s = {
            font: { bold: false, size: 11, color: { rgb: '000000' } },
            alignment: { horizontal: 'center', vertical: 'center' }
          };
          specificCellsStyled++;
        }
      }
      console.log(`Estilos específicos aplicados a ${specificCellsStyled} celdas de datos`);

      console.log('Aplicación de estilos completada exitosamente');
    } catch (error) {
      console.error('Error al aplicar estilos:', error);
    }
  }
} 