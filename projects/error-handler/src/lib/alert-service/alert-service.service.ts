import { Injectable } from '@angular/core';

@Injectable()
export class AlertServiceService {
  constructor() {}

  error(msg: string): void {
    window.alert(msg);
  }
}
