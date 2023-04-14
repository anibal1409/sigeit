import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';

import {
  Section2SectionItemVM,
  SectionItemVM,
} from '../../../sections';
import {
  Subject2SubjectItemVM,
  SubjectItemVM,
} from '../../../subjects';
import { Schedule2ScheduleItemVM } from '../../mappers';

@Injectable()
export class GetSectionsSchedulesSemesterService {

  constructor(private http: HttpClient) { }

  exec(departmentId: number, periodId: number): Observable<any> {
    return this.http
      .get(
        `http://localhost:3000/subjects?departmentId=${departmentId}&status=true&_sort=semester&_order=asc`
      )
      .pipe(
        map((subjects: any) => subjects.map(Subject2SubjectItemVM)),
        mergeMap(
          (subjects) => {
            const subjectsObservables = subjects.map(
              (subject: SubjectItemVM) => {
                return this.http.get(`http://localhost:3000/sections?subjectId=${subject?.id}&periodId=${periodId}&_expand=teacher`)
                  .pipe(
                    map((sections: any) => sections?.map(Section2SectionItemVM)),
                    map((sections) => {
                      subject.sections = sections;
                      return subject;
                    }),
                    mergeMap(
                      (subjectsSect: SubjectItemVM) => {
                        const scheduleObservables: Array<Observable<any>> = [];

                        (subjectsSect?.sections || []).forEach(
                          (section: SectionItemVM) => {
                            scheduleObservables.push(
                              this.http.get(`http://localhost:3000/schedules?sectionId=${section?.id}&periodId=${periodId}&_expand=classroom&_expand=day&_sort=dayId,start&_order=asc,asc`)
                                .pipe(
                                  map((schedules: any) => schedules?.map(Schedule2ScheduleItemVM)),
                                  map((schedules) => {
                                    section.schedules = schedules;
                                    return section;
                                  })
                                ));
                          }
                        );


                        return subjectsSect?.sections?.length?  forkJoin(scheduleObservables).pipe(
                          map((schedules: any[]) => {
                            subjectsSect.sections = schedules as any;
                            return subjectsSect as any; // Devolver la asignatura completa con sus secciones y horarios.
                          })
                        ) : of(subjectsSect);
                      }
                    ),
                  );
              }
            );

            return subjects?.length ? forkJoin(subjectsObservables) : of([]);
          }
        ),
        map(
          (subjects: any) => {
            const schedules: any = [];
            subjects.forEach(
              (subject: SubjectItemVM) => {
                subject.sections?.forEach(
                  (section) => {
                    section?.schedules?.forEach(
                      (schedule) => {
                        schedules.push({
                          ...subject,
                          sectionName: section.name,
                          dayName: schedule.day?.abbreviation,
                          classroomName: schedule.classroom?.name,
                          start: schedule?.start,
                          end: schedule?.end,
                          documentTeacher: section.teacher?.id_document,
                          teacherName: `${section.teacher?.last_name}, ${section.teacher?.first_name}`,
                          scheduleId: schedule.id,
                          capacity: section.capacity,
                        });
                      }
                    );
                  }
                )
              }
            )
            return schedules;
          } 
        )
      );
  }

  // exec(departmentId: number, periodId: number): Observable<any> {
  //   return this.http
  //     .get(
  //       `http://localhost:3000/subjects?departmentId=${departmentId}&status=true&_sort=semester&_order=asc`
  //     )
  //     .pipe(
  //       map((subjects: any) => subjects.map(Subject2SubjectItemVM)),
  //       mergeMap(
  //         (subjects: Array<SubjectItemVM>) => {
  //           const subjectsObservables = subjects.map(
  //             (subject: SubjectItemVM) => {
  //               return this.http.get(`http://localhost:3000/sections?subjectId=${subject?.id}&periodId=${periodId}&_expand=teacher`)
  //                 .pipe(
  //                   map((sections: any) => sections?.map(Section2SectionItemVM)),
  //                   map((sections) => {
  //                     subject.sections = sections;
  //                     return subject;
  //                   }),
  //                   concatMap(
  //                     (subjectsSect: SubjectItemVM) => {
  //                       const scheduleObservables: Array<Observable<any>> = [];
  
  //                       (subjectsSect?.sections || []).forEach(
  //                         (section: SectionItemVM) => {
  //                           scheduleObservables.push(
  //                             this.http.get(`http://localhost:3000/schedules?sectionId=${section?.id}&periodId=${periodId}&_expand=classroom&_expand=day&_sort=dayId,start&_order=asc,asc`)
  //                               .pipe(
  //                                 map((schedules: any) => schedules?.map(Schedule2ScheduleItemVM)),
  //                                 map((schedules) => {
  //                                   section.schedules = schedules;
  //                                   return section; // Devolver la sección actual en lugar del objeto de asignatura completo
  //                                 })
  //                               ));
  //                         }
  //                       );
  
  //                       return forkJoin(scheduleObservables).pipe(
  //                         map((schedules: any[]) => {
  //                           subjectsSect.sections = schedules as any;
  //                           return subjectsSect as any; // Devolver la asignatura completa con sus secciones y horarios.
  //                         })
  //                       );
  //                     }
  //                   ),
  //                 );
  //             }
  //           );
  
  //           return subjects?.length ? forkJoin(subjectsObservables) : of([]);
  //         }
  //       ),
  //       map((subjects: SubjectItemVM[]) => {
  //         // Podrías hacer algún procesamiento adicional aquí si es necesario.
  //         return subjects;
  //       })
  //     );
  // }
}
