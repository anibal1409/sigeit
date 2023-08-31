import { Injectable } from '@angular/core';

import { SchoolService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common';
import { School2SchoolVM } from '../../mappers';
import {
  SchoolItemVM,
  SchoolVM,
} from '../../model';

@Injectable()
export class FindSchoolService
  implements UseCase<SchoolItemVM | null, BaseQuery>
{
  constructor(private schoolService: SchoolService) { }

  exec(data: BaseQuery): Observable<SchoolVM | null> {
    return this.schoolService
      .schoolControllerFindOne(data?.id || 0)
      .pipe(map(School2SchoolVM));
  }
}
