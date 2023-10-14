import { Injectable } from '@angular/core';

import { SchoolService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { School2SchoolItemVM } from '../../mappers';
import { SchoolMemoryService } from '../../memory';
import {
  SchoolItemVM,
  SchoolVM,
} from '../../model';

@Injectable()
export class CreateSchoolService
  implements UseCase<SchoolItemVM | null, SchoolVM>
{
  constructor(
    private schoolService: SchoolService,
    private memoryService: SchoolMemoryService,
  ) { }

  exec(schoolSave: SchoolVM): Observable<SchoolItemVM | null> {
      return this.schoolService
        .schoolControllerCreate({
          abbreviation: schoolSave.abbreviation,
          name: schoolSave.name,
          status: !!schoolSave.status,
          logo: schoolSave.logo,
          description: schoolSave.description,
        })
      .pipe(
        map(School2SchoolItemVM),
        tap((school) => {
          this.memoryService.create(school);
        })
      );
  }
}
