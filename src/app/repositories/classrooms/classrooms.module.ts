import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  SelectExModule,
  StateModule,
  TableModule,
} from 'src/app/common';

import { GetDepartmentsService } from '../departments';
import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { ClassroomsComponent } from './classrooms.component';
import { ClassroomsService } from './classrooms.service';
import { FormComponent } from './form/form.component';
import { ClassroomsMemoryService } from './memory';
import {
  CreateClassroomService,
  DeleteClassroomService,
  FindClassroomService,
  GetClassroomsService,
  UpdateClassroomService,
} from './use-cases';

@NgModule({
  declarations: [ClassroomsComponent, FormComponent],
  imports: [
    CommonModule,
    ClassroomsRoutingModule,
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
    SelectExModule,
  ],
  providers: [
    ClassroomsService, 
    GetClassroomsService, 
    GetDepartmentsService,
    ClassroomsMemoryService,
    UpdateClassroomService,
    CreateClassroomService,
    FindClassroomService,
    DeleteClassroomService,
  ],
})
export class ClassroomsModule {}
