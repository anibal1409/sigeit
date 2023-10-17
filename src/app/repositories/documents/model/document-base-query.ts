import { BaseQuery } from '../../../common';
import { TypeDocument } from './type-document';

export interface DocumentBaseQuery  extends BaseQuery {
  departmentId?: number;
  type?: TypeDocument;
}
