import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { GetSchedulesService } from '../get-schedules';
import { ValidateTeacherSchedulesService } from './validate-teacher-schedules.service';

describe('ValidateTeacherSchedulesService', () => {
  let service: ValidateTeacherSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ValidateTeacherSchedulesService,
        {
          provide: GetSchedulesService,
          useValue: { exec: () => of([{ start: '07:00', end: '09:00' }]) },
        },
      ],
    });
    service = TestBed.inject(ValidateTeacherSchedulesService);
  });

  it('no marca choque entre bloques consecutivos', (done) => {
    service.exec({ start: '09:00', end: '10:30', dayId: 1 } as any, 1, 1).subscribe((collapsed) => {
      expect(collapsed.length).toBe(0);
      done();
    });
  });

  it('marca choque cuando los bloques se solapan', (done) => {
    service.exec({ start: '08:30', end: '10:00', dayId: 1 } as any, 1, 1).subscribe((collapsed) => {
      expect(collapsed.length).toBe(1);
      done();
    });
  });
});
