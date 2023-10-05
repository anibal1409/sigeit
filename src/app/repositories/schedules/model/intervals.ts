export interface Intervals {
  start: Array<string>;
  end: Array<string>;
}

export interface IntervalsSelect {
  start: Array<IntervalSelect>;
  end: Array<IntervalSelect>;
}

export interface IntervalSelect {
  id: string;
  name: string;
}