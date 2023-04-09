import { SchoolItemVM } from '../../schools';
import { DepartmentItemVM } from '../model';
import { Department2DepartmentVM } from './department-2-department-vm';

export function Department2DepartmentItemVM(
  department: any,
  schools: Array<SchoolItemVM>
): DepartmentItemVM {
  const departmentVM = Department2DepartmentVM(department);
  return {
    ...departmentVM,
    school: schools.find((school) => school.id === departmentVM.id_school),
  };
}
