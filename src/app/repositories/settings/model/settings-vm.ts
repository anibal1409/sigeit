export interface SettingVM {
  institute_name: string;
  institute_logo: string | null;
  start_time: Date | string | number;
  end_time: Date | string | number;
  rest_interval: number;
  schelude_interval: number;
}
