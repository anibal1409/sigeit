import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TogglePasswordViewComponent } from './toggle-password-view.component';
import { TogglePasswordViewDirective } from './toggle-password-view.directive';

@NgModule({
  declarations: [TogglePasswordViewDirective, TogglePasswordViewComponent],
  imports: [CommonModule],
  exports: [TogglePasswordViewDirective],
})
export class TogglePasswordViewModule {}
