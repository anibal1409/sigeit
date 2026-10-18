import { TypeDocument } from './type-document';

export interface DocumentVM {
  id: number;
  type: TypeDocument;
  name: string;
  /** Cuerpo con variables ({profesor}, {tabla}, …) */
  body: string;
  /** Firma con variables */
  signature: string;
  departmentId: number;
  status: boolean;
}
