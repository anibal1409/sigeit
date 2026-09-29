import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  ChartConfiguration,
  ChartData,
} from 'chart.js';
import {
  BehaviorSubject,
  combineLatest,
  of,
  Subscription,
  switchMap,
} from 'rxjs';

import {
  computeCoverage,
  SubjectCoverage,
  SubjectDemandStoreService,
  SubjectDemandSummary,
  TYPICAL_SECTION_CAPACITY,
} from '../subject-demand-store.service';

const BAR_COLOR = '#90caf9';
const PEAK_COLOR = '#1976d2';

@Component({
  selector: 'app-subject-demand-panel',
  templateUrl: './subject-demand-panel.component.html',
  styleUrls: ['./subject-demand-panel.component.scss'],
})
export class SubjectDemandPanelComponent implements OnInit, OnChanges, OnDestroy {
  @Input() periodId?: number;
  @Input() subjectId?: number;
  /** Suma de la capacidad de las secciones de la asignatura */
  @Input() offered = 0;
  @Input() compact = false;

  summary: SubjectDemandSummary | null = null;
  /** Nombre del período de origen cuando la demanda no es del período actual */
  sourcePeriodName = '';
  coverage: SubjectCoverage | null = null;
  factor = 0;
  sectionCapacity = TYPICAL_SECTION_CAPACITY;
  loaded = false;

  chartData: ChartData<'bar'> = { labels: [], datasets: [] };
  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (item) => `${(item.parsed.y ?? 0).toLocaleString('es-VE')} estudiantes` } },
    },
    scales: {
      x: { title: { display: true, text: 'Nivel del estudiante' }, grid: { display: false } },
      y: { beginAtZero: true, ticks: { precision: 0 } },
    },
  };

  private inputs$ = new BehaviorSubject<{ periodId?: number; subjectId?: number }>({});
  private sub$ = new Subscription();

  constructor(private store: SubjectDemandStoreService) {}

  ngOnInit(): void {
    this.sub$.add(
      combineLatest([
        this.inputs$.pipe(
          switchMap(({ periodId, subjectId }) =>
            periodId && subjectId ? this.store.getSource$(periodId) : of(null),
          ),
        ),
        this.store.getFactor$(),
      ]).subscribe(([source, factor]) => {
        this.summary = (this.subjectId && source?.summaries.get(this.subjectId)) || null;
        this.sourcePeriodName = source?.period && source.period.id !== this.periodId ? source.period.name : '';
        this.factor = factor;
        this.loaded = true;
        this.update();
      }),
    );
  }

  ngOnChanges(): void {
    const { periodId, subjectId } = this.inputs$.value;
    if (periodId !== this.periodId || subjectId !== this.subjectId) {
      this.loaded = false;
      this.inputs$.next({ periodId: this.periodId, subjectId: this.subjectId });
    } else {
      this.update();
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  changeFactor(value: string): void {
    this.store.setFactor(Number(value.replace(',', '.')));
  }

  changeSectionCapacity(value: string): void {
    if (this.subjectId) {
      this.store.setSectionCapacity(this.subjectId, Number(value));
      this.update();
    }
  }

  private update(): void {
    this.sectionCapacity = this.subjectId ? this.store.getSectionCapacity(this.subjectId) : TYPICAL_SECTION_CAPACITY;
    this.coverage = this.summary
      ? computeCoverage(this.summary.total, this.offered || 0, this.factor, this.sectionCapacity)
      : null;
    if (this.summary && !this.compact) {
      const peak = this.summary.peakLevel;
      this.chartData = {
        labels: this.summary.byLevel.map((_, index) => `${index + 1}`),
        datasets: [
          {
            data: this.summary.byLevel,
            backgroundColor: this.summary.byLevel.map((_, index) => (index + 1 === peak ? PEAK_COLOR : BAR_COLOR)),
            borderRadius: 4,
          },
        ],
      };
    }
  }
}
