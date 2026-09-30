import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import {
  CreateTeacherDegreeDto,
  DegreeLevel,
  ResponseTeacherDegreeDto,
  TeacherGradeDto,
  TranscriptPreviewDto,
} from 'dashboard-sdk';
import { finalize } from 'rxjs';

import { DEGREE_LEVEL_OPTIONS } from '../model';
import { TeacherAcademicService } from '../teacher-academic.service';

/** Datos del diálogo: título a editar, o vista previa de un récord importado. */
export interface DegreeFormData {
  teacherId: number;
  degree?: ResponseTeacherDegreeDto;
  preview?: TranscriptPreviewDto;
  warning?: string;
}

/** Registro o edición de un título con la tabla editable de sus notas. */
@Component({
  selector: 'app-degree-form',
  templateUrl: './degree-form.component.html',
  styleUrls: ['./degree-form.component.scss'],
})
export class DegreeFormComponent implements OnInit {
  readonly levelOptions = DEGREE_LEVEL_OPTIONS;
  loading = false;

  form = this.formBuilder.group({
    level: [DegreeLevel.Undergraduate, Validators.required],
    title: ['', Validators.required],
    institution: [''],
    graduationDate: [''],
    maxGrade: [20, [Validators.required, Validators.min(1)]],
    grades: new FormArray<FormGroup>([]),
  });

  constructor(
    private academicService: TeacherAcademicService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DegreeFormComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: DegreeFormData,
  ) {}

  /** Filas editables de la tabla de notas. */
  get grades(): FormArray<FormGroup> {
    return this.form.controls.grades;
  }

  /** Carga el título a editar o la vista previa importada; si no hay ninguno, deja una fila vacía. */
  ngOnInit(): void {
    const source = this.data.degree ?? this.data.preview;
    if (!source) {
      this.addGrade();
      return;
    }
    const { grades, ...fields } = source;
    this.form.patchValue(fields);
    grades.forEach((grade) => this.addGrade(grade));
  }

  /** Agrega una fila de nota, vacía o con los datos indicados. */
  addGrade(grade: Partial<TeacherGradeDto> = {}): void {
    this.grades.push(
      this.formBuilder.group({
        code: [grade.code ?? ''],
        subjectName: [grade.subjectName ?? '', Validators.required],
        period: [grade.period ?? ''],
        grade: [grade.grade ?? null, Validators.min(0)],
        remark: [grade.remark ?? ''],
      }),
    );
  }

  /** Quita una fila de nota. */
  removeGrade(index: number): void {
    this.grades.removeAt(index);
    this.form.markAsDirty();
  }

  /** Crea el título (con sus notas) o lo actualiza reemplazando todas las notas. */
  save(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    const dto = {
      ...value,
      graduationDate: value.graduationDate || undefined,
      teacher: { id: this.data.teacherId },
    } as CreateTeacherDegreeDto;
    const request$ = this.data.degree
      ? this.academicService.updateDegree$(this.data.degree.id, dto)
      : this.academicService.createDegree$(dto);
    this.loading = true;
    request$
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(() => this.dialogRef.close(true));
  }

  /** Cierra sin guardar. */
  close(): void {
    this.dialogRef.close(false);
  }
}
