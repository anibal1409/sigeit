import { Injectable } from '@angular/core';
import { FindSettingService } from './use-cases';
import { MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from './settings.component';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsService {
  constructor(
    private dialog: MatDialog,
    private findSettingsService: FindSettingService
  ) {}

  open(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      hasBackdrop: true,
      disableClose: true,
    });

    (dialogRef.componentInstance as SettingsComponent).closed.subscribe(() => {
      dialogRef.close();
    });
  }

  findSettings$(): Observable<any> {
    return this.findSettingsService.exec();
  }
}
