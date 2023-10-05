import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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

import { IntervalsService } from '../scheludes/use-cases/intervals';
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
  UpdatePeriodService,
} from './use-cases';

@NgModule({
  declarations: [PeriodsComponent, FormComponent],
  imports: [
    CommonModule,
    PeriodsRoutingModule,
    TableModule,
    HttpClientModule,
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
  ],
})
export class PeriodsModule {}
