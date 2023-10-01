import { TeacherVM } from '../model';

export function Teacher2TeacherVM(Teacher: any): TeacherVM {
  return {
    id: Teacher?.id,
    idDocument: Teacher?.idDocument,
    firstName: Teacher?.firstName,
    lastName: Teacher?.lastName,
    email: Teacher?.email,
    departmentId: Teacher?.departmentId,
    status: Teacher?.status,
  };
}
