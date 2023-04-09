import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Career2CareerItemVM } from '../mappers';
import { CareerItemVM } from '../model';

@Injectable()
export class GetCareersService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  exec(): Observable<Array<CareerItemVM>> {
    return this.httpClient.get('http://localhost:3000/careers?_expand=department')
    .pipe(
      map((careers: any) => careers.map(Career2CareerItemVM))
    );
  }
}
