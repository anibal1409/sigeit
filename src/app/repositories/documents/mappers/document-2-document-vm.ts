import { DocumentVM } from '../model';

export function Document2DocumentVM(document: any): DocumentVM {
  return {
    name: document?.name,
    id: document?.id,
    description: JSON.parse(document?.description),
    departmentId: document?.departmentId,
    type: document?.type,
    status: document?.status,
  };
}
