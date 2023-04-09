import { RowOptionVM } from '../../../common';
import { DepartmentItemVM } from '../../departments';
import { RowActionTeacher } from './row-action';
import { TeacherVM } from './teacher-vm';

export interface TeacherItemVM extends TeacherVM {
  department?: DepartmentItemVM;
  options?: {
    options?: Array<RowOptionVM<RowActionTeacher>>;
  };
}
