import { DepartmentItemVM } from '../../departments';
import { ClassroomItemVM } from '../model';
import { Classroom2ClassroomVM } from './classroom-2-classroom-vm';

export function Classroom2ClassroomItemVM(
  classroom: any,
  departments: Array<DepartmentItemVM>
): ClassroomItemVM {
  const classroomVM = Classroom2ClassroomVM(classroom);
  return {
    ...classroomVM,
    department: departments.find(
      (department) => department.id === classroomVM.id_department
    ),
  };
}
