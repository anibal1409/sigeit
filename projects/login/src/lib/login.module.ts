import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TogglePasswordViewModule } from './toggle-password-view';

@NgModule({
  declarations: [],
  imports: [TogglePasswordViewModule, CommonModule],
  exports: [TogglePasswordViewModule],
})
export class LoginModule {}
