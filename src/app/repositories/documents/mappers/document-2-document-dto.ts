import { CreateDocumentDto } from 'dashboard-sdk';

import { DocumentVM } from '../model';

export function Document2DocumentDto(document: DocumentVM): CreateDocumentDto {
  return {
    name: document.name,
    type: document.type,
    body: document.body,
    signature: document.signature,
    department: { id: document.departmentId },
    status: document.status,
  };
}
