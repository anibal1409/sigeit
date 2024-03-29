import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';

import { Subject2SubjectItemVM } from '../../../subjects';
import { TeacherItemVM } from '../../../teachers';
import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleItemVM } from '../../model';

@Injectable()
export class GetAllClassroomSchedulesService {
  constructor(private http: HttpClient) {}

  exec(classroomId: number, periodId: number, teachers: Array<TeacherItemVM>): Observable<any> {
    return this.http
      .get(
        `http://localhost:3000/schedules?classroomId=${classroomId}&periodId=${periodId}&_expand=day&_expand=section&_expand=classroom`
      )
      .pipe(
        map((schedules: any) => schedules.map(Schedule2ScheduleItemVM)),
        mergeMap(
          (schudules) => {
            console.log(schudules);
            schudules = schudules.filter((x: ScheduleItemVM) => !!x?.section?.subjectId);
            
            let scheduleObservables;
            if (schudules?.length) {
              scheduleObservables = schudules?.map(
                (schedule: ScheduleItemVM) => {
                  console.log(schedule?.section?.subjectId, schedule);
                  
                  return this.http.get(`http://localhost:3000/subjects/${schedule?.section?.subjectId}`)
                  .pipe(
                    map((Subject2SubjectItemVM)),
                    map((subject) => {
                      if (schedule.section) {
                        schedule.section.subject = subject;
                        schedule.section.teacher =  teachers.find(teacher => teacher.id === schedule.section?.teacherId);
                      }
                      return schedule;
                    })
                  );
                }
              );
            }

            return schudules?.length ? forkJoin(scheduleObservables) as any : of([]);
          }
        ),
      );
  }
}
