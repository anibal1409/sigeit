import { TeachersByDayItemDto } from 'dashboard-sdk';

import { TeachersByDayItemVM } from '../model';

export function TeachersByDayItemDto2TeachersByDayItemVM(
  dto: TeachersByDayItemDto | null | undefined,
): TeachersByDayItemVM {
  return {
    dayId: dto?.dayId ?? 0,
    dayName: dto?.dayName ?? '',
    dayAbbreviation: dto?.dayAbbreviation ?? '',
    teacherCount: dto?.teacherCount ?? 0,
  };
}
