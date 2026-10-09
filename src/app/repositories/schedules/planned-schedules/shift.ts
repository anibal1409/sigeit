export type Shift = 'morning' | 'afternoon';

export const SHIFT_LABELS: Record<Shift, string> = {
  morning: 'Mañana (inicia antes de 12:00)',
  afternoon: 'Tarde (inicia desde 12:00)',
};

/** Turno de una sección según la hora de inicio de su primer bloque ("HH:mm"); null si no tiene horario. */
export function sectionShift(blocks: Array<{ start: string }>): Shift | null {
  if (!blocks.length) {
    return null;
  }
  const firstStart = blocks.map((block) => block.start).sort()[0];
  return firstStart < '12:00' ? 'morning' : 'afternoon';
}
