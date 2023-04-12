import { RowOptionVM } from '../../../common';
import { ScheduleItemVM } from '../../scheludes';
import { SubjectItemVM } from '../../subjects';
import { RowActionSection } from './row-action';
import { SectionVM } from './section-vm';

export interface SectionItemVM extends SectionVM {
  subject?: SubjectItemVM;
  schedules?: Array<ScheduleItemVM>;
  options?: {
    options?: Array<RowOptionVM<RowActionSection>>;
  };
}
