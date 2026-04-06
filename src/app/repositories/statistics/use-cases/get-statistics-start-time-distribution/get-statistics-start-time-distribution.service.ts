import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StartTimeSlotItemDto2StartTimeSlotStatItemVM } from '../../mappers';
import {
  StartTimeSlotStatItemVM,
  StatisticsClassroomOptionalQuery,
} from '../../model';

@Injectable()
export class GetStatisticsStartTimeDistributionService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(
    data: StatisticsClassroomOptionalQuery,
  ): Observable<Array<StartTimeSlotStatItemVM>> {
    return this.statisticsService
      .statisticsControllerStartTimeDistribution(data.periodId, data.classroomId)
      .pipe(
        map((list) =>
          (list || []).map(StartTimeSlotItemDto2StartTimeSlotStatItemVM),
        ),
      );
  }
}
