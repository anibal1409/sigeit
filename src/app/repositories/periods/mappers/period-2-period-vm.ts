import { PeriodVM } from '../model';

export function Period2PeriodVM(period: any): PeriodVM {
  return {
    duration: period?.duration,
    end: period?.end,
    end_time: period?.endTime,
    interval: period?.interval,
    name: period?.name,
    stage: period?.stage,
    start: period?.start,
    start_time: period?.startTime,
    status: period?.status,
    id: period?.id,
    description: period?.description,
  };
}
