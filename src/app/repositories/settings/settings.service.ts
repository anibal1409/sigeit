import { Injectable } from '@angular/core';

import {
  SettingService,
  UpdateSettingDto,
} from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { Setting2SettingVm } from './mappers';
import { SettingVM } from './model';

// En root: también lo usa el formulario de periodos para los valores por defecto.
@Injectable({ providedIn: 'root' })
export class SettingsService {
  constructor(private settingApi: SettingService) {}

  find$(): Observable<SettingVM> {
    return this.settingApi.settingControllerFind().pipe(map(Setting2SettingVm));
  }

  update$(setting: SettingVM): Observable<SettingVM> {
    return this.settingApi
      .settingControllerUpdate(setting as UpdateSettingDto)
      .pipe(map(Setting2SettingVm));
  }
}
