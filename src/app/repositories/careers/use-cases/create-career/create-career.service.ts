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
  CareerItemVM,
  CareerVM,
} from '../../model';

@Injectable()
export class CreateCareerService
implements UseCase<CareerItemVM | null, CareerVM>
{
constructor(
  private entityServices: CareerService,
  private memoryService: CareerMemoryService,
) { }

exec(entitySave: CareerVM): Observable<CareerItemVM | null> {
  return this.entityServices
    .careerControllerCreate({
      name: entitySave.name,
      status: !!entitySave.status,
      description: entitySave.description,
      abbreviation: entitySave.abbreviation,
      department: {id: entitySave.departmentId},
    })
    .pipe(
      map(Career2CareerItemVM),
      tap((entity) => {
        this.memoryService.create(entity);
      })
    );
}
}