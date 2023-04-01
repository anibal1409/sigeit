import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { SchoolsService } from './schools.service';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [CommonModule, SchoolsRoutingModule],
  providers: [SchoolsService],
})
export class SchoolsModule {}
