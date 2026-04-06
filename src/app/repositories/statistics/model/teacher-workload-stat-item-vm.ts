/** Vista: carga docente por profesor. */
export interface TeacherWorkloadStatItemVM {
  teacherId: number;
  firstName: string;
  lastName: string | null;
  sectionCount: number;
  scheduleBlockCount: number;
  totalSubjectHours: number;
}
