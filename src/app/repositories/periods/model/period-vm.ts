import { StagePeriod } from './stage-period';

export interface PeriodVM {
  id?: number;
  name: string;
  start: string;
  description?: string;
  end: string;
  startTime: string;
  endTime: string;
  duration: number;
  interval: number;
  status: boolean | string;
  stage: StagePeriod;
  copyPrevious?: boolean;
  /** Período del cual copiar; null = elección automática del backend */
  copyFromPeriodId?: number | null;
  /** Indica si el período académico es un curso vacacional */
  isVacationCourse?: boolean;
  /** Indica si este período es el activo actualmente */
  isActive?: boolean;
}
