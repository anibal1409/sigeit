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
import {
  DocumentBaseQuery,
  DocumentItemVM,
} from '../../model';

@Injectable()
export class GetDocumentsService
  implements UseCase<Array<DocumentItemVM> | null, DocumentBaseQuery> {

  constructor(
    private entityServices: DocumentService,
    private memoryService: MemoryDocumentsService,
  ) { }

  exec(data: DocumentBaseQuery = {}): Observable<Array<DocumentItemVM>> {
    return this.entityServices.documentControllerFindAll()
      .pipe(
        map((entities: any) => entities.map(Document2DocumentItemVM)),
        tap((entity) => {
          this.memoryService.setDataSource(entity);
        })
      );
  }
}