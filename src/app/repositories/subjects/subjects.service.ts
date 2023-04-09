import { Injectable } from '@angular/core';
import { GetSubjectsService } from './use-cases';
import { SubjectItemVM } from './model';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectsService {
  constructor(private getSubjectsService: GetSubjectsService) {}

  getSubjects$(): Observable<Array<SubjectItemVM>> {
    return this.getSubjectsService.exec();
  }
}
