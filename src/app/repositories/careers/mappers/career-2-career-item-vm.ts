import { DepartmentItemVM } from '../../departments';
import { CareerItemVM } from '../model';
import { Career2CareerVM } from './career-2-career-vm';

export function Career2CareerItemVM(
  career: any,
  departments: Array<DepartmentItemVM>
): CareerItemVM {
  const careerVM = Career2CareerVM(career);
  return {
    ...careerVM,
    department: departments.find(
      (department) => department.id === careerVM.id_department
    ),
  };
}
