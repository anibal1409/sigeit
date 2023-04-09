import { PeriodVM } from '../model';

export function Period2PeriodVM(Period: any): PeriodVM {
  return {
    name: Period?.name,
    start: Period.start,
    end: Period.end,
    start_time: Period.start_time,
    end_time: Period.end_time,
    interval: Period.interval,
    block: Period.block,
    status: Period.status ? 'Activo' : 'Inactivo',
  };
}
