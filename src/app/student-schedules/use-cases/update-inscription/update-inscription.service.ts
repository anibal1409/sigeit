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
      .inscriptionControllerUpdate(entitySave.id || 0, {
        stage: entitySave.stage,
        section: { id: entitySave.sectionId },
        user: { id: entitySave.userId }
      })
      .pipe(
        map(inscription2InscriptionVM),
      );
  }
}
