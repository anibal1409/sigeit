import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { StudentSchedulesComponent } from './student-schedules.component';

const routes: Routes = [
  {
    path: '',
    component: StudentSchedulesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentSchedulesRoutingModule { }
