import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SectionsService } from './sections.service';

@NgModule({
  declarations: [SectionsComponent],
  imports: [CommonModule, SectionsRoutingModule],
  providers: [SectionsService],
})
export class SectionsModule {}
