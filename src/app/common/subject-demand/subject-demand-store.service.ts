import { Injectable } from '@angular/core';

import {
  ResponseSubjectDemandDto,
  SubjectDemandService,
} from 'dashboard-sdk';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  shareReplay,
} from 'rxjs';

export const DEMAND_FACTOR_KEY = 'sigeit-demand-factor';
export const DEFAULT_DEMAND_FACTOR = 0.3;
export const TYPICAL_SECTION_CAPACITY = 40;

export interface SubjectDemandSummary {
  subjectId: number;
  code: string;
  name: string;
  total: number;
  /** Demanda por nivel: índice 0 = nivel 1 */
  byLevel: Array<number>;
  peakLevel: number;
}

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

export function computeCoverage(total: number, offered: number, factor: number): SubjectCoverage {
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
    suggestedSections: Math.ceil(estimated / TYPICAL_SECTION_CAPACITY),
  };
}

@Injectable({
  providedIn: 'root',
})
export class SubjectDemandStoreService {
  private cache = new Map<number, Observable<Map<number, SubjectDemandSummary>>>();
  private factor$ = new BehaviorSubject<number>(this.readFactor());

  constructor(private subjectDemandService: SubjectDemandService) {}

  getSummaries$(periodId: number): Observable<Map<number, SubjectDemandSummary>> {
    let summaries$ = this.cache.get(periodId);
    if (!summaries$) {
      summaries$ = this.subjectDemandService.subjectDemandControllerFindAllPeriod(periodId).pipe(
        map(summarizeDemand),
        catchError(() => {
          this.cache.delete(periodId);
          return of(new Map<number, SubjectDemandSummary>());
        }),
        shareReplay(1),
      );
      this.cache.set(periodId, summaries$);
    }
    return summaries$;
  }

  getSummary$(periodId: number, subjectId: number): Observable<SubjectDemandSummary | null> {
    return this.getSummaries$(periodId).pipe(map((summaries) => summaries.get(subjectId) || null));
  }

  invalidate(periodId: number): void {
    this.cache.delete(periodId);
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

  private readFactor(): number {
    const factor = Number(localStorage.getItem(DEMAND_FACTOR_KEY));
    return factor > 0 && factor <= 1 ? factor : DEFAULT_DEMAND_FACTOR;
  }
}
