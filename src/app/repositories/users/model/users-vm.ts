import { RowOptionVM } from '../../../common';
import { RowActionUser } from './row-action';

export interface UserVM {
  id: number;
  firstName: string;
  lastName: string;
  idDocument: number;
  email: string;
  status: boolean | string;
  birthdayDate: Date | string;
  password: string;
  departmentId: number;
  role: string;
  options?: {
    options?: Array<RowOptionVM<RowActionUser>>;
  };
}
