import { Injectable } from '@angular/core';

import moment from 'moment';
import {
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  Subject,
  tap,
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
import {
  SubjectItemVM,
  SubjectVM,
} from '../subjects';
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
  GetAllClassroomSchedulesService,
  GetAllDaySchedulesService,
  GetClassroomScheduleService,
  GetDaysService,
  GetSectionsSchedulesSemesterService,
  GetSectionsSchedulesService,
  GetSubjectSchedulesService,
  GetTeacherSectionsService,
  RemoveScheduleService,
  UpdateScheduleService,
} from './use-cases';

@Injectable()
export class SchedulesService {

  private _changeSchedules = new Subject<boolean>();

  constructor(
    private getDepartamentsService: GetDepartamentsBySchoolService,
    private getSubjectsByDepartmentService: GetSubjectsByDepartmentService,
    private getSubjectSectionsService: GetSubjectSectionsService,
    private getTeachersService: GetTeachersService,
    private findPeriodService: FindPeriodService,
    private getSectionsSchedulesService: GetSectionsSchedulesService,
    private getSubjectSchedules: GetSubjectSchedulesService,
    private createScheduleService: CreateScheduleService,
    private findScheduleService: FindScheduleService,
    private removeScheduleService: RemoveScheduleService,
    private updateScheduleService: UpdateScheduleService,
    private getClassroomsService: GetClassroomsService,
    private getDaysService: GetDaysService,
    private getClassroomScheduleService: GetClassroomScheduleService,
    private findSubjectService: FindSubjectService,
    private getTeacherSectionsService: GetTeacherSectionsService,
    private getAllClassroomSechedulesService: GetAllClassroomSchedulesService,
    private getAllDaySchedulesService: GetAllDaySchedulesService,
    private getSectionsSchedulesSemesterService: GetSectionsSchedulesSemesterService,
  ) { }

  getDepartaments$(idSchool: number): Observable<Array<DepartmentVM>> {
    return this.getDepartamentsService.exec(idSchool);
  }

  getSubjects$(
    departmentId: number,
    semester: number
  ): Observable<Array<SubjectVM>> {
    return this.getSubjectsByDepartmentService.exec(departmentId, semester);
  }

  getSections$(
    subjectId: number,
    periodId: number
  ): Observable<Array<SectionItemVM>> {
    return this.getSubjectSectionsService.exec(subjectId, periodId);
  }

  getTeachers$(): Observable<Array<TeacherItemVM>> {
    return this.getTeachersService.exec();
  }

  createSchedule$(schedule: ScheduleVM): Observable<ScheduleItemVM> {
    return this.createScheduleService.exec(schedule)
      .pipe(
        tap(() => this.setChangeSchedule())
      );
  }

  findSchedule$(scheduleId: number): Observable<ScheduleVM> {
    return this.findScheduleService.exec(scheduleId);
  }

  updateSchedule$(schedule: ScheduleVM): Observable<ScheduleItemVM> {
    return this.updateScheduleService.exec(schedule)
      .pipe(
        tap(() => this.setChangeSchedule())
      );
  }

  removeSchedule$(scheduleId: number): Observable<number> {
    return this.removeScheduleService.exec(scheduleId)
      .pipe(
        tap(() => this.setChangeSchedule())
      );
  }

  getSubjectSchedules$(subjectId: number, periodId: number): Observable<ScheduleItemVM[]> {
    return this.getSubjectSchedules.exec(subjectId, periodId);
  }

  getAllClassroomSchedules$(classroomId: number, periodId: number): Observable<ScheduleItemVM[]> {
    return this.getAllClassroomSechedulesService.exec(classroomId, periodId);
  }

  getAllDaySchedules$(dayId: number, periodId: number): Observable<ScheduleItemVM[]> {
    return this.getAllDaySchedulesService.exec(dayId, periodId);
  }

  generateTimeIntervals(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number
  ): any[] {
    const intervals = [];
    let currentTime = moment(startTime, 'HH:mm');
    const endTimeMoment = moment(endTime, 'HH:mm');

    while (currentTime.isBefore(endTimeMoment)) {
      intervals.push({
        start: currentTime.format('HH:mm'),
        end: currentTime.add(duration, 'minutes').format('HH:mm'),
      });
      currentTime.add(interval, 'minutes');
    }

    return intervals;
  }

  generateTimeIntervalsStartEnd(
    startTime: string,
    endTime: string,
    duration: number,
    interval: number
  ): { start: Array<string>; end: Array<string> } {
    const start = [],
      end = [];
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

  validateClassroomSchedules$(scheduleVm: ScheduleVM): Observable<any> {
    return this.getClassroomScheduleService.exec(scheduleVm).pipe(
      mergeMap((schedules) => {
        const collapsedSchedules = schedules.filter((schedule) => {
          const start1 = moment(scheduleVm.start, 'HH:mm');
          const end1 = moment(scheduleVm.end, 'HH:mm');
          const start2 = moment(schedule.start, 'HH:mm');
          const end2 = moment(schedule.end, 'HH:mm');
          return start1.isSameOrBefore(end2) && end1.isSameOrAfter(start2);
        });

        if (collapsedSchedules.length === 0) {
          return of([]);
        }

        const scheduleObservables = collapsedSchedules.map((schedule) => {
          return this.findSubjectService
            .exec(schedule?.section?.subjectId || 0)
            .pipe(
              map((subject) => {
                if (schedule.section) {
                  schedule.section.subject = subject;
                }
                return schedule;
              })
            );
        });

        return forkJoin(scheduleObservables);
      })
    );
  }


  validateTeacherSchedules$(scheduleVm: ScheduleVM, teacherId: number, periodId: number): Observable<any> {
    return this.getTeacherSectionsService.exec(scheduleVm, teacherId, periodId)
      .pipe(
        map(
          (sections: Array<SectionItemVM>) => {
            const start1 = moment(scheduleVm.start, 'HH:mm');
            const end1 = moment(scheduleVm.end, 'HH:mm');
            const collapsedSchedules = sections.filter((section) => {

              return section.schedules?.filter(
                (schedule) => {
                  const start2 = moment(schedule.start, 'HH:mm');
                  const end2 = moment(schedule.end, 'HH:mm');
                  return start1.isSameOrBefore(end2) && end1.isSameOrAfter(start2);
                }
              )?.length;
            });

            return collapsedSchedules;
          }
        )
      );
  }

  private setChangeSchedule(): void {
    this._changeSchedules.next(true);
  }

  changeSchedules$(): Observable<boolean> {
    return this._changeSchedules.asObservable();
  }

  getSectionsSchedulesSemesterService$(departmentId: number, periodId: number): Observable<Array<SubjectItemVM>> {
    return this.getSectionsSchedulesSemesterService.exec(departmentId, periodId);
  }
}
