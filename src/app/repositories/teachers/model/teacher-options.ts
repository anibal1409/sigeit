import {
  DegreeLevel,
  EmploymentStatus,
  HiringEvaluationStatus,
  TeacherCategory,
  TeacherDedication,
} from 'dashboard-sdk';

/** Opción de un select: valor del enum de la API y su etiqueta en español. */
export interface OptionVM<T> {
  value: T;
  name: string;
}

export const CATEGORY_OPTIONS: Array<OptionVM<TeacherCategory>> = [
  { value: TeacherCategory.Instructor, name: 'Instructor (I)' },
  { value: TeacherCategory.Assistant, name: 'Asistente (II)' },
  { value: TeacherCategory.Aggregate, name: 'Agregado (III)' },
  { value: TeacherCategory.Associate, name: 'Asociado (IV)' },
  { value: TeacherCategory.Full, name: 'Titular (V)' },
];

export const EMPLOYMENT_STATUS_OPTIONS: Array<OptionVM<EmploymentStatus>> = [
  { value: EmploymentStatus.Contracted, name: 'Contratado' },
  { value: EmploymentStatus.Permanent, name: 'Fijo' },
];

export const DEDICATION_OPTIONS: Array<OptionVM<TeacherDedication>> = [
  { value: TeacherDedication.Exclusive, name: 'Exclusiva' },
  { value: TeacherDedication.FullTime, name: 'Tiempo completo' },
  { value: TeacherDedication.HalfTime, name: 'Medio tiempo' },
  { value: TeacherDedication.Conventional, name: 'Convencional' },
];

export const HIRING_EVALUATION_OPTIONS: Array<OptionVM<HiringEvaluationStatus>> = [
  { value: HiringEvaluationStatus.InEvaluation, name: 'En evaluación' },
  { value: HiringEvaluationStatus.Approved, name: 'Aprobado' },
  { value: HiringEvaluationStatus.Rejected, name: 'Rechazado' },
];

export const DEGREE_LEVEL_OPTIONS: Array<OptionVM<DegreeLevel>> = [
  { value: DegreeLevel.Undergraduate, name: 'Pregrado' },
  { value: DegreeLevel.Specialization, name: 'Especialización' },
  { value: DegreeLevel.Master, name: 'Maestría' },
  { value: DegreeLevel.Doctorate, name: 'Doctorado' },
  { value: DegreeLevel.Other, name: 'Otro' },
];

/** Nota como "9 / 10"; si no es numérica, el resultado (retirada, aprobado...). */
export function gradeLabel(item: { grade?: number | null; remark?: string | null }, maxGrade: number): string {
  return item.grade === null || item.grade === undefined ? item.remark || '' : `${item.grade} / ${maxGrade}`;
}

/** Etiqueta de un valor dentro de una lista de opciones; vacío si no existe. */
export function optionName<T>(options: Array<OptionVM<T>>, value?: T | null): string {
  return options.find((option) => option.value === value)?.name ?? '';
}
