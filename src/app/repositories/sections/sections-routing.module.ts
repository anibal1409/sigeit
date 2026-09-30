import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './sections.component';
import { SectionsManageComponent } from './sections-manage';
import { SectionsOverviewComponent } from './sections-overview';
import { SectionsTabsComponent } from './sections-tabs/sections-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: SectionsTabsComponent,
    children: [
      { path: '', component: SectionsComponent },
      { path: 'manage', component: SectionsManageComponent },
      { path: 'overview', component: SectionsOverviewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionsRoutingModule {}
