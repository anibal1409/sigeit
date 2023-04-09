import { PeriodVM } from '../model';

export function Period2PeriodVM(period: any): PeriodVM {
  return {
    duration: period?.duration,
    end: period?.end,
    end_time: period?.end_time,
    interval: period?.interval,
    name: period?.name,
    stage: period?.stage,
    start: period?.start,
    start_time: period?.start_time,
    status: period?.status,
    id: period?.id,
  };
}