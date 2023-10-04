import { Injectable } from '@angular/core';

import { SectionService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Section2SectionVM } from '../../mappers';
import {
  SectionBaseQuery,
  SectionVM,
} from '../../model';

@Injectable()
export class FindSectionService
  implements UseCase<SectionVM | null, SectionBaseQuery>
{
  constructor(private entityServices: SectionService) { }

  exec(data: SectionBaseQuery): Observable<SectionVM> {
    return this.entityServices
      .sectionControllerFindOne(data?.id || 0)
      .pipe(map(Section2SectionVM));
  }
}
