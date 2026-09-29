import { Injectable } from '@angular/core';

import moment from 'moment';
import {
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';

import { SubjectDemandStoreService } from '../../../../common/subject-demand';
import {
  ScheduleItemVM,
  ScheduleVM,
} from '../../model';
import { GetSchedulesService } from '../get-schedules';

export interface LevelScheduleClash {
  level: number;
  schedules: Array<ScheduleItemVM>;
}

@Injectable()
export class ValidateLevelSchedulesService {

  constructor(
    private getSchedulesService: GetSchedulesService,
    private subjectDemandStore: SubjectDemandStoreService,
  ) { }

  exec(scheduleVm: ScheduleVM, subjectId: number, periodId: number): Observable<LevelScheduleClash> {
    return this.subjectDemandStore.getSummaries$(periodId).pipe(
      switchMap((summaries) => {
        const level = summaries.get(subjectId)?.peakLevel || 0;
        if (!level) {
          return of({ level, schedules: [] });
        }
        return this.getSchedulesService.exec({ periodId, dayId: scheduleVm.dayId }, false).pipe(
          map((schedules) => {
            const start1 = moment(scheduleVm.start, 'HH:mm');
            const end1 = moment(scheduleVm.end, 'HH:mm');
            return {
              level,
              schedules: schedules.filter((schedule) => {
                const otherSubjectId = schedule.section?.subjectId || schedule.section?.subject?.id || 0;
                const start2 = moment(schedule.start, 'HH:mm');
                const end2 = moment(schedule.end, 'HH:mm');
                return otherSubjectId !== subjectId
                  && summaries.get(otherSubjectId)?.peakLevel === level
                  && start1.isBefore(end2) && end1.isAfter(start2);
              }),
            };
          })
        );
      })
    );
  }
}
