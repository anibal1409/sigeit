export interface PeriodVM {
  id?: number;
  name: string;
  start: Date | string;
  end: Date | string;
  start_time: Date | string;
  end_time: Date | string;
  interval: Date | string | number;
  block: Date | string | number;
  status: boolean | string;
}
