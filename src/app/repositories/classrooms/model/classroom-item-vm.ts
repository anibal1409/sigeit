import { RowOptionVM } from '../../../common';
import { RowActionClassroom } from './row-action';
import { ClassroomVM } from './classroom-vm';
import { DepartmentItemVM } from '../../departments';

export interface ClassroomItemVM extends ClassroomVM {
  department?: DepartmentItemVM;
  options?: {
    options?: Array<RowOptionVM<RowActionClassroom>>;
  };
}
