import { RowOptionVM } from '../../../common';
import { RowActionClassroom } from './row-action';
import { ClassroomVM } from './classroom-vm';

export interface ClassroomItemVM extends ClassroomVM {
  options?: {
    options?: Array<RowOptionVM<RowActionClassroom>>;
  };
}
