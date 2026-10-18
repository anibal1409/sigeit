import moment from 'moment';

import { ScheduleVM } from '../model';

export function Schedule2ScheduleVM(schedule: any, duration = 45): ScheduleVM {
  return {
    classroomId: schedule?.classroomId ?? schedule?.classroom?.id,
    dayId: schedule?.dayId ?? schedule?.day?.id,
    end: schedule?.end,
    sectionId: schedule?.sectionId ?? schedule?.section?.id,
    start: schedule?.start,
    id: schedule?.id,
    periodId: schedule?.periodId ?? schedule?.period?.id,
    hours: Math.floor((moment(schedule.end, 'HH:mm').diff(moment(schedule.start, 'HH:mm'), 'minutes'))/duration),
    status: schedule?.status,
  };
}