import { Department2DepartmentVM } from '../../departments';
import { ClassroomItemVM } from '../model';
import { Classroom2ClassroomVM } from './classroom-2-classroom-vm';

export function Classroom2ClassroomItemVM(classroom: any): ClassroomItemVM {
  const classroomVM = Classroom2ClassroomVM(classroom);
  return {
    ...classroomVM,
    type:
      classroom.type == 'CLASSROOM'
        ? 'Aula'
        : classroom.type == 'LAB'
        ? 'Laboratorio'
        : 'Aula Virtual',
    department: Department2DepartmentVM(classroom?.department),
  };
}
