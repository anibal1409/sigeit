import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  forkJoin,
  map,
  mergeMap,
  Observable,
} from 'rxjs';

import {
  Section2SectionItemVM,
  SectionItemVM,
} from '../../../sections';
import { Schedule2ScheduleItemVM } from '../../mappers';
import { ScheduleVM } from '../../model';

@Injectable()
export class GetTeacherSectionsService {

  constructor(
    private http: HttpClient
  ) { }

  exec(scheduleVm: ScheduleVM, teacherId: number, periodId: number): Observable<any> {
    return this.http.get(`http://localhost:3000/sections?teacherId=${teacherId}&periodId=${periodId}&_expand=subject&&_expand=teacher`)
      .pipe(
        map((sections: any) => sections.map(Section2SectionItemVM)),
        mergeMap(
          (sections) => {
            const scheduleObservables = sections.map(
              (section: SectionItemVM) => {
                return this.http.get(`http://localhost:3000/schedules?sectionId=${section?.id}&periodId=${periodId}&dayId=${scheduleVm.dayId}&_expand=classroom&_expand=day`)
                .pipe(
                  map((schedules: any) => schedules?.map(Schedule2ScheduleItemVM)),
                  map((schedules) => {
                    section.schedules = schedules;
                    return section;
                  })
                );
              }
            );

            return forkJoin(scheduleObservables);
          }
        ),
      );
  }
}
