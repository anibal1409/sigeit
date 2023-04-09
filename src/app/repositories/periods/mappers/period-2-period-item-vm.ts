import { PeriodItemVM } from '../model';
import { Period2PeriodVM } from './period-2-period-vm';

export function Period2PeriodItemVM(period: any): PeriodItemVM {
  const periodVM = Period2PeriodVM(period);
  return {
    ...periodVM,
  };
}
