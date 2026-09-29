import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectDemandsComponent } from './subject-demands.component';

const routes: Routes = [{ path: '', component: SubjectDemandsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectDemandsRoutingModule {}
