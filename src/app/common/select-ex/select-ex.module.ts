import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { SelectExComponent } from './select-ex.component';

@NgModule({
  declarations: [
    SelectExComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [
    SelectExComponent,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class SelectExModule { }
