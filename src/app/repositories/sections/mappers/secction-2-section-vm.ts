import { Teacher2TeacherVM } from '../../teachers/mappers';
import { SectionVM } from '../model';

export function Section2SectionVM(section: any): SectionVM {
  return {
    capacity: section?.capacity,
    periodId: section?.periodId,
    subjectId: section?.subjectId,
    teacherId: section?.teacherId,
    section_name: section?.section_name,
    status: section?.status,
    id: section?.id,
    teacher: Teacher2TeacherVM(section?.teacher),
  };
}