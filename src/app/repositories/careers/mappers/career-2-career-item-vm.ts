import { Department2DepartmentVM } from '../../departments';
import { CareerItemVM } from '../model';
import { Career2CareerVM } from './career-2-career-vm';

export function Career2CareerItemVM(career: any): CareerItemVM {
  const careerVM = Career2CareerVM(career);
  return {
    ...careerVM,
    department: Department2DepartmentVM(career?.department),
    status: career?.status ? 'Activo' : 'Inactivo',
  };
}
