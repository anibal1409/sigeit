import { Classroom2ClassroomVM } from '../../classrooms/mappers';
import { ScheduleItemVM } from '../model';
import { Day2DayVM } from './day-2-day-vm';
import { Schedule2ScheduleVM } from './schedule-2-schedule-vm';

export function Schedule2ScheduleItemVM(schedule: any): ScheduleItemVM {
  const scheduleVM = Schedule2ScheduleVM(schedule);
  return {
    ...scheduleVM,
    classroom: Classroom2ClassroomVM(schedule?.classroom),
    day: Day2DayVM(schedule?.day),
  };
}