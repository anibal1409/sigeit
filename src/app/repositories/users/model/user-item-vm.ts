import { RowOptionVM } from '../../../common';
import { DepartmentVM } from '../../departments';
import { SchoolVM } from '../../schools';
import { TeacherVM } from '../../teachers';
import { RowActionUser } from './row-action';
import { UserVM } from './users-vm';

export interface UserItemVM extends UserVM {
  teacher?: TeacherVM;
  school?: SchoolVM;
  department?: DepartmentVM;
  roleText?: string;
  options?: {
    options?: Array<RowOptionVM<RowActionUser>>;
  };
}
