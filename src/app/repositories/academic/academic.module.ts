import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { StateModule } from '../../common/state';
import { PeriodsModule } from '../periods';
import { SchedulesModule } from '../schedules';
import { SectionsModule } from '../sections';
import {
  AcademicChargeTeacherComponent,
  AcademicChargeTeacherService,
} from './academic-charge-teacher';
import { AcademicRoutingModule } from './academic-routing.module';

@NgModule({
  declarations: [AcademicChargeTeacherComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    PeriodsModule,
    SchedulesModule,
    StateModule,
    SectionsModule,
  ],
  providers: [
    AcademicChargeTeacherService,
  ],
})
export class AcademicModule { }
