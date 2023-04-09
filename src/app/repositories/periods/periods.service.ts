import { Observable } from 'rxjs';
import { GetPeriodsService } from './use-cases';
import { PeriodItemVM } from './model';
import { Injectable } from '@angular/core';

@Injectable()
export class PeriodsService {
  constructor(private getPeriodsService: GetPeriodsService) {}

  getPeriods$(): Observable<Array<PeriodItemVM>> {
    return this.getPeriodsService.exec();
  }
}
