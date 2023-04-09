import { RowOptionVM } from '../../../common';
import { ClassroomVM } from '../../classrooms/model';
import { DayVM } from './day-vm';
import { RowActionSchedule } from './row-action';
import { ScheduleVM } from './schelude-vm';

export interface ScheduleItemVM extends ScheduleVM {
  classroom?: ClassroomVM;
  day?: DayVM;
  options?: {
    options?: Array<RowOptionVM<RowActionSchedule>>;
  };
}
