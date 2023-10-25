import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  finalize,
  Observable,
} from 'rxjs';

import { PeriodVM } from '../../periods';
import { ActivePeriodService } from '../../periods/use-cases';
import {
  DayVM,
  Intervals,
  ScheduleBaseQuery,
  ScheduleItemVM,
} from '../../schedules/model';
import {
  GetDaysService,
  GetSchedulesService,
  IntervalsService,
} from '../../schedules/use-cases';
import {
  SectionBaseQuery,
  SectionItemVM,
} from '../../sections/model';
import { GetSectionsService } from '../../sections/use-cases';

@Injectable()
export class AcademicChargeTeacherService {
  private loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private activePeriodService: ActivePeriodService,
    private getDaysService: GetDaysService,
    private getSchedulesService: GetSchedulesService,
    private intervalsService: IntervalsService,
    public getSectionsService: GetSectionsService,
  ) { }

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(loading: boolean): void {
    this.loading$.next(loading);
  }

  getActivePeriod$(): Observable<PeriodVM> {
    this.setLoading(true);
    return this.activePeriodService.exec()
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }
  
  getDays$(): Observable<Array<DayVM>> {
    return this.getDaysService.exec();
  }

  intervals(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number,
  ): Intervals {
    return this.intervalsService.exec(startTime, endTime, duration, interval);
  }

  getSchedules$(data: ScheduleBaseQuery): Observable<Array<ScheduleItemVM>> {
    this.setLoading(true);
    return this.getSchedulesService.exec(data, false)
    .pipe(
      finalize(() => this.setLoading(false))
    );
  }
  
  getSections$(data: SectionBaseQuery): Observable<Array<SectionItemVM>> {
    return this.getSectionsService.exec(data, false);
  }
}
