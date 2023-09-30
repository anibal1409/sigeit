import { Injectable } from '@angular/core';

import { CareerService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Career2CareerVM } from '../../mappers';
import {
  CareerBaseQuery,
  CareerItemVM,
} from '../../model';

@Injectable()
export class FindCareerService
  implements UseCase<CareerItemVM | null, CareerBaseQuery>
{
  constructor(private entityServices: CareerService) { }

  exec(data: CareerBaseQuery): Observable<CareerItemVM | null> {
    return this.entityServices
      .careerControllerFindOne(data?.id || 0)
      .pipe(map(Career2CareerVM));
  }
}