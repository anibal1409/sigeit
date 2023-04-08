import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SectionsService } from './sections.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'src/app/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SectionsComponent],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [SectionsService],
})
export class SectionsModule {}
