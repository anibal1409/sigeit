import { TypeDocument } from './type-document';

export interface DocumentVM {
  id: number;
  type: TypeDocument;
  name: string;
  description: string;
  departmentId: number;
  status: string | boolean;
}
