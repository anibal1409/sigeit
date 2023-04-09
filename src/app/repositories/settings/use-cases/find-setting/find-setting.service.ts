import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { Setting2SettingVm } from '../../mappers';
import { SettingVM } from '../../model';

@Injectable()
export class FindSettingService {

  constructor(
    private http: HttpClient
  ) { }

  exec(settingId: number = 1): Observable<SettingVM> {
    return this.http.get(`http://localhost:3000/settings/${settingId}`)
    .pipe(
      map(Setting2SettingVm)
    );
  }
}
