import { Injectable } from '@angular/core';

import { CareerService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import {
  capitalize,
  UseCase,
} from '../../../../common';
import { Career2CareerItemVM } from '../../mappers';
import { CareerMemoryService } from '../../memory';
import {
  CareerItemVM,
  CareerVM,
} from '../../model';

@Injectable()
export class UpdateCareerService 
implements UseCase<CareerItemVM | null, CareerVM>
{
constructor(
  private entityServices: CareerService,
  private memoryService: CareerMemoryService,
) { }

exec(entitySave: CareerVM): Observable<CareerItemVM | null> {
  return this.entityServices
    .careerControllerUpdate({
      name: capitalize(entitySave.name),
      status: !!entitySave.status,
      description: entitySave.description,
      abbreviation: entitySave.abbreviation,
      department: {id: entitySave.departmentId},
    }, entitySave.id || 0)
    .pipe(
      map(Career2CareerItemVM),
      tap((entity) => {
        this.memoryService.update(entity);
      })
    );
}
}
