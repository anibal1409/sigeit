import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StateComponent } from './state.component';

@NgModule({
  declarations: [StateComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [StateComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class StateModule {}
