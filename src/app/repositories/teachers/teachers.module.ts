import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersService } from './teachers.service';
import { TeachersComponent } from './teachers.component';
import { TableModule } from 'src/app/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { GetTeachersService } from './use-cases/get-teachers.service';
import { GetDepartmentsService } from '../departments';

@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [TeachersService, GetTeachersService, GetDepartmentsService],
})
export class TeachersModule {}
