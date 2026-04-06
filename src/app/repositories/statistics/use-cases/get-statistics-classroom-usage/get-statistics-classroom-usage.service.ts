import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ClassroomUsageItemDto2ClassroomUsageStatItemVM } from '../../mappers';
import {
  ClassroomUsageStatItemVM,
  StatisticsClassroomOptionalQuery,
} from '../../model';

@Injectable()
export class GetStatisticsClassroomUsageService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(
    data: StatisticsClassroomOptionalQuery,
  ): Observable<Array<ClassroomUsageStatItemVM>> {
    return this.statisticsService
      .statisticsControllerClassroomUsage(data.periodId, data.classroomId)
      .pipe(
        map((list) =>
          (list || []).map(ClassroomUsageItemDto2ClassroomUsageStatItemVM),
        ),
      );
  }
}
