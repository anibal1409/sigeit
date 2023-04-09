import { ClassroomVM } from '../model';

export function Classroom2ClassroomVM(Classroom: any): ClassroomVM {
  return {
    id: Classroom?.id,
    name: Classroom.name,
    type: Classroom.type,
    id_department: Classroom.id_department,
    status: Classroom.status,
  };
}
