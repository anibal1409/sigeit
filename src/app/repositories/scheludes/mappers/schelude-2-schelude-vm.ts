import { ScheludeVM } from '../model';

export function Schelude2ScheludeVM(Schelude: any): ScheludeVM {
  return {
    id_classroom: Schelude.id_classroom,
    day: Schelude.day,
    start: Schelude.start,
    end: Schelude.end,
    id_section: Schelude.id_section,
  };
}
