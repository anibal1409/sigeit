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
  TableModule,
} from 'src/app/common';

import { StateModule } from '../../common/state';
import { GetSchoolsService } from '../schools/use-cases/get-schools';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsService } from './departments.service';
import { FormComponent } from './form/form.component';
import { DepartmentsMemoryService } from './memory';
import {
  CreateDepartmentService,
  DeleteDepartmentService,
  FindDepartmentService,
  GetDepartmentsService,
  UpdateDepartmentService,
} from './use-cases';

@NgModule({
  declarations: [DepartmentsComponent, FormComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    HttpClientModule,
    TableModule,
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
    DepartmentsService,
    GetDepartmentsService,
    DepartmentsMemoryService,
    CreateDepartmentService,
    UpdateDepartmentService,
    DeleteDepartmentService,
    FindDepartmentService,
    GetSchoolsService,
  ],
})
export class DepartmentsModule {}
