import { BlobVM } from '../class';
import { FormDataParserOptions } from '../interfaces';

/**
 * Convierte un objeto en FormData
 * @param obj Objeto Json
 * @returns Objeto FormData con las propiedades del objeto JSON
 */


export function json2FormData<T = any>(
  obj: T,
  options: FormDataParserOptions = { blobPrefix: 'file' },
): FormData {
  const formData = new FormData();
  Object.keys(obj as any).forEach((k) => {
    const value = (obj as any)[k];
    const blobKey = options.blobPrefix ? `${options.blobPrefix}_${k}` : k;
    if (value instanceof Blob ) {
      formData.append(blobKey, value);
    } else if (value instanceof BlobVM) {
      formData.append(blobKey, value.blob, value.filename);
    } else if (Array.isArray(value) && value.length) {
      value.forEach((val) => {
        if (val instanceof Blob) {
          formData.append(blobKey, val);
        } else {
          formData.append(`${k}[]`, JSON.stringify(val));
        }
      });
    } else if ( typeof value === 'string') {
      formData.append(k, value);
    } else {
      formData.append(k, JSON.stringify(value));
    }
  });
  return formData;
}
