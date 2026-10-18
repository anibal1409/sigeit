# Graph Report - sigeit  (2026-10-18)

## Corpus Check
- 1002 files · ~188,712 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 78 file(s) not represented in the graph (top: .scss 64, (none) 11, .mdc 1)

## Summary
- 4279 nodes · 11149 edges · 212 communities (179 shown, 33 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 353 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ef1067ce`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- array-validator.directive.ts
- teachers.module.ts
- ref_dashboard_sdk
- teacher.service.ts
- StudentSchedulesComponent
- models.ts
- StatisticsService
- ref_angular_common
- UserStateService
- GetDepartmentsService
- error-handler.module.ts
- ScheduleComponent
- PeriodVM
- AcademicChargeTeacherComponent
- create-section.service.ts
- UserMemoryService
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- GradeSearchComponent
- memory-repository/index.ts
- PlanningAuditComponent
- SectionsManageComponent
- ref_angular_core
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- PeriodsComponent
- departments.module.ts
- AcademicComponent
- Configuration
- AuthService
- TogglePasswordViewComponent
- src_app_common_memory_repository_index_usecase
- SchedulesService
- MemoryDocumentsService
- finished.component.ts
- sections.component.ts
- dependencies
- classrooms.module.ts
- BulkAcademicChargeModalComponent
- schedule.service.ts
- 📱 Sistema de Visualización de Versión - SIGEIT
- ToastService
- schedules/model/index.ts
- 📋 Gestión de Versiones - SIGEIT
- period.service.ts
- DayVM
- devDependencies
- SchoolService
- SectionService
- logger.service.ts
- schools.module.ts
- periods/form/form.component.ts
- SectionsOverviewComponent
- Changelog
- scripts
- @angular/material
- find-classroom.service.ts
- DayService
- documents.module.ts
- UsersComponent
- SettingService
- SchedulesComponent
- production
- GlobalPeriodService
- teacher-degree.service.ts
- UserService
- AuditService
- InscriptionService
- SubjectsComponent
- import-demand.component.ts
- users/form/form.component.ts
- SectionsComponent
- Componente de Vista General de Secciones
- periods.component.ts
- ScheduleItemVM
- AdminComponent
- DocumentsComponent
- DocumentsFileService
- teachers.component.ts
- FormComponent
- UserItemVM
- document.service.ts
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
- SubjectDemandStoreService
- VersionService
- ReportConfigModalComponent
- .ngOnInit
- FormComponent
- VersionDisplayComponent
- FormComponent
- StudentSchedulesService
- Sistema de Período Académico Global
- users.service.ts
- UseCase
- VersionInfoComponent
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- admin.component.ts
- auth.module.ts
- documents/form/form.component.ts
- FormComponent
- auditoria
- find-subject.service.ts
- DegreeFormComponent
- ClassroomVM
- repositories/profile/profile.module.ts
- rxjs
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- student-schedules/use-cases/index.ts
- admin-routing.module.ts
- ListComponentService
- SubjectDemandsComponent
- DepartmentItemVM
- period-comparison-response-dto.ts
- TeachersComponent
- build
- development
- @
- @
- find-section.service.ts
- academic.module.ts
- delete-classroom.service.ts
- RowOptionVM
- app.module.ts
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- delete-department.service.ts
- ClassroomsMemoryService
- SectionItemVM
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
- schedules/index.ts
- delete-subject.service.ts
- subject-demand.module.ts
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
- DocumentItemVM
- get-setcions.service.ts
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- subjects.service.ts
- remove-section.service.ts
- lib/public-api.ts
- common/index.ts
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- ClassroomsComponent
- environment.auditoria.ts
- environment.prod.ts
- delete-schedule.service.ts
- DepartmentsComponent
- Reglas de desarrollo - Sigeit
- schedules.service.ts
- GetDocumentsService

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 171 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 80 edges
4. `StudentSchedulesComponent` - 76 edges
5. `@angular/forms` - 67 edges
6. `UserStateService` - 65 edges
7. `StateService` - 60 edges
8. `@angular/router` - 57 edges
9. `ScheduleItemVM` - 52 edges
10. `Configuration` - 50 edges

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

## Communities (212 total, 33 thin omitted)

### Community 1 - "teachers.module.ts"
Cohesion: 0.06
Nodes (34): src_app_common_index_statemodule, src_app_common_index_tablemodule, src_app_common_memory_repository_index_listcomponentservice, src_app_common_memory_repository_index_memoryrepository, TableModule, NgModule, src_app_repositories_departments_index_department2departmentvm, src_app_repositories_teachers_mappers_index_teacher2teacheritemvm (+26 more)

### Community 3 - "ref_dashboard_sdk"
Cohesion: 0.06
Nodes (36): ref_dashboard_sdk, src_app_common_index_listcomponentservice, src_app_common_index_usecase, CareersService, Injectable, Inject, Career2CareerItemVM(), Career2CareerVM() (+28 more)

### Community 4 - "teacher.service.ts"
Cohesion: 0.14
Nodes (19): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Injectable, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, HiringEvaluationStatus (+11 more)

### Community 6 - "models.ts"
Cohesion: 0.06
Nodes (42): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+34 more)

### Community 7 - "StatisticsService"
Cohesion: 0.05
Nodes (26): StatisticsService, Inject, Injectable, Optional, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+18 more)

### Community 8 - "ref_angular_common"
Cohesion: 0.10
Nodes (27): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+19 more)

### Community 9 - "UserStateService"
Cohesion: 0.09
Nodes (13): StateService, Injectable, TableService, Injectable, Injectable, UserStateService, Inject, Optional (+5 more)

### Community 10 - "GetDepartmentsService"
Cohesion: 0.14
Nodes (10): src_app_repositories_departments_mappers_index_department2departmentitemvm, DepartmentsMemoryService, Injectable, src_app_repositories_departments_model_index_departmentitemvm, CreateDepartmentService, Injectable, GetDepartmentsService, Injectable (+2 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "ScheduleComponent"
Cohesion: 0.15
Nodes (4): FinishedComponent, Component, ScheduleComponent, Component

### Community 13 - "PeriodVM"
Cohesion: 0.10
Nodes (9): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable, PeriodVM, src_app_repositories_schedules_index_schedule_details_dialog, src_app_repositories_schedules_index_scheduledetailscomponent, Intervals (+1 more)

### Community 15 - "create-section.service.ts"
Cohesion: 0.13
Nodes (8): src_app_repositories_sections_mappers_index_section2sectionitemvm, SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm, CreateSectionService, Injectable, Injectable, UpdateSectionService

### Community 16 - "UserMemoryService"
Cohesion: 0.13
Nodes (8): Injectable, UserMemoryService, CreateUserService, Injectable, DeleteUserService, Injectable, Injectable, UpdateUserService

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.08
Nodes (19): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, FormControlTestComponent, Component (+11 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (42): engines, node, @angular/common, @angular/core, tslib, name, private, version (+34 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "GradeSearchComponent"
Cohesion: 0.14
Nodes (6): GradeSearchComponent, groupByTeacher(), normalize(), Component, Inject, Optional

### Community 21 - "memory-repository/index.ts"
Cohesion: 0.14
Nodes (3): MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus

### Community 23 - "SectionsManageComponent"
Cohesion: 0.10
Nodes (4): normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "ref_angular_core"
Cohesion: 0.06
Nodes (15): ref_angular_core, StateComponent, Component, HostBinding, Input, StateModule, NgModule, Injectable (+7 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.08
Nodes (9): @angular/cdk, NormalizeWords(), searchCallback(), SelectExComponent, Component, Input, ViewChild, SelectExModule (+1 more)

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.11
Nodes (6): PlannedSchedulesComponent, Component, ReportConfig, sectionShift(), Shift, SHIFT_LABELS

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.08
Nodes (26): src_app_common_index_selectexmodule, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectsmodule, SubjectsModule (+18 more)

### Community 29 - "departments.module.ts"
Cohesion: 0.13
Nodes (17): DepartmentsModule, NgModule, DepartmentsRoutingModule, routes, NgModule, DepartmentsService, Injectable, src_app_repositories_departments_form_index_formcomponent (+9 more)

### Community 30 - "AcademicComponent"
Cohesion: 0.12
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

### Community 34 - "src_app_common_memory_repository_index_usecase"
Cohesion: 0.31
Nodes (8): src_app_common_memory_repository_index_usecase, src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentitemvm, src_app_repositories_documents_memory_index_memorydocumentsservice, src_app_repositories_documents_model_index_documentitemvm, src_app_repositories_documents_model_index_documentvm

### Community 35 - "SchedulesService"
Cohesion: 0.08
Nodes (12): src_app_common_timer_index_timevalidator, timeValidator(), clashHtml(), FormComponent, Component, Input, Output, src_app_repositories_schedules_model_index_intervalselect (+4 more)

### Community 36 - "MemoryDocumentsService"
Cohesion: 0.24
Nodes (4): MemoryDocumentsService, Injectable, DeleteDocumentService, Injectable

### Community 37 - "finished.component.ts"
Cohesion: 0.10
Nodes (17): src_app_repositories_periods_index_stageperiod, src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionBaseQuery, InscriptionVM (+9 more)

### Community 38 - "sections.component.ts"
Cohesion: 0.10
Nodes (18): src_app_common_index_semesters, src_app_common_index_semestervm, src_app_repositories_departments_index_departmentvm, src_app_repositories_sections_model_index_rowactionsection, src_app_repositories_sections_model_index_sectionvm, RowActionSection, delete, update (+10 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "classrooms.module.ts"
Cohesion: 0.12
Nodes (18): ClassroomsModule, NgModule, ClassroomsRoutingModule, routes, NgModule, ClassroomsService, Injectable, src_app_repositories_classrooms_form_index_formcomponent (+10 more)

### Community 41 - "BulkAcademicChargeModalComponent"
Cohesion: 0.25
Nodes (3): BulkAcademicChargeModalComponent, Component, Inject

### Community 42 - "schedule.service.ts"
Cohesion: 0.07
Nodes (27): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ScheduleService, Inject, Injectable, Optional, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto (+19 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 45 - "schedules/model/index.ts"
Cohesion: 0.07
Nodes (26): src_app_repositories_schedules_index_schedule2scheduleitemvm, src_app_repositories_schedules_index_scheduleitemvm, Day2DayVM(), src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm, Schedule2ScheduleItemVM(), Schedule2ScheduleVM(), src_app_repositories_schedules_memory_index_schedulememoryservice (+18 more)

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "period.service.ts"
Cohesion: 0.12
Nodes (11): PeriodService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

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
Cohesion: 0.06
Nodes (39): Inject, src_app_repositories_schools_form_index_formcomponent, src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_memory_index_schoolmemoryservice, SchoolMemoryService (+31 more)

### Community 54 - "periods/form/form.component.ts"
Cohesion: 0.05
Nodes (24): lodash, FormComponent, Component, Inject, Input, Output, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value (+16 more)

### Community 55 - "SectionsOverviewComponent"
Cohesion: 0.15
Nodes (3): Group, SectionsOverviewComponent, Component

### Community 56 - "Changelog"
Cohesion: 0.09
Nodes (21): 0.0.1 (2025-09-21), 0.0.2 (2025-09-21), 0.0.3 (2025-09-21), ✨ Características, ✨ Características, ✨ Características, ✨ Características, Changelog (+13 more)

### Community 57 - "scripts"
Cohesion: 0.09
Nodes (22): scripts, build, build-error-handler, build:prod, build-projects, build:versioned, changelog, dashboard-sdk (+14 more)

### Community 58 - "@angular/material"
Cohesion: 0.08
Nodes (24): @angular/material, ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, src_app_common_confirm_modal_index_confirmmodalcomponent (+16 more)

### Community 59 - "find-classroom.service.ts"
Cohesion: 0.16
Nodes (7): src_app_repositories_classrooms_mappers_index_classroom2classroomvm, ClassroomBaseQuery, src_app_repositories_classrooms_model_index_classroombasequery, FindClassroomService, Injectable, GetClassroomsService, Injectable

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.16
Nodes (12): DocumentsModule, NgModule, DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice, src_app_repositories_documents_use_cases_create_document_index_createdocumentservice (+4 more)

### Community 63 - "SettingService"
Cohesion: 0.15
Nodes (8): SettingService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSettingDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UpdateSettingDto

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "GlobalPeriodService"
Cohesion: 0.15
Nodes (4): AdminService, Injectable, GlobalPeriodService, Injectable

### Community 67 - "teacher-degree.service.ts"
Cohesion: 0.08
Nodes (31): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherDegreeService, Injectable, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, GradeStatus (+23 more)

### Community 68 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 72 - "import-demand.component.ts"
Cohesion: 0.12
Nodes (10): src_app_common_subject_demand_index_subjectdemandstoreservice, MAX_UPLOAD_SIZE, uploadSizeError(), ImportDemandComponent, Component, Inject, SubjectDemandsModule, NgModule (+2 more)

### Community 73 - "users/form/form.component.ts"
Cohesion: 0.17
Nodes (9): src_app_repositories_users_model_index_user_roles, USER_ROLES, UserRole, Administrator, Director, HeadDepartment, Planner, Student (+1 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.21
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "periods.component.ts"
Cohesion: 0.11
Nodes (15): src_app_common_global_period_index_globalperiodservice, src_app_common_index_optionaction, src_app_common_index_tabledatavm, src_app_common_index_tableservice, CareersComponent, Component, CareersRoutingModule, routes (+7 more)

### Community 77 - "ScheduleItemVM"
Cohesion: 0.08
Nodes (21): src_app_common_user_state_index_userstateservice, src_app_repositories_periods_index_periodvm, BulkAcademicChargeModalData, BulkAcademicChargeModalResult, BulkDownloadMode, src_app_repositories_schedules_mappers_index_day2dayvm, src_app_repositories_schedules_model_index_dayvm, ScheduleItemVM (+13 more)

### Community 78 - "AdminComponent"
Cohesion: 0.24
Nodes (3): AdminComponent, Component, optionMenu

### Community 80 - "DocumentsFileService"
Cohesion: 0.13
Nodes (8): DocumentsFileService, Injectable, Inject, Optional, CreateDocumentService, Injectable, Injectable, UpdateDocumentService

### Community 81 - "teachers.component.ts"
Cohesion: 0.05
Nodes (54): xlsx, src_app_common_index_computecoverage, src_app_common_index_confirmmodalcomponent, src_app_common_index_sections_load_panel_key, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemanddialogcomponent, src_app_common_index_subjectdemanddialogdata, src_app_common_index_subjectdemandstoreservice (+46 more)

### Community 82 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 83 - "UserItemVM"
Cohesion: 0.11
Nodes (20): src_app_common_index_rowoptionvm, src_app_repositories_schools_index_school2schoolvm, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_teachers_index_teachervm, src_app_repositories_users_mappers_index_user2useritemvm, src_app_repositories_users_mappers_index_user2uservm, User2UserItemVM() (+12 more)

### Community 84 - "document.service.ts"
Cohesion: 0.14
Nodes (10): DocumentService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+2 more)

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "TeacherPickerComponent"
Cohesion: 0.17
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "SubjectVM"
Cohesion: 0.17
Nodes (10): Subject2SubjectItemVM(), Subject2SubjectVM(), RowActionSubject, delete, update, SubjectBaseQuery, SubjectItemVM, SubjectVM (+2 more)

### Community 88 - "ClassroomType"
Cohesion: 0.33
Nodes (5): CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

### Community 89 - "create-subject.service.ts"
Cohesion: 0.13
Nodes (10): GetCareersService, Injectable, src_app_repositories_subjects_mappers_index_subject2subjectitemvm, SubjectMemoryService, Injectable, src_app_repositories_subjects_model_index_subjectitemvm, CreateSubjectService, Injectable (+2 more)

### Community 90 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 91 - "CareerService"
Cohesion: 0.23
Nodes (5): CareerService, Inject, Injectable, Optional, ResponseCareerDto

### Community 92 - "ClassroomService"
Cohesion: 0.23
Nodes (5): ClassroomService, Inject, Injectable, Optional, ResponseClassroomDto

### Community 93 - "DepartmentService"
Cohesion: 0.19
Nodes (6): DepartmentService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDepartmentDto

### Community 94 - "SubjectService"
Cohesion: 0.19
Nodes (6): SubjectService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDto

### Community 95 - "SubjectDemandStoreService"
Cohesion: 0.21
Nodes (4): isValidDemandConfig(), SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "ReportConfigModalComponent"
Cohesion: 0.12
Nodes (3): ReportConfigModalComponent, Component, Inject

### Community 99 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

### Community 101 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 102 - "StudentSchedulesService"
Cohesion: 0.12
Nodes (3): SavedSchedule, StudentSchedulesService, Injectable

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "users.service.ts"
Cohesion: 0.10
Nodes (17): ref_admin_sdk, src_app_common_memory_repository_index_basequery, src_app_common_table_index_tablemodule, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, GetUsersService, Injectable (+9 more)

### Community 105 - "UseCase"
Cohesion: 0.05
Nodes (38): src_app_common_index_memoryrepository, UseCase, src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodItemVM(), Period2PeriodVM(), src_app_repositories_periods_memory_index_periodmemoryservice, PeriodMemoryService (+30 more)

### Community 106 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 107 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.23
Nodes (4): FormComponent, Component, Input, Output

### Community 109 - "FormComponent"
Cohesion: 0.14
Nodes (7): FormComponent, Component, Inject, Input, Output, Injectable, UsersService

### Community 110 - "projects"
Cohesion: 0.15
Nodes (12): cli, analytics, architect, prefix, projectType, root, sourceRoot, newProjectRoot (+4 more)

### Community 111 - "options"
Cohesion: 0.22
Nodes (13): options, allowedCommonJsDependencies, assets, index, inlineStyleLanguage, main, outputPath, polyfills (+5 more)

### Community 112 - "toast.module.ts"
Cohesion: 0.27
Nodes (5): TOAST_OPTIONS, ToastModule, NgModule, @ngx-translate/core, toastr

### Community 113 - "admin.component.ts"
Cohesion: 0.23
Nodes (6): src_app_admin_data_index_menu, MENU, src_app_admin_models_index_optionmenu, src_app_common_user_state_index_userstatevm, src_app_common_version_index_versionservice, src_app_repositories_users_model_index_userrole

### Community 114 - "auth.module.ts"
Cohesion: 0.05
Nodes (24): @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent (+16 more)

### Community 115 - "documents/form/form.component.ts"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Input, Output, src_app_repositories_documents_model_index_typedocument

### Community 116 - "FormComponent"
Cohesion: 0.20
Nodes (4): FormComponent, Component, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "find-subject.service.ts"
Cohesion: 0.29
Nodes (4): src_app_repositories_subjects_mappers_index_subject2subjectvm, src_app_repositories_subjects_model_index_subjectbasequery, FindSubjectService, Injectable

### Community 119 - "DegreeFormComponent"
Cohesion: 0.10
Nodes (5): DegreeFormComponent, normalize(), Component, Input, Output

### Community 120 - "ClassroomVM"
Cohesion: 0.23
Nodes (11): Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, src_app_repositories_classrooms_memory_index_classroomsmemoryservice, ClassroomItemVM, ClassroomVM, src_app_repositories_classrooms_model_index_classroomitemvm, src_app_repositories_classrooms_model_index_classroomvm (+3 more)

### Community 121 - "repositories/profile/profile.module.ts"
Cohesion: 0.18
Nodes (9): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule, ProfileService (+1 more)

### Community 122 - "rxjs"
Cohesion: 0.16
Nodes (18): @angular/forms, @angular/router, moment, rxjs, src_app_common_index_readurlnumber, src_app_common_index_stateservice, src_app_common_index_userstateservice, src_app_common_index_writeurlquery (+10 more)

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

### Community 132 - "admin-routing.module.ts"
Cohesion: 0.19
Nodes (9): AdminModule, NgModule, AdminRoutingModule, routes, NgModule, src_app_common_version_index_versiondisplaycomponent, src_app_common_version_index_versioninfocomponent, Component (+1 more)

### Community 134 - "SubjectDemandsComponent"
Cohesion: 0.24
Nodes (5): SubjectDemandsComponent, Component, routes, SubjectDemandsRoutingModule, NgModule

### Community 135 - "DepartmentItemVM"
Cohesion: 0.13
Nodes (13): Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentvm, DepartmentBaseQuery, DepartmentItemVM, DepartmentVM, src_app_repositories_departments_model_index_departmentbasequery, src_app_repositories_departments_model_index_departmentvm (+5 more)

### Community 136 - "period-comparison-response-dto.ts"
Cohesion: 0.26
Nodes (8): PeriodComparisonDeltaDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodComparisonResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodMetricResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SubjectDemandIncreaseItemDto

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

### Community 142 - "find-section.service.ts"
Cohesion: 0.19
Nodes (9): src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_sections_model_index_sectionbasequery, FindSectionService, Injectable, src_app_repositories_subjects_index_subject2subjectitemvm, src_app_repositories_teachers_mappers_index_teacher2teachervm (+1 more)

### Community 143 - "academic.module.ts"
Cohesion: 0.12
Nodes (17): src_app_common_state_index_statemodule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule, routes, NgModule (+9 more)

### Community 145 - "RowOptionVM"
Cohesion: 0.10
Nodes (12): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl(), TableComponent (+4 more)

### Community 146 - "app.module.ts"
Cohesion: 0.04
Nodes (32): ref_error_handler, ref_http_form_data_client, ref_toast, AppComponent, Component, AppRoutingModule, routes, NgModule (+24 more)

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

### Community 153 - "ClassroomsMemoryService"
Cohesion: 0.20
Nodes (4): ClassroomsMemoryService, Injectable, CreateClassroomService, Injectable

### Community 154 - "SectionItemVM"
Cohesion: 0.19
Nodes (9): SectionBaseQuery, SectionItemVM, CardSectionSchedulesComponent, Component, Input, checkSemester(), clash(), SemesterCheck (+1 more)

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
Cohesion: 0.33
Nodes (4): src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_model_index_documentbasequery, FindDocumentService, Injectable

### Community 165 - "sign-up.service.ts"
Cohesion: 0.09
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

### Community 177 - "schedules/index.ts"
Cohesion: 0.22
Nodes (6): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, routes, SchedulesRoutingModule, NgModule

### Community 179 - "subject-demand.module.ts"
Cohesion: 0.24
Nodes (6): SubjectDemandDialogComponent, SubjectDemandDialogData, Component, Inject, SubjectDemandModule, NgModule

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
Cohesion: 0.11
Nodes (21): src_app_common_index_subjectdemandmodule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_sections_manage_index_sectionsmanagecomponent, src_app_repositories_sections_sections_overview_index_sectionsoverviewcomponent, routes, SectionsRoutingModule (+13 more)

### Community 190 - "DocumentItemVM"
Cohesion: 0.22
Nodes (8): DocumentBaseQuery, DocumentItemVM, DocumentVM, RowActionDocument, delete, update, TypeDocument, AcademicCharge

### Community 191 - "get-setcions.service.ts"
Cohesion: 0.20
Nodes (3): src_app_repositories_sections_index_section2sectionitemvm, src_app_repositories_sections_index_sectionbasequery, src_app_repositories_sections_index_sectionmemoryservice

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.11
Nodes (18): LevelBar, SubjectDemandPanelComponent, Component, Input, attendedByLevel(), CoverageStatus, DEFAULT_DEMAND_CONFIG, DEFAULT_DEMAND_FACTOR (+10 more)

### Community 195 - "subjects.service.ts"
Cohesion: 0.16
Nodes (13): src_app_repositories_careers_index_careervm, src_app_repositories_careers_index_getcareersservice, src_app_repositories_subjects_memory_index_subjectmemoryservice, routes, SubjectsRoutingModule, NgModule, SubjectsService, Injectable (+5 more)

### Community 196 - "remove-section.service.ts"
Cohesion: 0.29
Nodes (3): src_app_repositories_sections_memory_index_sectionmemoryservice, RemoveSectionService, Injectable

### Community 198 - "common/index.ts"
Cohesion: 0.25
Nodes (3): src_app_common_index_basequery, BaseQuery, Optional

### Community 210 - "schedules.service.ts"
Cohesion: 0.08
Nodes (33): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable (+25 more)

## Knowledge Gaps
- **541 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+536 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1458 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **33 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `teachers.module.ts`, `ref_dashboard_sdk`, `teacher.service.ts`, `student-schedules/use-cases/index.ts`, `DepartmentItemVM`, `ref_angular_common`, `UserStateService`, `GetDepartmentsService`, `PeriodVM`, `find-section.service.ts`, `create-section.service.ts`, `delete-classroom.service.ts`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `app.module.ts`, `memory-repository/index.ts`, `RowOptionVM`, `ref_angular_core`, `SelectExComponent`, `delete-department.service.ts`, `student-schedules.service.ts`, `departments.module.ts`, `src_app_common_memory_repository_index_usecase`, `SchedulesService`, `MemoryDocumentsService`, `sign-up.service.ts`, `find-document.service.ts`, `sections.component.ts`, `classrooms.module.ts`, `finished.component.ts`, `schedule.service.ts`, `schedules/model/index.ts`, `period.service.ts`, `DayVM`, `delete-subject.service.ts`, `schools.module.ts`, `periods/form/form.component.ts`, `@angular/material`, `find-classroom.service.ts`, `sections.service.ts`, `get-setcions.service.ts`, `subject-demand-store.service.ts`, `teacher-degree.service.ts`, `remove-section.service.ts`, `subjects.service.ts`, `import-demand.component.ts`, `users/form/form.component.ts`, `periods.component.ts`, `ScheduleItemVM`, `delete-schedule.service.ts`, `teachers.component.ts`, `schedules.service.ts`, `UserItemVM`, `document.service.ts`, `SubjectVM`, `create-subject.service.ts`, `users.service.ts`, `UseCase`, `VersionInfoComponent`, `admin.component.ts`, `auth.module.ts`, `documents/form/form.component.ts`, `find-subject.service.ts`, `ClassroomVM`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Why does `@angular/material` connect `@angular/material` to `teachers.module.ts`, `ref_dashboard_sdk`, `admin-routing.module.ts`, `PeriodVM`, `academic.module.ts`, `RowOptionVM`, `package.json`, `app.module.ts`, `ref_angular_core`, `SelectExComponent`, `student-schedules.service.ts`, `departments.module.ts`, `SchedulesService`, `sections.component.ts`, `classrooms.module.ts`, `DayVM`, `subject-demand.module.ts`, `schools.module.ts`, `periods/form/form.component.ts`, `documents.module.ts`, `sections.service.ts`, `subjects.service.ts`, `import-demand.component.ts`, `users/form/form.component.ts`, `periods.component.ts`, `ScheduleItemVM`, `teachers.component.ts`, `schedules.service.ts`, `TeacherPickerComponent`, `users.service.ts`, `UseCase`, `VersionInfoComponent`, `admin.component.ts`, `auth.module.ts`, `documents/form/form.component.ts`, `rxjs`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `UseCase` connect `UseCase` to `teachers.module.ts`, `ref_dashboard_sdk`, `DepartmentItemVM`, `GetDepartmentsService`, `find-section.service.ts`, `create-section.service.ts`, `delete-classroom.service.ts`, `UserMemoryService`, `memory-repository/index.ts`, `delete-department.service.ts`, `ClassroomsMemoryService`, `ref_angular_core`, `src_app_common_memory_repository_index_usecase`, `MemoryDocumentsService`, `find-document.service.ts`, `finished.component.ts`, `classrooms.module.ts`, `schedules/model/index.ts`, `delete-subject.service.ts`, `schools.module.ts`, `find-classroom.service.ts`, `get-setcions.service.ts`, `remove-section.service.ts`, `common/index.ts`, `delete-schedule.service.ts`, `DocumentsFileService`, `schedules.service.ts`, `GetDocumentsService`, `UserItemVM`, `SubjectVM`, `create-subject.service.ts`, `users.service.ts`, `find-subject.service.ts`, `ClassroomVM`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _541 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05960755275823769 - nodes in this community are weakly interconnected._
- **Should `ref_dashboard_sdk` be split into smaller, more focused modules?**
  _Cohesion score 0.06052393857271906 - nodes in this community are weakly interconnected._
- **Should `teacher.service.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13813813813813813 - nodes in this community are weakly interconnected._