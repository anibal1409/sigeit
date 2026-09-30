import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

import {
  ResponseSubjectHistoryDto,
  ResponseTeacherDegreeDto,
  TranscriptPreviewDto,
} from 'dashboard-sdk';
import {
  finalize,
  Subscription,
} from 'rxjs';
import {
  ConfirmModalComponent,
  uploadSizeError,
} from 'src/app/common';

import {
  DegreeFormComponent,
  DegreeFormData,
} from '../degree-form/degree-form.component';
import {
  CATEGORY_OPTIONS,
  DEDICATION_OPTIONS,
  DEGREE_LEVEL_OPTIONS,
  EMPLOYMENT_STATUS_OPTIONS,
  gradeLabel,
  HIRING_EVALUATION_OPTIONS,
  optionName,
  TeacherItemVM,
} from '../model';
import { TeacherAcademicService } from '../teacher-academic.service';

/** Perfil académico del profesor: datos del escalafón, historial de asignaturas y títulos. */
@Component({
  selector: 'app-teacher-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  readonly optionName = optionName;
  readonly gradeLabel = gradeLabel;
  readonly categoryOptions = CATEGORY_OPTIONS;
  readonly employmentStatusOptions = EMPLOYMENT_STATUS_OPTIONS;
  readonly dedicationOptions = DEDICATION_OPTIONS;
  readonly hiringEvaluationOptions = HIRING_EVALUATION_OPTIONS;
  readonly levelOptions = DEGREE_LEVEL_OPTIONS;

  history: Array<ResponseSubjectHistoryDto> = [];
  degrees: Array<ResponseTeacherDegreeDto> = [];
  loading = false;
  error = '';
  sub$ = new Subscription();

  constructor(
    private academicService: TeacherAcademicService,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { teacher: TeacherItemVM },
  ) {}

  /** Carga el historial de asignaturas y los títulos del profesor. */
  ngOnInit(): void {
    const id = this.data.teacher.id || 0;
    this.sub$.add(
      this.academicService.getSubjectsHistory$(id).subscribe((history) => (this.history = history)),
    );
    this.loadDegrees();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  /** Recarga los títulos del profesor con sus notas. */
  loadDegrees(): void {
    this.sub$.add(
      this.academicService
        .getDegrees$(this.data.teacher.id || 0)
        .subscribe((degrees) => (this.degrees = degrees)),
    );
  }

  /** Abre el formulario de título; al guardar recarga la lista. */
  openDegreeForm(data: Omit<DegreeFormData, 'teacherId'> = {}): void {
    const dialogRef = this.matDialog.open(DegreeFormComponent, {
      data: { teacherId: this.data.teacher.id, ...data },
      width: '64rem',
      maxWidth: '95vw',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((saved) => saved && this.loadDegrees());
  }

  /** Lee el PDF seleccionado y abre el formulario con las notas extraídas. */
  importTranscript(input: HTMLInputElement): void {
    const file = input.files?.[0];
    input.value = '';
    this.error = uploadSizeError(file);
    if (!file || this.error) {
      return;
    }
    this.loading = true;
    this.academicService
      .parseTranscript$(file)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((preview) =>
        this.openDegreeForm({ preview, warning: this.idDocumentWarning(preview) }),
      );
  }

  /** Pide confirmación y elimina el título con sus notas. */
  deleteDegree(degree: ResponseTeacherDegreeDto): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Eliminar título',
          body: `¿Está seguro que desea eliminar el título <strong>${degree.title}</strong> y sus notas?`,
        },
      },
      hasBackdrop: true,
      disableClose: true,
    });
    dialogRef.componentInstance.closed.subscribe((confirmed: boolean) => {
      dialogRef.close();
      if (confirmed) {
        this.academicService.deleteDegree$(degree.id).subscribe(() => this.loadDegrees());
      }
    });
  }

  /** Advierte si la cédula del récord no coincide con la del profesor. */
  private idDocumentWarning(preview: TranscriptPreviewDto): string | undefined {
    const teacherId = this.data.teacher.idDocument.replace(/\D/g, '');
    if (!preview.idDocument || preview.idDocument === teacherId) {
      return undefined;
    }
    return `El récord pertenece a ${preview.studentName || 'otra persona'} (C.I. ${preview.idDocument}), no a este profesor.`;
  }
}
