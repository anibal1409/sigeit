import { Injectable } from '@angular/core';

import { DocumentService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Document2DocumentVM } from '../../mappers';
import {
  DocumentBaseQuery,
  DocumentVM,
} from '../../model';

@Injectable()
export class FindDocumentService
  implements UseCase<DocumentVM | null, DocumentBaseQuery>
{
  constructor(private entityServices: DocumentService) { }

  exec(data: DocumentBaseQuery): Observable<DocumentVM> {
    return this.entityServices
      .documentControllerFindOne(data?.id || 0)
      .pipe(map(Document2DocumentVM));
  }
}