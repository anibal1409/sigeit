import { Teacher2TeacherVM } from '../../teachers/mappers';
import { SectionVM } from '../model';

export function Section2SectionVM(section: any): SectionVM {
  return {
    capacity: section?.capacity,
    periodId: section?.periodId,
    subjectId: section?.subjectId,
    teacherId: section?.teacherId ?? null,
    name: section?.name,
    status: section?.status,
    all: section?.all,
    id: section?.id,
    teacher: section?.teacher ? Teacher2TeacherVM(section.teacher) : undefined,
  };
}
