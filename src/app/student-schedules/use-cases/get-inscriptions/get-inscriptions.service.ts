import { Injectable } from '@angular/core';

import { InscriptionService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { inscription2InscriptionVM } from '../../mappers';
import { InscriptionVM } from '../../model';
import { InscriptionBaseQuery } from '../../model/inscription-base-query';

@Injectable()
export class GetInscriptionsService
implements UseCase<Array<InscriptionVM> | null, InscriptionBaseQuery> {

  constructor(
    private entityServices: InscriptionService,
  ) {}

  exec(data: InscriptionBaseQuery): Observable<Array<InscriptionVM>> {
    return this.entityServices.inscriptionControllerFindAll(
      data.periodId,
      data?.stage,
      data?.sectionId,
      data?.carrerId,
      data?.schoolId,
      data?.departmentId,
      data?.teacherId,
      data?.subjectId,
      data?.userId,
      data?.semester,
      data?.status,   
      data?.schedules,   
    )
    .pipe(
      map((entities: any) => entities.map(inscription2InscriptionVM)),
    );
  }
}
