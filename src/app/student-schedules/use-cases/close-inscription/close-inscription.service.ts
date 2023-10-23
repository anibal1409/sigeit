import { Injectable } from '@angular/core';

import { InscriptionService } from 'dashboard-sdk';
import { Observable } from 'rxjs';

@Injectable()
export class CloseInscriptionService {
  constructor(
    private entityServices: InscriptionService,
  ) { }

  exec(ids: Array<number>): Observable<any> {
    return this.entityServices
      .inscriptionControllerClose({
        ids,
      });
  }
}
