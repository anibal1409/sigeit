import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  DomSanitizer,
  SafeResourceUrl,
} from '@angular/platform-browser';

import {
  CreateTeacherDegreeDto,
  DegreeLevel,
  ResponseSubjectDto,
  ResponseTeacherDegreeDto,
  ResponseTeacherDto,
  TeacherGradeDto,
  TranscriptPreviewDto,
} from 'dashboard-sdk';
import {
  finalize,
  startWith,
  Subscription,
} from 'rxjs';

import { DEGREE_LEVEL_OPTIONS } from '../model';
import { TeacherAcademicService } from '../teacher-academic.service';

export interface GradeIssue {
  text: string;
  /** error: probablemente mal leído o incompleto; info: solo aviso */
  level: 'error' | 'info';
}

/** Registro o edición de un título con la tabla editable de sus notas (opcionales). */
@Component({
  selector: 'app-degree-form',
  templateUrl: './degree-form.component.html',
  styleUrls: ['./degree-form.component.scss'],
})
export class DegreeFormComponent implements OnInit, OnDestroy {
  @Input() teacher!: ResponseTeacherDto;
  @Input() degree?: ResponseTeacherDegreeDto;
  /** Notas detectadas en un récord importado */
  @Input() preview?: TranscriptPreviewDto;
  /** Documento importado, para revisarlo al lado de la tabla */
  @Input() file?: File;
  @Output() closed = new EventEmitter<boolean>();

  readonly levelOptions = DEGREE_LEVEL_OPTIONS;
  loading = false;
  subjects: ResponseSubjectDto[] = [];
  warning = '';
  fileUrl?: SafeResourceUrl;
  fileKind: 'pdf' | 'image' | 'other' = 'other';
  issues: Array<Array<GradeIssue>> = [];
  onlyIssues = false;

  form = this.formBuilder.group({
    level: [DegreeLevel.Undergraduate, Validators.required],
    title: ['', Validators.required],
    institution: [''],
    graduationDate: [''],
    maxGrade: [20, [Validators.required, Validators.min(1)]],
    grades: new FormArray<FormGroup>([]),
  });

  private objectUrl?: string;
  private sub$ = new Subscription();

  constructor(
    private academicService: TeacherAcademicService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
  ) {}

  get grades(): FormArray<FormGroup> {
    return this.form.controls.grades;
  }

  get issueRows(): number {
    return this.issues.filter((row) => row.some((issue) => issue.level === 'error')).length;
  }

  ngOnInit(): void {
    this.sub$.add(this.academicService.getSubjects$().subscribe((subjects) => (this.subjects = subjects)));
    const source = this.degree ?? this.preview;
    if (source) {
      const { grades, ...fields } = source;
      this.form.patchValue(fields);
      grades.forEach((grade) => this.addGrade(grade));
    }
    this.warning = this.idDocumentWarning();
    if (this.file) {
      this.objectUrl = URL.createObjectURL(this.file);
      this.fileKind = this.file.type === 'application/pdf'
        ? 'pdf'
        : /^image\/(png|jpe?g|webp|gif)$/.test(this.file.type) ? 'image' : 'other';
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.objectUrl);
    }
    this.sub$.add(this.form.valueChanges.pipe(startWith(null)).subscribe(() => (this.issues = this.findIssues())));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    if (this.objectUrl) URL.revokeObjectURL(this.objectUrl);
  }

  addGrade(grade: Partial<TeacherGradeDto> = {}): void {
    this.grades.push(
      this.formBuilder.group({
        code: [grade.code ?? ''],
        subjectName: [grade.subjectName ?? '', Validators.required],
        period: [grade.period ?? ''],
        grade: [grade.grade ?? null, Validators.min(0)],
        remark: [grade.remark ?? ''],
        subjectId: [grade.subject?.id ?? null],
      }),
    );
  }

  removeGrade(index: number): void {
    this.grades.removeAt(index);
    this.form.markAsDirty();
  }

  hasErrors(index: number): boolean {
    return !!this.issues[index]?.some((issue) => issue.level === 'error');
  }

  issueText(index: number): string {
    return (this.issues[index] || []).map((issue) => issue.text).join(' · ');
  }

  /** Crea el título (con o sin notas) o lo actualiza reemplazando todas las notas. */
  save(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    const dto = {
      ...value,
      graduationDate: value.graduationDate || undefined,
      grades: value.grades.map(({ subjectId, ...grade }) => ({
        ...grade,
        subject: subjectId ? { id: subjectId } : undefined,
      })),
      teacher: { id: this.teacher.id },
    } as CreateTeacherDegreeDto;
    const request$ = this.degree
      ? this.academicService.updateDegree$(this.degree.id, dto)
      : this.academicService.createDegree$(dto);
    this.loading = true;
    request$.pipe(finalize(() => (this.loading = false))).subscribe(() => this.closed.emit(true));
  }

  close(): void {
    this.closed.emit(false);
  }

  private findIssues(): Array<Array<GradeIssue>> {
    const maxGrade = Number(this.form.controls.maxGrade.value) || 0;
    const rows = this.grades.getRawValue() as Array<{
      code: string;
      subjectName: string;
      period: string;
      grade: number | string | null;
      subjectId: number | null;
    }>;
    const keys = rows.map((row) => `${normalize(row.code || row.subjectName)}|${normalize(row.period)}`);
    return rows.map((row, index) => {
      const issues: Array<GradeIssue> = [];
      if (!String(row.subjectName || '').trim()) {
        issues.push({ text: 'Falta el nombre de la asignatura', level: 'error' });
      }
      const grade = row.grade === null || row.grade === '' ? null : Number(row.grade);
      if (grade !== null && (grade < 0 || (maxGrade && grade > maxGrade))) {
        issues.push({ text: `Nota fuera de la escala (0 a ${maxGrade})`, level: 'error' });
      }
      if (!String(row.period || '').trim()) {
        issues.push({ text: 'Sin período', level: 'error' });
      }
      if (keys.indexOf(keys[index]) !== index || keys.lastIndexOf(keys[index]) !== index) {
        issues.push({ text: 'Asignatura repetida en el mismo período', level: 'error' });
      }
      if (!row.subjectId) {
        issues.push({ text: 'Sin equivalencia en el pensum', level: 'info' });
      }
      return issues;
    });
  }

  private idDocumentWarning(): string {
    const teacherId = (this.teacher?.idDocument || '').replace(/\D/g, '');
    if (!this.preview?.idDocument || this.preview.idDocument === teacherId) {
      return '';
    }
    return `El récord pertenece a ${this.preview.studentName || 'otra persona'} (C.I. ${this.preview.idDocument}), no a este profesor.`;
  }
}

function normalize(text: unknown): string {
  return String(text ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
