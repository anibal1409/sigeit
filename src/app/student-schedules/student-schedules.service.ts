import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  finalize,
  map,
  Observable,
} from 'rxjs';
import { ToastService } from 'toast';

import { CareerItemVM } from '../repositories/careers';
import { GetCareersService } from '../repositories/careers/use-cases';
import { PeriodVM } from '../repositories/periods/model';
import {
  ActivePeriodService,
  ToPlanPeriodService,
} from '../repositories/periods/use-cases';
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
import {
  InscriptionVM,
  SavedSchedule,
} from './model';
import { InscriptionBaseQuery } from './model/inscription-base-query';
import {
  CloseInscriptionService,
  CreateInscriptionService,
  DeleteInscriptionService,
  FindInscriptionService,
  GetInscriptionsService,
  GetSchedulesService,
  UpdateInscriptionService,
} from './use-cases';

@Injectable()
export class StudentSchedulesService {
  private loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private activePeriodService: ActivePeriodService,
    private toPlanPeriodService: ToPlanPeriodService,
    private getCareersService: GetCareersService,
    private getSubjectsService: GetSubjectsService,
    private getDaysService: GetDaysService,
    private getSchedulesService: GetSchedulesService,
    private intervalsService: IntervalsService,
    private createInscriptionService: CreateInscriptionService,
    private deleteInscriptionService: DeleteInscriptionService,
    private findInscriptionService: FindInscriptionService,
    private getInscriptionsService: GetInscriptionsService,
    private updateInscriptionService: UpdateInscriptionService,
    private closeInscriptionService: CloseInscriptionService,
    private toastService: ToastService,
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

  getToPlanPeriod$(): Observable<PeriodVM> {
    this.setLoading(true);
    return this.toPlanPeriodService.exec()
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

  createInscription$(data: InscriptionVM): Observable<InscriptionVM> {
    this.setLoading(true);
    return this.createInscriptionService.exec(data)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  updateInscription$(data: InscriptionVM): Observable<InscriptionVM> {
    this.setLoading(true);
    return this.updateInscriptionService.exec(data)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  findInscription$(id: number): Observable<InscriptionVM> {
    this.setLoading(true);
    return this.findInscriptionService.exec(id)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  getInscriptions$(data: InscriptionBaseQuery): Observable<Array<InscriptionVM>> {
    this.setLoading(true);
    return this.getInscriptionsService.exec(data)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  deleteInscription$(id: number): Observable<number> {
    this.setLoading(true);
    return this.deleteInscriptionService.exec(id)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  closeInscription$(ids: Array<number>): Observable<any> {
    this.setLoading(true);
    return this.closeInscriptionService.exec(ids)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  saveSchedule(name: string, sections: Array<SectionItemVM>, careerId: number, userId?: number, scheduleId?: string): boolean {
    if (sections.length === 0) {
      return false;
    }
    const key = userId ? `${userId}-${careerId}` : careerId.toString();
    const schedules = this.getSavedSchedules(careerId, userId);
    const id = (new Date()).toISOString();
    const nameSchedule = name ?  name.trim() : `Horario ${id}`;
    const schedule: SavedSchedule = {
      id: scheduleId ? scheduleId : id,
      name: nameSchedule,
      sections,
    };
    const index = schedules.findIndex(
      (schedule) => schedule.name === nameSchedule && schedule.id !== scheduleId
    );
    let res = false;

    if (index >= 0) {
      this.toastService.error('Ya existe un horario con ese nombre');
    } else {
      const indexS = schedules.findIndex(
        (schedule) => schedule.id === scheduleId
      );
      console.log(schedule);
      
      if (scheduleId) {
        schedules[indexS] = schedule;
      } else {
        schedules.push(schedule);
      }

      console.log(schedules);
      
      localStorage.setItem(key, JSON.stringify(schedules));
      res = true;
    }

    return res;
  }

  getSavedSchedules(careerId: number, userId?: number): Array<SavedSchedule> {
    const key = userId ? `${userId}-${careerId}` : careerId.toString();
    const data = localStorage.getItem(key);
    let schedules = [];
    if (data) {
      schedules = JSON.parse(data);
    }

    return schedules;
  }

  removeSavedSchedule(careerId: number, userId?: number, scheduleId?: string): boolean {
    const schedules = this.getSavedSchedules(careerId, userId);
    const index = schedules.findIndex(
      (schedule) => schedule.id === scheduleId
    );
    if (index >= 0) {
      const key = userId ? `${userId}-${careerId}` : careerId.toString();
      schedules.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(schedules));
      return true;
    }

    return false;
  }

}
