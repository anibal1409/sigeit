import { Injectable } from '@angular/core';

import moment from 'moment';
import { Observable } from 'rxjs';

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
import { ScheduleItemVM } from './model';
import {
  CreateScheduleService,
  FindScheduleService,
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
    private ppdateScheduleService: UpdateScheduleService,
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

  // createSchedule$(section: SectionVM): Observable<SectionItemVM> {
  //   return this.createSectionService.exec(section);
  // }

  // findSchedule$(sectionId: number): Observable<SectionVM> {
  //   return this.findSectionService.exec(sectionId);
  // }

  // updateSchedule$(section: SectionVM): Observable<SectionItemVM> {
  //   return this.updateSectionService.exec(section);
  // }

  // removeSchedule$(sectionId: number): Observable<number> {
  //   return this.removeSectionService.exec(sectionId);
  // }

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

  findPeriod$(periodId: number): Observable<PeriodVM> {
    return this.findPeriodService.exec(periodId);
  }

  getSectionSchedules$(sectionId: number): Observable<Array<ScheduleItemVM>> {
    return this.getSectionsSchedulesService.exec(sectionId);
  }
}
