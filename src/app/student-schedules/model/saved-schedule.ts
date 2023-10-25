import { SectionItemVM } from '../../repositories/sections';

export interface SavedSchedule {
  id: string;
  name: string;
  sections: Array<SectionItemVM>;
}
