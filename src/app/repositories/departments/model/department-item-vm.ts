import { RowOptionVM } from '../../../common';
import { RowActionDepartment } from './row-action';
import { DepartmentVM } from './department-vm';

export interface DepartmentItemVM extends DepartmentVM {
  options?: {
    options?: Array<RowOptionVM<RowActionDepartment>>;
  };
}
