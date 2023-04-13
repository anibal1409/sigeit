import { Department2DepartmentVM } from '../../departments';
import { TeacherItemVM } from '../model';
import { Teacher2TeacherVM } from './teacher-2-teacher-vm';

export function Teacher2TeacherItemVM(teacher: any): TeacherItemVM {
  const teacherVM = Teacher2TeacherVM(teacher);
  return {
    ...teacherVM,
    department: Department2DepartmentVM(teacher?.department),
    status: teacher?.status ? 'Activo' : 'Inactivo',
  };
}
