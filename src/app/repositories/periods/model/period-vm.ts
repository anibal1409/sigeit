export interface PeriodVM {
  id?: number;
  name: string;
  start: Date | string;
  end: Date | string;
  start_time: string;
  end_time: string;
  duration: number;
  interval: number;
  status: boolean | string;
  stage: string;
}
