import { RowOptionVM } from '../../../common';
import { RowActionUser } from './row-action';

export interface UserVM {
  id: number;
  first_name: string;
  last_name: string;
  id_document: number;
  email: string;
  status: boolean | string;
  birthday_date: Date | string;
  password: string;
  id_department: number;
  role: string;
  options?: {
    options?: Array<RowOptionVM<RowActionUser>>;
  };
}
