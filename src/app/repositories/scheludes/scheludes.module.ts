import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TableModule } from 'src/app/common';

import { FindPeriodService } from '../periods';
import {
  GetDepartamentsBySchoolService,
  GetSubjectsByDepartmentService,
  GetSubjectSectionsService,
} from '../sections';
import { GetTeachersService } from '../teachers';
import { FormComponent } from './form/form.component';
import { ScheludesRoutingModule } from './scheludes-routing.module';
import { ScheludesComponent } from './scheludes.component';
import { SchedulesService } from './scheludes.service';
import {
  CreateScheduleService,
  FindScheduleService,
  GetSectionsSchedulesService,
  RemoveScheduleService,
  UpdateScheduleService,
} from './use-cases';

@NgModule({
  declarations: [ScheludesComponent, FormComponent],
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
  ],
  providers: [
    SchedulesService,
    GetSubjectsByDepartmentService,
    GetDepartamentsBySchoolService,
    GetSubjectSectionsService,
    GetTeachersService,
    FindPeriodService,
    GetSectionsSchedulesService,
    CreateScheduleService,
    FindScheduleService,
    RemoveScheduleService,
    UpdateScheduleService,
  ],
})
export class ScheludesModule {}
