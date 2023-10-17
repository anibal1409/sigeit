import { RowOptionVM } from '../../../common';
import { DepartmentItemVM } from '../../departments';
import { DocumentVM } from './document-vm';
import { RowActionDocument } from './row-action';

export interface DocumentItemVM extends DocumentVM {
  typeText?: string;
  department?: DepartmentItemVM;
  options?: {
    options?: Array<RowOptionVM<RowActionDocument>>;
  };
}
