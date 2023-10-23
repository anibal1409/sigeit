import { Schedule2ScheduleItemVM } from '../../schedules/mappers';
import { Subject2SubjectItemVM } from '../../subjects';
import { Teacher2TeacherVM } from '../../teachers/mappers';
import { SectionItemVM } from '../model';
import { Section2SectionVM } from './secction-2-section-vm';

export function Section2SectionItemVM(section: any): SectionItemVM {
  const sectionVM = Section2SectionVM(section);
  const teacherVM = Teacher2TeacherVM(section?.teacher);
  return {
    ...sectionVM,
    status: section?.status ? 'Activo' : 'Inactivo',
    subject: Subject2SubjectItemVM(section?.subject),
    nameTeacher: `${sectionVM.name} - ${teacherVM?.lastName?.split(' ')[0]}, ${teacherVM?.firstName?.split(' ')[0]}`,
    collapse: [],
    schedules: (section?.schedules || []).map(Schedule2ScheduleItemVM),
  };
}
