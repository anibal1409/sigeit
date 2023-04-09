import { SectionVM } from '../model';
import { Section2SectionVM } from './secction-2-section-vm';

export function Section2SectionItemVM(section: any): SectionVM {
  const sectionVM = Section2SectionVM(section);
  return {
    ...sectionVM,
  };
}