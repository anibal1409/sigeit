import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Section2SectionVM } from '../../mappers';
import { SectionVM } from '../../model';

@Injectable()
export class FindSectionService {

  constructor(
    private http: HttpClient
  ) { }

  exec(sectionId: number): Observable<SectionVM> {
    return this.http.get(`http://localhost:3000/sections/${sectionId}`)
    .pipe(
      map(Section2SectionVM)
    );
  }
}
