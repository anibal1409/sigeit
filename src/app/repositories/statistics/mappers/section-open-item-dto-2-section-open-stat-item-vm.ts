import { SectionOpenDistributionItemDto } from 'dashboard-sdk';

import { SectionOpenStatItemVM } from '../model';

export function SectionOpenDistributionItemDto2SectionOpenStatItemVM(
  dto: SectionOpenDistributionItemDto | null | undefined,
): SectionOpenStatItemVM {
  return {
    openToAll: !!dto?.openToAll,
    sectionCount: dto?.sectionCount ?? 0,
  };
}
