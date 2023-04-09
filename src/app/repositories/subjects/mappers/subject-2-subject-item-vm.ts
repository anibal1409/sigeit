import { SubjectItemVM } from '../model';
import { Subject2SubjectVM } from './subject-2-subject-vm';

export function Subject2SubjectItemVM(subject: any): SubjectItemVM {
  return {
    ...Subject2SubjectVM(subject),
  };
}
