export * from './auth.service';
import { AuthService } from './auth.service';
export * from './career.service';
import { CareerService } from './career.service';
export * from './classroom.service';
import { ClassroomService } from './classroom.service';
export * from './day.service';
import { DayService } from './day.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './department.service';
import { DepartmentService } from './department.service';
export * from './period.service';
import { PeriodService } from './period.service';
export * from './schedule.service';
import { ScheduleService } from './schedule.service';
export * from './school.service';
import { SchoolService } from './school.service';
export * from './section.service';
import { SectionService } from './section.service';
export * from './subject.service';
import { SubjectService } from './subject.service';
export * from './teacher.service';
import { TeacherService } from './teacher.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AuthService, CareerService, ClassroomService, DayService, DefaultService, DepartmentService, PeriodService, ScheduleService, SchoolService, SectionService, SubjectService, TeacherService, UserService];
