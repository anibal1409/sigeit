import { RowOptionVM } from '../../../common';
import { RowActionSchool } from './row-action';
import { SchoolVM } from './school-vm';

export interface SchoolItemVM extends SchoolVM {
  options?: {
    options?: Array<RowOptionVM<RowActionSchool>>;
  };
}
