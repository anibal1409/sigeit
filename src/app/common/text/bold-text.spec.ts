import { parseBoldText } from './bold-text';

describe('parseBoldText', () => {
  it('separa tramos normales y en negrita', () => {
    expect(parseBoldText('Eliminar **Aula 1** ahora')).toEqual([
      { text: 'Eliminar ', bold: false },
      { text: 'Aula 1', bold: true },
      { text: ' ahora', bold: false },
    ]);
  });

  it('no interpreta HTML: lo deja como texto', () => {
    expect(parseBoldText('<img src=x onerror=alert(1)>')).toEqual([
      { text: '<img src=x onerror=alert(1)>', bold: false },
    ]);
  });

  it('devuelve vacío para un texto vacío', () => {
    expect(parseBoldText('')).toEqual([]);
  });
});
