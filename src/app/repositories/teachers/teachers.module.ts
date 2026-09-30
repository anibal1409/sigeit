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
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  StateModule,
  TableModule,
} from 'src/app/common';

import { GetDepartmentsService } from '../departments/use-cases';
import { AcademicComponent } from './academic/academic.component';
import { DegreeFormComponent } from './degree-form/degree-form.component';
import { FormComponent } from './form/form.component';
import { TeacherMemoryService } from './memory';
import { TeacherProfileModule } from './profile/profile.module';
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
  declarations: [
    TeachersComponent,
    FormComponent,
    DegreeFormComponent,
    AcademicComponent,
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTooltipModule,
    StateModule,
    TeacherProfileModule,
  ],
  providers: [
    TeachersService,
    GetTeachersService,
    CreateTeacherService,
    FindTeacherService,
    UpdateTeacherService,
    DeleteTeacherService,
    TeacherMemoryService,
    GetDepartmentsService,
  ],
})
export class TeachersModule {}
