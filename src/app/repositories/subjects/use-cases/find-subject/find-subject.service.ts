import { Injectable } from '@angular/core';

import { SubjectService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Subject2SubjectVM } from '../../mappers';
import {
  SubjectBaseQuery,
  SubjectItemVM,
} from '../../model';

@Injectable()
export class FindSubjectService
  implements UseCase<SubjectItemVM | null, SubjectBaseQuery>
{
  constructor(private entityServices: SubjectService) { }

  exec(data: SubjectBaseQuery): Observable<SubjectItemVM> {
    return this.entityServices
      .subjectControllerFindOne(data?.id || 0)
      .pipe(map(Subject2SubjectVM));
  }
}