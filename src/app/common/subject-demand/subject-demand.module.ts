import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { SubjectDemandDialogComponent } from './subject-demand-dialog/subject-demand-dialog.component';
import { SubjectDemandPanelComponent } from './subject-demand-panel/subject-demand-panel.component';

@NgModule({
  declarations: [SubjectDemandPanelComponent, SubjectDemandDialogComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDialogModule],
  exports: [SubjectDemandPanelComponent],
})
export class SubjectDemandModule {}
