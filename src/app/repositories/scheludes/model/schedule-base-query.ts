import { BaseQuery } from '../../../common';

export interface ScheduleBaseQuery  extends BaseQuery {
  departmentId?: number;
  carrerId?: number;
  semester?: number;
  periodId?: number;
  subjectId?: number;
  teacherId?: number;
  sectionId?: number;
  dayId?: number;
  classroomId?: number;
}
