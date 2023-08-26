export interface FormDataParserOptions {
  /**
   * Prefijo que se coloca a las propiedades del objeto JSON,
   * que son  instancias de Blob, para que sean parseadas como archivos
   * en el servidor
   *
   */
  blobPrefix?: string;
}
