import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheludesRoutingModule } from './scheludes-routing.module';
import { ScheludesComponent } from './scheludes.component';


@NgModule({
  declarations: [
    ScheludesComponent
  ],
  imports: [
    CommonModule,
    ScheludesRoutingModule
  ]
})
export class ScheludesModule { }
