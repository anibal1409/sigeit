import { Injectable } from '@angular/core';

import { DocumentService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Document2DocumentItemVM } from '../../mappers';
import { MemoryDocumentsService } from '../../memory';
import { DocumentVM } from '../../model';
import { DocumentItemVM } from '../../model/document-item-vm';

@Injectable()
export class CreateDocumentService
implements UseCase<DocumentItemVM | null, DocumentVM>
{
constructor(
  private entityServices: DocumentService,
  private memoryService: MemoryDocumentsService,
) { }

exec(entitySave: DocumentVM): Observable<DocumentItemVM | null> {
  return this.entityServices
    .documentControllerCreate({
      name: entitySave.name,
      status: !!entitySave.status,
      description: JSON.stringify(entitySave.description),
      department: {id: entitySave.departmentId},
      type: entitySave.type
    })
    .pipe(
      map(Document2DocumentItemVM),
      tap((entity) => {
        this.memoryService.create(entity);
      })
    );
}
}