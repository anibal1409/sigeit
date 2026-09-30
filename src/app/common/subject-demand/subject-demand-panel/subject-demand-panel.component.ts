import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  BehaviorSubject,
  merge,
  of,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';

import {
  attendedByLevel,
  computeCoverage,
  DemandConfig,
  levelPercent,
  SubjectCoverage,
  SubjectDemandConfig,
  SubjectDemandStoreService,
  SubjectDemandSummary,
} from '../subject-demand-store.service';

interface LevelBar {
  level: number;
  quantity: number;
  attended: number;
  percent: number;
  peak: boolean;
}

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
  config!: SubjectDemandConfig;
  bars: Array<LevelBar> = [];
  loaded = false;

  private inputs$ = new BehaviorSubject<{ periodId?: number; subjectId?: number }>({});
  private sub$ = new Subscription();

  constructor(private store: SubjectDemandStoreService) {}

  ngOnInit(): void {
    this.sub$.add(
      this.inputs$
        .pipe(
          switchMap(({ periodId, subjectId }) =>
            periodId && subjectId ? this.store.getSource$(periodId) : of(null),
          ),
          tap((source) => {
            this.summary = (this.subjectId && source?.summaries.get(this.subjectId)) || null;
            this.sourcePeriodName = source?.period && source.period.id !== this.periodId ? source.period.name : '';
            this.loaded = true;
          }),
          switchMap(() => merge(of(undefined), this.store.getConfigChanges$())),
        )
        .subscribe(() => this.update()),
    );
  }

  ngOnChanges(): void {
    const { periodId, subjectId } = this.inputs$.value;
    if (periodId !== this.periodId || subjectId !== this.subjectId) {
      this.loaded = false;
      this.inputs$.next({ periodId: this.periodId, subjectId: this.subjectId });
    } else if (this.loaded) {
      this.update();
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  changeSectionCapacity(input: HTMLInputElement): void {
    this.saveOrRevert({ sectionCapacity: Number(input.value) }, input, String(this.config.sectionCapacity));
  }

  changeFactor(input: HTMLInputElement): void {
    this.saveOrRevert({ factor: Number(input.value.replace(',', '.')) }, input, this.config.factor.toFixed(2));
  }

  changeLevelPercent(level: number, input: HTMLInputElement): void {
    const percent = input.value.trim() === '' ? 100 : Number(input.value.replace(',', '.'));
    this.saveOrRevert(
      { levelPercents: { ...this.config.levelPercents, [level]: percent } },
      input,
      String(levelPercent(this.config, level)),
    );
  }

  reset(): void {
    if (this.periodId && this.subjectId) {
      this.store.resetConfig(this.periodId, this.subjectId);
    }
  }

  private saveOrRevert(changes: Partial<DemandConfig>, input: HTMLInputElement, previous: string): void {
    const { sectionCapacity, factor, levelPercents } = { ...this.config, ...changes };
    const saved =
      !!this.periodId &&
      !!this.subjectId &&
      this.store.saveConfig(this.periodId, this.subjectId, { sectionCapacity, factor, levelPercents });
    if (!saved) {
      input.value = previous;
    }
  }

  private update(): void {
    if (!this.periodId || !this.subjectId) return;
    this.config = this.store.getConfig(this.periodId, this.subjectId);
    this.coverage = this.summary ? computeCoverage(this.summary, this.offered || 0, this.config) : null;
    if (this.summary && !this.compact) {
      const attended = attendedByLevel(this.summary, this.config);
      this.bars = this.summary.byLevel.map((quantity, index) => ({
        level: index + 1,
        quantity,
        attended: Math.round(attended[index]),
        percent: levelPercent(this.config, index + 1),
        peak: index + 1 === this.summary?.peakLevel,
      }));
    }
  }

  get maxQuantity(): number {
    return Math.max(1, ...this.bars.map((bar) => bar.quantity));
  }
}
