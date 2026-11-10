import { Component, Input } from '@angular/core';
import { AuditStatsDto } from 'dashboard-sdk';

/** Tarjetas de KPIs del panel de auditoría. */
@Component({
  selector: 'app-audit-kpi-row',
  templateUrl: './audit-kpi-row.component.html',
  styleUrls: ['./audit-kpi-row.component.scss'],
})
export class AuditKpiRowComponent {
  @Input() stats: AuditStatsDto | null = null;

  /** Porcentaje de éxito cuando hay eventos. */
  successRate(): string {
    const total = this.stats?.totalEvents ?? 0;
    if (total <= 0) {
      return '—';
    }
    const rate = ((this.stats?.successCount ?? 0) / total) * 100;
    return `${rate.toFixed(1)} %`;
  }
}
