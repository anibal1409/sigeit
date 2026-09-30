import {
  Component,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SubjectDemandDialogData {
  periodId: number;
  subjectId: number;
  subjectName: string;
  /** Cupo de las secciones activas */
  offered: number;
}

/** Demanda de una asignatura y la parte que se quiere atender. */
@Component({
  selector: 'app-subject-demand-dialog',
  templateUrl: './subject-demand-dialog.component.html',
  styleUrls: ['./subject-demand-dialog.component.scss'],
})
export class SubjectDemandDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: SubjectDemandDialogData) {}
}
