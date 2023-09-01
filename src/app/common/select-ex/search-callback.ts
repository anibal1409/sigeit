/**
 * Callback para la búsqueda no sensible a acentos en el componente ngx-select
 */
export function searchCallback(search: string, item: string): boolean {
  const length = search && search.length;
  const searchTerm = search && search.trim();
  if (search && search.length && !search.trim()) {
    return false;
  }
  if (searchTerm) {
    const searchRagesp = new RegExp(
      NormalizeWords(searchTerm).toLowerCase(),
      'ig'
    );
    const normalizedItem = NormalizeWords(item);
    return (searchRagesp.test(normalizedItem));
  } else if (!length) {
    return true;
  } else {
    return false;
  }
};

export function NormalizeWords(text: string): string {
  return text
    .normalize('NFD')
    // eslint-disable-next-line no-misleading-character-class
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, '$1')
    .normalize();
}