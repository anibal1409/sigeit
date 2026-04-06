import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CareerSectionStatItemDto2CareerSectionStatItemVM } from '../../mappers';
import {
  CareerSectionStatItemVM,
  StatisticsPeriodIdQuery,
} from '../../model';

@Injectable()
export class GetStatisticsByCareerService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(
    data: StatisticsPeriodIdQuery,
  ): Observable<Array<CareerSectionStatItemVM>> {
    return this.statisticsService.statisticsControllerByCareer(data.periodId).pipe(
      map((list) =>
        (list || []).map(CareerSectionStatItemDto2CareerSectionStatItemVM),
      ),
    );
  }
}
