import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { ClassroomsComponent } from './classrooms.component';
import { ClassroomsService } from './classrooms.service';
import { TableModule } from 'src/app/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { GetClassroomsService } from './use-cases/get-classrooms.service';
import { GetDepartmentsService } from '../departments';

@NgModule({
  declarations: [ClassroomsComponent],
  imports: [
    CommonModule,
    ClassroomsRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ClassroomsService, GetClassroomsService, GetDepartmentsService],
})
export class ClassroomsModule {}
