import { Observable } from 'rxjs';
import { CareerItemVM } from './model';
import { GetCareersService } from './use-cases/get-careers.service';
import { Injectable } from '@angular/core';
@Injectable()
export class CareersService {
  constructor(private getCareersService: GetCareersService) {}

  getCareers$(): Observable<Array<CareerItemVM>> {
    return this.getCareersService.exec();
  }
}
