import { DepartmentStatItemDto } from 'dashboard-sdk';

import { DepartmentStatItemVM } from '../model';

export function DepartmentStatItemDto2DepartmentStatItemVM(
  dto: DepartmentStatItemDto | null | undefined,
): DepartmentStatItemVM {
  return {
    departmentId: dto?.departmentId ?? 0,
    departmentName: dto?.departmentName ?? '',
    sectionCount: dto?.sectionCount ?? 0,
    totalCapacity: dto?.totalCapacity ?? 0,
  };
}
