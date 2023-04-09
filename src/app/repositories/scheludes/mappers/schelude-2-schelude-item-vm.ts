import { ScheludeItemVM } from '../model';
import { Schelude2ScheludeVM } from './schelude-2-schelude-vm';

export function Schelude2ScheludeItemVM(schelude: any): ScheludeItemVM {
  const scheludeVM = Schelude2ScheludeVM(schelude);
  return {
    ...scheludeVM,
  };
}
