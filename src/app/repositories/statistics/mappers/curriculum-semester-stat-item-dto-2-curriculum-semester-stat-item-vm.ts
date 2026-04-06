import { CurriculumSemesterStatItemDto } from 'dashboard-sdk';

import { CurriculumSemesterStatItemVM } from '../model';

export function CurriculumSemesterStatItemDto2CurriculumSemesterStatItemVM(
  dto: CurriculumSemesterStatItemDto | null | undefined,
): CurriculumSemesterStatItemVM {
  return {
    curriculumSemester: dto?.curriculumSemester ?? 0,
    sectionCount: dto?.sectionCount ?? 0,
    totalCapacity: dto?.totalCapacity ?? 0,
  };
}
