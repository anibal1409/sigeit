import { Injectable } from '@angular/core';

import { PeriodService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common';
import { Period2PeriodItemVM } from '../../mappers';
import { PeriodMemoryService } from '../../memory';
import { PeriodItemVM } from '../../model';

@Injectable()
export class GetPeriodsService
implements UseCase<Array<PeriodItemVM> | null, BaseQuery> {

  constructor(
    private entityServices: PeriodService,
    private memoryService: PeriodMemoryService,
  ) {}

  exec(data: BaseQuery = {}): Observable<Array<PeriodItemVM>> {
    return this.entityServices.periodControllerFindAll()
    .pipe(
      map((entities: any) => entities.map(Period2PeriodItemVM)),
      tap((entity) => {
        this.memoryService.setDataSource(entity);
      })
    );
  }
}
