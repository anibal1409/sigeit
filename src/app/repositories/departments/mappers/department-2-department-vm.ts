import { DepartmentVM } from '../model';

export function Department2DepartmentVM(department: any): DepartmentVM {
  return {
    abbreviation: department?.abbreviation,
    id_school: department?.id_school,
    logo: department?.logo,
    name: department?.name,
    status: department?.status,
    description: department?.description,
    id: department?.id,
  };
}