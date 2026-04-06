import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TeacherWorkloadItemDto2TeacherWorkloadStatItemVM } from '../../mappers';
import {
  StatisticsPeriodIdQuery,
  TeacherWorkloadStatItemVM,
} from '../../model';

@Injectable()
export class GetStatisticsTeacherWorkloadService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(
    data: StatisticsPeriodIdQuery,
  ): Observable<Array<TeacherWorkloadStatItemVM>> {
    return this.statisticsService
      .statisticsControllerTeacherWorkload(data.periodId)
      .pipe(
        map((list) =>
          (list || []).map(TeacherWorkloadItemDto2TeacherWorkloadStatItemVM),
        ),
      );
  }
}
