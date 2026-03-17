import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
import {
  ConfirmModalComponent,
  OptionAction,
  TableDataVM,
  TableService,
  UserStateService,
} from 'src/app/common';
import { StateService } from 'src/app/common/state';

import { DepartmentItemVM } from '../departments';
import { FormComponent } from './form';
import {
  RowActionTeacher,
  TeacherItemVM,
  TeacherVM,
} from './model';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit, OnDestroy {

  data: TableDataVM<TeacherVM> = {
    headers: [
      {
        columnDef: 'id_document',
        header: 'Cédula',
        cell: (element: { [key: string]: string }) =>
          `${element['idDocument']}`,
      },
      {
        columnDef: 'v',
        header: 'Apellido(s)',
        cell: (element: { [key: string]: string }) => `${element['lastName']}`,
      },
      {
        columnDef: 'firstName',
        header: 'Nombre(s)',
        cell: (element: { [key: string]: string }) =>
          `${element['firstName']}`,
      },
      {
        columnDef: 'department',
        header: 'Departamento',
        cell: (element: { [key: string]: string }) =>
          `${(element['department'] as any).name}`,
      },
      {
        columnDef: 'status',
        header: 'Estado',
        cell: (element: { [key: string]: string }) => `${element['status']}`,
      },
    ],
    body: [],
    options: [],
  };

  sub$ = new Subscription();
  loading = false;
  teacherId = 0;
  departments: Array<DepartmentItemVM> = [];
  departmentIdCtrl = new FormControl();
  statusCtrl = new FormControl();

  statusOptions = [
    { name: 'Todos', value: null },
    { name: 'Activo', value: true },
    { name: 'Inactivo', value: false },
  ];

  constructor(
    private teachersService: TeachersService,
    private tableService: TableService,
    private stateService: StateService,
    private matDialog: MatDialog,
    private userStateService: UserStateService,
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.teachersService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.sub$.add(
      this.teachersService.getData$().subscribe((data) => {
        // Filtrar profesores "por asignar" de la tabla principal también
        const filteredData = (data || []).filter(teacher => {
          const fullName = `${teacher.firstName || ''} ${teacher.lastName || ''}`.toLowerCase();
          return !fullName.includes('por asignar') && !fullName.includes('por asignar profesor');
        });

        this.data = {
          ...this.data,
          body: filteredData,
        };

        this.tableService.setData(this.data);
      })
    );

    this.sub$.add(
      this.departmentIdCtrl.valueChanges.subscribe((departmentId) => {
        this.loadTeachers(departmentId, this.statusCtrl.value);
      })
    );

    this.sub$.add(
      this.statusCtrl.valueChanges.subscribe((status) => {
        this.loadTeachers(this.departmentIdCtrl.value, status);
      })
    );

    this.loadDepartments();
    this.loadTeachers(this.userStateService.getDepartmentId());
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  loadTeachers(departmentId?: number, status?: boolean | null): void {
    const params: any = {
      schoolId: this.userStateService.getSchoolId(),
    };

    if (departmentId !== null && departmentId !== undefined) {
      params.departmentId = departmentId;
    }

    // Note: El filtrado por status se hará en el cliente ya que la API podría no soportarlo
    this.teachersService.get(params);
  }

  loadDepartments(): void {
    this.sub$.add(
      this.teachersService.getDepartaments$(
        this.userStateService.getSchoolId()
      ).subscribe((departments) => {
        this.departments = [
          {
            id: null as any,
            name: 'Todos',
            abbreviation: '',
            logo: '',
            schoolId: null as any,
            status: '',
          },
          ...departments,
        ];
      })
    );
  }

  generateList(): void {
    const filteredData = this.getFilteredData();
    const departmentName = this.departments.find(d => d.id === this.departmentIdCtrl.value)?.name || 'Todos';

    // Crear el título principal
    const title = `Entrega de cargas académicas Departamento de ${departmentName}`;

    // Crear los datos para Excel siguiendo el formato de la imagen
    const excelData = [
      // Fila 1: Título principal
      [title],
      // Fila 2: Vacía
      [''],
      // Fila 3: Encabezados de la tabla
      ['N', 'CI', 'Apellidos y Nombres', 'Firma', 'Fecha'],
      // Filas de datos
      ...filteredData.map((teacher, index) => [
        index + 1, // Número secuencial
        teacher.idDocument, // CI
        this.formatFullName(teacher), // Apellidos y Nombres
        '', // Firma (vacía)
        '' // Fecha (vacía)
      ])
    ];

    // Crear el workbook
    const wb = XLSX.utils.book_new();

    // Crear la hoja de trabajo
    const ws = XLSX.utils.aoa_to_sheet(excelData);

    // Configurar el ancho de las columnas
    ws['!cols'] = [
      { width: 5 },   // N
      { width: 15 },  // CI
      { width: 35 },  // Apellidos y Nombres
      { width: 20 },  // Firma
      { width: 15 }   // Fecha
    ];

    // Combinar celdas para el título (A1:E1)
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }
    ];

    // Estilos para el título
    if (ws['A1']) {
      ws['A1'].s = {
        font: { bold: true, size: 16 },
        alignment: { horizontal: 'center' }
      };
    }

    // Estilos para los encabezados
    ['A3', 'B3', 'C3', 'D3', 'E3'].forEach(cellRef => {
      if (ws[cellRef]) {
        ws[cellRef].s = {
          font: { bold: true },
          alignment: { horizontal: 'center' }
        };
      }
    });

    // Agregar la hoja al workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Lista Profesores');

    // Generar el archivo Excel
    const fileName = `Entrega_cargas_academicas_${departmentName.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }

  private formatFullName(teacher: TeacherItemVM): string {
    const lastName = teacher.lastName || '';
    const firstName = teacher.firstName || '';

    // Formatear apellidos: primer apellido + inicial del segundo si existe
    const lastNameParts = lastName.trim().split(/\s+/);
    let formattedLastName = lastNameParts[0] || '';

    if (lastNameParts.length > 1) {
      formattedLastName += ` ${lastNameParts[1].charAt(0).toUpperCase()}.`;
    }

    // Formatear nombres: primer nombre + inicial del segundo si existe
    const firstNameParts = firstName.trim().split(/\s+/);
    let formattedFirstName = firstNameParts[0] || '';

    if (firstNameParts.length > 1) {
      formattedFirstName += ` ${firstNameParts[1].charAt(0).toUpperCase()}.`;
    }

    // Combinar apellido formateado con nombre formateado
    return `${formattedLastName}, ${formattedFirstName}`;
  }

  private getFilteredData(): TeacherItemVM[] {
    let filteredData = [...this.data.body];

    // Filtrar profesores "por asignar" - no mostrarlos en la lista
    filteredData = filteredData.filter(teacher => {
      const fullName = `${teacher.firstName || ''} ${teacher.lastName || ''}`.toLowerCase();
      return !fullName.includes('por asignar') && !fullName.includes('por asignar profesor');
    });

    // Filtrar por estado si se seleccionó algo diferente de "Todos"
    if (this.statusCtrl.value !== null && this.statusCtrl.value !== undefined) {
      filteredData = filteredData.filter(teacher => {
        const teacherStatus = teacher.status === 'Activo' || teacher.status === true;
        return teacherStatus === this.statusCtrl.value;
      });
    }

    return filteredData;
  }

  clickAction(option: OptionAction) {
    switch (option.option.value) {
      case RowActionTeacher.update:
        this.showModal(+option.data['id']);
        break;
      case RowActionTeacher.delete:
        this.showConfirm(option.data as any);
        break;
    }
  }

  showModal(id?: number): void {
    const modal = this.matDialog.open(FormComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        id,
      },
    });
    modal.componentInstance.closed.subscribe(() => {
      modal.close();
    });
  }

  showConfirm(item: TeacherItemVM): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar profesor',
          body: `¿Está seguro que desea eliminar el profesor <strong>${item.firstName} ${item.lastName}</strong>?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.teachersService.delete(item?.id || 0);
      }
    });
  }
}
