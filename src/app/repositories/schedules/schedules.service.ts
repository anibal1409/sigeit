import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

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
import { ActivePeriodService } from '../periods/use-cases';
import {
  SectionBaseQuery,
  SectionItemVM,
} from '../sections';
import { GetSetcionsService } from '../sections/use-cases';
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
    private getSetcionsService: GetSetcionsService,
    private getClassroomsService: GetClassroomsService,
    private getDaysService: GetDaysService,
    private intervalsService: IntervalsService,
    private validateClassroomSchedulesService: ValidateClassroomSchedulesService,
    private validateTeacherSchedulesService: ValidateTeacherSchedulesService,
    private getPlannedSchedulesService: GetPlannedSchedulesService,
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
    return this.getSubjectsService.exec(data, false);
  }

  getTeachers$(data: TeacherBaseQuery): Observable<Array<TeacherItemVM>> {
    return this.getTeachersService.exec(data, false);
  }

  getActivePeriod$(): Observable<PeriodVM> {
    return this.activePeriodService.exec();
  }

  getSections$(data: SectionBaseQuery): Observable<Array<SectionItemVM>> {
    return this.getSetcionsService.exec(data, false);
  }

  getClassrooms$(data?: ClassroomBaseQuery): Observable<Array<ClassroomItemVM>> {
    return this.getClassroomsService.exec(data, false);
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
    return this.getEntityService.exec(data, false);
  }

  validateClassroomSchedules$(scheduleVm: ScheduleVM): Observable<any> {
    return this.validateClassroomSchedulesService.exec(scheduleVm);
  }

  validateTeacherSchedules$(scheduleVm: ScheduleVM, teacherId: number, periodId: number): Observable<Array<ScheduleItemVM>> {
    return this.validateTeacherSchedulesService.exec(scheduleVm, teacherId, periodId);
  }

  GetPlannedSchedules$(data: ScheduleBaseQuery): Observable<any> {
    return this.getPlannedSchedulesService.exec(data);
  }

}
