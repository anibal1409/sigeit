import { CommonModule } from '@angular/common';
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

import { TableModule } from '../../common';
import { GetTeachersService } from '../teachers';
import { FormComponent } from './form/form.component';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SectionsService } from './sections.service';
import {
  CreateSectionService,
  FindSectionService,
  GetDepartamentsBySchoolService,
  GetSubjectsByDepartmentService,
  GetSubjectSectionsService,
  RemoveSectionService,
  UpdateSectionService,
} from './use-cases';

@NgModule({
  declarations: [SectionsComponent, FormComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    TableModule,
    MatAutocompleteModule,
    MatSelectModule,
  ],
  providers: [
    SectionsService,
    GetSubjectsByDepartmentService,
    GetDepartamentsBySchoolService,
    GetSubjectSectionsService,
    CreateSectionService,
    GetTeachersService,
    FindSectionService,
    UpdateSectionService,
    RemoveSectionService,
  ],
})
export class SectionsModule {}
