import { RowOptionVM } from '../../../common';
import { RowActionTeacher } from './row-action';
import { TeacherVM } from './teacher-vm';

export interface TeacherItemVM extends TeacherVM {
  options?: {
    options?: Array<RowOptionVM<RowActionTeacher>>;
  };
}
