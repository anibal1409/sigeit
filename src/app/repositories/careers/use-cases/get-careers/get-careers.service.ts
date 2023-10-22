import { Injectable } from '@angular/core';

import { CareerService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Career2CareerItemVM } from '../../mappers';
import { CareerMemoryService } from '../../memory';
import {
  CareerBaseQuery,
  CareerItemVM,
} from '../../model';

@Injectable()
export class GetCareersService
  implements UseCase<Array<CareerItemVM> | null, CareerBaseQuery> {

  constructor(
    private entityServices: CareerService,
    private memoryService: CareerMemoryService,
  ) { }

  exec(data: CareerBaseQuery = {}): Observable<Array<CareerItemVM>> {
    return this.entityServices.careerControllerFindAll(
      data?.schoolId,
      data?.departmentId,
      data?.status,
    )
      .pipe(
        map((entities: any) => entities.map(Career2CareerItemVM)),
        tap((entity) => {
          this.memoryService.setDataSource(entity);
        })
      );
  }
}
