export interface ScheduleVM {
  id?: number;
  classroomId: number;
  dayId: number;
  start: string;
  end: string;
  sectionId: number;
  periodId: number;
  hours?: number;
  status: boolean;
  /** Guarda aunque el backend detecte choques de aula o profesor. */
  force?: boolean;
}
