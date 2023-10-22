import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  finalize,
  Observable,
} from 'rxjs';

import { CareerItemVM } from '../../repositories/careers';
import { GetCareersService } from '../../repositories/careers/use-cases';
import { SaveUser } from '../../repositories/users';
import { CreateUserStudentService } from '../use-cases';

@Injectable()
export class SignUpService {
  private loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private getCareersService: GetCareersService,
    private createUserStudentService: CreateUserStudentService,
  ) { }

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(loading: boolean): void {
    this.loading$.next(loading);
  }

  getCareers$(): Observable<Array<CareerItemVM>> {
    this.setLoading(true);
    return this.getCareersService.exec()
      .pipe(
        finalize(() => this.setLoading(false))
      );
  }

  createStudent(data: SaveUser): Observable<number> {
    this.setLoading(true);
    return this.createUserStudentService.exec(data)
    .pipe(
      finalize(() => this.setLoading(false))
    );
  }
}
