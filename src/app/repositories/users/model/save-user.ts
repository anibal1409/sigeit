import { UserRole } from './role-user';

export interface SaveUser {
  email: string;
  role: UserRole;
  idDocument: string;
  name: string;
  lastName?: string;
  firstName?: string;
  teacherId?: number;
  status: boolean;
  school?: number;
  department?: number;
  careerId?: number;
  id?: number;
}
