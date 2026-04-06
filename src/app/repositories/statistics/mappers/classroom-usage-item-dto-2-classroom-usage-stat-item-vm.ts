import { ClassroomUsageItemDto } from 'dashboard-sdk';

import { ClassroomUsageStatItemVM } from '../model';

export function ClassroomUsageItemDto2ClassroomUsageStatItemVM(
  dto: ClassroomUsageItemDto | null | undefined,
): ClassroomUsageStatItemVM {
  return {
    classroomId: dto?.classroomId ?? 0,
    classroomName: dto?.classroomName ?? '',
    scheduleBlockCount: dto?.scheduleBlockCount ?? 0,
  };
}
