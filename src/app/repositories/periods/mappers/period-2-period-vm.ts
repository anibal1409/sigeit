import { PeriodVM } from '../model';

export function Period2PeriodVM(period: any): PeriodVM {
  return {
    duration: period?.duration,
    end: period?.end,
    endTime: period?.endTime,
    interval: period?.interval,
    name: period?.name,
    stage: period?.stage,
    start: period?.start,
    startTime: period?.startTime,
    status: period?.status,
    id: period?.id,
    description: period?.description,
  };
}
