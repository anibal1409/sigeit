import { RowOptionVM } from '../../../common';
import { RowActionCareer } from './row-action';
import { CareerVM } from './career-vm';
import { DepartmentVM } from '../../departments';

export interface CareerItemVM extends CareerVM {
  department?: DepartmentVM;
  options?: {
    options?: Array<RowOptionVM<RowActionCareer>>;
  };
}
