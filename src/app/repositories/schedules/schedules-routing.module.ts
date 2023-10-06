import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AcademicChargeTeacherComponent } from './academic-charge-teacher';
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
  {
    path: 'academic-charge',
    component: AcademicChargeTeacherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
