import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SEMESTERS, SemesterVM } from '../../../../common/semester';

export interface ReportConfig {
  reportType: 'teacher' | 'semester' | 'shift';
  selectedFields: string[];
  selectedSemesters: number[];
  selectedTeachers: string[];
  shiftType: 'morning' | 'afternoon' | 'both';
}

export interface FieldOption {
  field: string;
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-report-config-modal',
  templateUrl: './report-config-modal.component.html',
  styleUrls: ['./report-config-modal.component.scss']
})
export class ReportConfigModalComponent implements OnInit {
  form: FormGroup;
  semesters: Array<SemesterVM> = SEMESTERS;

  fieldOptions: FieldOption[] = [
    { field: 'code', label: 'Código', selected: true },
    { field: 'name', label: 'Asignatura', selected: true },
    { field: 'sectionName', label: 'Sección', selected: true },
    { field: 'dayName', label: 'Día', selected: true },
    { field: 'classroomName', label: 'Aula', selected: true },
    { field: 'start', label: 'Desde', selected: true },
    { field: 'end', label: 'Hasta', selected: true },
    { field: 'documentTeacher', label: 'Documento Profesor', selected: true },
    { field: 'teacherName', label: 'Nombre Profesor', selected: true },
    { field: 'capacity', label: 'Capacidad', selected: true },
  ];

  reportTypes = [
    { value: 'teacher', label: 'Por Profesor' },
    { value: 'semester', label: 'Por Semestre' },
    { value: 'shift', label: 'Por Turno (Mañana/Tarde)' }
  ];

  shiftTypes = [
    { value: 'morning', label: 'Solo Mañana (antes de 12:00 PM)' },
    { value: 'afternoon', label: 'Solo Tarde (12:00 PM en adelante)' },
    { value: 'both', label: 'Ambos turnos (clasificación completa)' }
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ReportConfigModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      reportType: ['semester', Validators.required],
      selectedFields: [[]],
      selectedSemesters: [[]],
      selectedTeachers: [[]],
      shiftType: ['both']
    });
  }

  ngOnInit(): void {
    // Inicializar campos seleccionados con todos los campos
    this.form.patchValue({
      selectedFields: this.fieldOptions.filter(f => f.selected).map(f => f.field)
    });

    // Inicializar semestres seleccionados con todos
    this.form.patchValue({
      selectedSemesters: this.semesters.map(s => s.id)
    });

    // Escuchar cambios en el tipo de reporte
    this.form.get('reportType')?.valueChanges.subscribe(reportType => {
      this.updateFormValidators(reportType);
    });
  }

  private updateFormValidators(reportType: string): void {
    const semesterControl = this.form.get('selectedSemesters');
    const teacherControl = this.form.get('selectedTeachers');
    const shiftControl = this.form.get('shiftType');

    // Limpiar validadores previos
    semesterControl?.clearValidators();
    teacherControl?.clearValidators();
    shiftControl?.clearValidators();

    // Agregar validadores según el tipo de reporte
    if (reportType === 'semester') {
      semesterControl?.setValidators([Validators.required]);
    } else if (reportType === 'teacher') {
      // Para reporte por profesor, inicializar con todos los profesores disponibles
      const allTeachers = this.data?.availableTeachers?.map((t: any) => t.document) || [];
      this.form.patchValue({ selectedTeachers: allTeachers });
      teacherControl?.setValidators([Validators.required]);
    } else if (reportType === 'shift') {
      shiftControl?.setValidators([Validators.required]);
    }

    // Actualizar validadores
    semesterControl?.updateValueAndValidity();
    teacherControl?.updateValueAndValidity();
    shiftControl?.updateValueAndValidity();
  }

  onFieldToggle(field: string): void {
    const selectedFields = this.form.get('selectedFields')?.value || [];
    const index = selectedFields.indexOf(field);

    if (index > -1) {
      selectedFields.splice(index, 1);
    } else {
      selectedFields.push(field);
    }

    this.form.patchValue({ selectedFields });
  }

  onSemesterToggle(semesterId: number): void {
    const selectedSemesters = this.form.get('selectedSemesters')?.value || [];
    const index = selectedSemesters.indexOf(semesterId);

    if (index > -1) {
      selectedSemesters.splice(index, 1);
    } else {
      selectedSemesters.push(semesterId);
    }

    this.form.patchValue({ selectedSemesters });
  }

  onSelectAllFields(): void {
    const allFields = this.fieldOptions.map(f => f.field);
    this.form.patchValue({ selectedFields: allFields });
  }

  onDeselectAllFields(): void {
    this.form.patchValue({ selectedFields: [] });
  }

  onSelectAllSemesters(): void {
    const allSemesters = this.semesters.map(s => s.id);
    this.form.patchValue({ selectedSemesters: allSemesters });
  }

  onDeselectAllSemesters(): void {
    this.form.patchValue({ selectedSemesters: [] });
  }

  isFieldSelected(field: string): boolean {
    return this.form.get('selectedFields')?.value?.includes(field) || false;
  }

  isSemesterSelected(semesterId: number): boolean {
    return this.form.get('selectedSemesters')?.value?.includes(semesterId) || false;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.form.valid) {
      const config: ReportConfig = {
        reportType: this.form.get('reportType')?.value,
        selectedFields: this.form.get('selectedFields')?.value,
        selectedSemesters: this.form.get('selectedSemesters')?.value,
        selectedTeachers: this.form.get('selectedTeachers')?.value,
        shiftType: this.form.get('shiftType')?.value
      };

      this.dialogRef.close(config);
    }
  }

  get selectedReportType(): string {
    return this.form.get('reportType')?.value;
  }
}
