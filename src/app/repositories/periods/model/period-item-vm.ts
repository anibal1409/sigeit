import { RowOptionVM } from '../../../common';
import { PeriodVM } from './period-vm';
import { RowActionPeriod } from './row-action';

export interface PeriodItemVM extends PeriodVM {
  stageText?: string;
  options?: {
    options?: Array<RowOptionVM<RowActionPeriod>>;
  };
}
