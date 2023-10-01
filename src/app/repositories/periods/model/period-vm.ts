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
}
