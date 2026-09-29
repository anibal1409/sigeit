import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { NgChartsModule } from 'ng2-charts';

import { SubjectDemandPanelComponent } from './subject-demand-panel/subject-demand-panel.component';

@NgModule({
  declarations: [SubjectDemandPanelComponent],
  imports: [CommonModule, MatIconModule, NgChartsModule],
  exports: [SubjectDemandPanelComponent],
})
export class SubjectDemandModule {}
