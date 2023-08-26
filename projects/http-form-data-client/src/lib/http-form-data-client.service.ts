import { HttpClient } from '@angular/common/http';
import {
  Inject,
  Injectable,
  Optional,
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  ClientOptions,
  FormDataParserOptions,
  HTTP_FORM_DATA_OPTIONS,
  HttpOptions,
} from './interfaces';
import { json2FormData } from './utils';

@Injectable()
export class HttpFormDataClientService {
  private httpOptions: HttpOptions = {};
  private formDataParserOptions: FormDataParserOptions = {
    blobPrefix: 'file',
  };

  constructor(
    private httpClient: HttpClient,
    @Optional()
    @Inject(HTTP_FORM_DATA_OPTIONS)
    private clientOptions: ClientOptions = {},
  ) {
    this.httpOptions = clientOptions?.httpOptions || {};
    this.formDataParserOptions =
      clientOptions?.formDataParserOptions || this.formDataParserOptions;
  }

  private buildUrl(url: string): string {
    return `${this.clientOptions.basePath}/${url}`;
  }

  post<T, R>(
    url: string,
    obj: T,
    httpOptions: HttpOptions = {},
  ): Observable<R> {
    return this.httpClient.post<R>(
      this.buildUrl(url),
      json2FormData(obj, this.formDataParserOptions),
      {
        ...this.httpOptions,
        ...httpOptions,
      },
    );
  }

  put<T, R>(url: string, obj: T, httpOptions: HttpOptions = {}): Observable<R> {
    return this.httpClient.put<R>(
      this.buildUrl(url),
      json2FormData(obj, this.formDataParserOptions),
      {
        ...this.httpOptions,
        ...httpOptions,
      },
    );
  }

  patch<T, R>(
    url: string,
    obj: T,
    httpOptions: HttpOptions = {},
  ): Observable<R> {
    return this.httpClient.patch<R>(
      this.buildUrl(url),
      json2FormData(obj, this.formDataParserOptions),
      {
        ...this.httpOptions,
        ...httpOptions,
      },
    );
  }
}
