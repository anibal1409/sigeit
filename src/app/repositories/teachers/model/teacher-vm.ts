import {
  EmploymentStatus,
  HiringEvaluationStatus,
  TeacherCategory,
  TeacherDedication,
} from 'dashboard-sdk';

export interface TeacherVM {
  id?: number;
  idDocument: string;
  firstName: string;
  lastName: string;
  status: boolean | string;
  email: string;
  departmentId: number;
  fullName?: string;
  category?: TeacherCategory | null;
  employmentStatus?: EmploymentStatus | null;
  /** Dedicación del profesor; en respuestas de la API siempre viene informada. */
  dedication: TeacherDedication;
  hiringEvaluationStatus?: HiringEvaluationStatus | null;
  hiringEvaluationDate?: string | null;
  hiringEvaluationNotes?: string | null;
}
