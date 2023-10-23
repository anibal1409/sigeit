import { Injectable } from '@angular/core';

import { InscriptionService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';

@Injectable()
export class DeleteInscriptionService implements UseCase<number, number> {
  constructor(
    private entityServices: InscriptionService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.inscriptionControllerRemove(id).pipe(
      map(() => 1),
    );
  }
}
