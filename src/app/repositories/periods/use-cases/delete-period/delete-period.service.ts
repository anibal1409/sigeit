import { Injectable } from '@angular/core';

import { PeriodService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { PeriodMemoryService } from '../../memory';

@Injectable()
export class DeletePeriodService implements UseCase<number, number> {
  constructor(
    private entityServices: PeriodService,
    private memoryService: PeriodMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.periodControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
