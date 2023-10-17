import { Injectable } from '@angular/core';

import { DocumentService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { MemoryDocumentsService } from '../../memory';

@Injectable()
export class DeleteDocumentService implements UseCase<number, number> {
  constructor(
    private entityServices: DocumentService,
    private memoryService: MemoryDocumentsService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.documentControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
