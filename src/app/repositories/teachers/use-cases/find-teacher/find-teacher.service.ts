import { Injectable } from '@angular/core';

import { TeacherService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Teacher2TeacherVM } from '../../mappers';
import {
  TeacherBaseQuery,
  TeacherItemVM,
} from '../../model';

@Injectable()
export class FindTeacherService
  implements UseCase<TeacherItemVM | null, TeacherBaseQuery>
{
  constructor(private entityServices: TeacherService) { }

  exec(data: TeacherBaseQuery): Observable<TeacherItemVM> {
    return this.entityServices
      .teacherControllerFindOne(data?.id || 0)
      .pipe(map(Teacher2TeacherVM));
  }
}