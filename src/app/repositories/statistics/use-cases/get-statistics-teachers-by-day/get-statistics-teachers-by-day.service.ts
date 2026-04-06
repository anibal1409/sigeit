import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TeachersByDayResponseDto2TeachersByDayResponseVM } from '../../mappers';
import {
  StatisticsPeriodIdQuery,
  TeachersByDayResponseVM,
} from '../../model';

@Injectable()
export class GetStatisticsTeachersByDayService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(data: StatisticsPeriodIdQuery): Observable<TeachersByDayResponseVM> {
    return this.statisticsService
      .statisticsControllerTeachersByDay(data.periodId)
      .pipe(map(TeachersByDayResponseDto2TeachersByDayResponseVM));
  }
}
