import { RowOptionVM } from '../../../common';
import { SubjectItemVM } from '../../subjects';
import { RowActionSection } from './row-action';
import { SectionVM } from './section-vm';

export interface SectionItemVM extends SectionVM {
  subject?: SubjectItemVM;
  options?: {
    options?: Array<RowOptionVM<RowActionSection>>;
  };
}
