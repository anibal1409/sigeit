# Graph Report - sigeit  (2026-09-30)

## Corpus Check
- 999 files · ~182,244 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 77 file(s) not represented in the graph (top: .scss 63, (none) 11, .mdc 1)

## Summary
- 4209 nodes · 10906 edges · 204 communities (175 shown, 29 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 349 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e88510a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- PeriodVM
- teachers.service.ts
- .setLoading
- admin.component.ts
- MemoryDocumentsService
- StudentSchedulesComponent
- models.ts
- StatisticsService
- ref_angular_common
- app.module.ts
- schedule.service.ts
- error-handler.module.ts
- UseCase
- schedules/academic-charge-teacher/academic-charge-teacher.component.ts
- FinishedComponent
- users.service.ts
- UserStateService
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- periods.module.ts
- memory-repository/index.ts
- auth.module.ts
- SectionsManageComponent
- teacher.service.ts
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- careers.module.ts
- DepartmentVM
- AcademicChargeTeacherComponent
- Configuration
- AuthService
- TogglePasswordViewComponent
- SignUpComponent
- SchedulesService
- subjects.service.ts
- get-classrooms.service.ts
- app-routing.module.ts
- dependencies
- departments.module.ts
- BulkAcademicChargeModalComponent
- period-comparison-response-dto.ts
- 📱 Sistema de Visualización de Versión - SIGEIT
- classrooms.module.ts
- documents/model/index.ts
- 📋 Gestión de Versiones - SIGEIT
- period.service.ts
- ScheduleItemVM
- devDependencies
- school.service.ts
- SectionService
- logger.service.ts
- CardSubjectSchedulesComponent
- settings.module.ts
- SectionsOverviewComponent
- Changelog
- scripts
- RowOptionVM
- ClassroomVM
- DayService
- documents.module.ts
- DocumentItemVM
- academic.module.ts
- SchedulesComponent
- production
- user-item-vm.ts
- teacher-degree.service.ts
- sections.service.ts
- AuditService
- InscriptionService
- AdminComponent
- SubjectsComponent
- SchoolItemVM
- SectionsComponent
- Componente de Vista General de Secciones
- users.component.ts
- student-schedules.component.ts
- http-interceptor.interceptor.ts
- @angular/material
- DocumentsComponent
- teachers.component.ts
- FormComponent
- ReportConfigModalComponent
- document.service.ts
- SubjectDemandService
- TeacherPickerComponent
- reset-password.component.ts
- find-setting.service.ts
- schools.module.ts
- FormComponent
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- SubjectDemandStoreService
- VersionService
- FormComponent
- find-user.service.ts
- TeacherVM
- sections-manage.component.ts
- ProfileComponent
- ListComponentService
- Sistema de Período Académico Global
- UserItemVM
- SubjectVM
- find-classroom.service.ts
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- RecoveryPasswordComponent
- UserService
- documents/form/form.component.ts
- FormComponent
- auditoria
- SubjectDemandsComponent
- TeacherAcademicService
- documents-routing.module.ts
- repositories/profile/profile.module.ts
- DegreeFormComponent
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- classrooms/model/index.ts
- UserMemoryService
- FormComponent
- GradeSearchComponent
- VersionInfoComponent
- subject-demands.component.ts
- TeachersComponent
- build
- development
- @
- @
- SchoolsComponent
- schedules.service.ts
- SchoolMemoryService
- ToastService
- DocumentsFileService
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- GlobalPeriodService
- StudentSchedulesService
- ref_angular_core
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- CareersComponent
- login.service.ts
- FindSchoolService
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
- ScheduleComponent
- UpdateSchoolService
- SectionItemVM
- api-interfaces/src/index.ts
- api-interfaces/ng-package.json
- dashboard-sdk/ng-package.json
- error-handler/ng-package.json
- form-control-errors/ng-package.json
- http-form-data-client/ng-package.json
- logger/ng-package.json
- login/ng-package.json
- toast/ng-package.json
- @angular/router
- DepartmentItemVM
- classrooms.component.ts
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- lib/public-api.ts
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 170 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 81 edges
4. `StudentSchedulesComponent` - 74 edges
5. `@angular/forms` - 67 edges
6. `UserStateService` - 65 edges
7. `StateService` - 60 edges
8. `ScheduleItemVM` - 49 edges
9. `Configuration` - 48 edges
10. `DepartmentItemVM` - 47 edges

## Surprising Connections (you probably didn't know these)
- `3. **Modal de Información (`VersionInfoComponent`)**` --references--> `VersionInfoComponent`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version-info.component.ts
- `2. **Componente de Visualización (`VersionDisplayComponent`)**` --references--> `VersionDisplayComponent`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version-display.component.ts
- `1. **Servicio de Versión (`VersionService`)**` --references--> `VersionService`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version.service.ts
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

## Communities (204 total, 29 thin omitted)

### Community 0 - "PeriodVM"
Cohesion: 0.07
Nodes (23): ref_toast, src_app_common_index_rowoptionvm, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, PeriodVM, RowActionPeriod, delete (+15 more)

### Community 1 - "teachers.service.ts"
Cohesion: 0.08
Nodes (21): src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, Teacher2TeacherItemVM(), TeacherVM2TeacherDto(), src_app_repositories_teachers_memory_index_teachermemoryservice, TeacherMemoryService, Injectable, src_app_repositories_teachers_model_index_teacherbasequery (+13 more)

### Community 3 - "admin.component.ts"
Cohesion: 0.11
Nodes (18): AdminModule, NgModule, AdminRoutingModule, routes, NgModule, AdminService, Injectable, src_app_admin_data_index_menu (+10 more)

### Community 4 - "MemoryDocumentsService"
Cohesion: 0.11
Nodes (11): src_app_common_memory_repository_index_memoryrepository, MemoryDocumentsService, Injectable, CreateDocumentService, Injectable, DeleteDocumentService, Injectable, GetDocumentsService (+3 more)

### Community 6 - "models.ts"
Cohesion: 0.06
Nodes (40): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateInscriptionDto (+32 more)

### Community 7 - "StatisticsService"
Cohesion: 0.05
Nodes (26): StatisticsService, Inject, Injectable, Optional, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+18 more)

### Community 8 - "ref_angular_common"
Cohesion: 0.10
Nodes (27): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+19 more)

### Community 9 - "app.module.ts"
Cohesion: 0.07
Nodes (25): @angular/platform-browser-dynamic, ref_error_handler, ref_http_form_data_client, AppModule, NgModule, GlobalPeriodModule, NgModule, src_app_common_global_period_index_globalperiodmodule (+17 more)

### Community 10 - "schedule.service.ts"
Cohesion: 0.07
Nodes (25): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ScheduleService, Injectable, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus (+17 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "UseCase"
Cohesion: 0.10
Nodes (15): UseCase, GenerateReportService, Injectable, src_app_repositories_users_index_user2useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, CreateInscriptionService (+7 more)

### Community 13 - "schedules/academic-charge-teacher/academic-charge-teacher.component.ts"
Cohesion: 0.08
Nodes (15): BulkAcademicChargeModalData, BulkAcademicChargeModalResult, BulkDownloadMode, Day2DayVM(), DayVM, src_app_repositories_schedules_model_index_dayvm, src_app_repositories_schedules_model_index_scheduleitemvm, RowActionSchedule (+7 more)

### Community 15 - "users.service.ts"
Cohesion: 0.17
Nodes (14): src_app_repositories_careers_index_careeritemvm, src_app_repositories_departments_index_getdepartmentsservice, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_schools_index_schoolitemvm, src_app_repositories_users_model_index_user_roles, USER_ROLES, src_app_repositories_users_use_cases_index_createuserservice, src_app_repositories_users_use_cases_index_deleteuserservice (+6 more)

### Community 16 - "UserStateService"
Cohesion: 0.06
Nodes (27): AppComponent, Component, src_app_common_index_confirmmodalcomponent, src_app_common_index_optionaction, src_app_common_index_tabledatavm, src_app_common_index_tableservice, StateService, Injectable (+19 more)

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.08
Nodes (19): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, FormControlTestComponent, Component (+11 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (43): engines, node, @angular/common, @angular/core, tslib, name, private, version (+35 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "periods.module.ts"
Cohesion: 0.06
Nodes (32): src_app_common_memory_repository_index_listcomponentservice, src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodItemVM(), Period2PeriodVM(), src_app_repositories_periods_memory_index_periodmemoryservice, PeriodMemoryService, Injectable (+24 more)

### Community 21 - "memory-repository/index.ts"
Cohesion: 0.10
Nodes (4): Optional, MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus

### Community 22 - "auth.module.ts"
Cohesion: 0.13
Nodes (12): AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent, src_app_auth_login_index_loginservice, src_app_auth_recovery_password_index_recoverypasswordcomponent, src_app_auth_reset_password_index_resetpasswordcomponent, src_app_auth_sign_up_index_signupcomponent (+4 more)

### Community 23 - "SectionsManageComponent"
Cohesion: 0.09
Nodes (5): summarizeDemand(), normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "teacher.service.ts"
Cohesion: 0.14
Nodes (19): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Injectable, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, HiringEvaluationStatus (+11 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.10
Nodes (4): SelectExComponent, Component, Input, ViewChild

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.11
Nodes (4): Group, PlannedSchedulesComponent, Component, ReportConfig

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.06
Nodes (26): src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectsmodule, src_app_student_schedules_card_section_schedules_index_cardsectionschedulescomponent, src_app_student_schedules_card_subject_schedules_index_cardsubjectschedulescomponent, src_app_student_schedules_finished_index_finishedcomponent (+18 more)

### Community 28 - "careers.module.ts"
Cohesion: 0.06
Nodes (40): src_app_common_index_listcomponentservice, CareersRoutingModule, routes, NgModule, CareersService, Injectable, src_app_repositories_careers_form_index_formcomponent, Career2CareerItemVM() (+32 more)

### Community 29 - "DepartmentVM"
Cohesion: 0.14
Nodes (9): xlsx, src_app_common_global_period_index_globalperiodservice, DepartmentVM, ShiftRow, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfig, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfigmodalcomponent, sectionShift(), Shift (+1 more)

### Community 30 - "AcademicChargeTeacherComponent"
Cohesion: 0.13
Nodes (5): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable, Intervals

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "SignUpComponent"
Cohesion: 0.12
Nodes (8): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_repositories_users_model_index_saveuser, SaveUser

### Community 35 - "SchedulesService"
Cohesion: 0.06
Nodes (13): moment, src_app_common_timer_index_timevalidator, timeValidator(), clashHtml(), FormComponent, Component, Input, Output (+5 more)

### Community 36 - "subjects.service.ts"
Cohesion: 0.09
Nodes (18): src_app_common_index_statemodule, src_app_common_index_tablemodule, StateModule, NgModule, TableModule, NgModule, src_app_repositories_careers_index_careervm, src_app_repositories_careers_index_getcareersservice (+10 more)

### Community 37 - "get-classrooms.service.ts"
Cohesion: 0.17
Nodes (6): src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, ClassroomsMemoryService, Injectable, src_app_repositories_classrooms_model_index_classroomitemvm, GetClassroomsService, Injectable

### Community 38 - "app-routing.module.ts"
Cohesion: 0.17
Nodes (7): AppRoutingModule, routes, NgModule, AuthGuard, Injectable, AuthLoginGuard, Injectable

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "departments.module.ts"
Cohesion: 0.08
Nodes (25): lodash, src_app_common_index_selectexmodule, DepartmentsRoutingModule, routes, NgModule, DepartmentsService, Injectable, DepartmentsMemoryService (+17 more)

### Community 41 - "BulkAcademicChargeModalComponent"
Cohesion: 0.25
Nodes (3): BulkAcademicChargeModalComponent, Component, Inject

### Community 42 - "period-comparison-response-dto.ts"
Cohesion: 0.26
Nodes (8): PeriodComparisonDeltaDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodComparisonResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodMetricResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SubjectDemandIncreaseItemDto

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "classrooms.module.ts"
Cohesion: 0.13
Nodes (11): ClassroomsRoutingModule, routes, NgModule, src_app_repositories_classrooms_memory_index_classroomsmemoryservice, DeleteClassroomService, Injectable, src_app_repositories_classrooms_use_cases_index_createclassroomservice, src_app_repositories_classrooms_use_cases_index_deleteclassroomservice (+3 more)

### Community 45 - "documents/model/index.ts"
Cohesion: 0.29
Nodes (6): DocumentBaseQuery, RowActionDocument, delete, update, TypeDocument, AcademicCharge

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "period.service.ts"
Cohesion: 0.12
Nodes (11): PeriodService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 48 - "ScheduleItemVM"
Cohesion: 0.08
Nodes (8): AcademicChargeTeacherComponent, Component, ClassroomsSchedulesComponent, Component, Input, ScheduleItemVM, ScheduleDisplayService, Injectable

### Community 49 - "devDependencies"
Cohesion: 0.09
Nodes (23): devDependencies, ajv, @angular/cli, @angular/compiler-cli, @angular-devkit/build-angular, baseline-browser-mapping, @commitlint/cli, @commitlint/config-conventional (+15 more)

### Community 50 - "school.service.ts"
Cohesion: 0.13
Nodes (11): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SchoolService, Inject, Injectable, Optional, CreateSchoolDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 51 - "SectionService"
Cohesion: 0.12
Nodes (10): SectionService, Inject, Injectable, Optional, GenerateReportDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ReportResponseDto (+2 more)

### Community 52 - "logger.service.ts"
Cohesion: 0.15
Nodes (11): projects_logger_src_lib_interfaces_index_loggerconfig, projects_logger_src_lib_interfaces_index_loggerconfigkey, LoggerConfig, LoggerConfigKey, LoggerModule, NgModule, LoggerService, TODO: Crear un API res para el reporte de errores (+3 more)

### Community 53 - "CardSubjectSchedulesComponent"
Cohesion: 0.18
Nodes (4): CardSubjectSchedulesComponent, Component, Input, Output

### Community 54 - "settings.module.ts"
Cohesion: 0.15
Nodes (9): SettingsComponent, Component, Output, routes, SettingsRoutingModule, NgModule, SettingsService, Injectable (+1 more)

### Community 55 - "SectionsOverviewComponent"
Cohesion: 0.16
Nodes (3): Group, SectionsOverviewComponent, Component

### Community 56 - "Changelog"
Cohesion: 0.09
Nodes (21): 0.0.1 (2025-09-21), 0.0.2 (2025-09-21), 0.0.3 (2025-09-21), ✨ Características, ✨ Características, ✨ Características, ✨ Características, Changelog (+13 more)

### Community 57 - "scripts"
Cohesion: 0.09
Nodes (22): scripts, build, build-error-handler, build:prod, build-projects, build:versioned, changelog, dashboard-sdk (+14 more)

### Community 58 - "RowOptionVM"
Cohesion: 0.11
Nodes (12): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl(), TableComponent (+4 more)

### Community 59 - "ClassroomVM"
Cohesion: 0.20
Nodes (9): Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), ClassroomBaseQuery, ClassroomItemVM, ClassroomVM, CreateClassroomService, Injectable, Injectable (+1 more)

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.23
Nodes (9): src_app_common_table_index_tablemodule, DocumentsModule, NgModule, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice, src_app_repositories_documents_use_cases_create_document_index_createdocumentservice, src_app_repositories_documents_use_cases_delete_document_index_deletedocumentservice, src_app_repositories_documents_use_cases_find_document_index_finddocumentservice, src_app_repositories_documents_use_cases_get_documents_index_getdocumentsservice (+1 more)

### Community 62 - "DocumentItemVM"
Cohesion: 0.26
Nodes (7): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), Document2DocumentVM(), DocumentItemVM, DocumentVM, FindDocumentService, Injectable

### Community 63 - "academic.module.ts"
Cohesion: 0.13
Nodes (16): src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule, routes, NgModule, src_app_repositories_periods_index_periodsmodule (+8 more)

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "user-item-vm.ts"
Cohesion: 0.12
Nodes (16): src_app_repositories_departments_index_department2departmentvm, src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_users_model_index_user_roles_value, USER_ROLES_VALUE, UserRole, Administrator (+8 more)

### Community 67 - "teacher-degree.service.ts"
Cohesion: 0.09
Nodes (25): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherDegreeService, Injectable, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+17 more)

### Community 68 - "sections.service.ts"
Cohesion: 0.05
Nodes (46): src_app_common_index_subjectdemandmodule, src_app_common_memory_repository_index_usecase, SubjectDemandModule, NgModule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_index_section2sectionitemvm (+38 more)

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "AdminComponent"
Cohesion: 0.14
Nodes (3): AdminComponent, Component, UserStateVM

### Community 73 - "SchoolItemVM"
Cohesion: 0.24
Nodes (7): School2SchoolItemVM(), School2SchoolVM(), RowActionSchool, delete, update, SchoolItemVM, SchoolVM

### Community 74 - "SectionsComponent"
Cohesion: 0.20
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "users.component.ts"
Cohesion: 0.17
Nodes (7): src_app_repositories_users_form_index_formcomponent, src_app_repositories_users_model_index_rowactionuser, Component, UsersComponent, routes, NgModule, UsersRoutingModule

### Community 77 - "student-schedules.component.ts"
Cohesion: 0.07
Nodes (20): src_app_common_user_state_index_userstateservice, src_app_common_user_state_models_index_userstatevm, src_app_repositories_periods_index_periodvm, src_app_repositories_periods_index_stageperiod, src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_scheduledetailscomponent, src_app_repositories_schedules_index_scheduleitemvm (+12 more)

### Community 78 - "http-interceptor.interceptor.ts"
Cohesion: 0.28
Nodes (3): HttpInterceptorInterceptor, Injectable, DEMAND_PREFERENCE_KEYS

### Community 79 - "@angular/material"
Cohesion: 0.05
Nodes (40): @angular/forms, @angular/material, ArrayValidators, ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule (+32 more)

### Community 81 - "teachers.component.ts"
Cohesion: 0.12
Nodes (26): src_app_common_index_uploadsizeerror, Editing, GradeIssue, src_app_repositories_teachers_form_index_formcomponent, DEFAULT_MIN_PERCENT, SubjectMatches, TeacherResult, src_app_repositories_teachers_model_index_category_options (+18 more)

### Community 82 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 83 - "ReportConfigModalComponent"
Cohesion: 0.12
Nodes (3): ReportConfigModalComponent, Component, Inject

### Community 84 - "document.service.ts"
Cohesion: 0.14
Nodes (10): DocumentService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto (+2 more)

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "TeacherPickerComponent"
Cohesion: 0.19
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "reset-password.component.ts"
Cohesion: 0.16
Nodes (7): @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, ResetPasswordComponent, Component, passwordMatchValidator()

### Community 88 - "find-setting.service.ts"
Cohesion: 0.14
Nodes (9): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, FindSettingService (+1 more)

### Community 89 - "schools.module.ts"
Cohesion: 0.19
Nodes (8): routes, SchoolsRoutingModule, NgModule, src_app_repositories_schools_use_cases_index_createschoolservice, src_app_repositories_schools_use_cases_index_deleteschoolservice, src_app_repositories_schools_use_cases_index_findschoolservice, src_app_repositories_schools_use_cases_index_getschoolsservice, src_app_repositories_schools_use_cases_index_updateschoolservice

### Community 90 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

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

### Community 95 - "SubjectDemandStoreService"
Cohesion: 0.29
Nodes (3): isValidDemandConfig(), SubjectDemandStoreService, Injectable

### Community 96 - "VersionService"
Cohesion: 0.12
Nodes (10): Component, VersionDisplayComponent, Inject, Injectable, VersionService, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)** (+2 more)

### Community 97 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 98 - "find-user.service.ts"
Cohesion: 0.28
Nodes (5): src_app_common_memory_repository_index_basequery, src_app_repositories_users_mappers_index_user2uservm, User2UserVM(), FindUserService, Injectable

### Community 99 - "TeacherVM"
Cohesion: 0.12
Nodes (12): FormComponent, Component, Input, Output, SectionVM, src_app_repositories_teachers_model_index_teachervm, RowActionTeacher, academic (+4 more)

### Community 100 - "sections-manage.component.ts"
Cohesion: 0.18
Nodes (10): src_app_common_index_computecoverage, src_app_common_index_sections_load_panel_key, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemanddialogcomponent, src_app_common_index_subjectdemanddialogdata, src_app_common_index_subjectdemandstoreservice, src_app_common_index_subjectdemandsummary, SectionRow (+2 more)

### Community 101 - "ProfileComponent"
Cohesion: 0.22
Nodes (5): ProfileComponent, Component, Inject, TeacherAcademicModule, NgModule

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "UserItemVM"
Cohesion: 0.23
Nodes (9): ref_admin_sdk, src_app_repositories_users_mappers_index_user2useritemvm, User2UserItemVM(), src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, src_app_repositories_users_model_index_useritemvm, src_app_repositories_users_model_index_uservm, UserItemVM (+1 more)

### Community 105 - "SubjectVM"
Cohesion: 0.08
Nodes (23): src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_memory_index_subjectmemoryservice, SubjectMemoryService, Injectable, src_app_repositories_subjects_model_index_subjectbasequery (+15 more)

### Community 106 - "find-classroom.service.ts"
Cohesion: 0.29
Nodes (4): src_app_repositories_classrooms_mappers_index_classroom2classroomvm, src_app_repositories_classrooms_model_index_classroombasequery, FindClassroomService, Injectable

### Community 107 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.14
Nodes (7): FormComponent, Component, Inject, Input, Output, SchoolsService, Injectable

### Community 109 - "FormComponent"
Cohesion: 0.18
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

### Community 114 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 115 - "documents/form/form.component.ts"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Input, Output, src_app_repositories_documents_model_index_typedocument

### Community 116 - "FormComponent"
Cohesion: 0.17
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 119 - "TeacherAcademicService"
Cohesion: 0.10
Nodes (6): AcademicComponent, fullName(), normalize(), Component, TeacherAcademicService, Injectable

### Community 120 - "documents-routing.module.ts"
Cohesion: 0.33
Nodes (4): DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent

### Community 121 - "repositories/profile/profile.module.ts"
Cohesion: 0.18
Nodes (9): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule, ProfileService (+1 more)

### Community 122 - "DegreeFormComponent"
Cohesion: 0.14
Nodes (5): DegreeFormComponent, normalize(), Component, Input, Output

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

### Community 131 - "classrooms/model/index.ts"
Cohesion: 0.19
Nodes (8): RowActionClassroom, delete, update, CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

### Community 132 - "UserMemoryService"
Cohesion: 0.11
Nodes (10): Injectable, UserMemoryService, CreateUserService, Injectable, DeleteUserService, Injectable, GetUsersService, Injectable (+2 more)

### Community 133 - "FormComponent"
Cohesion: 0.17
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 134 - "GradeSearchComponent"
Cohesion: 0.15
Nodes (6): GradeSearchComponent, groupByTeacher(), normalize(), Component, Inject, Optional

### Community 135 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 136 - "subject-demands.component.ts"
Cohesion: 0.12
Nodes (13): src_app_common_subject_demand_index_subjectdemandstoreservice, MAX_UPLOAD_SIZE, uploadSizeError(), ImportDemandComponent, Component, Inject, SubjectDemandsModule, NgModule (+5 more)

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

### Community 143 - "schedules.service.ts"
Cohesion: 0.04
Nodes (56): src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable, src_app_repositories_schedules_index_schedule2scheduleitemvm (+48 more)

### Community 144 - "SchoolMemoryService"
Cohesion: 0.13
Nodes (9): src_app_common_index_memoryrepository, SchoolMemoryService, Injectable, CreateSchoolService, Injectable, DeleteSchoolService, Injectable, GetSchoolsService (+1 more)

### Community 145 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 146 - "DocumentsFileService"
Cohesion: 0.33
Nodes (4): DocumentsFileService, Injectable, Inject, Optional

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

### Community 153 - "StudentSchedulesService"
Cohesion: 0.16
Nodes (8): src_app_repositories_users_index_useritemvm, InscriptionBaseQuery, InscriptionVM, StageInscription, Registered, Validated, StudentSchedulesService, Injectable

### Community 154 - "ref_angular_core"
Cohesion: 0.07
Nodes (23): ref_angular_core, ref_dashboard_sdk, rxjs, src_app_common_index_basequery, src_app_common_index_usecase, BaseQuery, src_app_repositories_departments_mappers_index_department2departmentitemvm, src_app_repositories_departments_mappers_index_department2departmentvm (+15 more)

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

### Community 164 - "login.service.ts"
Cohesion: 0.17
Nodes (4): LoginComponent, Component, LoginService, Injectable

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

### Community 178 - "SectionItemVM"
Cohesion: 0.22
Nodes (6): SectionBaseQuery, SectionItemVM, CardSectionSchedulesComponent, Component, Input, SavedSchedule

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

### Community 189 - "@angular/router"
Cohesion: 0.10
Nodes (15): @angular/router, routes, StateRoutingModule, NgModule, Injectable, UrlAccessGuardGuard, TeacherProfileModule, NgModule (+7 more)

### Community 190 - "DepartmentItemVM"
Cohesion: 0.11
Nodes (9): DepartmentsComponent, Component, Department2DepartmentItemVM(), Department2DepartmentVM(), DepartmentItemVM, RowActionDepartment, delete, update (+1 more)

### Community 191 - "classrooms.component.ts"
Cohesion: 0.14
Nodes (8): ClassroomsComponent, Component, ClassroomsService, Injectable, src_app_repositories_classrooms_form_index_formcomponent, src_app_repositories_classrooms_model_index_classroom_types, src_app_repositories_classrooms_model_index_classroomvm, src_app_repositories_classrooms_model_index_rowactionclassroom

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.09
Nodes (26): SubjectDemandDialogComponent, SubjectDemandDialogData, Component, Inject, LevelBar, SubjectDemandPanelComponent, Component, Input (+18 more)

## Knowledge Gaps
- **540 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+535 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1441 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **29 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `ref_angular_core` to `PeriodVM`, `teachers.service.ts`, `admin.component.ts`, `VersionInfoComponent`, `ref_angular_common`, `subject-demands.component.ts`, `schedule.service.ts`, `UseCase`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `schedules.service.ts`, `UserStateService`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `periods.module.ts`, `memory-repository/index.ts`, `auth.module.ts`, `users.service.ts`, `teacher.service.ts`, `student-schedules.service.ts`, `careers.module.ts`, `DepartmentVM`, `SignUpComponent`, `SchedulesService`, `login.service.ts`, `get-classrooms.service.ts`, `app-routing.module.ts`, `subjects.service.ts`, `departments.module.ts`, `classrooms.module.ts`, `period.service.ts`, `school.service.ts`, `settings.module.ts`, `RowOptionVM`, `ClassroomVM`, `@angular/router`, `classrooms.component.ts`, `subject-demand-store.service.ts`, `teacher-degree.service.ts`, `sections.service.ts`, `users.component.ts`, `student-schedules.component.ts`, `http-interceptor.interceptor.ts`, `@angular/material`, `teachers.component.ts`, `document.service.ts`, `reset-password.component.ts`, `find-setting.service.ts`, `find-user.service.ts`, `TeacherVM`, `sections-manage.component.ts`, `UserItemVM`, `SubjectVM`, `find-classroom.service.ts`, `FormComponent`, `documents/form/form.component.ts`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **Why does `@angular/material` connect `@angular/material` to `PeriodVM`, `admin.component.ts`, `VersionInfoComponent`, `subject-demands.component.ts`, `app.module.ts`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `schedules.service.ts`, `UserStateService`, `users.service.ts`, `package.json`, `periods.module.ts`, `auth.module.ts`, `student-schedules.service.ts`, `careers.module.ts`, `DepartmentVM`, `SchedulesService`, `subjects.service.ts`, `departments.module.ts`, `classrooms.module.ts`, `settings.module.ts`, `RowOptionVM`, `documents.module.ts`, `@angular/router`, `classrooms.component.ts`, `academic.module.ts`, `subject-demand-store.service.ts`, `sections.service.ts`, `users.component.ts`, `student-schedules.component.ts`, `teachers.component.ts`, `TeacherPickerComponent`, `reset-password.component.ts`, `schools.module.ts`, `sections-manage.component.ts`, `ProfileComponent`, `FormComponent`, `documents/form/form.component.ts`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `Configuration` connect `ref_angular_common` to `StatisticsService`, `schedule.service.ts`, `DefaultService`, `teacher.service.ts`, `AuthService`, `ApiModule`, `period.service.ts`, `school.service.ts`, `SectionService`, `DayService`, `teacher-degree.service.ts`, `AuditService`, `InscriptionService`, `document.service.ts`, `SubjectDemandService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`, `UserService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _540 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `PeriodVM` be split into smaller, more focused modules?**
  _Cohesion score 0.0748663101604278 - nodes in this community are weakly interconnected._
- **Should `teachers.service.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08082706766917293 - nodes in this community are weakly interconnected._
- **Should `.setLoading` be split into smaller, more focused modules?**
  _Cohesion score 0.1383399209486166 - nodes in this community are weakly interconnected._