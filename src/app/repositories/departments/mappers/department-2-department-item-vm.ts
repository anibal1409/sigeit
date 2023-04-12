import { School2SchoolVM } from '../../schools';
import { DepartmentItemVM } from '../model';
import { Department2DepartmentVM } from './department-2-department-vm';

export function Department2DepartmentItemVM(department: any): DepartmentItemVM {
  const departmentVM = Department2DepartmentVM(department);
  return {
    ...departmentVM,
    school: School2SchoolVM(department?.school),
    status: department?.status ? 'Activo' : 'Inactivo',
  };
}
