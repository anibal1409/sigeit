import { RowOptionVM } from '../../../common';
import { DepartmentItemVM } from '../../departments';
import { RowActionUser } from './row-action';
import { UserVM } from './users-vm';

export interface UserItemVM extends UserVM {
  department?: DepartmentItemVM;
  options?: {
    options?: Array<RowOptionVM<RowActionUser>>;
  };
}
