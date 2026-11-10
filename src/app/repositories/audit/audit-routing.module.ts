import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AuditDashboardComponent } from './pages/audit-dashboard/audit-dashboard.component';
import { AuditDetailComponent } from './pages/audit-detail/audit-detail.component';
import { AuditEntityComponent } from './pages/audit-entity/audit-entity.component';

const routes: Routes = [
  { path: '', component: AuditDashboardComponent },
  { path: 'entity', component: AuditEntityComponent },
  { path: ':id', component: AuditDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditRoutingModule {}
