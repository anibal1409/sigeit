import { DayVM } from '../model';

export function Day2DayVM(day: any): DayVM  {
  return {
    abbreviation: day?.abbreviation,
    id: day?.id,
    name: day?.name,
  };
}