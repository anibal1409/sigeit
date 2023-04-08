import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { DepartmentsService } from './departments.service';
import { TableModule } from 'src/app/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
