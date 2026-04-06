/** Vista: profesores distintos con clase por día. */
export interface TeachersByDayItemVM {
  dayId: number;
  dayName: string;
  dayAbbreviation: string;
  teacherCount: number;
}

export interface TeachersByDayResponseVM {
  items: Array<TeachersByDayItemVM>;
}
