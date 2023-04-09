export interface ScheduleVM {
  id?: number;
  classroomId: number;
  dayId: number;
  start: Date | string;
  end: Date | string;
  sectionId: number;
}
