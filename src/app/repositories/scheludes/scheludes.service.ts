import { Injectable } from '@angular/core';

import moment from 'moment';
import { Observable } from 'rxjs';

import {
  ClassroomVM,
  GetClassroomsService,
} from '../classrooms';
import { DepartmentVM } from '../departments';
import {
  FindPeriodService,
  PeriodVM,
} from '../periods';
import {
  GetDepartamentsBySchoolService,
  GetSubjectsByDepartmentService,
  GetSubjectSectionsService,
  SectionItemVM,
} from '../sections';
import { SubjectVM } from '../subjects';
import {
  GetTeachersService,
  TeacherItemVM,
} from '../teachers';
import {
  DayVM,
  ScheduleItemVM,
  ScheduleVM,
} from './model';
import {
  CreateScheduleService,
  FindScheduleService,
  GetDaysService,
  GetSectionsSchedulesService,
  RemoveScheduleService,
  UpdateScheduleService,
} from './use-cases';

@Injectable()
export class SchedulesService {

  constructor(
    private getDepartamentsService: GetDepartamentsBySchoolService,
    private getSubjectsService: GetSubjectsByDepartmentService,
    private getSubjectSectionsService: GetSubjectSectionsService,
    private getTeachersService: GetTeachersService,
    private findPeriodService: FindPeriodService,
    private getSectionsSchedulesService: GetSectionsSchedulesService,
    private createScheduleService: CreateScheduleService,
    private findScheduleService: FindScheduleService,
    private removeScheduleService: RemoveScheduleService,
    private updateScheduleService: UpdateScheduleService,
    private getClassroomsService: GetClassroomsService,
    private getDaysService: GetDaysService
  ) { }

  getDepartaments$(idSchool: number): Observable<Array<DepartmentVM>> {
    return this.getDepartamentsService.exec(idSchool);
  }

  getSubjects$(departmentId: number, semester: number): Observable<Array<SubjectVM>> {
    return this.getSubjectsService.exec(departmentId, semester);
  }

  getSections$(subjectId: number, periodId: number): Observable<Array<SectionItemVM>> {
    return this.getSubjectSectionsService.exec(subjectId, periodId);
  }

  getTeachers$(): Observable<Array<TeacherItemVM>> {
    return this.getTeachersService.exec();
  }

  createSchedule$(schedule: ScheduleVM): Observable<ScheduleItemVM> {
    return this.createScheduleService.exec(schedule);
  }

  findSchedule$(scheduleId: number): Observable<ScheduleVM> {
    return this.findScheduleService.exec(scheduleId);
  }

  updateSchedule$(schedule: ScheduleVM): Observable<ScheduleItemVM> {
    return this.updateScheduleService.exec(schedule);
  }

  removeSchedule$(scheduleId: number): Observable<number> {
    return this.removeScheduleService.exec(scheduleId);
  }

  generateTimeIntervals(startTime: string, endTime: string, duration: number, interval: number): any[] {
    const intervals = [];
    let currentTime = moment(startTime, 'HH:mm');
    const endTimeMoment = moment(endTime, 'HH:mm');

    while (currentTime.isBefore(endTimeMoment)) {
      intervals.push({
        start: currentTime.format('HH:mm'),
        end: currentTime.add(duration, 'minutes').format('HH:mm')
      });
      currentTime.add(interval, 'minutes');
    }

    return intervals;
  }

  generateTimeIntervalsStartEnd(startTime: string, endTime: string, duration: number, interval: number): {start: Array<string>; end: Array<string>} {
    const start = [], end = [];
    let currentTime = moment(startTime, 'HH:mm');
    const endTimeMoment = moment(endTime, 'HH:mm');

    while (currentTime.isBefore(endTimeMoment)) {
      start.push(currentTime.format('HH:mm'));
      end.push(currentTime.add(duration, 'minutes').format('HH:mm'));
      currentTime.add(interval, 'minutes');
    }

    return { start, end };
  }

  findPeriod$(periodId: number): Observable<PeriodVM> {
    return this.findPeriodService.exec(periodId);
  }

  getSectionSchedules$(sectionId: number): Observable<Array<ScheduleItemVM>> {
    return this.getSectionsSchedulesService.exec(sectionId);
  }

  getClassrooms$(): Observable<Array<ClassroomVM>> {
    return this.getClassroomsService.exec();
  }

  getDays$(): Observable<Array<DayVM>> {
    return this.getDaysService.exec();
  }
}
