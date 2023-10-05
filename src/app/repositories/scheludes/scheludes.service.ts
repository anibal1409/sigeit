// import { Injectable } from '@angular/core';

// import moment from 'moment';
// import {
//   finalize,
//   forkJoin,
//   map,
//   mergeMap,
//   Observable,
//   of,
//   Subject,
//   tap,
// } from 'rxjs';

// import { ListComponentService } from '../../common/memory-repository';
// import {
//   ClassroomBaseQuery,
//   ClassroomVM,
// } from '../classrooms';
// import { GetClassroomsService } from '../classrooms/use-cases';
// import {
//   DepartmentBaseQuery,
//   DepartmentVM,
// } from '../departments';
// import { GetDepartmentsService } from '../departments/use-cases';
// import { PeriodVM } from '../periods';
// import { ActivePeriodService } from '../periods/use-cases';
// import {
//   SectionBaseQuery,
//   SectionItemVM,
// } from '../sections';
// import { GetSetcionsService } from '../sections/use-cases';
// import {
//   SubjectBaseQuery,
//   SubjectItemVM,
//   SubjectVM,
// } from '../subjects';
// import {
//   FindSubjectService,
//   GetSubjectsService,
// } from '../subjects/use-cases';
// import { TeacherItemVM } from '../teachers/model';
// import { GetTeachersService } from '../teachers/use-cases';
// import { ScheduleMemoryService } from './memory/schedule-memory';
// import {
//   DayVM,
//   ScheduleBaseQuery,
//   ScheduleItemVM,
//   ScheduleVM,
// } from './model';
// import {
//   CreateScheduleService,
//   FindScheduleService,
//   GetDaysService,
//   GetSchedulesService,
//   IntervalsService,
//   RemoveScheduleService,
//   UpdateScheduleService,
// } from './use-cases';

// @Injectable()
// export class SchedulesService extends ListComponentService<ScheduleItemVM, ScheduleBaseQuery> {

//   private _changeSchedules = new Subject<boolean>();
//   teachers: Array<TeacherItemVM> = [];

//   constructor(
//     public getEntityService: GetSchedulesService,
//     public memoryEntityService: ScheduleMemoryService,
//     public createEntityService: CreateScheduleService,
//     public deleteEntityService: RemoveScheduleService,
//     public findEntityService: FindScheduleService,
//     public updateEntityService: UpdateScheduleService,
//     private intervalsService: IntervalsService,
//     private getTeachersService: GetTeachersService,
//     private getClassroomsService: GetClassroomsService,
//     private getDepartmentsService: GetDepartmentsService,
//     private getSetcionsService: GetSetcionsService,
//     private activePeriodService: ActivePeriodService,
//     private getSubjectsService: GetSubjectsService,
//     private getDaysService: GetDaysService,
//     private findSubjectService: FindSubjectService,
//   ) {
//     super(
//       getEntityService,
//       memoryEntityService,
//       deleteEntityService,
//       createEntityService,
//       updateEntityService,
//       findEntityService,
//     );
//   }

//   getDepartaments$(data: DepartmentBaseQuery): Observable<Array<DepartmentVM>> {
//     return this.getDepartmentsService.exec(data);
//   }

//   getSubjects$(data: SubjectBaseQuery): Observable<Array<SubjectVM>> {
//     return this.getSubjectsService.exec(data);
//   }

//   getSections$(data: SectionBaseQuery): Observable<Array<SectionItemVM>> {
//     return this.getSetcionsService.exec(data);
//   }

//   getTeachers$(): Observable<Array<TeacherItemVM>> {
//     return this.getTeachersService.exec()
//       .pipe(
//         tap(
//           (teachers) => this.teachers = teachers
//         )
//       )
//       ;
//   }

//   getSchedules$(data: ScheduleBaseQuery): Observable<ScheduleItemVM[]> {
//     return of();
//     this.setLoading(true);
//     return this.getEntityService.exec(data)
//       .pipe(
//         finalize(() => this.setLoading(false))
//       );
//   }

//   generateTimeIntervals(
//     startTime: string,
//     endTime: string,
//     duration: number,
//     interval: number
//   ): any[] {
//     const intervals = [];
//     let currentTime = moment(startTime, 'HH:mm');
//     const endTimeMoment = moment(endTime, 'HH:mm');

//     while (currentTime.isBefore(endTimeMoment)) {
//       intervals.push({
//         start: currentTime.format('HH:mm'),
//         end: currentTime.add(duration, 'minutes').format('HH:mm'),
//       });
//       currentTime.add(interval, 'minutes');
//     }

//     return intervals;
//   }

//   generateTimeIntervalsStartEnd(
//     startTime: string,
//     endTime: string,
//     duration: number,
//     interval: number
//   ): { start: Array<string>; end: Array<string> } {
//     const start = [],
//       end = [];
//     let currentTime = moment(startTime, 'HH:mm');
//     const endTimeMoment = moment(endTime, 'HH:mm');

//     while (currentTime.isBefore(endTimeMoment)) {
//       start.push(currentTime.format('HH:mm'));
//       end.push(currentTime.add(duration, 'minutes').format('HH:mm'));
//       currentTime.add(interval, 'minutes');
//     }

//     return { start, end };
//   }

//   getActivePeriod$(): Observable<PeriodVM> {
//     return this.activePeriodService.exec();
//   }

//   getClassrooms$(data?: ClassroomBaseQuery): Observable<Array<ClassroomVM>> {
//     return this.getClassroomsService.exec(data);
//   }

//   getDays$(): Observable<Array<DayVM>> {
//     return this.getDaysService.exec();
//   }

//   validateClassroomSchedules$(scheduleVm: ScheduleVM): Observable<any> {
//     return of([]);
//     return this.getSchedules$({
//       classroomId: scheduleVm.classroomId,
//       dayId: scheduleVm.dayId,
//       periodId: scheduleVm.periodId,
//     }).pipe(
//       mergeMap((schedules) => {
//         const collapsedSchedules = schedules.filter((schedule) => {
//           const start1 = moment(scheduleVm.start, 'HH:mm');
//           const end1 = moment(scheduleVm.end, 'HH:mm');
//           const start2 = moment(schedule.start, 'HH:mm');
//           const end2 = moment(schedule.end, 'HH:mm');
//           return start1.isSameOrBefore(end2) && end1.isSameOrAfter(start2);
//         });

//         if (collapsedSchedules.length === 0) {
//           return of([]);
//         }

//         const scheduleObservables = collapsedSchedules.map((schedule) => {
//           return this.findSubjectService
//             .exec({ id: schedule?.section?.subjectId || 0 })
//             .pipe(
//               map((subject) => {
//                 if (schedule.section) {
//                   schedule.section.subject = subject;
//                 }
//                 return schedule;
//               })
//             );
//         });

//         return forkJoin(scheduleObservables);
//       })
//     );
//   }


//   validateTeacherSchedules$(scheduleVm: ScheduleVM, teacherId: number, periodId: number): Observable<any> {
//     return of(false);
//     // return this.getSchedules$({
//     //   teacherId,
//     //   periodId,
//     //   dayId: scheduleVm.dayId,
//     // })
//     //   .pipe(
//     //     map(
//     //       (sections: Array<SectionItemVM>) => {
//     //         const start1 = moment(scheduleVm.start, 'HH:mm');
//     //         const end1 = moment(scheduleVm.end, 'HH:mm');
//     //         const collapsedSchedules = sections.filter((section) => {

//     //           return section.schedules?.filter(
//     //             (schedule) => {
//     //               const start2 = moment(schedule.start, 'HH:mm');
//     //               const end2 = moment(schedule.end, 'HH:mm');
//     //               return start1.isSameOrBefore(end2) && end1.isSameOrAfter(start2);
//     //             }
//     //           )?.length;
//     //         });

//     //         return collapsedSchedules;
//     //       }
//     //     )
//     //   );
//   }

//   changeSchedules$(): Observable<boolean> {
//     return this._changeSchedules.asObservable();
//   }

//   getSectionsSchedulesSemesterService$(departmentId: number, periodId: number): Observable<Array<SubjectItemVM>> {
//     return of([]);
//     // return this.getSectionsSchedulesSemesterService.exec(departmentId, periodId);
//   }
// }
