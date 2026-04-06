import { StartTimeSlotItemDto } from 'dashboard-sdk';

import { StartTimeSlotStatItemVM } from '../model';

export function StartTimeSlotItemDto2StartTimeSlotStatItemVM(
  dto: StartTimeSlotItemDto | null | undefined,
): StartTimeSlotStatItemVM {
  return {
    startTime: dto?.startTime ?? '',
    blockCount: dto?.blockCount ?? 0,
  };
}
