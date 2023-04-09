import { ScheduleVM } from '../model';

export function Schedule2ScheduleVM(schedule: any): ScheduleVM {
  return {
    classroomId: schedule?.classroomId,
    dayId: schedule?.dayId,
    end: schedule?.end,
    sectionId: schedule?.sectionId,
    start: schedule?.start,
    id: schedule?.id,
  };
}