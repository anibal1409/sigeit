import { Injectable } from '@angular/core';

import { ScheduleService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { ScheduleMemoryService } from '../../memory';

@Injectable()
export class RemoveScheduleService implements UseCase<number, number> {
  constructor(
    private entityServices: ScheduleService,
    private memoryService: ScheduleMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return this.entityServices.scheduleControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}
