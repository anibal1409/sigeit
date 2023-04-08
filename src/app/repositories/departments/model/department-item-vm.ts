import { RowOptionVM } from '../../../common';
import { SchoolVM } from '../../schools/model';
import { DepartmentVM } from './department-vm';
import { RowActionDepartment } from './row-action';

export interface DepartmentItemVM extends DepartmentVM {
  school?: SchoolVM;
  options?: {
    options?: Array<RowOptionVM<RowActionDepartment>>;
  };
}
