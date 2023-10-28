import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  finalize,
  Observable,
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
  ValidateClassroomSchedulesService,
  ValidateTeacherSchedulesService,
} from './use-cases';

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
    private validateClassroomSchedulesService: ValidateClassroomSchedulesService,
    private validateTeacherSchedulesService: ValidateTeacherSchedulesService,
    private getPlannedSchedulesService: GetPlannedSchedulesService,
    private http: HttpClient,
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

  validateClassroomSchedules$(scheduleVm: ScheduleVM): Observable<any> {
    return this.validateClassroomSchedulesService.exec(scheduleVm);
  }

  validateTeacherSchedules$(scheduleVm: ScheduleVM, teacherId: number, periodId: number): Observable<Array<ScheduleItemVM>> {
    return this.validateTeacherSchedulesService.exec(scheduleVm, teacherId, periodId);
  }

  getPlannedSchedules$(data: ScheduleBaseQuery): Observable<any> {
    return this.getPlannedSchedulesService.exec(data);
  }

  getFile(path: string): Promise<Blob | undefined> {
    return this.http.get(path, { responseType: 'blob' }).toPromise();
  }

}
