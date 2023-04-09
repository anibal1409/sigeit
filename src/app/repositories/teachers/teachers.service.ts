import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TeacherItemVM } from './model';
import { GetTeachersService } from './use-cases/get-teachers.service';

@Injectable()
export class TeachersService {
  constructor(private getTeachersServices: GetTeachersService) {}

  getTeachers$(): Observable<Array<TeacherItemVM>> {
    return this.getTeachersServices.exec();
  }
}
