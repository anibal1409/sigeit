import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { TableModule } from 'src/app/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsService } from './departments.service';
import { GetDepartmentsService } from './use-cases';

@NgModule({
  declarations: [DepartmentsComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    HttpClientModule,
    TableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    DepartmentsService,
    GetDepartmentsService,
  ],
})
export class DepartmentsModule {}
