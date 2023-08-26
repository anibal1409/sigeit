import { FormDataParserOptions } from './form-data-parser-options';
import { HttpOptions } from './http-options';

export interface ClientOptions {
  basePath?: string;
  apiPrefix?: string;
  httpOptions?: HttpOptions;
  formDataParserOptions?: FormDataParserOptions;
}
