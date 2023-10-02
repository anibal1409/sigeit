import { UserVM } from '../model';

export function User2UserVM(user: any): UserVM {
  return {
    id: user.id,
    name: user.name,
    idDocument: user.idDocument,
    email: user.email,
    status: user.status,
    departmentId: user.departmentId,
    schoolId: user.schoolId,
    role: user.role,
  };
}
