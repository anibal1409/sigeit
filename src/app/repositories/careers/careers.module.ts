import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { CareersService } from './careers.service';
import { TableModule } from 'src/app/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  providers: [CareersService],
})
export class CareersModule {}
