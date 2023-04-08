import { RowOptionVM } from '../../../common';
import { RowActionUser } from './row-action';

export interface UserVM {
  id?: number;
  firstName: string;
  lastName: string;
  id_document: number;
  email: string;
  role?: string;
  permissions: [any];
  birthday_date: Date | string;
  status: boolean | string;
  options?: {
    options?: Array<RowOptionVM<RowActionUser>>;
  };
}
