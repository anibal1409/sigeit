import { BaseQuery } from '../../common/memory-repository';
import { StageInscription } from './stage';

export interface InscriptionBaseQuery  extends BaseQuery {
  departmentId?: number;
  carrerId?: number;
  semester?: number;
  periodId: number;
  subjectId?: number;
  teacherId?: number;
  sectionId?: number;
  stage?: StageInscription;
  schoolId?: number;
  userId?: number;
  status?: boolean;
  schedules?: boolean;
}
