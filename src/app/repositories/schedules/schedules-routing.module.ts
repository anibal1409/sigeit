import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { PlannedSchedulesComponent } from './planned-schedules';
import { SchedulesComponent } from './schedules.component';

const routes: Routes = [
  {
  path: '',
  component: SchedulesComponent,
  },
  { 
    path: 'planned', 
    component: PlannedSchedulesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
