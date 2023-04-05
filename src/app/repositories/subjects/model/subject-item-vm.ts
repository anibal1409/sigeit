import { RowOptionVM } from '../../../common';
import { RowActionSubject } from './row-action';
import { SubjectVM } from './subject-vm';

export interface SubjectItemVM extends SubjectVM {
  options?: {
    options?: Array<RowOptionVM<RowActionSubject>>;
  };
}
