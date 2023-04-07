import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheludesRoutingModule } from './scheludes-routing.module';
import { ScheludesComponent } from './scheludes.component';
import { ScheludesService } from './scheludes.service';

@NgModule({
  declarations: [ScheludesComponent],
  imports: [CommonModule, ScheludesRoutingModule],
  providers: [ScheludesService],
})
export class ScheludesModule {}
