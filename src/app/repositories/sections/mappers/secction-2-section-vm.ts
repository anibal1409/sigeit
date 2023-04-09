import { SectionVM } from '../model';

export function Section2SectionVM(section: any): SectionVM {
  return {
    capacity: section?.capacity,
    id_period: section?.id_period,
    id_subject: section?.id_subject,
    id_teacher: section?.id_teacher,
    section_name: section?.section_name,
    status: section?.status,
    id: section?.id,
  };
}