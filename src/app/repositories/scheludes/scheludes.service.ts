import { Injectable } from '@angular/core';
import { GetScheludesService } from './use-cases';
import { Observable } from 'rxjs';
import { ScheludeItemVM } from './model';

@Injectable()
export class ScheludesService {
  constructor(private getScheludesService: GetScheludesService) {}

  getScheludes$(): Observable<Array<ScheludeItemVM>> {
    return this.getScheludesService.exec();
  }
}
