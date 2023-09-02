import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ClassroomItemVM } from './model';
import { GetClassroomsService } from './use-cases';

@Injectable()
export class ClassroomsService {
  constructor(private getClassroomsService: GetClassroomsService) {}

  getClassrooms$(): Observable<Array<ClassroomItemVM>> {
    return this.getClassroomsService.exec();
  }
}
