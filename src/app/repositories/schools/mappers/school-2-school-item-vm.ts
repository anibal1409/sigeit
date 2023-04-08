import { SchoolItemVM } from '../model';
import { School2SchoolVM } from './school-2-school-vm';

export function School2SchoolItemVM(school: any): SchoolItemVM {
  return {
    ...School2SchoolVM(school),
  };
}