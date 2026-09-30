import { Injectable } from '@angular/core';

import {
  PeriodService,
  ResponseSubjectDemandDto,
  SubjectDemandService,
} from 'dashboard-sdk';
import {
  catchError,
  concatMap,
  first,
  from,
  map,
  Observable,
  of,
  shareReplay,
  Subject,
  switchMap,
} from 'rxjs';

export const DEFAULT_DEMAND_FACTOR = 1;
export const DEFAULT_SECTION_CAPACITY = 45;
export const DEMAND_CONFIG_KEY = 'sigeit-demand-configs';
export const SECTIONS_LOAD_PANEL_KEY = 'sigeit-sections-load-panel';
/** Preferencias que deben sobrevivir al cierre de sesión */
export const DEMAND_PREFERENCE_KEYS = [DEMAND_CONFIG_KEY, SECTIONS_LOAD_PANEL_KEY];

/** Qué parte de la demanda de una asignatura se quiere atender. */
export interface DemandConfig {
  sectionCapacity: number;
  factor: number;
  /** Porcentaje a considerar por nivel; los niveles ausentes cuentan al 100 %. */
  levelPercents: Record<number, number>;
}

export interface SubjectDemandConfig extends DemandConfig {
  /** true si la configuración se guardó en otro período y se reutiliza */
  inherited: boolean;
  /** false si no hay nada guardado y se usan los valores por defecto */
  saved: boolean;
}

interface StoredDemandConfig extends DemandConfig {
  periodId: number;
  subjectId: number;
  savedAt: number;
}

export const DEFAULT_DEMAND_CONFIG: DemandConfig = {
  sectionCapacity: DEFAULT_SECTION_CAPACITY,
  factor: DEFAULT_DEMAND_FACTOR,
  levelPercents: {},
};

export function isValidDemandConfig(config: DemandConfig): boolean {
  return (
    Number.isInteger(config.sectionCapacity) &&
    config.sectionCapacity > 0 &&
    config.sectionCapacity <= 500 &&
    config.factor > 0 &&
    config.factor <= 1 &&
    Object.values(config.levelPercents).every((percent) => percent >= 0 && percent <= 100)
  );
}

export function levelPercent(config: DemandConfig, level: number): number {
  return config.levelPercents[level] ?? 100;
}

/** Estudiantes a atender por nivel: demanda del nivel × % del nivel × factor. */
export function attendedByLevel(summary: SubjectDemandSummary, config: DemandConfig): Array<number> {
  return summary.byLevel.map((quantity, index) => (quantity * levelPercent(config, index + 1) * config.factor) / 100);
}

export function estimateDemand(summary: SubjectDemandSummary | undefined, config: DemandConfig): number {
  return summary ? Math.round(attendedByLevel(summary, config).reduce((sum, value) => sum + value, 0)) : 0;
}

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
  summary: SubjectDemandSummary | undefined,
  offered: number,
  config: DemandConfig,
): SubjectCoverage {
  const estimated = estimateDemand(summary, config);
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
    suggestedSections: Math.ceil(estimated / config.sectionCapacity),
  };
}

@Injectable({
  providedIn: 'root',
})
export class SubjectDemandStoreService {
  private cache = new Map<number, Observable<DemandSource>>();
  private configChanges$ = new Subject<void>();

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

  /** Emite cada vez que cambia la configuración de alguna asignatura. */
  getConfigChanges$(): Observable<void> {
    return this.configChanges$.asObservable();
  }

  /**
   * Configuración de la asignatura en el período; si no tiene, la guardada más
   * recientemente en otro período, y si tampoco, los valores por defecto.
   * ponytail: se guarda en localStorage hasta que exista el endpoint de configuración.
   */
  getConfig(periodId: number, subjectId: number): SubjectDemandConfig {
    const stored = this.readConfigs().filter((item) => item.subjectId === subjectId);
    const own = stored.find((item) => item.periodId === periodId);
    const found = own ?? stored.sort((a, b) => b.savedAt - a.savedAt)[0];
    if (!found) {
      return { ...DEFAULT_DEMAND_CONFIG, levelPercents: {}, inherited: false, saved: false };
    }
    const { sectionCapacity, factor, levelPercents } = found;
    return { sectionCapacity, factor, levelPercents: { ...levelPercents }, inherited: !own, saved: true };
  }

  saveConfig(periodId: number, subjectId: number, config: DemandConfig): boolean {
    if (!isValidDemandConfig(config)) {
      return false;
    }
    const others = this.readConfigs().filter((item) => item.periodId !== periodId || item.subjectId !== subjectId);
    const { sectionCapacity, factor, levelPercents } = config;
    this.writeConfigs([...others, { periodId, subjectId, sectionCapacity, factor, levelPercents, savedAt: Date.now() }]);
    return true;
  }

  /** Borra la configuración del período: vuelve a la heredada o a la de por defecto. */
  resetConfig(periodId: number, subjectId: number): void {
    this.writeConfigs(this.readConfigs().filter((item) => item.periodId !== periodId || item.subjectId !== subjectId));
  }

  private readConfigs(): Array<StoredDemandConfig> {
    try {
      const configs = JSON.parse(localStorage.getItem(DEMAND_CONFIG_KEY) || '[]');
      return Array.isArray(configs) ? configs : [];
    } catch {
      return [];
    }
  }

  private writeConfigs(configs: Array<StoredDemandConfig>): void {
    localStorage.setItem(DEMAND_CONFIG_KEY, JSON.stringify(configs));
    this.configChanges$.next();
  }
}
