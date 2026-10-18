import { SettingVM } from '../model';

export function Setting2SettingVm(setting: any): SettingVM {
  return {
    instituteName: setting?.instituteName ?? '',
    instituteAbbreviation: setting?.instituteAbbreviation ?? '',
    description: setting?.description ?? null,
    // La API puede devolver HH:mm:ss; el input time trabaja con HH:mm.
    startTime: (setting?.startTime ?? '').slice(0, 5),
    endTime: (setting?.endTime ?? '').slice(0, 5),
    duration: setting?.duration ?? null,
    interval: setting?.interval ?? null,
  };
}
