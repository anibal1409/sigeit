import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AuthService } from './api/auth.service';
import { CareerService } from './api/career.service';
import { ClassroomService } from './api/classroom.service';
import { DayService } from './api/day.service';
import { DefaultService } from './api/default.service';
import { DepartamentService } from './api/departament.service';
import { PeriodService } from './api/period.service';
import { ScheduleService } from './api/schedule.service';
import { SchoolService } from './api/school.service';
import { SectionService } from './api/section.service';
import { SubjectService } from './api/subject.service';
import { TeacherService } from './api/teacher.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AuthService,
    CareerService,
    ClassroomService,
    DayService,
    DefaultService,
    DepartamentService,
    PeriodService,
    ScheduleService,
    SchoolService,
    SectionService,
    SubjectService,
    TeacherService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
