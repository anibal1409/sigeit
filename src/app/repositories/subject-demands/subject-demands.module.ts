import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ImportDemandComponent } from './import-demand/import-demand.component';
import { SubjectDemandsRoutingModule } from './subject-demands-routing.module';
import { SubjectDemandsComponent } from './subject-demands.component';
import { SubjectDemandsService } from './subject-demands.service';

@NgModule({
  declarations: [SubjectDemandsComponent, ImportDemandComponent],
  imports: [
    CommonModule,
    SubjectDemandsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [SubjectDemandsService],
})
export class SubjectDemandsModule {}
