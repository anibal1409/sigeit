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
export class UpdateSchoolService
  implements UseCase<SchoolItemVM | null, SchoolVM>
{
  constructor(
    private schoolService: SchoolService,
    private memoryService: SchoolMemoryService,
  ) { }

  exec(schoolSave: SchoolVM): Observable<SchoolItemVM | null> {
    return this.schoolService
      .schoolControllerUpdate({
        name: schoolSave.name,
        status: !!schoolSave.status,
        logo: schoolSave.logo,
        description: schoolSave.description,
        abbreviation: schoolSave.abbreviation,
      }, schoolSave.id || 0)
      .pipe(
        map(School2SchoolItemVM),
        tap((school) => {
          this.memoryService.update(school);
        })
      );
  }
}