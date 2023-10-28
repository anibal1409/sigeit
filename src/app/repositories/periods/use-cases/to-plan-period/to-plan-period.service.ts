import { Injectable } from '@angular/core';

import { PeriodService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common/memory-repository';
import { Period2PeriodVM } from '../../mappers';
import { PeriodItemVM } from '../../model';

@Injectable()
export class ToPlanPeriodService
  implements UseCase<PeriodItemVM | null, BaseQuery>
{
  constructor(private entityServices: PeriodService) { }

  exec(data?: BaseQuery): Observable<PeriodItemVM> {
    return this.entityServices
      .periodControllerFindToPlan()
      .pipe(map(Period2PeriodVM));
  }
}