import { Injectable } from '@angular/core';
import { GetClassroomsService } from './use-cases/get-classrooms.service';
import { ClassroomItemVM } from './model';
import { Observable } from 'rxjs';

@Injectable()
export class ClassroomsService {
  constructor(private getClassroomsService: GetClassroomsService) {}

  getClassrooms$(): Observable<Array<ClassroomItemVM>> {
    return this.getClassroomsService.exec();
  }
}
