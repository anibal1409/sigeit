/** Configuración general de la institución (registro único). */
export interface SettingVM {
  instituteName: string;
  instituteAbbreviation: string;
  description: string | null;
  /** HH:mm */
  startTime: string;
  /** HH:mm */
  endTime: string;
  /** Minutos por bloque */
  duration: number;
  /** Minutos entre bloques */
  interval: number;
}
