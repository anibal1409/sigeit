import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
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
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    SectionsService,
    GetSubjectsService,
    GetDepartamentsService,
  ],
})
export class SectionsModule {}
