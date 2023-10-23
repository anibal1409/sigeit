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
export class FindInscriptionService
  implements UseCase<InscriptionVM | null, number>
{
  constructor(private entityServices: InscriptionService) { }

  exec(id: number): Observable<InscriptionVM> {
    return this.entityServices
      .inscriptionControllerFindOne(id)
      .pipe(map(inscription2InscriptionVM));
  }
}
