import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodsRoutingModule } from './periods-routing.module';
import { PeriodsComponent } from './periods.component';
import { PeriodsService } from './periods.service';

@NgModule({
  declarations: [PeriodsComponent],
  imports: [CommonModule, PeriodsRoutingModule],
  providers: [PeriodsService],
})
export class PeriodsModule {}
