import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  SelectExModule,
  TableModule,
} from '../../common';
import { ActivePeriodService } from '../periods';
import { GetTeachersService } from '../teachers';
import { FormComponent } from './form/form.component';
import { SectionMemoryService } from './memory';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SectionsService } from './sections.service';
import {
  CreateSectionService,
  FindSectionService,
  GetSetcionsService,
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
    MatTooltipModule,
    MatCheckboxModule,
    SelectExModule,
  ],
  providers: [
    SectionsService,
    CreateSectionService,
    GetTeachersService,
    FindSectionService,
    UpdateSectionService,
    RemoveSectionService,
    GetSetcionsService,
    SectionMemoryService,
    ActivePeriodService,
  ],
})
export class SectionsModule {}
