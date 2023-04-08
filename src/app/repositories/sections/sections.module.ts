import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SectionsService } from './sections.service';
import {
  GetDepartamentsService,
  GetSubjectsService,
} from './use-cases';

@NgModule({
  declarations: [SectionsComponent],
  imports: [
    CommonModule, 
    SectionsRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
  ],
  providers: [
    SectionsService,
    GetSubjectsService,
    GetDepartamentsService,
  ],
})
export class SectionsModule {}
