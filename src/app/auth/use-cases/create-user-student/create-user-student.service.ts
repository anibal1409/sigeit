import { Injectable } from '@angular/core';

import { AuthService } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import {
  SaveUser,
  UserRole,
} from '../../../repositories/users/model';

@Injectable()
export class CreateUserStudentService {

  constructor(
    private authService: AuthService,
  ) { }

  exec(data: SaveUser): Observable<number> {
    return this.authService.authControllerCreateStudent({
      email: data.email,
      idDocument: data.idDocument,
      name: `${data.lastName} ${data.firstName}`,
      role: UserRole.Student,
      status: true,
      career: {
        id: data.careerId || 0,
      },
      firstName: data.firstName,
      lastName: data.lastName,
      teacher: { id: 0 }, // Placeholder para estudiantes
      school: { id: data.school || 0 },
      department: { id: data.department || 0 },
    })
    .pipe(
      map(() => 1)
    );
  }
}
