import { TeachersByDayResponseDto } from 'dashboard-sdk';

import { TeachersByDayResponseVM } from '../model';

import { TeachersByDayItemDto2TeachersByDayItemVM } from './teachers-by-day-item-dto-2-teachers-by-day-item-vm';

export function TeachersByDayResponseDto2TeachersByDayResponseVM(
  dto: TeachersByDayResponseDto | null | undefined,
): TeachersByDayResponseVM {
  const items = (dto?.items || []).map(TeachersByDayItemDto2TeachersByDayItemVM);
  return { items };
}
