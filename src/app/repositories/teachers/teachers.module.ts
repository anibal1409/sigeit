import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import {
  StateModule,
  TableModule,
} from 'src/app/common';

import { GetDepartmentsService } from '../departments/use-cases';
import { DegreeFormComponent } from './degree-form/degree-form.component';
import { FormComponent } from './form/form.component';
import { GradeSearchComponent } from './grade-search/grade-search.component';
import { TeacherMemoryService } from './memory';
import { ProfileComponent } from './profile/profile.component';
import { TeacherAcademicService } from './teacher-academic.service';
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
    ProfileComponent,
    DegreeFormComponent,
    GradeSearchComponent,
  ],
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
    MatTabsModule,
    MatExpansionModule,
    StateModule,
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
    TeacherAcademicService,
  ],
})
export class TeachersModule {}
