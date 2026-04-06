import { TimelineItemDto } from 'dashboard-sdk';

import { TimelineStatItemVM } from '../model';

export function TimelineItemDto2TimelineStatItemVM(
  dto: TimelineItemDto | null | undefined,
): TimelineStatItemVM {
  return {
    periodId: dto?.periodId ?? 0,
    periodName: dto?.periodName ?? '',
    periodStart: dto?.periodStart ?? '',
    sectionCount: dto?.sectionCount ?? 0,
    totalCapacity: dto?.totalCapacity ?? 0,
    totalSubjectHours: dto?.totalSubjectHours ?? 0,
  };
}
