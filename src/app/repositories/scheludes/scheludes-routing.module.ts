import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheludesComponent } from './scheludes.component';

const routes: Routes = [{ path: '', component: ScheludesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheludesRoutingModule {}
