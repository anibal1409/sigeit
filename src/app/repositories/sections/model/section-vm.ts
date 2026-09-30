import { TeacherVM } from '../../teachers/model';

export interface SectionVM {
  id?: number;
  subjectId: number;
  periodId: number;
  teacherId: number | null;
  name: string;
  status: boolean | string;
  all?: boolean;
  capacity: number;
  teacher?: TeacherVM;
}
