import { TeacherVM } from '../../teachers/model';

export interface SectionVM {
  id?: number;
  subjectId: number;
  periodId: number;
  teacherId: number;
  section_name: string;
  status: boolean | string;
  capacity: number;
  teacher?: TeacherVM;
}
