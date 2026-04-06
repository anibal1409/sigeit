import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SectionOpenDistributionItemDto2SectionOpenStatItemVM } from '../../mappers';
import {
  SectionOpenStatItemVM,
  StatisticsPeriodIdQuery,
} from '../../model';

@Injectable()
export class GetStatisticsSectionOpenDistributionService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(
    data: StatisticsPeriodIdQuery,
  ): Observable<Array<SectionOpenStatItemVM>> {
    return this.statisticsService
      .statisticsControllerSectionOpenDistribution(data.periodId)
      .pipe(
        map((list) =>
          (list || []).map(SectionOpenDistributionItemDto2SectionOpenStatItemVM),
        ),
      );
  }
}
