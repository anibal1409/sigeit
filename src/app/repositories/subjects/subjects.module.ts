import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { SubjectsService } from './subjects.service';

@NgModule({
  declarations: [SubjectsComponent],
  imports: [CommonModule, SubjectsRoutingModule],
  providers: [SubjectsService],
})
export class SubjectsModule {}
