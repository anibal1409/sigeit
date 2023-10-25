import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AcademicChargeTeacherComponent } from './academic-charge-teacher';

const routes: Routes = [
  {
    path: '',
    component: AcademicChargeTeacherComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
