import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DepartmentVM } from '../departments';
import { GetDepartamentsBySchoolService } from '../sections';
import {
  TeacherItemVM,
  TeacherVM,
} from './model';
import {
  CreateTeacherService,
  DeleteTeacherService,
  FindTeacherService,
  GetTeachersService,
  UpdateTeacherService,
} from './use-cases';

@Injectable()
export class TeachersService {
  constructor(
    private getTeachersServices: GetTeachersService,
    private getDepartamentsService: GetDepartamentsBySchoolService,
    private createTeacherService: CreateTeacherService,
    private findTeacherService: FindTeacherService,
    private updateTeacherService: UpdateTeacherService,
    private deleteTeacherService: DeleteTeacherService,
  ) {}

  getTeachers$(): Observable<Array<TeacherItemVM>> {
    return this.getTeachersServices.exec();
  }
  
  getDepartaments$(idSchool: number): Observable<Array<DepartmentVM>> {
    return this.getDepartamentsService.exec(idSchool);
  }

  createSection$(teacher: TeacherVM): Observable<TeacherItemVM> {
    return this.createTeacherService.exec(teacher);
  }

  findSection$(teacherId: number): Observable<TeacherVM> {
    return this.findTeacherService.exec(teacherId);
  }

  updateSection$(teacher: TeacherVM): Observable<TeacherItemVM> {
    return this.updateTeacherService.exec(teacher);
  }

  removeSection$(teacherId: number): Observable<number> {
    return this.deleteTeacherService.exec(teacherId);
  }
}
