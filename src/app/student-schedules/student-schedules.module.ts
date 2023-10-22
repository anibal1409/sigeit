import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SelectExModule } from '../common';
import { CareersModule } from '../repositories/careers';
import { PeriodsModule } from '../repositories/periods';
import { SchedulesModule } from '../repositories/schedules';
import { SubjectsModule } from '../repositories/subjects';
import { CardSectionSchedulesComponent } from './card-section-schedules';
import { CardSubjectSchedulesComponent } from './card-subject-schedules';
import {
  StudentSchedulesRoutingModule,
} from './student-schedules-routing.module';
import { StudentSchedulesComponent } from './student-schedules.component';
import { StudentSchedulesService } from './student-schedules.service';
import { GetSchedulesService } from './use-cases';

@NgModule({
  declarations: [
    StudentSchedulesComponent,
    CardSectionSchedulesComponent,
    CardSubjectSchedulesComponent
  ],
  imports: [
    CommonModule,
    StudentSchedulesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatTooltipModule,
    SelectExModule,
    PeriodsModule,
    CareersModule,
    SubjectsModule,
    SchedulesModule,
    MatListModule,
    MatExpansionModule,
  ],
  providers: [
    StudentSchedulesService,
    GetSchedulesService,
  ]
})
export class StudentSchedulesModule { }
