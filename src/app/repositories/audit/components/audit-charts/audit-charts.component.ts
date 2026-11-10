import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AuditStatsDto } from 'dashboard-sdk';
import {
  Chart,
  ChartConfiguration,
  registerables,
} from 'chart.js';

import { AUDIT_ACTION_LABEL } from '../../constants/audit-labels';
import { auditResourceLabel } from '../../constants/audit-resources';

Chart.register(...registerables);

/** Gráficos de auditoría (acción, recurso, eventos por día UTC) desde AuditStatsDto. */
@Component({
  selector: 'app-audit-charts',
  templateUrl: './audit-charts.component.html',
  styleUrls: ['./audit-charts.component.scss'],
})
export class AuditChartsComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() stats: AuditStatsDto | null = null;

  @ViewChild('actionCanvas') actionCanvas?: ElementRef<HTMLCanvasElement>;
  @ViewChild('resourceCanvas') resourceCanvas?: ElementRef<HTMLCanvasElement>;
  @ViewChild('dayCanvas') dayCanvas?: ElementRef<HTMLCanvasElement>;

  private actionChart?: Chart;
  private resourceChart?: Chart;
  private dayChart?: Chart;

  ngAfterViewInit(): void {
    this.renderAll();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stats'] && !changes['stats'].firstChange) {
      this.renderAll();
    }
  }

  ngOnDestroy(): void {
    this.destroyCharts();
  }

  private renderAll(): void {
    if (!this.stats) {
      this.destroyCharts();
      return;
    }
    this.renderActionChart();
    this.renderResourceChart();
    this.renderDayChart();
  }

  private renderActionChart(): void {
    const canvas = this.actionCanvas?.nativeElement;
    if (!canvas || !this.stats) {
      return;
    }
  const labels = this.stats.byAction.map(
      (item) => AUDIT_ACTION_LABEL[item.action as keyof typeof AUDIT_ACTION_LABEL] ?? item.action,
    );
    const data = this.stats.byAction.map((item) => item.count);
    this.replaceChart(
      'action',
      new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{ data, backgroundColor: ['#2e7d32', '#1565c0', '#c62828', '#7b1fa2', '#757575', '#0288d1'] }],
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } },
    } as ChartConfiguration),
    );
  }

  private renderResourceChart(): void {
    const canvas = this.resourceCanvas?.nativeElement;
    if (!canvas || !this.stats) {
      return;
    }
    const labels = this.stats.byResource.map((item) => auditResourceLabel(item.resource));
    const data = this.stats.byResource.map((item) => item.count);
    this.replaceChart(
      'resource',
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels,
          datasets: [{ label: 'Eventos', data, backgroundColor: '#3949ab' }],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        },
      } as ChartConfiguration),
    );
  }

  private renderDayChart(): void {
    const canvas = this.dayCanvas?.nativeElement;
    if (!canvas || !this.stats) {
      return;
    }
    const labels = this.stats.byDay.map((item) => item.date);
    const data = this.stats.byDay.map((item) => item.count);
    this.replaceChart(
      'day',
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels,
          datasets: [{ label: 'Eventos por día (UTC)', data, backgroundColor: '#00796b' }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        },
      } as ChartConfiguration),
    );
  }

  private replaceChart(kind: 'action' | 'resource' | 'day', chart: Chart): void {
    if (kind === 'action') {
      this.actionChart?.destroy();
      this.actionChart = chart;
    } else if (kind === 'resource') {
      this.resourceChart?.destroy();
      this.resourceChart = chart;
    } else {
      this.dayChart?.destroy();
      this.dayChart = chart;
    }
  }

  private destroyCharts(): void {
    this.actionChart?.destroy();
    this.resourceChart?.destroy();
    this.dayChart?.destroy();
    this.actionChart = undefined;
    this.resourceChart = undefined;
    this.dayChart = undefined;
  }
}
