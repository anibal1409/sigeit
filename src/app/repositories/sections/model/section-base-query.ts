import { BaseQuery } from '../../../common';

export interface SectionBaseQuery  extends BaseQuery {
  departmentId?: number;
  carrerId?: number;
  semester?: number;
  periodId?: number;
  subjectId?: number;
  teacherId?: number;
}
