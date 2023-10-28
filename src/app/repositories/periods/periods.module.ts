import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  StateModule,
  TableModule,
} from 'src/app/common';

import { IntervalsService } from '../schedules/use-cases';
import { FormComponent } from './form/form.component';
import { PeriodMemoryService } from './memory';
import { PeriodsRoutingModule } from './periods-routing.module';
import { PeriodsComponent } from './periods.component';
import { PeriodsService } from './periods.service';
import {
  CreatePeriodService,
  DeletePeriodService,
  FindPeriodService,
  GetPeriodsService,
  ToPlanPeriodService,
  UpdatePeriodService,
} from './use-cases';

@NgModule({
  declarations: [PeriodsComponent, FormComponent],
  imports: [
    CommonModule,
    PeriodsRoutingModule,
    TableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    StateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCheckboxModule,
  ],
  providers: [
    PeriodsService, 
    GetPeriodsService,
    CreatePeriodService,
    DeletePeriodService,
    UpdatePeriodService,
    FindPeriodService,
    PeriodMemoryService,
    IntervalsService,
    ToPlanPeriodService,
  ],
})
export class PeriodsModule {}
