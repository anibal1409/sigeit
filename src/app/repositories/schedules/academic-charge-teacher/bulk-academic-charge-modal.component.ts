import {
  Component,
  Inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { TeacherItemVM } from '../../teachers';

export interface BulkAcademicChargeModalData {
  teachers: TeacherItemVM[];
  suggestedNextOfficeCode: number;
}

export type BulkDownloadMode = 'separate' | 'zip';

export interface BulkAcademicChargeModalResult {
  officeCodeStart: number;
  letterDate: string;
  selectedTeacherIds: number[];
  downloadMode: BulkDownloadMode;
}

@Component({
  selector: 'app-bulk-academic-charge-modal',
  templateUrl: './bulk-academic-charge-modal.component.html',
  styleUrls: ['./bulk-academic-charge-modal.component.scss'],
})
export class BulkAcademicChargeModalComponent {
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<
      BulkAcademicChargeModalComponent,
      BulkAcademicChargeModalResult | undefined
    >,
    @Inject(MAT_DIALOG_DATA) public readonly data: BulkAcademicChargeModalData,
  ) {
    const controls: Record<string, unknown> = {
      officeCode: [
        data.suggestedNextOfficeCode,
        [Validators.required, Validators.min(1)],
      ],
      letterDate: [this.todayIso(), Validators.required],
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
      officeCodeStart: +(v['officeCode'] as number),
      letterDate: String(v['letterDate']),
      selectedTeacherIds,
      downloadMode: v['downloadMode'] as BulkDownloadMode,
    });
  }

  private todayIso(): string {
    const d = new Date();
    const y = d.getFullYear();
    const m = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
}
