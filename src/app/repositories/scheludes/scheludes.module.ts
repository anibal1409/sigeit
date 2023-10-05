import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TableModule } from 'src/app/common';

import { SectionsModule } from '../sections/sections.module';
import { ScheludesRoutingModule } from './scheludes-routing.module';

@NgModule({
  declarations: [
    // ScheludesComponent, 
    // FormComponent, 
    // DaysSchedulesComponent, 
    // ClassroomsSchedulesComponent, 
    // SchedulesSemestersComponent, 
    // ScheduleDetailsComponent,
  ],
  imports: [
    CommonModule,
    ScheludesRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    MatAutocompleteModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    SectionsModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
  ],
  providers: [
    // SchedulesService,
    // GetSchedulesService,
    // ScheduleMemoryService,
    // CreateScheduleService,
    // RemoveScheduleService,
    // FindScheduleService,
    // UpdateScheduleService,
    // IntervalsService,
    // GetTeachersService,
    // GetClassroomsService,
    // GetDepartmentsService,
    // // GetSetcionsService,
    // ActivePeriodService,
    // GetSubjectsService,
    // GetDaysService,
    // FindSubjectService,
  ],
})
export class ScheludesModule { }
