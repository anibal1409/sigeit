import { RowOptionVM } from '../../../common';
import { ScheduleItemVM } from '../../schedules';
import { SubjectItemVM } from '../../subjects';
import { RowActionSection } from './row-action';
import { SectionVM } from './section-vm';

export interface SectionItemVM extends SectionVM {
  subject?: SubjectItemVM;
  schedules?: Array<ScheduleItemVM>;
  nameTeacher?: string;
  options?: {
    options?: Array<RowOptionVM<RowActionSection>>;
  };
}
