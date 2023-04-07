import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { ClassroomsComponent } from './classrooms.component';
import { ClassroomsService } from './classrooms.service';

@NgModule({
  declarations: [ClassroomsComponent],
  imports: [CommonModule, ClassroomsRoutingModule],
  providers: [ClassroomsService],
})
export class ClassroomsModule {}
