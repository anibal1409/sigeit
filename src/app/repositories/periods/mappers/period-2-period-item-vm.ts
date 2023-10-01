import {
  PeriodItemVM,
  STAGE_PERIODS_VALUE,
} from '../model';
import { Period2PeriodVM } from './period-2-period-vm';

export function Period2PeriodItemVM(period: any): PeriodItemVM {
  const periodVM = Period2PeriodVM(period);
  return {
    ...periodVM,
    stageText: STAGE_PERIODS_VALUE[periodVM.stage]?.name,
    status: period?.status ? 'Activo' : 'Inactivo',
  };
}
