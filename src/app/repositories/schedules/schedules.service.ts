import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  DayConflictsDto,
  FreeSlotDto,
  PeriodAuditDto,
  ScheduleService as ScheduleApiService,
} from 'dashboard-sdk';
import {
  finalize,
  map,
  Observable,
  tap,
} from 'rxjs';

import { ListComponentService } from '../../common/memory-repository';
import {
  ClassroomBaseQuery,
  ClassroomItemVM,
} from '../classrooms/model';
import { GetClassroomsService } from '../classrooms/use-cases';
import {
  DepartmentBaseQuery,
  DepartmentItemVM,
} from '../departments/model';
import { GetDepartmentsService } from '../departments/use-cases';
import { PeriodVM } from '../periods/model';
import {
  ActivePeriodService,
  ToPlanPeriodService,
} from '../periods/use-cases';
import {
  SectionBaseQuery,
  SectionItemVM,
} from '../sections';
import { GetSectionsService } from '../sections/use-cases';
import {
  SubjectBaseQuery,
  SubjectVM,
} from '../subjects/model';
import { GetSubjectsService } from '../subjects/use-cases';
import {
  TeacherBaseQuery,
  TeacherItemVM,
} from '../teachers/model';
import { GetTeachersService } from '../teachers/use-cases';
import { Schedule2ScheduleItemVM } from './mappers';
import { ScheduleMemoryService } from './memory';
import {
  DayVM,
  Intervals,
  IntervalsSelect,
  ScheduleBaseQuery,
  ScheduleItemVM,
  ScheduleVM,
} from './model';
import {
  CreateScheduleService,
  DeleteScheduleService,
  FindScheduleService,
  GetDaysService,
  GetPlannedSchedulesService,
  GetSchedulesService,
  IntervalsService,
  UpdateScheduleService,
} from './use-cases';

/** Parámetros para buscar bloques libres de una sección. */
export interface FreeSlotsQuery {
  periodId: number;
  sectionId: number;
  hours: number;
  dayId?: number;
  allClassrooms?: boolean;
  excludeId?: number;
}

@Injectable()
export class SchedulesService extends ListComponentService<ScheduleItemVM, ScheduleBaseQuery> {

  constructor(
    public getEntityService: GetSchedulesService,
    public memoryEntityService: ScheduleMemoryService,
    public createEntityService: CreateScheduleService,
    public deleteEntityService: DeleteScheduleService,
    public findEntityService: FindScheduleService,
    public updateEntityService: UpdateScheduleService,
    private getDepartmentsService: GetDepartmentsService,
    private getTeachersService: GetTeachersService,
    private getSubjectsService: GetSubjectsService,
    private activePeriodService: ActivePeriodService,
    private toPlanPeriodService: ToPlanPeriodService,
    private getSetcionsService: GetSectionsService,
    private getClassroomsService: GetClassroomsService,
    private getDaysService: GetDaysService,
    private intervalsService: IntervalsService,
    private getPlannedSchedulesService: GetPlannedSchedulesService,
    private http: HttpClient,
    private scheduleApi: ScheduleApiService,
  ) {
    super(
      getEntityService,
      memoryEntityService,
      deleteEntityService,
      createEntityService,
      updateEntityService,
      findEntityService,
    );
  }

  getDepartaments$(data: DepartmentBaseQuery): Observable<Array<DepartmentItemVM>> {
    return this.getDepartmentsService.exec(data, false);
  }

  getSubjects$(data: SubjectBaseQuery): Observable<Array<SubjectVM>> {
    this.setLoading(true);
    return this.getSubjectsService.exec(data, false)
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  getTeachers$(data: TeacherBaseQuery): Observable<Array<TeacherItemVM>> {
    this.setLoading(true);
    return this.getTeachersService.exec(data, false)
    .pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getActivePeriod$(): Observable<PeriodVM> {
    return this.activePeriodService.exec();
  }

  getToPlanPeriod$(): Observable<PeriodVM> {
    this.setLoading(true);
    return this.toPlanPeriodService.exec()
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  getSections$(data: SectionBaseQuery): Observable<Array<SectionItemVM>> {
    this.setLoading(true);
    return this.getSetcionsService.exec(data, false)
    .pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getClassrooms$(data?: ClassroomBaseQuery): Observable<Array<ClassroomItemVM>> {
    this.setLoading(true);
    return this.getClassroomsService.exec(data, false)
    .pipe(
      finalize(() => this.setLoading(false))
    );
  }

  getDays$(): Observable<Array<DayVM>> {
    return this.getDaysService.exec();
  }

  generateTimeIntervalsStartEndSelect(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number,
  ): IntervalsSelect {
    return this.intervalsService.execSelect(startTime, endTime, duration, interval);
  }

  generateTimeIntervalsStartEnd(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number,
  ): Intervals {
    return this.intervalsService.exec(startTime, endTime, duration, interval);
  }

  getSchedules$(data: ScheduleBaseQuery): Observable<Array<ScheduleItemVM>> {
    this.setLoading(true);
    return this.getEntityService.exec(data, false)
    .pipe(
      finalize(() => this.setLoading(false))
    );
  }

  /** Choques (aula, profesor, nivel) del bloque en cada uno de los días indicados. */
  getConflicts$(schedule: ScheduleVM, dayIds: Array<number>): Observable<Array<DayConflictsDto>> {
    return this.scheduleApi.scheduleControllerFindConflicts(
      schedule.periodId,
      dayIds,
      schedule.start,
      schedule.end,
      schedule.classroomId,
      schedule.sectionId,
      schedule.id || undefined,
    );
  }

  /** Crea el mismo bloque en varios días (todo o nada) y lo agrega al listado. */
  createBulk$(schedule: ScheduleVM, dayIds: Array<number>): Observable<Array<ScheduleItemVM>> {
    this.setLoading(true);
    return this.scheduleApi
      .scheduleControllerCreateBulk({
        status: !!schedule.status,
        classroom: { id: schedule.classroomId },
        section: { id: schedule.sectionId },
        period: { id: schedule.periodId },
        start: schedule.start,
        end: schedule.end,
        dayIds,
        force: schedule.force,
      })
      .pipe(
        map((items) => items.map(Schedule2ScheduleItemVM)),
        tap((items) => items.forEach((item) => this.memoryEntityService.create(item))),
        finalize(() => this.setLoading(false))
      );
  }

  getFreeSlots$(query: FreeSlotsQuery): Observable<Array<FreeSlotDto>> {
    return this.scheduleApi.scheduleControllerFindFreeSlots(
      query.periodId,
      query.sectionId,
      query.hours,
      query.dayId || undefined,
      query.allClassrooms,
      query.excludeId || undefined,
    );
  }

  getAudit$(periodId: number, departmentId?: number): Observable<PeriodAuditDto> {
    this.setLoading(true);
    return this.scheduleApi
      .scheduleControllerAudit(periodId, departmentId || undefined)
      .pipe(finalize(() => this.setLoading(false)));
  }

  getPlannedSchedules$(data: ScheduleBaseQuery): Observable<any> {
    return this.getPlannedSchedulesService.exec(data);
  }

  getFile(path: string): Promise<Blob | undefined> {
    return this.http.get(path, { responseType: 'blob' }).toPromise();
  }

}
