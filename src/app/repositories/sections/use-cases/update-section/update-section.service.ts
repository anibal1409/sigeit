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
export class UpdateSectionService {

  constructor(
    private http: HttpClient
  ) { }

  exec(section: SectionVM): Observable<SectionItemVM> {
    return this.http.put(`http://localhost:3000/sections/${section.id}`, section)
    .pipe(
      map(Section2SectionItemVM)
    );
  }
}
