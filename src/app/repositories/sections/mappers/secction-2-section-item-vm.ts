import { Subject2SubjectItemVM } from '../../subjects';
import { SectionItemVM } from '../model';
import { Section2SectionVM } from './secction-2-section-vm';

export function Section2SectionItemVM(section: any): SectionItemVM {
  const sectionVM = Section2SectionVM(section);
  return {
    ...sectionVM,
    subject: Subject2SubjectItemVM(section?.subject),
  };
}