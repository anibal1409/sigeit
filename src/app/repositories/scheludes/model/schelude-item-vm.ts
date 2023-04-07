import { RowOptionVM } from '../../../common';
import { RowActionSchelude } from './row-action';
import { ScheludeVM } from './schelude-vm';

export interface ScheludeItemVM extends ScheludeVM {
  options?: {
    options?: Array<RowOptionVM<RowActionSchelude>>;
  };
}
