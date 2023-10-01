import { Injectable } from '@angular/core';

import { PeriodService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Period2PeriodItemVM } from '../../mappers';
import { PeriodMemoryService } from '../../memory';
import {
  PeriodItemVM,
  PeriodVM,
} from '../../model';

@Injectable()
export class UpdatePeriodService
implements UseCase<PeriodItemVM | null, PeriodVM>
{
constructor(
  private entityServices: PeriodService,
  private memoryService: PeriodMemoryService,
) { }

exec(entitySave: PeriodVM): Observable<PeriodItemVM | null> {
  return this.entityServices
    .periodControllerUpdate({
      name: entitySave.name,
      status: !!entitySave.status,
      description: entitySave.description,
      duration: entitySave.duration,
      end: new Date(entitySave.end),
      start: new Date(entitySave.start),
      endTime: entitySave.end_time,
      startTime: entitySave.start_time,
      interval: entitySave.interval,
      stage: entitySave.stage as any,
    }, entitySave.id || 0)
    .pipe(
      map(Period2PeriodItemVM),
      tap((entity) => {
        this.memoryService.update(entity);
      })
    );
}
}
