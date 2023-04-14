import { RowOptionVM } from '../../../common';
import { SectionItemVM } from '../../sections';
import { RowActionSubject } from './row-action';
import { SubjectVM } from './subject-vm';

export interface SubjectItemVM extends SubjectVM {
  sections?: Array<SectionItemVM>;
  options?: {
    options?: Array<RowOptionVM<RowActionSubject>>;
  };
}
