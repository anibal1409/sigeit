import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  StateModule,
  TableModule,
} from 'src/app/common';

import { GetDepartmentsService } from '../departments';
import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { CareersService } from './careers.service';
import { FormComponent } from './form/form.component';
import { CareerMemoryService } from './memory';
import {
  CreateCareerService,
  DeleteCareerService,
  FindCareerService,
  GetCareersService,
  UpdateCareerService,
} from './use-cases';

@NgModule({
  declarations: [CareersComponent, FormComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    TableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    StateModule,
    MatSelectModule,
  ],
  providers: [
    CareersService, 
    GetDepartmentsService,
    CreateCareerService,
    UpdateCareerService,
    DeleteCareerService,
    GetCareersService,
    FindCareerService,
    CareerMemoryService,
  ],
})
export class CareersModule {}
