import { ClassroomVM } from '../model';

export function Classroom2ClassroomVM(Classroom: any): ClassroomVM {
  return {
    id: Classroom?.id,
    name: Classroom?.name,
    type: Classroom?.type,
    departmentIds: Classroom?.departmentIds,
    status: Classroom?.status,
  };
}
