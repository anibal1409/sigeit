import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { TableModule } from 'src/app/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { SchoolsService } from './schools.service';
import { GetSchoolsService } from './use-cases';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    SchoolsService,
    GetSchoolsService,
  ],
})
export class SchoolsModule {}
