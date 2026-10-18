import { DocumentVM } from '../model';

export function Document2DocumentVM(document: any): DocumentVM {
  return {
    id: document?.id,
    name: document?.name ?? '',
    body: document?.body ?? '',
    signature: document?.signature ?? '',
    departmentId: document?.departmentId ?? document?.department?.id,
    type: document?.type,
    status: !!document?.status,
  };
}
