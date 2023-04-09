import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { CareersService } from './careers.service';
import { TableModule } from 'src/app/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GetCareersService } from './use-cases/get-careers.service';
import { GetDepartmentsService } from '../departments';

@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    CareersRoutingModule,
    TableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [CareersService, GetCareersService, GetDepartmentsService],
})
export class CareersModule {}
