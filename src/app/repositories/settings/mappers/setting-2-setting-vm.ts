import { SettingVM } from '../model';

export function Setting2SettingVm(setting: any): SettingVM {
  return {
    description: setting?.description,
    end_time: setting?.end_time,
    id: setting?.id,
    institute_abbreviation: setting?.institute_abbreviation,
    institute_logo: setting?.institute_logo,
    institute_name: setting?.institute_name,
    interval: setting?.interval,
    duration: setting?.duration,
    start_time: setting?.start_time,
  };
}