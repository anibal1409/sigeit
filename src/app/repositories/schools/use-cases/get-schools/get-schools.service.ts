import { Injectable } from '@angular/core';

import { SchoolService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../../common';
import { School2SchoolItemVM } from '../../mappers';
import { SchoolMemoryService } from '../../memory';
import { SchoolItemVM } from '../../model';

@Injectable()
export class GetSchoolsService
implements UseCase<Array<SchoolItemVM> | null, BaseQuery> {

  constructor(
    private schoolService: SchoolService,
    private memoryService: SchoolMemoryService,
  ) {}

  exec(): Observable<Array<SchoolItemVM>> {
    return this.schoolService.schoolControllerFindAll()
    .pipe(
      map((schools: any) => schools.map(School2SchoolItemVM)),
      tap((schools) => {
        this.memoryService.setDataSource(schools);
      })
    );
  }
}
