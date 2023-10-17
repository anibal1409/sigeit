import { Department2DepartmentItemVM } from '../../departments';
import { DocumentItemVM } from '../model';
import { Document2DocumentVM } from './document-2-document-vm';

export function Document2DocumentItemVM(document: any): DocumentItemVM {
  const documentVM = Document2DocumentVM(document);
  const department = Department2DepartmentItemVM(document?.department);
  return {
    ...documentVM,
    department,
    status: document?.status ? 'Activo' : 'Inactivo',
  };
}
