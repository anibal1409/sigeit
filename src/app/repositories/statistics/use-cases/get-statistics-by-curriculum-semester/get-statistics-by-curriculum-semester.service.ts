import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CurriculumSemesterStatItemDto2CurriculumSemesterStatItemVM } from '../../mappers';
import {
  CurriculumSemesterStatItemVM,
  StatisticsPeriodIdQuery,
} from '../../model';

@Injectable()
export class GetStatisticsByCurriculumSemesterService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(
    data: StatisticsPeriodIdQuery,
  ): Observable<Array<CurriculumSemesterStatItemVM>> {
    return this.statisticsService
      .statisticsControllerByCurriculumSemester(data.periodId)
      .pipe(
        map((list) =>
          (list || []).map(
            CurriculumSemesterStatItemDto2CurriculumSemesterStatItemVM,
          ),
        ),
      );
  }
}
