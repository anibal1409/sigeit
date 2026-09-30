import { CreateTeacherDto } from 'dashboard-sdk';

import { TeacherVM } from '../model';

/**
 * Cuerpo para crear o actualizar un profesor a partir del formulario. Los
 * campos vacíos se envían como null para que la API los limpie.
 */
export function TeacherVM2TeacherDto(teacher: TeacherVM): CreateTeacherDto {
  return {
    status: !!teacher.status,
    department: { id: teacher.departmentId },
    firstName: teacher.firstName,
    lastName: teacher.lastName,
    idDocument: teacher.idDocument,
    email: teacher.email,
    category: teacher.category ?? null,
    employmentStatus: teacher.employmentStatus ?? null,
    dedication: teacher.dedication ?? null,
    hiringEvaluationStatus: teacher.hiringEvaluationStatus ?? null,
    hiringEvaluationDate: teacher.hiringEvaluationDate || null,
    hiringEvaluationNotes: teacher.hiringEvaluationNotes || null,
  } as CreateTeacherDto;
}
