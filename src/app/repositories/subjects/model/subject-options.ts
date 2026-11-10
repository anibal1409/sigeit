import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { SubjectInstructionType } from 'dashboard-sdk';

/** Etiquetas de modalidad de instrucción para listados y formularios. */
export const SUBJECT_INSTRUCTION_LABEL: Record<SubjectInstructionType, string> = {
  TEORICA: 'Teórica',
  TEORICA_PRACTICA: 'Teórica / práctica',
  PRACTICA: 'Práctica',
};

/**
 * Calcula la modalidad a partir del reparto horario (misma regla que la API).
 * No sustituye a `instructionType` de la respuesta tras guardar.
 */
export function instructionTypeFromHours(
  theoreticalHours: number,
  practicalHours: number,
): SubjectInstructionType {
  if (theoreticalHours > 0 && practicalHours > 0) {
    return SubjectInstructionType.TeoricaPractica;
  }
  if (practicalHours > 0) {
    return SubjectInstructionType.Practica;
  }
  return SubjectInstructionType.Teorica;
}

/**
 * Valida que teoría + práctica = total, enteros ≥ 0, y que con total > 0
 * no queden ambos en 0.
 */
export function subjectHoursValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const hours = toNonNegInt(group.get('hours')?.value);
    const theoreticalHours = toNonNegInt(group.get('theoreticalHours')?.value);
    const practicalHours = toNonNegInt(group.get('practicalHours')?.value);

    if (hours === null || theoreticalHours === null || practicalHours === null) {
      return { hoursInvalid: true };
    }
    if (theoreticalHours + practicalHours !== hours) {
      return { hoursMismatch: true };
    }
    if (hours > 0 && theoreticalHours === 0 && practicalHours === 0) {
      return { hoursEmptySplit: true };
    }
    return null;
  };
}

/** Convierte a entero ≥ 0; null si el valor no es un entero no negativo. */
function toNonNegInt(value: unknown): number | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  const numberValue = Number(value);
  if (!Number.isInteger(numberValue) || numberValue < 0) {
    return null;
  }
  return numberValue;
}
