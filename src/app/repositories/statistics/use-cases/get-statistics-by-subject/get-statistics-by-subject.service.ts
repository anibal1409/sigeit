import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SubjectStatItemDto2SubjectStatItemVM } from '../../mappers';
import {
  StatisticsPeriodIdQuery,
  SubjectStatItemVM,
} from '../../model';

@Injectable()
export class GetStatisticsBySubjectService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(data: StatisticsPeriodIdQuery): Observable<Array<SubjectStatItemVM>> {
    return this.statisticsService.statisticsControllerBySubject(data.periodId).pipe(
      map((list) => (list || []).map(SubjectStatItemDto2SubjectStatItemVM)),
    );
  }
}
