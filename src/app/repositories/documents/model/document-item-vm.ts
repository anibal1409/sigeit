import { RowOptionVM } from '../../../common';
import { DocumentVM } from './document-vm';
import { RowActionDocument } from './row-action';

export interface DocumentItemVM extends DocumentVM {
  typeText?: string;
  departmentName?: string;
  statusText?: string;
  options?: {
    options?: Array<RowOptionVM<RowActionDocument>>;
  };
}
