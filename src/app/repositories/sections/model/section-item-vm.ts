import { RowOptionVM } from '../../../common';
import { RowActionSection } from './row-action';
import { SectionVM } from './section-vm';

export interface SectionItemVM extends SectionVM {
  options?: {
    options?: Array<RowOptionVM<RowActionSection>>;
  };
}
