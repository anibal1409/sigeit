import { BaseQuery } from '../../../common';

export interface CareerBaseQuery  extends BaseQuery {
  schoolId?: number;
  departmentId?: number;
  status?: boolean;
}
