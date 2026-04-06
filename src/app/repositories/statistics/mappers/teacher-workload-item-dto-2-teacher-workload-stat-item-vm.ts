import { TeacherWorkloadItemDto } from 'dashboard-sdk';

import { TeacherWorkloadStatItemVM } from '../model';

export function TeacherWorkloadItemDto2TeacherWorkloadStatItemVM(
  dto: TeacherWorkloadItemDto | null | undefined,
): TeacherWorkloadStatItemVM {
  return {
    teacherId: dto?.teacherId ?? 0,
    firstName: dto?.firstName ?? '',
    lastName: dto?.lastName ?? null,
    sectionCount: dto?.sectionCount ?? 0,
    scheduleBlockCount: dto?.scheduleBlockCount ?? 0,
    totalSubjectHours: dto?.totalSubjectHours ?? 0,
  };
}
