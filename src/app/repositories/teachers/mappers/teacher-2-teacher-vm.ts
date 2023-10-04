import { TeacherVM } from '../model';

export function Teacher2TeacherVM(teacher: any): TeacherVM {
  return {
    id: teacher?.id,
    idDocument: teacher?.idDocument,
    firstName: teacher?.firstName,
    lastName: teacher?.lastName,
    email: teacher?.email,
    departmentId: teacher?.departmentId,
    status: teacher?.status,
    fullName: teacher?.lastName ? `${teacher?.lastName}, ${teacher?.firstName}` : teacher?.firstName,
  };
}
