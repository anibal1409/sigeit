import { Injectable } from '@angular/core';

import {
  BaseQuery,
  ListComponentService,
} from '../../common/memory-repository';
import { IntervalsService } from '../scheludes/use-cases/intervals';
import { PeriodMemoryService } from './memory';
import { PeriodItemVM } from './model';
import {
  CreatePeriodService,
  DeletePeriodService,
  FindPeriodService,
  GetPeriodsService,
  UpdatePeriodService,
} from './use-cases';

@Injectable()
export class PeriodsService extends ListComponentService<PeriodItemVM, BaseQuery> {
  constructor(
    public getEntityService: GetPeriodsService,
    public memoryEntityService: PeriodMemoryService,
    public createEntityService: CreatePeriodService,
    public deleteEntityService: DeletePeriodService,
    public findEntityService: FindPeriodService,
    public updateEntityService: UpdatePeriodService,
    private intervalsService: IntervalsService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }

  generateIntervals(
    startTime: string = '07:00',
    endTime: string = '23:59',
    duration: number = 45,
    interval: number = 5,
  ): any {
    return this.intervalsService.exec(startTime, endTime, duration, interval); 
  }
}
