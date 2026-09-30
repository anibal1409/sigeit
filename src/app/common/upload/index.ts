/** Tamaño máximo de los archivos que acepta la API (5 MB). */
export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024;

/** Mensaje de error si el archivo supera el máximo; vacío si es válido o no hay archivo. */
export function uploadSizeError(file?: File | null): string {
  return file && file.size > MAX_UPLOAD_SIZE ? 'El archivo supera el máximo de 5 MB.' : '';
}
