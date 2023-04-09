import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodsRoutingModule } from './periods-routing.module';
import { PeriodsComponent } from './periods.component';
import { PeriodsService } from './periods.service';
import { TableModule } from 'src/app/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { GetPeriodsService } from './use-cases';

@NgModule({
  declarations: [PeriodsComponent],
  imports: [
    CommonModule,
    PeriodsRoutingModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [PeriodsService, GetPeriodsService],
})
export class PeriodsModule {}
