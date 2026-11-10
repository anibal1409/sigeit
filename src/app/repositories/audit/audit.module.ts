import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { StateModule } from '../../common/state';
import { AuditChangesViewerComponent } from './components/audit-changes-viewer/audit-changes-viewer.component';
import { AuditChartsComponent } from './components/audit-charts/audit-charts.component';
import { AuditFiltersFormComponent } from './components/audit-filters-form/audit-filters-form.component';
import { AuditKpiRowComponent } from './components/audit-kpi-row/audit-kpi-row.component';
import { AuditLogsTableComponent } from './components/audit-logs-table/audit-logs-table.component';
import { AuditRoutingModule } from './audit-routing.module';
import { AuditDashboardComponent } from './pages/audit-dashboard/audit-dashboard.component';
import { AuditDetailComponent } from './pages/audit-detail/audit-detail.component';
import { AuditEntityComponent } from './pages/audit-entity/audit-entity.component';

@NgModule({
  declarations: [
    AuditDashboardComponent,
    AuditDetailComponent,
    AuditEntityComponent,
    AuditFiltersFormComponent,
    AuditKpiRowComponent,
    AuditLogsTableComponent,
    AuditChangesViewerComponent,
    AuditChartsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuditRoutingModule,
    StateModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
  ],
})
export class AuditModule {}
