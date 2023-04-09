import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

@Injectable()
export class RemoveSectionService {

  constructor(
    private http: HttpClient
  ) { }

  exec(sectionId: number): Observable<number> {
    return this.http.delete(`http://localhost:3000/sections/${sectionId}`)
    .pipe(
      map((data) => 1)
    );
  }
}
