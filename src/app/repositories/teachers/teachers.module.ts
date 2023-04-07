import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersService } from './teachers.service';
import { TeachersComponent } from './teachers.component';

@NgModule({
  declarations: [TeachersComponent],
  imports: [CommonModule, TeachersRoutingModule],
  providers: [TeachersService],
})
export class TeachersModule {}
