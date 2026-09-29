import {
  Component,
  Inject,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { ImportSubjectDemandResultDto } from 'dashboard-sdk';
import { finalize } from 'rxjs';

import { SubjectDemandStoreService } from '../../../common/subject-demand';
import { SubjectDemandsService } from '../subject-demands.service';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

@Component({
  selector: 'app-import-demand',
  templateUrl: './import-demand.component.html',
  styleUrls: ['./import-demand.component.scss'],
})
export class ImportDemandComponent {
  file: File | null = null;
  fileError = '';
  result: ImportSubjectDemandResultDto | null = null;
  loading = false;

  constructor(
    private subjectDemandsService: SubjectDemandsService,
    private subjectDemandStore: SubjectDemandStoreService,
    private dialogRef: MatDialogRef<ImportDemandComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: { periodId: number; periodName: string },
  ) {}

  selectFile(input: HTMLInputElement): void {
    const file = input.files?.[0] ?? null;
    input.value = '';
    this.result = null;
    this.fileError = file && file.size > MAX_FILE_SIZE ? 'El archivo supera el máximo de 5 MB.' : '';
    this.file = this.fileError ? null : file;
  }

  import(): void {
    if (!this.file || this.loading) {
      return;
    }
    this.loading = true;
    this.subjectDemandsService
      .import$(this.data.periodId, this.file)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((result) => {
        this.subjectDemandStore.invalidate(this.data.periodId);
        this.result = result;
        this.file = null;
      });
  }

  close(): void {
    this.dialogRef.close(!!this.result);
  }
}
