import { Injectable } from '@angular/core';

import { StatisticsService } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TimelineItemDto2TimelineStatItemVM } from '../../mappers';
import { TimelineStatItemVM } from '../../model';

@Injectable()
export class GetStatisticsTimelineService {
  constructor(
    private readonly statisticsService: StatisticsService,
  ) {}

  exec(): Observable<Array<TimelineStatItemVM>> {
    return this.statisticsService.statisticsControllerTimeline().pipe(
      map((list) => (list || []).map(TimelineItemDto2TimelineStatItemVM)),
    );
  }
}
