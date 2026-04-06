import { CareerSectionStatItemDto } from 'dashboard-sdk';

import { CareerSectionStatItemVM } from '../model';

export function CareerSectionStatItemDto2CareerSectionStatItemVM(
  dto: CareerSectionStatItemDto | null | undefined,
): CareerSectionStatItemVM {
  return {
    careerId: dto?.careerId ?? 0,
    careerName: dto?.careerName ?? '',
    careerAbbreviation: dto?.careerAbbreviation ?? '',
    sectionCount: dto?.sectionCount ?? 0,
  };
}
