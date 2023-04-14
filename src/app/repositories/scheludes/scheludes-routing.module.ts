import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  SchedulesSemestersComponent,
} from './schedules-semesters/schedules-semesters.component';
import { ScheludesComponent } from './scheludes.component';

const routes: Routes = [
  { 
    path: '', 
    component: ScheludesComponent 
  },
  { 
    path: 'semesters', 
    component: SchedulesSemestersComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheludesRoutingModule {}
