import moment from 'moment';

import { ScheduleVM } from '../model';

export function Schedule2ScheduleVM(schedule: any, duration = 45): ScheduleVM {
  return {
    classroomId: schedule?.classroomId,
    dayId: schedule?.dayId,
    end: schedule?.end,
    sectionId: schedule?.sectionId,
    start: schedule?.start,
    id: schedule?.id,
    periodId: schedule?.periodId,
    hours: Math.floor((moment(schedule.end, 'HH:mm').diff(moment(schedule.start, 'HH:mm'), 'minutes'))/duration),
  };
}