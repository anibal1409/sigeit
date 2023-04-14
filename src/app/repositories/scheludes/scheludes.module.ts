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

import { TableModule } from 'src/app/common';

import { GetClassroomsService } from '../classrooms';
import { FindPeriodService } from '../periods';
import {
  GetDepartamentsBySchoolService,
  GetSubjectsByDepartmentService,
  GetSubjectSectionsService,
} from '../sections';
import { SectionsModule } from '../sections/sections.module';
import { FindSubjectService } from '../subjects/use-cases';
import { GetTeachersService } from '../teachers';
import {
  ClassroomsSchedulesComponent,
} from './classrooms-schedules/classrooms-schedules.component';
import {
  DaysSchedulesComponent,
} from './days-schedules/days-schedules.component';
import { FormComponent } from './form/form.component';
import { ScheludesRoutingModule } from './scheludes-routing.module';
import { ScheludesComponent } from './scheludes.component';
import { SchedulesService } from './scheludes.service';
import {
  CreateScheduleService,
  FindScheduleService,
  GetAllClassroomSchedulesService,
  GetAllDaySchedulesService,
  GetClassroomScheduleService,
  GetDaysService,
  GetSectionsSchedulesService,
  GetSubjectSchedulesService,
  GetTeacherSectionsService,
  RemoveScheduleService,
  UpdateScheduleService,
} from './use-cases';

@NgModule({
  declarations: [ScheludesComponent, FormComponent, DaysSchedulesComponent, ClassroomsSchedulesComponent],
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
  ],
  providers: [
    SchedulesService,
    GetSubjectsByDepartmentService,
    GetDepartamentsBySchoolService,
    GetSubjectSectionsService,
    GetTeachersService,
    FindPeriodService,
    GetSectionsSchedulesService,
    GetSubjectSchedulesService,
    CreateScheduleService,
    FindScheduleService,
    RemoveScheduleService,
    UpdateScheduleService,
    GetClassroomsService,
    GetDaysService,
    GetClassroomScheduleService,
    FindSubjectService,
    GetTeacherSectionsService,
    GetAllClassroomSchedulesService,
    GetAllDaySchedulesService,
  ],
})
export class ScheludesModule {}
