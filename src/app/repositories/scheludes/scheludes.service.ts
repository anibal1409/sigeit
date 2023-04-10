import { Injectable } from '@angular/core';

import moment from 'moment';
import {
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';

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
import { FindSubjectService } from '../subjects/use-cases';
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
  GetClassroomScheduleService,
  GetDaysService,
  GetSectionsSchedulesService,
  RemoveScheduleService,
  UpdateScheduleService,
} from './use-cases';

@Injectable()
export class SchedulesService {

  constructor(
    private getDepartamentsService: GetDepartamentsBySchoolService,
    private GetSubjectsByDepartmentService: GetSubjectsByDepartmentService,
    private getSubjectSectionsService: GetSubjectSectionsService,
    private getTeachersService: GetTeachersService,
    private findPeriodService: FindPeriodService,
    private getSectionsSchedulesService: GetSectionsSchedulesService,
    private createScheduleService: CreateScheduleService,
    private findScheduleService: FindScheduleService,
    private removeScheduleService: RemoveScheduleService,
    private updateScheduleService: UpdateScheduleService,
    private getClassroomsService: GetClassroomsService,
    private getDaysService: GetDaysService,
    private getClassroomScheduleService: GetClassroomScheduleService,
    private findSubjectService: FindSubjectService,
  ) { }

  getDepartaments$(idSchool: number): Observable<Array<DepartmentVM>> {
    return this.getDepartamentsService.exec(idSchool);
  }

  getSubjects$(departmentId: number, semester: number): Observable<Array<SubjectVM>> {
    return this.GetSubjectsByDepartmentService.exec(departmentId, semester);
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

  getClassrooms$(departmentId?: number): Observable<Array<ClassroomVM>> {
    return this.getClassroomsService.exec(departmentId);
  }

  getDays$(): Observable<Array<DayVM>> {
    return this.getDaysService.exec();
  }

  // validateClassroomSchedules$(scheduleVm: ScheduleVM): Observable<any> {
  //   return this.getClassroomScheduleService.exec(scheduleVm)
  //   .pipe(
  //     map(
  //       (schedules) => {
  //         console.log(schedules);
  //         const horariosEnChoque = schedules.filter(schedule => {
  //           const start1 = moment(scheduleVm.start, 'HH:mm');
  //           const end1 = moment(scheduleVm.end, 'HH:mm');
  //           const start2 = moment(schedule.start, 'HH:mm');
  //           const end2 = moment(schedule.end, 'HH:mm');
  //           return start1.isSameOrBefore(end2) && end1.isSameOrAfter(start2);
  //         });
          
  //         const horasEnChoque = horariosEnChoque.map(horario => {
  //           const start = moment.max(moment(horario.start, 'HH:mm'), moment(scheduleVm.start, 'HH:mm'));
  //           const end = moment.min(moment(horario.end, 'HH:mm'), moment(scheduleVm.end, 'HH:mm'));
  //           return `${start.format('HH:mm')} - ${end.format('HH:mm')}`;
  //         });

  //         console.log(horariosEnChoque);
          
          
  //         console.log(`Horas en choque: ${horasEnChoque}`);
  //         return horariosEnChoque;
  //       }
  //     )
  //   )
  // }

  validateClassroomSchedules$(scheduleVm: ScheduleVM): Observable<any> {
    return this.getClassroomScheduleService.exec(scheduleVm)
    .pipe(
      mergeMap(
        (schedules) => {
          const horariosEnChoque = schedules.filter(schedule => {
            const start1 = moment(scheduleVm.start, 'HH:mm');
            const end1 = moment(scheduleVm.end, 'HH:mm');
            const start2 = moment(schedule.start, 'HH:mm');
            const end2 = moment(schedule.end, 'HH:mm');
            return start1.isSameOrBefore(end2) && end1.isSameOrAfter(start2);
          });
  
          if (horariosEnChoque.length === 0) {
            return of([]);
          }
  
          const scheduleObservables = horariosEnChoque.map(schedule => {
            return this.findSubjectService.exec(schedule?.section?.subjectId || 0).pipe(
              map(subject => {
                if (schedule.section) {
                  schedule.section.subject = subject
                }
                return schedule;
              })
            );
          });
  
          return forkJoin(scheduleObservables);
        }
      )
    );
  }
}
