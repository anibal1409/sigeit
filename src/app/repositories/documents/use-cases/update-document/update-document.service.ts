import { Injectable } from '@angular/core';

import { DocumentService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import {
  Document2DocumentDto,
  Document2DocumentItemVM,
} from '../../mappers';
import { MemoryDocumentsService } from '../../memory';
import {
  DocumentItemVM,
  DocumentVM,
} from '../../model';

@Injectable()
export class UpdateDocumentService
  implements UseCase<DocumentItemVM | null, DocumentVM>
{
  constructor(
    private entityServices: DocumentService,
    private memoryService: MemoryDocumentsService,
  ) { }

  exec(entitySave: DocumentVM): Observable<DocumentItemVM | null> {
    return this.entityServices
      .documentControllerUpdate(entitySave.id || 0, Document2DocumentDto(entitySave))
      .pipe(
        map(Document2DocumentItemVM),
        tap((entity) => {
          this.memoryService.update(entity);
        })
      );
  }
}