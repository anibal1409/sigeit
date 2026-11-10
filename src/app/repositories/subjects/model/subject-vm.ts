import { SubjectInstructionType } from 'dashboard-sdk';

export interface SubjectVM {
  id?: number;
  name: string;
  credits: number;
  hours: number;
  /** Horas teóricas semanales; junto con practice suman `hours`. */
  theoreticalHours: number;
  /** Horas prácticas semanales; junto con theory suman `hours`. */
  practicalHours: number;
  /** Modalidad calculada por la API; no se envía en create/update. */
  instructionType?: SubjectInstructionType;
  code: string;
  status: boolean | string;
  semester: number;
  typeCurriculum: number;
  departmentId: number;
  careerIds: Array<number>;
  description?: string;
}
