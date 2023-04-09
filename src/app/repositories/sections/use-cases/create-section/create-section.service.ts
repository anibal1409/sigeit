import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Section2SectionItemVM } from '../../mappers';
import {
  SectionItemVM,
  SectionVM,
} from '../../model';

@Injectable()
export class CreateSectionService {

  constructor(
    private http: HttpClient
  ) { }

  exec(section: SectionVM): Observable<SectionItemVM> {
    return this.http.post('http://localhost:3000/sections', section)
    .pipe(
      map(Section2SectionItemVM)
    );
  }
}
