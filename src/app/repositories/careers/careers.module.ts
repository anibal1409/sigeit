import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { CareersService } from './careers.service';

@NgModule({
  declarations: [CareersComponent],
  imports: [CommonModule, CareersRoutingModule],
  providers: [CareersService],
})
export class CareersModule {}
