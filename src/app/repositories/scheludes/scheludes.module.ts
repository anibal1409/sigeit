import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheludesRoutingModule } from './scheludes-routing.module';
import { ScheludesComponent } from './scheludes.component';
import { ScheludesService } from './scheludes.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'src/app/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ScheludesComponent],
  imports: [
    CommonModule,
    ScheludesRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [ScheludesService],
})
export class ScheludesModule {}
