import { DepartmentItemVM } from '../../departments';
import { TeacherItemVM } from '../model';
import { Teacher2TeacherVM } from './teacher-2-teacher-vm';

export function Teacher2TeacherItemVM(
  teacher: any,
  departments: Array<DepartmentItemVM>
): TeacherItemVM {
  const teacherVM = Teacher2TeacherVM(teacher);
  return {
    ...teacherVM,
    department: departments.find(
      (department) => department.id === teacherVM.id_department
    ),
  };
}
