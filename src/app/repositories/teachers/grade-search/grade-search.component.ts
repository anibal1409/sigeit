import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import { ResponseTeacherGradeSearchDto } from 'dashboard-sdk';
import { finalize } from 'rxjs';

import {
  DEGREE_LEVEL_OPTIONS,
  gradeLabel,
  optionName,
} from '../model';
import { TeacherAcademicService } from '../teacher-academic.service';

/** Busca profesores que cursaron una asignatura (o similar) con una nota mínima. */
@Component({
  selector: 'app-grade-search',
  templateUrl: './grade-search.component.html',
  styleUrls: ['./grade-search.component.scss'],
})
export class GradeSearchComponent {
  readonly optionName = optionName;
  readonly gradeLabel = gradeLabel;
  readonly levelOptions = DEGREE_LEVEL_OPTIONS;

  form = this.formBuilder.group({
    subject: ['', [Validators.required, Validators.minLength(3)]],
    minPercent: [null as number | null, [Validators.min(0), Validators.max(100)]],
  });
  results: Array<ResponseTeacherGradeSearchDto> | null = null;
  loading = false;

  constructor(
    private academicService: TeacherAcademicService,
    private formBuilder: FormBuilder,
  ) {}

  /** Consulta la API con la asignatura y la nota mínima del formulario. */
  search(): void {
    if (this.form.invalid || this.loading) {
      return;
    }
    const { subject, minPercent } = this.form.getRawValue();
    this.loading = true;
    this.academicService
      .searchByGrade$(subject || '', minPercent ?? undefined)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((results) => (this.results = results));
  }
}
