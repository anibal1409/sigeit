import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

@Injectable()
export class DeleteTeacherService {

  constructor(
    private http: HttpClient
  ) { }

  exec(teacherId: number): Observable<number> {
    return this.http.delete(`http://localhost:3000/teachers/${teacherId}`)
    .pipe(
      map((data) => 1)
    );
  }
}
