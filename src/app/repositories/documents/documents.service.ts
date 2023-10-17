import { Injectable } from '@angular/core';

import { ListComponentService } from '../../common/memory-repository';
import { MemoryDocumentsService } from './memory/memory-documents';
import {
  DocumentBaseQuery,
  DocumentItemVM,
} from './model';
import { CreateDocumentService } from './use-cases/create-document';
import { DeleteDocumentService } from './use-cases/delete-document';
import { FindDocumentService } from './use-cases/find-document';
import { GetDocumentsService } from './use-cases/get-documents';
import { UpdateDocumentService } from './use-cases/update-document';

@Injectable()
export class DocumentsFileService extends ListComponentService<DocumentItemVM, DocumentBaseQuery> {
  constructor(
    public getEntityService: GetDocumentsService,
    public memoryEntityService: MemoryDocumentsService,
    public createEntityService: CreateDocumentService,
    public deleteEntityService: DeleteDocumentService,
    public findEntityService: FindDocumentService,
    public updateEntityService: UpdateDocumentService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }
}
