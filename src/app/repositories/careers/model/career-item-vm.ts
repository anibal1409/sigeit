import { RowOptionVM } from '../../../common';
import { RowActionCareer } from './row-action';
import { CareerVM } from './career-vm';

export interface CareerItemVM extends CareerVM {
  options?: {
    options?: Array<RowOptionVM<RowActionCareer>>;
  };
}
