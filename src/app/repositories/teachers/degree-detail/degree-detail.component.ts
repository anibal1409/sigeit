import {
  Component,
  Input,
} from '@angular/core';

import {
  GradeStatus,
  ResponseTeacherDegreeDto,
} from 'dashboard-sdk';

import { gradeLabel } from '../model';

const STATUS_LABELS: Record<GradeStatus, string> = {
  APPROVED: 'Aprobada',
  FAILED: 'Reprobada',
  WITHDRAWN: 'Retirada',
  IN_PROGRESS: 'En curso',
};

/** Resumen, períodos y notas de un título (solo lectura). */
@Component({
  selector: 'app-degree-detail',
  templateUrl: './degree-detail.component.html',
  styleUrls: ['./degree-detail.component.scss'],
})
export class DegreeDetailComponent {
  @Input({ required: true }) degree!: ResponseTeacherDegreeDto;

  readonly gradeLabel = gradeLabel;
  readonly statusLabels = STATUS_LABELS;

  get counts(): Array<{ label: string; value: number }> {
    const summary = this.degree.summary;
    return [
      { label: 'Períodos', value: summary.periods },
      { label: 'Asignaturas', value: summary.subjects },
      { label: 'Aprobadas', value: summary.approved },
      { label: 'Reprobadas', value: summary.failed },
      { label: 'Retiradas', value: summary.withdrawn },
      { label: 'En curso', value: summary.inProgress },
      { label: 'Repetidas', value: summary.repeated },
      { label: 'Equivalencias', value: summary.equivalences },
    ];
  }

  hasValue(value?: number | null): boolean {
    return value !== null && value !== undefined;
  }
}
