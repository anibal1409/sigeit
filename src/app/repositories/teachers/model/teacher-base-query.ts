import { BaseQuery } from '../../../common';

export interface TeacherBaseQuery  extends BaseQuery {
  schoolId?: number;
  departmentId?: number;
}
