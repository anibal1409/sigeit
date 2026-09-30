export type Shift = 'morning' | 'afternoon' | 'mixed';

export const SHIFT_LABELS: Record<Shift, string> = {
  morning: 'Mañana (07:00 - 11:55)',
  afternoon: 'Tarde (12:00 en adelante)',
  mixed: 'Mixtas (mañana y tarde)',
};

/** Turno de una sección según todos sus bloques (horas "HH:mm"); null si no tiene horario. */
export function sectionShift(blocks: Array<{ start: string; end: string }>): Shift | null {
  if (!blocks.length) {
    return null;
  }
  if (blocks.every((block) => block.start >= '07:00' && block.end <= '11:55')) {
    return 'morning';
  }
  if (blocks.every((block) => block.start >= '12:00')) {
    return 'afternoon';
  }
  return 'mixed';
}
