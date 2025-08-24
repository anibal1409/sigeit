import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections.component';
import { SectionsOverviewComponent } from './sections-overview';

const routes: Routes = [
  { path: '', component: SectionsComponent },
  { path: 'overview', component: SectionsOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule {}
