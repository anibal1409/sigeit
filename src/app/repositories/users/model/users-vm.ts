import { UserRole } from './role-user';

export interface UserVM {
  id: number;
  name: string;
  idDocument: string;
  email: string;
  status: boolean | string;
  departmentId?: number;
  schoolId?: number;
  role: UserRole;
}
