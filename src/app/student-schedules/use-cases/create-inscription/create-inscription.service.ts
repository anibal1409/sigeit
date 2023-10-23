import { Injectable } from '@angular/core';

import { InscriptionService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { inscription2InscriptionVM } from '../../mappers';
import { InscriptionVM } from '../../model';

@Injectable()
export class CreateInscriptionService
  implements UseCase<InscriptionVM | null, InscriptionVM>
{
  constructor(
    private entityServices: InscriptionService,
  ) { }

  exec(entitySave: InscriptionVM): Observable<InscriptionVM> {
    return this.entityServices
      .inscriptionControllerCreate({
        section: { id: entitySave.sectionId },
        stage: entitySave.stage,
        user: { id: entitySave.userId },
        status: true,
      })
      .pipe(
        map(inscription2InscriptionVM),
      );
  }
}
