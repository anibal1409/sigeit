import {
  DocumentItemVM,
  TYPE_DOCUMENT_LABELS,
} from '../model';
import { Document2DocumentVM } from './document-2-document-vm';

export function Document2DocumentItemVM(document: any): DocumentItemVM {
  const documentVM = Document2DocumentVM(document);
  return {
    ...documentVM,
    typeText: TYPE_DOCUMENT_LABELS[documentVM.type] ?? documentVM.type,
    departmentName: document?.department?.name ?? '',
    statusText: documentVM.status ? 'Activo' : 'Inactivo',
  };
}
