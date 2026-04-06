import { SubjectStatItemDto } from 'dashboard-sdk';

import { SubjectStatItemVM } from '../model';

export function SubjectStatItemDto2SubjectStatItemVM(
  dto: SubjectStatItemDto | null | undefined,
): SubjectStatItemVM {
  return {
    subjectId: dto?.subjectId ?? 0,
    subjectCode: dto?.subjectCode ?? '',
    subjectName: dto?.subjectName ?? '',
    sectionCount: dto?.sectionCount ?? 0,
    totalCapacity: dto?.totalCapacity ?? 0,
  };
}
