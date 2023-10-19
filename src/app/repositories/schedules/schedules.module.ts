import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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

import { SelectExModule } from '../../common/select-ex';
import { TableModule } from '../../common/table';
import { GetClassroomsService } from '../classrooms/use-cases';
import { GetDepartmentsService } from '../departments/use-cases';
import { ActivePeriodService } from '../periods/use-cases';
import { SectionsModule } from '../sections';
import { GetSectionsService } from '../sections/use-cases';
import { GetSubjectsService } from '../subjects/use-cases';
import { GetTeachersService } from '../teachers/use-cases';
import {
  AcademicChargeTeacherComponent,
} from './academic-charge-teacher/academic-charge-teacher.component';
import {
  ClassroomsSchedulesComponent,
} from './classrooms-schedules/classrooms-schedules.component';
import { FormComponent } from './form/form.component';
import { ScheduleMemoryService } from './memory';
import {
  PlannedSchedulesComponent,
} from './planned-schedules/planned-schedules.component';
import {
  ScheduleDetailsComponent,
} from './schedule-details/schedule-details.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { SchedulesService } from './schedules.service';
import {
  CreateScheduleService,
  DeleteScheduleService,
  FindScheduleService,
  GetDaysService,
  GetPlannedSchedulesService,
  GetSchedulesService,
  IntervalsService,
  UpdateScheduleService,
  ValidateClassroomSchedulesService,
  ValidateTeacherSchedulesService,
} from './use-cases';

@NgModule({
  declarations: [
    SchedulesComponent,
    FormComponent,
    ScheduleComponent,
    ScheduleDetailsComponent,
    ClassroomsSchedulesComponent,
    PlannedSchedulesComponent,
    AcademicChargeTeacherComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    TableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    SectionsModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    SelectExModule,
  ],
  providers: [
    SchedulesService,
    ScheduleMemoryService,
    CreateScheduleService,
    UpdateScheduleService,
    DeleteScheduleService,
    FindScheduleService,
    GetSchedulesService,
    IntervalsService,
    GetDaysService,
    ValidateClassroomSchedulesService,
    ValidateTeacherSchedulesService,
    GetPlannedSchedulesService,

    GetSectionsService,
    GetDepartmentsService,
    GetTeachersService,
    GetSubjectsService,
    ActivePeriodService,
    GetClassroomsService,
  ]
})
export class SchedulesModule { }
