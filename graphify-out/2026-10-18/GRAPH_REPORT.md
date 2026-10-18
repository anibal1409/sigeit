# Graph Report - sigeit  (2026-10-18)

## Corpus Check
- 999 files · ~187,659 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 78 file(s) not represented in the graph (top: .scss 64, (none) 11, .mdc 1)

## Summary
- 4262 nodes · 11112 edges · 205 communities (180 shown, 25 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 353 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `01fbb08e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- array-validator.directive.ts
- teachers.module.ts
- get-careers.service.ts
- teacher.service.ts
- StudentSchedulesComponent
- models.ts
- statistics.service.ts
- rxjs
- UserStateService
- UseCase
- error-handler.module.ts
- ScheduleComponent
- IntervalsService
- AcademicChargeTeacherComponent
- period-audit-dto.ts
- RowOptionVM
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- periods/model/index.ts
- MemoryRepository
- PlanningAuditComponent
- SectionsManageComponent
- ref_angular_core
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- periods.component.ts
- departments.module.ts
- AcademicComponent
- Configuration
- AuthService
- TogglePasswordViewComponent
- PeriodVM
- SchedulesService
- get-documents.service.ts
- finished.component.ts
- TeacherItemVM
- dependencies
- classrooms.module.ts
- bulk-academic-charge-modal.component.ts
- ScheduleService
- 📱 Sistema de Visualización de Versión - SIGEIT
- ToastService
- ref_dashboard_sdk
- 📋 Gestión de Versiones - SIGEIT
- PeriodService
- DayVM
- devDependencies
- SchoolService
- SectionService
- logger.service.ts
- schools.module.ts
- settings.service.ts
- SectionsOverviewComponent
- Changelog
- scripts
- ConfirmModalComponent
- FormComponent
- DayService
- documents.module.ts
- users.component.ts
- url-access-guard.guard.ts
- SchedulesComponent
- production
- teachers.component.ts
- TeacherDegreeService
- UserService
- AuditService
- InscriptionService
- subjects.component.ts
- @angular/material
- users/form/form.component.ts
- SectionsComponent
- Componente de Vista General de Secciones
- careers.module.ts
- ScheduleItemVM
- admin.component.ts
- documents.component.ts
- create-career.service.ts
- grade-search.component.ts
- FormComponent
- UserItemVM
- DocumentService
- SubjectDemandService
- TeacherPickerComponent
- SubjectVM
- ClassroomType
- create-subject.service.ts
- FormComponent
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- find-user.service.ts
- VersionService
- ReportConfigModalComponent
- .ngOnInit
- FormComponent
- VersionDisplayComponent
- FormComponent
- StudentSchedulesService
- Sistema de Período Académico Global
- users.service.ts
- periods.module.ts
- version.service.ts
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- CareersComponent
- auth.module.ts
- documents/form/form.component.ts
- FormComponent
- auditoria
- find-subject.service.ts
- DegreeFormComponent
- common/index.ts
- repositories/profile/profile.module.ts
- @angular/forms
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- CloseInscriptionService
- careers/model/index.ts
- user-item-vm.ts
- CareerItemVM
- DepartmentItemVM
- subjects/model/index.ts
- TeachersComponent
- build
- development
- @
- @
- SectionItemVM
- academic.module.ts
- SubjectsService
- TableComponent
- @angular/router
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- VersionInfoComponent
- card-section-schedules.component.ts
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- CardSubjectSchedulesComponent
- src_app_repositories_settings_use_cases_index_findsettingservice
- find-document.service.ts
- sign-up.service.ts
- api-interfaces
- form-control-errors
- form-control-erros
- http-form-data-client
- logger
- login
- toast
- CustomHttpParameterCodec
- ApiModule
- inject-version.js
- AppModule
- 🛠️ **Personalización**
- 📁 **Archivos Creados/Modificados**
- api-interfaces/src/index.ts
- api-interfaces/ng-package.json
- dashboard-sdk/ng-package.json
- error-handler/ng-package.json
- form-control-errors/ng-package.json
- http-form-data-client/ng-package.json
- logger/ng-package.json
- login/ng-package.json
- toast/ng-package.json
- sections.service.ts
- create-document.service.ts
- .eslintrc.json
- ng-package.json
- sections-manage.component.ts
- subjects.service.ts
- lib/public-api.ts
- BaseQuery
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- environment.auditoria.ts
- environment.prod.ts
- Reglas de desarrollo - Sigeit
- schedules.service.ts

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 170 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 80 edges
4. `StudentSchedulesComponent` - 76 edges
5. `@angular/forms` - 67 edges
6. `UserStateService` - 65 edges
7. `StateService` - 60 edges
8. `@angular/router` - 57 edges
9. `ScheduleItemVM` - 52 edges
10. `Configuration` - 48 edges

## Surprising Connections (you probably didn't know these)
- `3. **Modal de Información (`VersionInfoComponent`)**` --references--> `VersionInfoComponent`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version-info.component.ts
- `1. **Servicio de Versión (`VersionService`)**` --references--> `VersionService`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version.service.ts
- `2. **Componente de Visualización (`VersionDisplayComponent`)**` --references--> `VersionDisplayComponent`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version-display.component.ts
- `Integración` --references--> `SchedulesService`  [INFERRED]
  src/app/common/global-period/README.md → src/app/repositories/schedules/schedules.service.ts
- `BulkAcademicChargeModalData` --references--> `TeacherItemVM`  [EXTRACTED]
  src/app/repositories/schedules/academic-charge-teacher/bulk-academic-charge-modal.component.ts → src/app/repositories/teachers/model/teacher-item-vm.ts

## Import Cycles
- 4-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/memory/index.ts -> src/app/repositories/schedules/memory/schedule-memory/index.ts -> src/app/repositories/schedules/memory/schedule-memory/schedule-memory.service.ts -> src/app/repositories/schedules/index.ts`
- 4-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/use-cases/index.ts -> src/app/repositories/sections/use-cases/get-sections/index.ts -> src/app/repositories/sections/use-cases/get-sections/get-setcions.service.ts -> src/app/repositories/sections/index.ts`
- 4-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/sections.component.ts -> src/app/repositories/subjects/model/index.ts -> src/app/repositories/subjects/model/subject-item-vm.ts -> src/app/repositories/sections/index.ts`
- 4-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules.component.ts -> src/app/repositories/sections/model/index.ts -> src/app/repositories/sections/model/section-item-vm.ts -> src/app/repositories/schedules/index.ts`
- 5-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules.module.ts -> src/app/repositories/schedules/memory/index.ts -> src/app/repositories/schedules/memory/schedule-memory/index.ts -> src/app/repositories/schedules/memory/schedule-memory/schedule-memory.service.ts -> src/app/repositories/schedules/index.ts`
- 5-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules.service.ts -> src/app/repositories/schedules/memory/index.ts -> src/app/repositories/schedules/memory/schedule-memory/index.ts -> src/app/repositories/schedules/memory/schedule-memory/schedule-memory.service.ts -> src/app/repositories/schedules/index.ts`
- 5-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/sections.module.ts -> src/app/repositories/sections/sections.component.ts -> src/app/repositories/subjects/model/index.ts -> src/app/repositories/subjects/model/subject-item-vm.ts -> src/app/repositories/sections/index.ts`
- 5-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/sections.module.ts -> src/app/repositories/sections/use-cases/index.ts -> src/app/repositories/sections/use-cases/get-sections/index.ts -> src/app/repositories/sections/use-cases/get-sections/get-setcions.service.ts -> src/app/repositories/sections/index.ts`
- 5-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/sections.service.ts -> src/app/repositories/sections/use-cases/index.ts -> src/app/repositories/sections/use-cases/get-sections/index.ts -> src/app/repositories/sections/use-cases/get-sections/get-setcions.service.ts -> src/app/repositories/sections/index.ts`
- 5-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/sections-overview/index.ts -> src/app/repositories/sections/sections-overview/sections-overview.component.ts -> src/app/repositories/subjects/model/index.ts -> src/app/repositories/subjects/model/subject-item-vm.ts -> src/app/repositories/sections/index.ts`
- 5-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules-routing.module.ts -> src/app/repositories/schedules/schedules.component.ts -> src/app/repositories/sections/model/index.ts -> src/app/repositories/sections/model/section-item-vm.ts -> src/app/repositories/schedules/index.ts`
- 5-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/sections-routing.module.ts -> src/app/repositories/sections/sections.component.ts -> src/app/repositories/subjects/model/index.ts -> src/app/repositories/subjects/model/subject-item-vm.ts -> src/app/repositories/sections/index.ts`
- 5-file cycle: `src/app/repositories/sections/index.ts -> src/app/repositories/sections/sections.service.ts -> src/app/repositories/subjects/index.ts -> src/app/repositories/subjects/model/index.ts -> src/app/repositories/subjects/model/subject-item-vm.ts -> src/app/repositories/sections/index.ts`
- 5-file cycle: `src/app/repositories/schedules/mappers/index.ts -> src/app/repositories/schedules/mappers/schedule-2-schedule-item-vm.ts -> src/app/repositories/sections/index.ts -> src/app/repositories/sections/mappers/index.ts -> src/app/repositories/sections/mappers/secction-2-section-item-vm.ts -> src/app/repositories/schedules/mappers/index.ts`
- 5-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules.component.ts -> src/app/repositories/sections/index.ts -> src/app/repositories/sections/model/index.ts -> src/app/repositories/sections/model/section-item-vm.ts -> src/app/repositories/schedules/index.ts`
- 5-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules.module.ts -> src/app/repositories/sections/index.ts -> src/app/repositories/sections/model/index.ts -> src/app/repositories/sections/model/section-item-vm.ts -> src/app/repositories/schedules/index.ts`
- 5-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules.service.ts -> src/app/repositories/sections/index.ts -> src/app/repositories/sections/model/index.ts -> src/app/repositories/sections/model/section-item-vm.ts -> src/app/repositories/schedules/index.ts`
- 5-file cycle: `src/app/repositories/schedules/index.ts -> src/app/repositories/schedules/schedules.module.ts -> src/app/repositories/schedules/schedules.component.ts -> src/app/repositories/sections/model/index.ts -> src/app/repositories/sections/model/section-item-vm.ts -> src/app/repositories/schedules/index.ts`

## Communities (205 total, 25 thin omitted)

### Community 1 - "teachers.module.ts"
Cohesion: 0.07
Nodes (20): TeacherMemoryService, Injectable, src_app_repositories_teachers_model_index_teacherbasequery, TeachersModule, NgModule, TeachersRoutingModule, NgModule, TeachersService (+12 more)

### Community 3 - "get-careers.service.ts"
Cohesion: 0.13
Nodes (7): CareerMemoryService, Injectable, src_app_repositories_careers_model_index_careeritemvm, DeleteCareerService, Injectable, GetCareersService, Injectable

### Community 4 - "teacher.service.ts"
Cohesion: 0.12
Nodes (21): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Inject, Injectable, Optional, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus (+13 more)

### Community 6 - "models.ts"
Cohesion: 0.06
Nodes (43): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+35 more)

### Community 7 - "statistics.service.ts"
Cohesion: 0.05
Nodes (35): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, StatisticsService, Inject, Injectable, Optional, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto (+27 more)

### Community 8 - "rxjs"
Cohesion: 0.12
Nodes (26): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+18 more)

### Community 9 - "UserStateService"
Cohesion: 0.07
Nodes (13): HttpInterceptorInterceptor, Injectable, StateService, Injectable, DEMAND_PREFERENCE_KEYS, TableService, Injectable, Injectable (+5 more)

### Community 10 - "UseCase"
Cohesion: 0.08
Nodes (15): UseCase, DepartmentsMemoryService, Injectable, CreateDepartmentService, Injectable, DeleteDepartmentService, Injectable, FindDepartmentService (+7 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "ScheduleComponent"
Cohesion: 0.14
Nodes (4): FinishedComponent, Component, ScheduleComponent, Component

### Community 13 - "IntervalsService"
Cohesion: 0.19
Nodes (6): src_app_repositories_schedules_model_index_intervalsselect, Intervals, IntervalSelect, IntervalsSelect, IntervalsService, Injectable

### Community 15 - "period-audit-dto.ts"
Cohesion: 0.17
Nodes (14): AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DayConflictsDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+6 more)

### Community 16 - "RowOptionVM"
Cohesion: 0.25
Nodes (7): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl()

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.09
Nodes (17): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, Directive, HostListener (+9 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (43): engines, node, @angular/common, @angular/core, tslib, name, private, version (+35 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "periods/model/index.ts"
Cohesion: 0.13
Nodes (15): src_app_repositories_periods_model_index_periodvm, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, RowActionPeriod, delete, setActive, update (+7 more)

### Community 21 - "MemoryRepository"
Cohesion: 0.07
Nodes (5): ListComponentService, Optional, MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus

### Community 23 - "SectionsManageComponent"
Cohesion: 0.10
Nodes (4): normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "ref_angular_core"
Cohesion: 0.06
Nodes (18): ref_angular_core, ref_toast, AppComponent, Component, LoginComponent, Component, LoginService, Injectable (+10 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.08
Nodes (7): @angular/cdk, NormalizeWords(), searchCallback(), SelectExComponent, Component, Input, ViewChild

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.12
Nodes (6): PlannedSchedulesComponent, Component, ReportConfig, sectionShift(), Shift, SHIFT_LABELS

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.05
Nodes (31): src_app_common_index_selectexmodule, src_app_repositories_careers_index_careersmodule, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectsmodule (+23 more)

### Community 28 - "periods.component.ts"
Cohesion: 0.19
Nodes (7): src_app_repositories_periods_form_index_formcomponent, src_app_repositories_periods_model_index_rowactionperiod, PeriodsComponent, Component, PeriodsRoutingModule, routes, NgModule

### Community 29 - "departments.module.ts"
Cohesion: 0.08
Nodes (21): src_app_common_index_optionaction, src_app_common_index_tabledatavm, TableModule, NgModule, DepartmentsComponent, Component, DepartmentsModule, NgModule (+13 more)

### Community 30 - "AcademicComponent"
Cohesion: 0.13
Nodes (5): AcademicComponent, fullName(), normalize(), Component, buildWeek()

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "PeriodVM"
Cohesion: 0.25
Nodes (3): Period2PeriodItemVM(), PeriodItemVM, PeriodVM

### Community 35 - "SchedulesService"
Cohesion: 0.09
Nodes (11): src_app_common_timer_index_timevalidator, timeValidator(), clashHtml(), FormComponent, Component, Input, Output, src_app_repositories_schedules_model_index_intervalselect (+3 more)

### Community 36 - "get-documents.service.ts"
Cohesion: 0.15
Nodes (7): src_app_repositories_documents_memory_index_memorydocumentsservice, MemoryDocumentsService, Injectable, DeleteDocumentService, Injectable, GetDocumentsService, Injectable

### Community 37 - "finished.component.ts"
Cohesion: 0.10
Nodes (17): src_app_repositories_periods_index_stageperiod, src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionBaseQuery, InscriptionVM (+9 more)

### Community 38 - "TeacherItemVM"
Cohesion: 0.17
Nodes (15): src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, Teacher2TeacherItemVM(), TeacherVM2TeacherDto(), src_app_repositories_teachers_memory_index_teachermemoryservice, src_app_repositories_teachers_model_index_teacheritemvm, src_app_repositories_teachers_model_index_teachervm, RowActionTeacher (+7 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "classrooms.module.ts"
Cohesion: 0.05
Nodes (44): src_app_common_index_statemodule, ClassroomsComponent, Component, ClassroomsModule, NgModule, ClassroomsRoutingModule, routes, NgModule (+36 more)

### Community 41 - "bulk-academic-charge-modal.component.ts"
Cohesion: 0.15
Nodes (7): BulkAcademicChargeModalComponent, BulkAcademicChargeModalData, BulkAcademicChargeModalResult, BulkDownloadMode, Component, Inject, src_app_repositories_teachers_index_teacheritemvm

### Community 42 - "ScheduleService"
Cohesion: 0.10
Nodes (12): ScheduleService, Inject, Injectable, Optional, FreeClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, FreeSlotDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+4 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.11
Nodes (18): 🎯 **Beneficios**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:**, **Información Mostrada**, 🔄 **Integración con Sistema de Versionado**, 🎨 **Interfaz de Usuario** (+10 more)

### Community 44 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 45 - "ref_dashboard_sdk"
Cohesion: 0.06
Nodes (32): ref_dashboard_sdk, src_app_common_memory_repository_index_usecase, src_app_repositories_classrooms_mappers_index_classroom2classroomvm, src_app_repositories_schedules_index_schedule2scheduleitemvm, src_app_repositories_schedules_index_scheduleitemvm, Day2DayVM(), src_app_repositories_schedules_mappers_index_day2dayvm, src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm (+24 more)

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "PeriodService"
Cohesion: 0.11
Nodes (10): PeriodService, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponsePeriodDto (+2 more)

### Community 48 - "DayVM"
Cohesion: 0.09
Nodes (9): ClassroomsSchedulesComponent, Component, Input, DayVM, ScheduleComponent, Component, Input, ScheduleDisplayService (+1 more)

### Community 49 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, ajv, @angular/cli, @angular/compiler-cli, @angular-devkit/build-angular, baseline-browser-mapping, @commitlint/cli, @commitlint/config-conventional (+15 more)

### Community 50 - "SchoolService"
Cohesion: 0.12
Nodes (10): SchoolService, Inject, Injectable, Optional, CreateSchoolDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSchoolDto (+2 more)

### Community 51 - "SectionService"
Cohesion: 0.12
Nodes (10): SectionService, Inject, Injectable, Optional, GenerateReportDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ReportResponseDto (+2 more)

### Community 52 - "logger.service.ts"
Cohesion: 0.15
Nodes (11): projects_logger_src_lib_interfaces_index_loggerconfig, projects_logger_src_lib_interfaces_index_loggerconfigkey, LoggerConfig, LoggerConfigKey, LoggerModule, NgModule, LoggerService, TODO: Crear un API res para el reporte de errores (+3 more)

### Community 53 - "schools.module.ts"
Cohesion: 0.05
Nodes (33): src_app_common_index_listcomponentservice, src_app_common_index_memoryrepository, src_app_common_index_tablemodule, src_app_common_index_tableservice, src_app_common_state_index_statemodule, src_app_repositories_schools_form_index_formcomponent, SchoolMemoryService, Injectable (+25 more)

### Community 54 - "settings.service.ts"
Cohesion: 0.13
Nodes (9): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, SettingVM, SettingsComponent, Component, SettingsService, Injectable (+1 more)

### Community 55 - "SectionsOverviewComponent"
Cohesion: 0.15
Nodes (3): Group, SectionsOverviewComponent, Component

### Community 56 - "Changelog"
Cohesion: 0.09
Nodes (21): 0.0.1 (2025-09-21), 0.0.2 (2025-09-21), 0.0.3 (2025-09-21), ✨ Características, ✨ Características, ✨ Características, ✨ Características, Changelog (+13 more)

### Community 57 - "scripts"
Cohesion: 0.09
Nodes (22): scripts, build, build-error-handler, build:prod, build-projects, build:versioned, changelog, dashboard-sdk (+14 more)

### Community 58 - "ConfirmModalComponent"
Cohesion: 0.22
Nodes (7): ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, ModalMessageModel

### Community 59 - "FormComponent"
Cohesion: 0.13
Nodes (7): FormComponent, Component, Inject, Input, Output, PeriodsService, Injectable

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.15
Nodes (12): DocumentsModule, NgModule, DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice, src_app_repositories_documents_use_cases_create_document_index_createdocumentservice (+4 more)

### Community 62 - "users.component.ts"
Cohesion: 0.17
Nodes (7): src_app_repositories_users_form_index_formcomponent, src_app_repositories_users_model_index_rowactionuser, Component, UsersComponent, routes, NgModule, UsersRoutingModule

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "teachers.component.ts"
Cohesion: 0.14
Nodes (21): lodash, src_app_repositories_classrooms_model_index_classroom_types, src_app_repositories_departments_index_departmentitemvm, src_app_repositories_teachers_form_index_formcomponent, src_app_repositories_teachers_model_index_category_options, src_app_repositories_teachers_model_index_dedication_options, src_app_repositories_teachers_model_index_employment_status_options, src_app_repositories_teachers_model_index_hiring_evaluation_options (+13 more)

### Community 67 - "TeacherDegreeService"
Cohesion: 0.07
Nodes (32): TeacherDegreeService, Inject, Injectable, Optional, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+24 more)

### Community 68 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "subjects.component.ts"
Cohesion: 0.15
Nodes (7): src_app_repositories_careers_index_careervm, src_app_repositories_subjects_form_index_formcomponent, src_app_repositories_subjects_model_index_rowactionsubject, src_app_repositories_subjects_model_index_subjectvm, SubjectsComponent, Component, src_app_repositories_teachers_index_teachervm

### Community 72 - "@angular/material"
Cohesion: 0.09
Nodes (16): @angular/material, src_app_common_subject_demand_index_subjectdemandstoreservice, MAX_UPLOAD_SIZE, uploadSizeError(), ImportDemandComponent, Component, Inject, SubjectDemandsComponent (+8 more)

### Community 73 - "users/form/form.component.ts"
Cohesion: 0.13
Nodes (13): MENU, src_app_admin_models_index_optionmenu, src_app_repositories_schools_index_schoolitemvm, src_app_repositories_users_model_index_user_roles, src_app_repositories_users_model_index_userrole, USER_ROLES, UserRole, Administrator (+5 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.23
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "careers.module.ts"
Cohesion: 0.19
Nodes (12): CareersRoutingModule, routes, NgModule, CareersService, Injectable, src_app_repositories_careers_form_index_formcomponent, src_app_repositories_careers_memory_index_careermemoryservice, src_app_repositories_careers_model_index_rowactioncareer (+4 more)

### Community 77 - "ScheduleItemVM"
Cohesion: 0.06
Nodes (21): src_app_common_user_state_index_userstateservice, AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable, src_app_repositories_periods_index_periodvm, src_app_repositories_schedules_index_schedule_details_dialog, src_app_repositories_schedules_index_scheduledetailscomponent (+13 more)

### Community 78 - "admin.component.ts"
Cohesion: 0.08
Nodes (12): AdminComponent, Component, src_app_admin_data_index_menu, optionMenu, GlobalPeriodModule, NgModule, GlobalPeriodService, Injectable (+4 more)

### Community 79 - "documents.component.ts"
Cohesion: 0.16
Nodes (8): src_app_common_table_index_optionaction, src_app_common_table_index_tabledatavm, src_app_common_table_index_tableservice, DocumentsComponent, Component, DocumentsFileService, Injectable, src_app_repositories_documents_model_index_rowactiondocument

### Community 80 - "create-career.service.ts"
Cohesion: 0.20
Nodes (10): Career2CareerItemVM(), Career2CareerVM(), src_app_repositories_careers_mappers_index_career2careeritemvm, CareerVM, src_app_repositories_careers_model_index_careervm, CreateCareerService, Injectable, Injectable (+2 more)

### Community 81 - "grade-search.component.ts"
Cohesion: 0.05
Nodes (30): src_app_common_index_confirmmodalcomponent, src_app_common_index_uploadsizeerror, Editing, DegreeDetailComponent, STATUS_LABELS, Component, Input, GradeIssue (+22 more)

### Community 82 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 83 - "UserItemVM"
Cohesion: 0.15
Nodes (13): src_app_repositories_schools_index_school2schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_users_mappers_index_user2useritemvm, User2UserItemVM(), User2UserVM(), src_app_repositories_users_model_index_user_roles_value, src_app_repositories_users_model_index_useritemvm, src_app_repositories_users_model_index_uservm (+5 more)

### Community 84 - "DocumentService"
Cohesion: 0.17
Nodes (6): DocumentService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "TeacherPickerComponent"
Cohesion: 0.17
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "SubjectVM"
Cohesion: 0.23
Nodes (7): Subject2SubjectItemVM(), Subject2SubjectVM(), SubjectBaseQuery, SubjectItemVM, SubjectVM, GetSubjectsService, Injectable

### Community 88 - "ClassroomType"
Cohesion: 0.33
Nodes (5): CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

### Community 89 - "create-subject.service.ts"
Cohesion: 0.15
Nodes (8): src_app_repositories_subjects_mappers_index_subject2subjectitemvm, SubjectMemoryService, Injectable, src_app_repositories_subjects_model_index_subjectitemvm, CreateSubjectService, Injectable, Injectable, UpdateSubjectService

### Community 90 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 91 - "CareerService"
Cohesion: 0.19
Nodes (6): CareerService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseCareerDto

### Community 92 - "ClassroomService"
Cohesion: 0.19
Nodes (6): ClassroomService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseClassroomDto

### Community 93 - "DepartmentService"
Cohesion: 0.19
Nodes (6): DepartmentService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDepartmentDto

### Community 94 - "SubjectService"
Cohesion: 0.19
Nodes (6): SubjectService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDto

### Community 95 - "find-user.service.ts"
Cohesion: 0.17
Nodes (4): src_app_common_memory_repository_index_basequery, src_app_repositories_users_mappers_index_user2uservm, FindUserService, Injectable

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "ReportConfigModalComponent"
Cohesion: 0.12
Nodes (3): ReportConfigModalComponent, Component, Inject

### Community 99 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

### Community 101 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 102 - "StudentSchedulesService"
Cohesion: 0.17
Nodes (3): SavedSchedule, StudentSchedulesService, Injectable

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "users.service.ts"
Cohesion: 0.10
Nodes (22): ref_admin_sdk, src_app_common_table_index_tablemodule, src_app_repositories_careers_use_cases_index_getcareersservice, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, Injectable, UserMemoryService (+14 more)

### Community 105 - "periods.module.ts"
Cohesion: 0.09
Nodes (20): src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_memory_index_periodmemoryservice, PeriodMemoryService, Injectable, CreatePeriodService, Injectable, DeletePeriodService, Injectable (+12 more)

### Community 106 - "version.service.ts"
Cohesion: 0.39
Nodes (3): VersionInfo, VERSION_INFO, Window

### Community 107 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.21
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 109 - "FormComponent"
Cohesion: 0.21
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 110 - "projects"
Cohesion: 0.15
Nodes (12): cli, analytics, architect, prefix, projectType, root, sourceRoot, newProjectRoot (+4 more)

### Community 111 - "options"
Cohesion: 0.22
Nodes (13): options, allowedCommonJsDependencies, assets, index, inlineStyleLanguage, main, outputPath, polyfills (+5 more)

### Community 112 - "toast.module.ts"
Cohesion: 0.27
Nodes (5): TOAST_OPTIONS, ToastModule, NgModule, @ngx-translate/core, toastr

### Community 114 - "auth.module.ts"
Cohesion: 0.07
Nodes (21): FormControlTestComponent, Component, @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, AuthRoutingModule, routes (+13 more)

### Community 115 - "documents/form/form.component.ts"
Cohesion: 0.16
Nodes (7): FormComponent, Component, Inject, Input, Optional, Output, src_app_repositories_documents_model_index_typedocument

### Community 116 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "find-subject.service.ts"
Cohesion: 0.29
Nodes (4): src_app_repositories_subjects_mappers_index_subject2subjectvm, src_app_repositories_subjects_model_index_subjectbasequery, FindSubjectService, Injectable

### Community 119 - "DegreeFormComponent"
Cohesion: 0.10
Nodes (5): DegreeFormComponent, normalize(), Component, Input, Output

### Community 120 - "common/index.ts"
Cohesion: 0.13
Nodes (13): src_app_common_index_rowoptionvm, src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_memory_index_schoolmemoryservice, src_app_repositories_schools_model_index_schoolitemvm, src_app_repositories_schools_model_index_schoolvm (+5 more)

### Community 121 - "repositories/profile/profile.module.ts"
Cohesion: 0.18
Nodes (9): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule, ProfileService (+1 more)

### Community 122 - "@angular/forms"
Cohesion: 0.06
Nodes (32): @angular/forms, moment, src_app_common_index_computecoverage, src_app_common_index_readurlnumber, src_app_common_index_semesters, src_app_common_index_semestervm, src_app_common_index_stateservice, src_app_common_index_subjectdemandstoreservice (+24 more)

### Community 123 - "api-interfaces/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 124 - "dashboard-sdk/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 125 - "error-handler/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 126 - "form-control-errors/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 127 - "http-form-data-client/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 128 - "logger/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 129 - "login/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 130 - "toast/package.json"
Cohesion: 0.18
Nodes (10): dependencies, tslib, @angular/common, @angular/core, tslib, name, peerDependencies, @angular/common (+2 more)

### Community 132 - "careers/model/index.ts"
Cohesion: 0.43
Nodes (3): RowActionCareer, delete, update

### Community 133 - "user-item-vm.ts"
Cohesion: 0.33
Nodes (5): src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_schoolvm, RowActionUser, delete, update

### Community 134 - "CareerItemVM"
Cohesion: 0.20
Nodes (6): src_app_repositories_careers_mappers_index_career2careervm, CareerBaseQuery, CareerItemVM, src_app_repositories_careers_model_index_careerbasequery, FindCareerService, Injectable

### Community 135 - "DepartmentItemVM"
Cohesion: 0.12
Nodes (16): src_app_common_index_usecase, UserStateVM, Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentitemvm, src_app_repositories_departments_mappers_index_department2departmentvm, src_app_repositories_departments_memory_index_departmentsmemoryservice, DepartmentBaseQuery (+8 more)

### Community 136 - "subjects/model/index.ts"
Cohesion: 0.43
Nodes (3): RowActionSubject, delete, update

### Community 138 - "build"
Cohesion: 0.22
Nodes (9): build, extract-i18n, builder, configurations, defaultConfiguration, builder, options, browserTarget (+1 more)

### Community 139 - "development"
Cohesion: 0.22
Nodes (9): development, browserTarget, buildOptimizer, extractLicenses, namedChunks, optimization, sourceMap, tsConfig (+1 more)

### Community 140 - "@"
Cohesion: 0.22
Nodes (9): @, Building, consuming, Customizing path parameter encoding, General usage, publishing, Set service base path, Using @angular/cli (+1 more)

### Community 141 - "@"
Cohesion: 0.22
Nodes (9): @, Building, consuming, Customizing path parameter encoding, General usage, publishing, Set service base path, Using @angular/cli (+1 more)

### Community 142 - "SectionItemVM"
Cohesion: 0.08
Nodes (24): src_app_repositories_sections_mappers_index_section2sectionitemvm, src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_sections_model_index_sectionbasequery, src_app_repositories_sections_model_index_sectionitemvm, RowActionSection, delete (+16 more)

### Community 143 - "academic.module.ts"
Cohesion: 0.11
Nodes (18): StateModule, NgModule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule, routes (+10 more)

### Community 144 - "SubjectsService"
Cohesion: 0.33
Nodes (3): Inject, SubjectsService, Injectable

### Community 145 - "TableComponent"
Cohesion: 0.16
Nodes (5): TableComponent, Component, Input, Output, ViewChild

### Community 146 - "@angular/router"
Cohesion: 0.07
Nodes (28): @angular/router, ref_error_handler, ref_http_form_data_client, AdminModule, NgModule, AdminRoutingModule, routes, NgModule (+20 more)

### Community 147 - "test"
Cohesion: 0.25
Nodes (8): test, architect, prefix, projectType, root, sourceRoot, error-handler, builder

### Community 148 - "sigeit"
Cohesion: 0.25
Nodes (8): sigeit, style, @schematics/angular:component, prefix, projectType, root, schematics, sourceRoot

### Community 149 - "DefaultService"
Cohesion: 0.29
Nodes (4): DefaultService, Inject, Injectable, Optional

### Community 150 - "lib/param.ts"
Cohesion: 0.25
Nodes (7): DataFormat, DataType, ParamLocation, ParamStyle, StandardDataFormat, StandardDataType, StandardParamStyle

### Community 151 - "Sigeit"
Cohesion: 0.25
Nodes (7): Build, Code scaffolding, Development server, Further help, Running end-to-end tests, Running unit tests, Sigeit

### Community 154 - "card-section-schedules.component.ts"
Cohesion: 0.50
Nodes (3): CardSectionSchedulesComponent, Component, Input

### Community 155 - "ApiInterfaces"
Cohesion: 0.29
Nodes (6): ApiInterfaces, Build, Code scaffolding, Further help, Publishing, Running unit tests

### Community 156 - "ErrorHandler"
Cohesion: 0.29
Nodes (6): Build, Code scaffolding, ErrorHandler, Further help, Publishing, Running unit tests

### Community 157 - "FormControlErrors"
Cohesion: 0.29
Nodes (6): Build, Code scaffolding, FormControlErrors, Further help, Publishing, Running unit tests

### Community 158 - "HttpFormDataClient"
Cohesion: 0.29
Nodes (6): Build, Code scaffolding, Further help, HttpFormDataClient, Publishing, Running unit tests

### Community 159 - "Logger"
Cohesion: 0.29
Nodes (6): Build, Code scaffolding, Further help, Logger, Publishing, Running unit tests

### Community 160 - "Login"
Cohesion: 0.29
Nodes (6): Build, Code scaffolding, Further help, Login, Publishing, Running unit tests

### Community 161 - "Toast"
Cohesion: 0.29
Nodes (6): Build, Code scaffolding, Further help, Publishing, Running unit tests, Toast

### Community 162 - "CardSubjectSchedulesComponent"
Cohesion: 0.20
Nodes (4): CardSubjectSchedulesComponent, Component, Input, Output

### Community 164 - "find-document.service.ts"
Cohesion: 0.28
Nodes (5): Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_model_index_documentbasequery, FindDocumentService, Injectable

### Community 165 - "sign-up.service.ts"
Cohesion: 0.10
Nodes (11): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_auth_use_cases_index_createuserstudentservice, src_app_repositories_careers_index_careeritemvm (+3 more)

### Community 166 - "api-interfaces"
Cohesion: 0.33
Nodes (6): architect, prefix, projectType, root, sourceRoot, api-interfaces

### Community 167 - "form-control-errors"
Cohesion: 0.33
Nodes (6): architect, prefix, projectType, root, sourceRoot, form-control-errors

### Community 168 - "form-control-erros"
Cohesion: 0.33
Nodes (6): architect, prefix, projectType, root, sourceRoot, form-control-erros

### Community 169 - "http-form-data-client"
Cohesion: 0.33
Nodes (6): architect, prefix, projectType, root, sourceRoot, http-form-data-client

### Community 170 - "logger"
Cohesion: 0.33
Nodes (6): architect, prefix, projectType, root, sourceRoot, logger

### Community 171 - "login"
Cohesion: 0.33
Nodes (6): architect, prefix, projectType, root, sourceRoot, login

### Community 172 - "toast"
Cohesion: 0.33
Nodes (6): toast, architect, prefix, projectType, root, sourceRoot

### Community 174 - "ApiModule"
Cohesion: 0.33
Nodes (4): ApiModule, NgModule, Optional, SkipSelf

### Community 175 - "inject-version.js"
Cohesion: 0.33
Nodes (4): ref_fs, ref_path, fs, path

### Community 176 - "AppModule"
Cohesion: 0.50
Nodes (3): @angular/platform-browser-dynamic, AppModule, NgModule

### Community 177 - "🛠️ **Personalización**"
Cohesion: 0.50
Nodes (4): **Cambiar Estilos:**, **Modificar Información Mostrada:**, **Modificar Ubicación:**, 🛠️ **Personalización**

### Community 178 - "📁 **Archivos Creados/Modificados**"
Cohesion: 0.67
Nodes (3): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, **Nuevos Archivos:**

### Community 181 - "api-interfaces/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 182 - "dashboard-sdk/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 183 - "error-handler/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 184 - "form-control-errors/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 185 - "http-form-data-client/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 186 - "logger/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 187 - "login/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 188 - "toast/ng-package.json"
Cohesion: 0.40
Nodes (4): dest, lib, entryFile, $schema

### Community 189 - "sections.service.ts"
Cohesion: 0.06
Nodes (30): src_app_common_index_subjectdemandmodule, src_app_common_memory_repository_index_listcomponentservice, src_app_common_memory_repository_index_memoryrepository, SubjectDemandModule, NgModule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice (+22 more)

### Community 190 - "create-document.service.ts"
Cohesion: 0.13
Nodes (17): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), src_app_repositories_documents_mappers_index_document2documentitemvm, DocumentBaseQuery, DocumentItemVM, DocumentVM, src_app_repositories_documents_model_index_documentitemvm, src_app_repositories_documents_model_index_documentvm (+9 more)

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "sections-manage.component.ts"
Cohesion: 0.06
Nodes (35): src_app_common_index_sections_load_panel_key, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemanddialogcomponent, src_app_common_index_subjectdemanddialogdata, SubjectDemandDialogComponent, SubjectDemandDialogData, Component, Inject (+27 more)

### Community 195 - "subjects.service.ts"
Cohesion: 0.13
Nodes (12): src_app_repositories_careers_index_getcareersservice, src_app_repositories_subjects_memory_index_subjectmemoryservice, routes, SubjectsRoutingModule, NgModule, DeleteSubjectService, Injectable, src_app_repositories_subjects_use_cases_index_createsubjectservice (+4 more)

### Community 198 - "BaseQuery"
Cohesion: 0.14
Nodes (7): src_app_common_index_basequery, BaseQuery, src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodVM(), src_app_repositories_periods_model_index_perioditemvm, FindPeriodService, Injectable

### Community 210 - "schedules.service.ts"
Cohesion: 0.05
Nodes (40): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable (+32 more)

## Knowledge Gaps
- **541 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+536 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1452 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **25 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `teachers.module.ts`, `get-careers.service.ts`, `teacher.service.ts`, `CloseInscriptionService`, `CareerItemVM`, `statistics.service.ts`, `DepartmentItemVM`, `UserStateService`, `UseCase`, `SectionItemVM`, `RowOptionVM`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `@angular/router`, `MemoryRepository`, `periods/model/index.ts`, `ref_angular_core`, `SelectExComponent`, `student-schedules.service.ts`, `periods.component.ts`, `departments.module.ts`, `SchedulesService`, `get-documents.service.ts`, `sign-up.service.ts`, `find-document.service.ts`, `TeacherItemVM`, `classrooms.module.ts`, `finished.component.ts`, `ref_dashboard_sdk`, `DayVM`, `schools.module.ts`, `settings.service.ts`, `sections.service.ts`, `create-document.service.ts`, `url-access-guard.guard.ts`, `users.component.ts`, `sections-manage.component.ts`, `teachers.component.ts`, `subjects.service.ts`, `BaseQuery`, `subjects.component.ts`, `@angular/material`, `users/form/form.component.ts`, `careers.module.ts`, `ScheduleItemVM`, `admin.component.ts`, `documents.component.ts`, `create-career.service.ts`, `grade-search.component.ts`, `schedules.service.ts`, `FormComponent`, `UserItemVM`, `SubjectVM`, `create-subject.service.ts`, `find-user.service.ts`, `users.service.ts`, `periods.module.ts`, `version.service.ts`, `documents/form/form.component.ts`, `find-subject.service.ts`, `common/index.ts`, `@angular/forms`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Why does `@angular/material` connect `@angular/material` to `teachers.module.ts`, `UserStateService`, `academic.module.ts`, `RowOptionVM`, `package.json`, `@angular/router`, `periods/model/index.ts`, `ref_angular_core`, `SelectExComponent`, `student-schedules.service.ts`, `periods.component.ts`, `departments.module.ts`, `SchedulesService`, `classrooms.module.ts`, `bulk-academic-charge-modal.component.ts`, `DayVM`, `schools.module.ts`, `ConfirmModalComponent`, `documents.module.ts`, `sections.service.ts`, `users.component.ts`, `sections-manage.component.ts`, `teachers.component.ts`, `subjects.service.ts`, `subjects.component.ts`, `users/form/form.component.ts`, `careers.module.ts`, `ScheduleItemVM`, `admin.component.ts`, `documents.component.ts`, `grade-search.component.ts`, `FormComponent`, `schedules.service.ts`, `users.service.ts`, `periods.module.ts`, `version.service.ts`, `auth.module.ts`, `documents/form/form.component.ts`, `@angular/forms`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `Configuration` connect `rxjs` to `teacher.service.ts`, `statistics.service.ts`, `DefaultService`, `AuthService`, `ScheduleService`, `ApiModule`, `PeriodService`, `SchoolService`, `SectionService`, `DayService`, `TeacherDegreeService`, `UserService`, `AuditService`, `InscriptionService`, `DocumentService`, `SubjectDemandService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _541 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07188160676532769 - nodes in this community are weakly interconnected._
- **Should `get-careers.service.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12554112554112554 - nodes in this community are weakly interconnected._
- **Should `teacher.service.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12179487179487179 - nodes in this community are weakly interconnected._