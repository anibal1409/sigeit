import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {
  StateModule,
  TableModule,
} from 'src/app/common';

import { GetCareersService } from '../careers';
import { FormComponent } from './form/form.component';
import { SubjectMemoryService } from './memory';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectsService } from './subjects.service';
import {
  CreateSubjectService,
  DeleteSubjectService,
  FindSubjectService,
  GetSubjectsService,
  UpdateSubjectService,
} from './use-cases';

@NgModule({
  declarations: [SubjectsComponent, FormComponent],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
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
    StateModule,
    MatGridListModule,
  ],
  providers: [
    SubjectsService,
    GetSubjectsService,
    SubjectMemoryService,
    CreateSubjectService,
    DeleteSubjectService,
    UpdateSubjectService,
    FindSubjectService,
    GetCareersService,
  ],
})
export class SubjectsModule {}
