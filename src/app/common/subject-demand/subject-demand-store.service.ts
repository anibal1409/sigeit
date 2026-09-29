import { Injectable } from '@angular/core';

import {
  PeriodService,
  ResponseSubjectDemandDto,
  SubjectDemandService,
} from 'dashboard-sdk';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  first,
  from,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';

export const DEMAND_FACTOR_KEY = 'sigeit-demand-factor';
export const DEFAULT_DEMAND_FACTOR = 0.3;
export const TYPICAL_SECTION_CAPACITY = 40;
export const SECTION_CAPACITY_KEY = 'sigeit-section-capacities';
/** Preferencias de demanda que deben sobrevivir al cierre de sesión */
export const DEMAND_PREFERENCE_KEYS = [DEMAND_FACTOR_KEY, SECTION_CAPACITY_KEY];

export interface SubjectDemandSummary {
  subjectId: number;
  code: string;
  name: string;
  total: number;
  /** Demanda por nivel: índice 0 = nivel 1 */
  byLevel: Array<number>;
  peakLevel: number;
}

export interface DemandSource {
  /** Período del que proviene la demanda; null si ninguno tiene */
  period: { id: number; name: string } | null;
  summaries: Map<number, SubjectDemandSummary>;
}

const EMPTY_SOURCE: DemandSource = { period: null, summaries: new Map() };

export type CoverageStatus = 'low' | 'ok' | 'high' | 'none';

export interface SubjectCoverage {
  estimated: number;
  offered: number;
  /** Cupo ofertado ÷ demanda estimada; null si no hay demanda */
  coverage: number | null;
  status: CoverageStatus;
  suggestedSections: number;
}

export function summarizeDemand(rows: Array<ResponseSubjectDemandDto>): Map<number, SubjectDemandSummary> {
  const summaries = new Map<number, SubjectDemandSummary>();
  for (const row of rows) {
    let summary = summaries.get(row.subjectId);
    if (!summary) {
      summary = { subjectId: row.subjectId, code: row.subjectCode, name: row.subjectName, total: 0, byLevel: [], peakLevel: 0 };
      summaries.set(row.subjectId, summary);
    }
    summary.total += row.quantity;
    summary.byLevel[row.level - 1] = (summary.byLevel[row.level - 1] || 0) + row.quantity;
  }
  summaries.forEach((summary) => {
    summary.byLevel = Array.from(summary.byLevel, (quantity) => quantity || 0);
    summary.peakLevel = summary.byLevel.indexOf(Math.max(...summary.byLevel)) + 1;
  });
  return summaries;
}

export function computeCoverage(
  total: number,
  offered: number,
  factor: number,
  sectionCapacity = TYPICAL_SECTION_CAPACITY,
): SubjectCoverage {
  const estimated = Math.round(total * factor);
  const coverage = estimated > 0 ? offered / estimated : null;
  let status: CoverageStatus = 'none';
  if (coverage !== null) {
    status = coverage < 0.9 ? 'low' : coverage > 1.2 ? 'high' : 'ok';
  }
  return {
    estimated,
    offered,
    coverage,
    status,
    suggestedSections: Math.ceil(estimated / sectionCapacity),
  };
}

@Injectable({
  providedIn: 'root',
})
export class SubjectDemandStoreService {
  private cache = new Map<number, Observable<DemandSource>>();
  private factor$ = new BehaviorSubject<number>(this.readFactor());

  constructor(
    private subjectDemandService: SubjectDemandService,
    private periodService: PeriodService,
  ) {}

  /**
   * Demanda del período o, si no tiene (p. ej. un curso vacacional), la del
   * período anterior más reciente que sí tenga demanda cargada.
   */
  getSource$(periodId: number): Observable<DemandSource> {
    let source$ = this.cache.get(periodId);
    if (!source$) {
      source$ = this.periodService.periodControllerFindAll().pipe(
        switchMap((periods) => {
          const current = periods.find((period) => period.id === periodId);
          const previous = current
            ? periods
              .filter((period) => period.id !== periodId && period.start <= current.start)
              .sort((a, b) => b.start.localeCompare(a.start))
            : [];
          return from([current || { id: periodId, name: '' }, ...previous]).pipe(
            concatMap((period) =>
              this.subjectDemandService.subjectDemandControllerFindAllPeriod(period.id).pipe(
                map((rows) => ({ period: { id: period.id, name: period.name }, summaries: summarizeDemand(rows) })),
              ),
            ),
            first((source: DemandSource) => source.summaries.size > 0, EMPTY_SOURCE),
          );
        }),
        catchError(() => {
          this.cache.delete(periodId);
          return of(EMPTY_SOURCE);
        }),
        shareReplay(1),
      );
      this.cache.set(periodId, source$);
    }
    return source$;
  }

  getSummaries$(periodId: number): Observable<Map<number, SubjectDemandSummary>> {
    return this.getSource$(periodId).pipe(map((source) => source.summaries));
  }

  /** Una importación puede cambiar el período de origen de cualquier otro. */
  invalidate(): void {
    this.cache.clear();
  }

  getFactor$(): Observable<number> {
    return this.factor$.asObservable();
  }

  getFactor(): number {
    return this.factor$.value;
  }

  setFactor(factor: number): void {
    if (!(factor > 0 && factor <= 1)) {
      return;
    }
    localStorage.setItem(DEMAND_FACTOR_KEY, String(factor));
    this.factor$.next(factor);
  }

  getSectionCapacity(subjectId: number): number {
    return this.readSectionCapacities()[subjectId] || TYPICAL_SECTION_CAPACITY;
  }

  setSectionCapacity(subjectId: number, capacity: number): void {
    if (!(Number.isInteger(capacity) && capacity > 0 && capacity <= 500)) {
      return;
    }
    const capacities = this.readSectionCapacities();
    capacities[subjectId] = capacity;
    localStorage.setItem(SECTION_CAPACITY_KEY, JSON.stringify(capacities));
  }

  private readSectionCapacities(): Record<number, number> {
    try {
      return JSON.parse(localStorage.getItem(SECTION_CAPACITY_KEY) || '{}');
    } catch {
      return {};
    }
  }

  private readFactor(): number {
    const factor = Number(localStorage.getItem(DEMAND_FACTOR_KEY));
    return factor > 0 && factor <= 1 ? factor : DEFAULT_DEMAND_FACTOR;
  }
}
