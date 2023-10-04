import { BaseQuery } from '../../../common';

export interface SubjectBaseQuery  extends BaseQuery {
  departmentId?: number;
  carrerId?: number;
  semester?: number;
}
