import { TeacherDedication } from 'dashboard-sdk';

import { TeacherVM } from '../model';

export function Teacher2TeacherVM(teacher: any): TeacherVM {
  return {
    id: teacher?.id,
    idDocument: teacher?.idDocument,
    firstName: teacher?.firstName,
    lastName: teacher?.lastName,
    email: teacher?.email,
    departmentId: teacher?.departmentId,
    status: teacher?.status,
    fullName: teacher?.lastName ? `${teacher?.lastName}, ${teacher?.firstName}` : teacher?.firstName,
    category: teacher?.category ?? null,
    employmentStatus: teacher?.employmentStatus ?? null,
    // La API siempre envía dedicación; si faltara (datos viejos en memoria) se asume exclusiva.
    dedication: teacher?.dedication ?? TeacherDedication.Exclusiva,
    hiringEvaluationStatus: teacher?.hiringEvaluationStatus ?? null,
    hiringEvaluationDate: teacher?.hiringEvaluationDate ?? null,
    hiringEvaluationNotes: teacher?.hiringEvaluationNotes ?? null,
  };
}
