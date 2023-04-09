import { TeacherVM } from '../model';

export function Teacher2TeacherVM(Teacher: any): TeacherVM {
  return {
    id: Teacher?.id,
    id_document: Teacher?.id_document,
    first_name: Teacher?.first_name,
    last_name: Teacher?.last_name,
    email: Teacher?.email,
    id_department: Teacher?.id_department,
    status: Teacher?.status,
  };
}
