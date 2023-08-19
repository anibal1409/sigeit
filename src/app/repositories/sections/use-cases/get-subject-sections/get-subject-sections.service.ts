import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import {
  Section2SectionItemVM,
} from '../../mappers/secction-2-section-item-vm';
import { SectionItemVM } from '../../model';

@Injectable()
export class GetSubjectSectionsService {

  constructor(
    private http: HttpClient
  ) { }

  exec(subjectId: number, periodId: number): Observable<Array<SectionItemVM>> {
    return this.http.get(`http://localhost:3000/sections?subjectId=${subjectId}&periodId=${periodId}&_expand=teacher&_expand=subject`)
      .pipe(
        map((sections: any) => sections.map(Section2SectionItemVM)),
      );
  }
}
