import { TeacherVM } from '../../teachers/model';

export interface SectionVM {
  id?: number;
  subjectId: number;
  periodId: number;
  teacherId: number;
  name: string;
  status: boolean | string;
  capacity: number;
  teacher?: TeacherVM;
}
