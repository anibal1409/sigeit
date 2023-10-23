import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { FinishedComponent } from './finished';
import { ScheduleComponent } from './schedule';
import { StudentSchedulesComponent } from './student-schedules.component';

const routes: Routes = [
  {
    path: '',
    component: StudentSchedulesComponent,
  },
  {
    path: 'finished',
    component: FinishedComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentSchedulesRoutingModule { }
