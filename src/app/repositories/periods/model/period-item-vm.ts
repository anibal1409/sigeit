import { RowOptionVM } from '../../../common';
import { RowActionPeriod } from './row-action';
import { PeriodVM } from './period-vm';

export interface PeriodItemVM extends PeriodVM {
  options?: {
    options?: Array<RowOptionVM<RowActionPeriod>>;
  };
}
