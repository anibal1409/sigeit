import { Injectable } from '@angular/core';

import { DayService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { Day2DayVM } from '../../mappers';
import { DayVM } from '../../model';

@Injectable()
export class GetDaysService {

  constructor(
    private entityServices: DayService,
  ) { }

  exec(): Observable<Array<DayVM>> {
    return this.entityServices.dayControllerFindAll()
      .pipe(
        map((entities: any) => entities.map(Day2DayVM)),
      );
  }
}
