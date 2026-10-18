/** Tramo de texto con su estilo: normal o en negrita. */
export interface TextSegment {
  text: string;
  bold: boolean;
}

/**
 * Divide un texto en tramos normales y en negrita usando la marca `**texto**`.
 * Permite resaltar partes de un mensaje sin interpretar HTML, así un nombre escrito
 * por el usuario nunca se trata como marcado.
 */
export function parseBoldText(text: string): Array<TextSegment> {
  return text
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('**') && part.endsWith('**')
        ? { text: part.slice(2, -2), bold: true }
        : { text: part, bold: false },
    );
}
