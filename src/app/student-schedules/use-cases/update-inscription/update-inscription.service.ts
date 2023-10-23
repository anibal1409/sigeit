import { Injectable } from '@angular/core';

import { InscriptionService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../common';
import { inscription2InscriptionVM } from '../../mappers';
import { InscriptionVM } from '../../model';

@Injectable()
export class UpdateInscriptionService
  implements UseCase<InscriptionVM | null, InscriptionVM>
{
  constructor(
    private entityServices: InscriptionService,
  ) { }

  exec(entitySave: InscriptionVM): Observable<InscriptionVM> {
    return this.entityServices
      .inscriptionControllerUpdate({
        stage: entitySave.stage,
        section: { id: entitySave.sectionId },
        user: { id: entitySave.userId }
      }, entitySave.id || 0)
      .pipe(
        map(inscription2InscriptionVM),
      );
  }
}
