import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  finalize,
  map,
  Observable,
} from 'rxjs';

import { CareerItemVM } from '../repositories/careers';
import { GetCareersService } from '../repositories/careers/use-cases';
import { PeriodVM } from '../repositories/periods/model';
import { ActivePeriodService } from '../repositories/periods/use-cases';
import {
  DayVM,
  Intervals,
  ScheduleBaseQuery,
  ScheduleItemVM,
} from '../repositories/schedules';
import {
  GetDaysService,
  IntervalsService,
} from '../repositories/schedules/use-cases';
import {
  SectionItemVM,
  SectionVM,
} from '../repositories/sections';
import {
  SubjectBaseQuery,
  SubjectItemVM,
} from '../repositories/subjects';
import { GetSubjectsService } from '../repositories/subjects/use-cases';
import { GetSchedulesService } from './use-cases';

@Injectable()
export class StudentSchedulesService {
  private loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private activePeriodService: ActivePeriodService,
    private getCareersService: GetCareersService,
    private getSubjectsService: GetSubjectsService,
    private getDaysService: GetDaysService,
    private getSchedulesService: GetSchedulesService,
    private intervalsService: IntervalsService,
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

  getCareers$(): Observable<Array<CareerItemVM>> {
    this.setLoading(true);
    return this.getCareersService.exec({
      status: true,
    })
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  getSubjects$(data: SubjectBaseQuery): Observable<Array<SubjectItemVM>> {
    this.setLoading(true);
    return this.getSubjectsService.exec(data, false)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  getDays$(): Observable<Array<DayVM>> {
    return this.getDaysService.exec();
  }

  getSectionWithSchedules$(data: ScheduleBaseQuery): Observable<Array<SectionVM>> {
    this.setLoading(true);
    return this.getSchedulesService.exec(data, false)
      .pipe(
        finalize(() => this.setLoading(false)),
        map(
          (schedules) => {
            const sections = new Map<number, SectionItemVM>();
            schedules.forEach(
              (schedule: ScheduleItemVM) => {
                if (!sections.has(schedule.section?.id || 0)) {
                  const section: SectionItemVM = {
                    ...schedule.section,
                    schedules: [schedule],
                  } as any;
                  sections.set(section.id || 0, section);
                } else {
                  const section = sections.get(schedule.section?.id || 0) as any;
                  section.schedules.push(schedule);
                }
              }
            );

            return Array.from(sections.values());
          }
        ),
      );
  }

  intervals(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number,
  ): Intervals {
    return this.intervalsService.exec(startTime, endTime, duration, interval);
  }

}
