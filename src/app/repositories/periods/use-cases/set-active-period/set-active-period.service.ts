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
import { PeriodItemVM } from '../../model';

@Injectable()
export class SetActivePeriodService
  implements UseCase<PeriodItemVM | null, number>
{
  constructor(
    private entityServices: PeriodService,
    private memoryService: PeriodMemoryService,
  ) {}

  exec(id: number): Observable<PeriodItemVM | null> {
    return this.entityServices.periodControllerSetActive(id).pipe(
      map(Period2PeriodItemVM),
      tap((entity) => {
        const current = this.memoryService.getDataSource() || [];
        const updated = current.map((period) => {
          const isActive = period.id === entity.id;
          return {
            ...period,
            ...(isActive ? entity : {}),
            isActive,
            isActiveText: isActive ? 'Sí' : 'No',
          };
        });
        this.memoryService.setDataSource(updated);
      }),
    );
  }
}
