import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { TableModule } from 'src/app/common';

import { FormComponent } from './form/form.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeachersService } from './teachers.service';
import {
  CreateTeacherService,
  DeleteTeacherService,
  FindTeacherService,
  GetTeachersService,
  UpdateTeacherService,
} from './use-cases';

@NgModule({
  declarations: [TeachersComponent, FormComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
  providers: [
    TeachersService, 
    GetTeachersService,
    CreateTeacherService,
    FindTeacherService,
    UpdateTeacherService,
    DeleteTeacherService,
  ],
})
export class TeachersModule {}
