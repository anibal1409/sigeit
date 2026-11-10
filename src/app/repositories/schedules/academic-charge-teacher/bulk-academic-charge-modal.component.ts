import {
  Component,
  Inject,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { TeacherItemVM } from '../../teachers';

/** Documento que genera el modal masivo. */
export type BulkDocumentKind = 'academic_charge' | 'c1';

export interface BulkAcademicChargeModalData {
  teachers: TeacherItemVM[];
  /** Si el departamento pide el número inicial en la generación masiva */
  askOfficeNumber: boolean;
  suggestedNextOfficeCode: number;
  officePrefix: string;
  /** Año del último oficio emitido: la fecha no puede ser anterior (la API responde 400). */
  officeYear: number;
  /** Por defecto carga académica; el C1 no usa número de oficio. */
  documentKind?: BulkDocumentKind;
}

export type BulkDownloadMode = 'separate' | 'zip';

export interface BulkAcademicChargeModalResult {
  /** Solo si se pide el número; si no, el backend asigna los siguientes. */
  officeCodeStart: number | null;
  letterDate: string;
  selectedTeacherIds: number[];
  downloadMode: BulkDownloadMode;
  documentKind: BulkDocumentKind;
}

/**
 * El año del oficio debe estar entre el del último oficio emitido y el actual: la API
 * rechaza con 400 cualquier otro, porque el correlativo se reinicia cada año.
 */
function letterYearValidator(lastYear: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const year = +String(control.value || '').slice(0, 4);
    const currentYear = new Date().getFullYear();
    return year && (year > currentYear || (lastYear && year < lastYear)) ? { letterYear: true } : null;
  };
}

@Component({
  selector: 'app-bulk-academic-charge-modal',
  templateUrl: './bulk-academic-charge-modal.component.html',
  styleUrls: ['./bulk-academic-charge-modal.component.scss'],
})
export class BulkAcademicChargeModalComponent {
  form: FormGroup;
  /** true cuando se generan formularios C1 (sin oficio). */
  readonly isC1: boolean;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<
      BulkAcademicChargeModalComponent,
      BulkAcademicChargeModalResult | undefined
    >,
    @Inject(MAT_DIALOG_DATA) public readonly data: BulkAcademicChargeModalData,
  ) {
    this.isC1 = data.documentKind === 'c1';
    const askOffice = !this.isC1 && data.askOfficeNumber;
    const controls: Record<string, unknown> = {
      officeCode: [
        data.suggestedNextOfficeCode,
        // La API exige que el inicio supere al último número emitido.
        askOffice ? [Validators.required, Validators.min(data.suggestedNextOfficeCode)] : [],
      ],
      letterDate: [
        this.todayIso(),
        this.isC1 ? [] : [Validators.required, letterYearValidator(data.officeYear)],
      ],
      downloadMode: ['separate' as BulkDownloadMode],
    };
    data.teachers.forEach((t) => {
      const id = t.id;
      if (id != null) {
        controls[`sel_${id}`] = [true];
      }
    });
    this.form = this.fb.group(controls);
  }

  get teachersWithId(): TeacherItemVM[] {
    return this.data.teachers.filter((t) => t.id != null);
  }

  setAllSelected(selected: boolean): void {
    this.teachersWithId.forEach((t) => {
      this.form.get(`sel_${t.id}`)?.setValue(selected);
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const v = this.form.getRawValue() as Record<string, unknown>;
    const selectedTeacherIds = this.teachersWithId
      .filter((t) => v[`sel_${t.id}`] === true)
      .map((t) => t.id as number);
    if (!selectedTeacherIds.length) {
      return;
    }
    this.dialogRef.close({
      officeCodeStart: !this.isC1 && this.data.askOfficeNumber ? +(v['officeCode'] as number) : null,
      letterDate: String(v['letterDate'] || this.todayIso()),
      selectedTeacherIds,
      downloadMode: v['downloadMode'] as BulkDownloadMode,
      documentKind: this.isC1 ? 'c1' : 'academic_charge',
    });
  }

  /** Código de ejemplo con el prefijo y el año del oficio, p. ej. DIS-005/2026. */
  get officeCodeExample(): string {
    const number = String(this.form.get('officeCode')?.value || 1).padStart(3, '0');
    const year = String(this.form.get('letterDate')?.value || '').slice(0, 4);
    return `${this.data.officePrefix}-${number}/${year}`;
  }

  private todayIso(): string {
    const d = new Date();
    const y = d.getFullYear();
    const m = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
}
