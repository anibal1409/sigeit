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

import { TableModule } from '../../common';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SectionsService } from './sections.service';
import {
  GetDepartamentsBySchoolService,
  GetSubjectsService,
} from './use-cases';

@NgModule({
  declarations: [SectionsComponent],
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
  ],
  providers: [
    SectionsService,
    GetSubjectsService,
    GetDepartamentsBySchoolService,
  ],
})
export class SectionsModule {}
