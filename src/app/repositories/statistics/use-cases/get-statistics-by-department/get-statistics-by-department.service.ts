import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DepartmentStatItemDto2DepartmentStatItemVM } from '../../mappers';
import {
  DepartmentStatItemVM,
  StatisticsPeriodIdQuery,
} from '../../model';

@Injectable()
export class GetStatisticsByDepartmentService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(
    data: StatisticsPeriodIdQuery,
  ): Observable<Array<DepartmentStatItemVM>> {
    return this.statisticsService
      .statisticsControllerByDepartment(data.periodId)
      .pipe(
        map((list) =>
          (list || []).map(DepartmentStatItemDto2DepartmentStatItemVM),
        ),
      );
  }
}
