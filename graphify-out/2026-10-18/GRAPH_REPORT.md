# Graph Report - sigeit  (2026-10-18)

## Corpus Check
- 1009 files · ~192,342 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 78 file(s) not represented in the graph (top: .scss 64, (none) 11, .mdc 1)

## Summary
- 4331 nodes · 11281 edges · 201 communities (167 shown, 34 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 358 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `eb421f20`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- SchoolItemVM
- teachers.module.ts
- .setLoading
- careers.module.ts
- periods.module.ts
- StudentSchedulesComponent
- models.ts
- statistics.service.ts
- ref_angular_core
- UserStateService
- departments.module.ts
- error-handler.module.ts
- ScheduleComponent
- AcademicChargeTeacherComponent
- AcademicChargeTeacherComponent
- active-period.service.ts
- FormComponent
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- GradeSearchComponent
- UseCase
- PlanningAuditComponent
- SectionsManageComponent
- url-access-guard.guard.ts
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- PeriodsComponent
- DepartmentItemVM
- TeacherAcademicService
- Configuration
- AuthService
- TogglePasswordViewComponent
- create-document.service.ts
- FormComponent
- MemoryDocumentsService
- finished.component.ts
- TeacherItemVM
- dependencies
- classrooms.module.ts
- BulkAcademicChargeModalComponent
- ScheduleService
- 📱 Sistema de Visualización de Versión - SIGEIT
- ToastService
- ScheduleItemVM
- 📋 Gestión de Versiones - SIGEIT
- PeriodService
- SchedulesService
- devDependencies
- SchoolService
- SectionService
- logger.service.ts
- schools.module.ts
- settings.component.ts
- SectionsOverviewComponent
- Changelog
- scripts
- @angular/material
- get-classrooms.service.ts
- DayService
- documents.module.ts
- PeriodVM
- SettingService
- SchedulesComponent
- production
- GlobalPeriodService
- teacher.service.ts
- UserService
- AuditService
- InscriptionService
- app-routing.module.ts
- subject-demands.component.ts
- SubjectDemandPanelComponent
- SectionsComponent
- Componente de Vista General de Secciones
- UserStateVM
- schedules/academic-charge-teacher/academic-charge-teacher.component.ts
- AdminComponent
- DocumentsComponent
- LoginComponent
- ref_dashboard_sdk
- FormComponent
- users.service.ts
- DocumentService
- SubjectDemandService
- TeacherPickerComponent
- src_app_common_memory_repository_index_usecase
- ClassroomType
- FinishedComponent
- RecoveryPasswordComponent
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- SubjectDemandStoreService
- VersionService
- ReportConfigModalComponent
- free-slot-dto.ts
- FormComponent
- settings.module.ts
- FormComponent
- StudentSchedulesService
- Sistema de Período Académico Global
- DegreeDetailComponent
- get-periods.service.ts
- VersionInfoComponent
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- admin.component.ts
- login.service.ts
- FormComponent
- FormComponent
- auditoria
- state-routing.module.ts
- DegreeFormComponent
- ClassroomVM
- repositories/profile/profile.module.ts
- periods/model/index.ts
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- student-schedules/use-cases/index.ts
- computeCoverage
- create-period-dto.ts
- SubjectDemandsComponent
- src_app_common_index_usecase
- update-period-dto.ts
- TeachersComponent
- build
- development
- @
- @
- src_app_repositories_departments_index_department2departmentitemvm
- academic.module.ts
- writeUrlQuery
- app.module.ts
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- create-classroom.service.ts
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- student-schedules.component.ts
- src_app_repositories_settings_use_cases_index_findsettingservice
- FindDocumentService
- @angular/forms
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
- schedules/index.ts
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
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- subjects.component.ts
- lib/public-api.ts
- common/index.ts
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- ClassroomsComponent
- environment.auditoria.ts
- environment.prod.ts
- Reglas de desarrollo - Sigeit
- schedules.service.ts

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 171 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 79 edges
4. `StudentSchedulesComponent` - 76 edges
5. `UserStateService` - 69 edges
6. `@angular/forms` - 68 edges
7. `StateService` - 60 edges
8. `@angular/router` - 57 edges
9. `ScheduleItemVM` - 53 edges
10. `Configuration` - 50 edges

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

## Communities (201 total, 34 thin omitted)

### Community 0 - "SchoolItemVM"
Cohesion: 0.10
Nodes (19): src_app_repositories_departments_model_index_departmentvm, src_app_repositories_schools_mappers_index_school2schoolitemvm, School2SchoolItemVM(), School2SchoolVM(), SchoolMemoryService, Injectable, src_app_repositories_schools_model_index_schoolitemvm, src_app_repositories_schools_model_index_schoolvm (+11 more)

### Community 1 - "teachers.module.ts"
Cohesion: 0.07
Nodes (23): src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, TeacherVM2TeacherDto(), src_app_repositories_teachers_memory_index_teachermemoryservice, TeacherMemoryService, Injectable, src_app_repositories_teachers_model_index_teacheritemvm, routes (+15 more)

### Community 3 - "careers.module.ts"
Cohesion: 0.05
Nodes (41): src_app_common_memory_repository_index_memoryrepository, CareersComponent, Component, CareersRoutingModule, routes, NgModule, CareersService, Injectable (+33 more)

### Community 4 - "periods.module.ts"
Cohesion: 0.16
Nodes (13): src_app_repositories_periods_memory_index_periodmemoryservice, PeriodsRoutingModule, routes, NgModule, DeletePeriodService, Injectable, src_app_repositories_periods_use_cases_index_createperiodservice, src_app_repositories_periods_use_cases_index_deleteperiodservice (+5 more)

### Community 6 - "models.ts"
Cohesion: 0.05
Nodes (46): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateInscriptionDto (+38 more)

### Community 7 - "statistics.service.ts"
Cohesion: 0.05
Nodes (35): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, StatisticsService, Inject, Injectable, Optional, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto (+27 more)

### Community 8 - "ref_angular_core"
Cohesion: 0.09
Nodes (34): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+26 more)

### Community 9 - "UserStateService"
Cohesion: 0.06
Nodes (30): @angular/router, AppComponent, Component, src_app_common_index_computecoverage, src_app_common_index_readurlnumber, src_app_common_index_sections_load_panel_key, src_app_common_index_semesters, src_app_common_index_stateservice (+22 more)

### Community 10 - "departments.module.ts"
Cohesion: 0.08
Nodes (23): src_app_common_index_listcomponentservice, src_app_common_index_selectexmodule, DepartmentsRoutingModule, NgModule, DepartmentsService, Injectable, src_app_repositories_departments_mappers_index_department2departmentitemvm, DepartmentsMemoryService (+15 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 13 - "AcademicChargeTeacherComponent"
Cohesion: 0.13
Nodes (5): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable, Intervals

### Community 15 - "active-period.service.ts"
Cohesion: 0.14
Nodes (5): src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodVM(), src_app_repositories_periods_model_index_perioditemvm, FindPeriodService, Injectable

### Community 16 - "FormComponent"
Cohesion: 0.14
Nodes (7): FormComponent, Component, Inject, Input, Output, PeriodsService, Injectable

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.08
Nodes (19): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, FormControlTestComponent, Component (+11 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (39): engines, node, @angular/common, @angular/core, tslib, name, private, version (+31 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "GradeSearchComponent"
Cohesion: 0.17
Nodes (5): GradeSearchComponent, normalize(), Component, Inject, Optional

### Community 21 - "UseCase"
Cohesion: 0.05
Nodes (14): ListComponentService, Optional, MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus, UseCase, ScheduleMemoryService, Injectable (+6 more)

### Community 23 - "SectionsManageComponent"
Cohesion: 0.09
Nodes (4): normalize(), SectionsManageComponent, toRow(), Component

### Community 25 - "SelectExComponent"
Cohesion: 0.08
Nodes (7): @angular/cdk, NormalizeWords(), searchCallback(), SelectExComponent, Component, Input, ViewChild

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.08
Nodes (11): xlsx, Group, PlannedSchedulesComponent, ShiftRow, Component, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfig, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfigmodalcomponent, ReportConfig (+3 more)

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.08
Nodes (24): src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectsmodule, CardSectionSchedulesComponent, Component, Input (+16 more)

### Community 29 - "DepartmentItemVM"
Cohesion: 0.09
Nodes (12): lodash, ClassroomsService, Injectable, src_app_repositories_classrooms_model_index_classroom_types, DepartmentsComponent, Component, routes, DepartmentItemVM (+4 more)

### Community 30 - "TeacherAcademicService"
Cohesion: 0.07
Nodes (12): MAX_UPLOAD_SIZE, uploadSizeError(), AcademicComponent, fullName(), normalize(), Component, buildWeek(), ProfileComponent (+4 more)

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "create-document.service.ts"
Cohesion: 0.16
Nodes (17): Document2DocumentDto(), Document2DocumentItemVM(), Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentdto, src_app_repositories_documents_mappers_index_document2documentitemvm, src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_memory_index_memorydocumentsservice, DocumentBaseQuery (+9 more)

### Community 35 - "FormComponent"
Cohesion: 0.10
Nodes (7): moment, timeValidator(), clashHtml(), FormComponent, Component, Input, Output

### Community 36 - "MemoryDocumentsService"
Cohesion: 0.11
Nodes (10): MemoryDocumentsService, Injectable, CreateDocumentService, Injectable, DeleteDocumentService, Injectable, GetDocumentsService, Injectable (+2 more)

### Community 37 - "finished.component.ts"
Cohesion: 0.10
Nodes (18): src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionBaseQuery, InscriptionVM, StageInscription (+10 more)

### Community 38 - "TeacherItemVM"
Cohesion: 0.14
Nodes (14): Teacher2TeacherItemVM(), Teacher2TeacherVM(), src_app_repositories_teachers_model_index_teacherbasequery, src_app_repositories_teachers_model_index_teachervm, RowActionTeacher, academic, delete, profile (+6 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "classrooms.module.ts"
Cohesion: 0.17
Nodes (11): ClassroomsRoutingModule, routes, NgModule, src_app_repositories_classrooms_memory_index_classroomsmemoryservice, DeleteClassroomService, Injectable, src_app_repositories_classrooms_use_cases_index_createclassroomservice, src_app_repositories_classrooms_use_cases_index_deleteclassroomservice (+3 more)

### Community 41 - "BulkAcademicChargeModalComponent"
Cohesion: 0.22
Nodes (3): BulkAcademicChargeModalComponent, Component, Inject

### Community 42 - "ScheduleService"
Cohesion: 0.09
Nodes (17): ScheduleService, Injectable, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+9 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 45 - "ScheduleItemVM"
Cohesion: 0.06
Nodes (31): src_app_repositories_periods_index_periodvm, src_app_repositories_schedules_index_schedule2scheduleitemvm, Day2DayVM(), src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm, Schedule2ScheduleItemVM(), Schedule2ScheduleVM(), src_app_repositories_schedules_memory_index_schedulememoryservice (+23 more)

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "PeriodService"
Cohesion: 0.26
Nodes (3): PeriodService, Injectable, ResponsePeriodDto

### Community 48 - "SchedulesService"
Cohesion: 0.07
Nodes (12): src_app_repositories_classrooms_model_index_classroomvm, ClassroomsSchedulesComponent, Component, Input, DayVM, ScheduleComponent, Component, Input (+4 more)

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
Cohesion: 0.09
Nodes (17): src_app_repositories_schools_form_index_formcomponent, src_app_repositories_schools_memory_index_schoolmemoryservice, src_app_repositories_schools_model_index_rowactionschool, SchoolsComponent, Component, routes, SchoolsRoutingModule, NgModule (+9 more)

### Community 54 - "settings.component.ts"
Cohesion: 0.11
Nodes (8): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, SettingVM, SettingsComponent, Component, SettingsService, Injectable

### Community 55 - "SectionsOverviewComponent"
Cohesion: 0.16
Nodes (3): Group, SectionsOverviewComponent, Component

### Community 56 - "Changelog"
Cohesion: 0.09
Nodes (21): 0.0.1 (2025-09-21), 0.0.2 (2025-09-21), 0.0.3 (2025-09-21), ✨ Características, ✨ Características, ✨ Características, ✨ Características, Changelog (+13 more)

### Community 57 - "scripts"
Cohesion: 0.09
Nodes (22): scripts, build, build-error-handler, build:prod, build-projects, build:versioned, changelog, dashboard-sdk (+14 more)

### Community 58 - "@angular/material"
Cohesion: 0.05
Nodes (48): @angular/material, ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, src_app_common_confirm_modal_index_confirmmodalcomponent (+40 more)

### Community 59 - "get-classrooms.service.ts"
Cohesion: 0.21
Nodes (8): src_app_repositories_classrooms_mappers_index_classroom2classroomvm, ClassroomBaseQuery, ClassroomItemVM, src_app_repositories_classrooms_model_index_classroombasequery, FindClassroomService, Injectable, GetClassroomsService, Injectable

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.17
Nodes (11): src_app_common_table_index_tablemodule, DocumentsModule, NgModule, DocumentsFileService, Injectable, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice, src_app_repositories_documents_use_cases_create_document_index_createdocumentservice, src_app_repositories_documents_use_cases_delete_document_index_deletedocumentservice (+3 more)

### Community 62 - "PeriodVM"
Cohesion: 0.21
Nodes (5): Period2PeriodItemVM(), PeriodItemVM, PeriodVM, CreatePeriodService, Injectable

### Community 63 - "SettingService"
Cohesion: 0.07
Nodes (16): SettingService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ReserveOfficeNumbersDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDepartmentSettingDto (+8 more)

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 67 - "teacher.service.ts"
Cohesion: 0.05
Nodes (49): TeacherDegreeService, Injectable, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Injectable, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateTeacherDto (+41 more)

### Community 68 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "app-routing.module.ts"
Cohesion: 0.19
Nodes (7): AppRoutingModule, routes, NgModule, AuthGuard, Injectable, AuthLoginGuard, Injectable

### Community 72 - "subject-demands.component.ts"
Cohesion: 0.10
Nodes (15): src_app_common_subject_demand_index_subjectdemandstoreservice, SubjectDemandDialogComponent, Component, Inject, LevelBar, ImportDemandComponent, Component, Inject (+7 more)

### Community 73 - "SubjectDemandPanelComponent"
Cohesion: 0.21
Nodes (4): SubjectDemandPanelComponent, Component, Input, levelPercent()

### Community 74 - "SectionsComponent"
Cohesion: 0.21
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "UserStateVM"
Cohesion: 0.21
Nodes (3): HttpInterceptorInterceptor, Injectable, UserStateVM

### Community 77 - "schedules/academic-charge-teacher/academic-charge-teacher.component.ts"
Cohesion: 0.09
Nodes (26): home_anibal_projects_sigeit_dist_dashboard_sdk, docx, file-saver, jszip, PreviewLine, DEFAULT_TEMPLATES, DOCUMENT_VARIABLES, fillTemplate() (+18 more)

### Community 78 - "AdminComponent"
Cohesion: 0.14
Nodes (5): AdminComponent, Component, AdminService, Injectable, optionMenu

### Community 79 - "DocumentsComponent"
Cohesion: 0.16
Nodes (6): DocumentsComponent, Component, DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent

### Community 81 - "ref_dashboard_sdk"
Cohesion: 0.11
Nodes (29): ref_dashboard_sdk, src_app_common_index_uploadsizeerror, Editing, STATUS_LABELS, GradeIssue, DEFAULT_MIN_PERCENT, GradeSearchDialogData, SubjectMatches (+21 more)

### Community 82 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 83 - "users.service.ts"
Cohesion: 0.04
Nodes (54): ref_admin_sdk, src_app_common_memory_repository_index_basequery, src_app_repositories_careers_use_cases_index_getcareersservice, src_app_repositories_departments_index_departmentvm, src_app_repositories_departments_index_getdepartmentsservice, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teacher2teachervm (+46 more)

### Community 84 - "DocumentService"
Cohesion: 0.18
Nodes (9): DocumentService, Inject, Injectable, Optional, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto, TypeDocument (+1 more)

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "TeacherPickerComponent"
Cohesion: 0.17
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "src_app_common_memory_repository_index_usecase"
Cohesion: 0.07
Nodes (24): src_app_common_memory_repository_index_usecase, src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_memory_index_subjectmemoryservice, SubjectMemoryService, Injectable (+16 more)

### Community 88 - "ClassroomType"
Cohesion: 0.33
Nodes (5): CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

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
Cohesion: 0.22
Nodes (4): isValidDemandConfig(), SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 96 - "VersionService"
Cohesion: 0.12
Nodes (10): Component, VersionDisplayComponent, Inject, Injectable, VersionService, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)** (+2 more)

### Community 97 - "ReportConfigModalComponent"
Cohesion: 0.12
Nodes (3): ReportConfigModalComponent, Component, Inject

### Community 98 - "free-slot-dto.ts"
Cohesion: 0.47
Nodes (4): FreeClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, FreeSlotDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…

### Community 99 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "settings.module.ts"
Cohesion: 0.50
Nodes (3): routes, SettingsRoutingModule, NgModule

### Community 101 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "DegreeDetailComponent"
Cohesion: 0.40
Nodes (3): DegreeDetailComponent, Component, Input

### Community 105 - "get-periods.service.ts"
Cohesion: 0.12
Nodes (9): src_app_repositories_periods_mappers_index_period2perioditemvm, PeriodMemoryService, Injectable, GetPeriodsService, Injectable, SetActivePeriodService, Injectable, Injectable (+1 more)

### Community 106 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 107 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.21
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 109 - "FormComponent"
Cohesion: 0.14
Nodes (11): FormComponent, Component, Input, Output, UserRole, Administrator, Director, HeadDepartment (+3 more)

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
Cohesion: 0.13
Nodes (15): AdminModule, NgModule, AdminRoutingModule, routes, NgModule, src_app_admin_data_index_menu, MENU, src_app_admin_models_index_optionmenu (+7 more)

### Community 114 - "login.service.ts"
Cohesion: 0.16
Nodes (7): @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, LoginService, Injectable, src_app_common_user_state_models_index_userstatevm

### Community 115 - "FormComponent"
Cohesion: 0.19
Nodes (3): errorMessage(), FormComponent, Component

### Community 116 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "state-routing.module.ts"
Cohesion: 0.50
Nodes (3): routes, StateRoutingModule, NgModule

### Community 119 - "DegreeFormComponent"
Cohesion: 0.11
Nodes (5): DegreeFormComponent, normalize(), Component, Input, Output

### Community 120 - "ClassroomVM"
Cohesion: 0.20
Nodes (7): Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), ClassroomVM, RowActionClassroom, delete, update, src_app_repositories_departments_index_department2departmentvm

### Community 121 - "repositories/profile/profile.module.ts"
Cohesion: 0.18
Nodes (9): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule, ProfileService (+1 more)

### Community 122 - "periods/model/index.ts"
Cohesion: 0.12
Nodes (16): ref_toast, src_app_repositories_periods_model_index_periodvm, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, RowActionPeriod, delete, setActive (+8 more)

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

### Community 131 - "student-schedules/use-cases/index.ts"
Cohesion: 0.11
Nodes (4): CloseInscriptionService, Injectable, DeleteInscriptionService, Injectable

### Community 135 - "src_app_common_index_usecase"
Cohesion: 0.14
Nodes (13): src_app_common_index_rowoptionvm, src_app_common_index_usecase, Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentvm, DepartmentBaseQuery, src_app_repositories_departments_model_index_departmentbasequery, RowActionDepartment (+5 more)

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

### Community 143 - "academic.module.ts"
Cohesion: 0.13
Nodes (15): src_app_common_state_index_statemodule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule, routes, NgModule (+7 more)

### Community 145 - "writeUrlQuery"
Cohesion: 0.16
Nodes (6): TableComponent, Component, Input, Output, ViewChild, writeUrlQuery()

### Community 146 - "app.module.ts"
Cohesion: 0.07
Nodes (24): @angular/platform-browser-dynamic, ref_error_handler, ref_http_form_data_client, AppModule, NgModule, GlobalPeriodModule, NgModule, src_app_common_global_period_index_globalperiodmodule (+16 more)

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
Cohesion: 0.17
Nodes (9): ConfigurationParameters, DataFormat, DataType, Param, ParamLocation, ParamStyle, StandardDataFormat, StandardDataType (+1 more)

### Community 151 - "Sigeit"
Cohesion: 0.25
Nodes (7): Build, Code scaffolding, Development server, Further help, Running end-to-end tests, Running unit tests, Sigeit

### Community 153 - "create-classroom.service.ts"
Cohesion: 0.14
Nodes (9): src_app_common_index_memoryrepository, src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, ClassroomsMemoryService, Injectable, src_app_repositories_classrooms_model_index_classroomitemvm, CreateClassroomService, Injectable, Injectable (+1 more)

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

### Community 162 - "student-schedules.component.ts"
Cohesion: 0.09
Nodes (18): src_app_common_index_semestervm, src_app_repositories_careers_index_careervm, src_app_repositories_periods_index_stageperiod, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_schedule_details_dialog, src_app_repositories_schedules_index_scheduledetailscomponent, src_app_repositories_schedules_index_scheduleitemvm, src_app_repositories_sections_index_sectionitemvm (+10 more)

### Community 165 - "@angular/forms"
Cohesion: 0.05
Nodes (29): @angular/forms, AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent, src_app_auth_login_index_loginservice, src_app_auth_recovery_password_index_recoverypasswordcomponent, src_app_auth_reset_password_index_resetpasswordcomponent (+21 more)

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

### Community 177 - "schedules/index.ts"
Cohesion: 0.20
Nodes (6): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, routes, SchedulesRoutingModule, NgModule

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
Cohesion: 0.04
Nodes (59): src_app_common_index_subjectdemandmodule, SelectExModule, NgModule, SubjectDemandModule, NgModule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice (+51 more)

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.16
Nodes (14): attendedByLevel(), CoverageStatus, DEFAULT_DEMAND_CONFIG, DEFAULT_DEMAND_FACTOR, DEFAULT_SECTION_CAPACITY, DEMAND_CONFIG_KEY, DEMAND_PREFERENCE_KEYS, DemandConfig (+6 more)

### Community 195 - "subjects.component.ts"
Cohesion: 0.07
Nodes (25): src_app_common_index_statemodule, src_app_common_index_tablemodule, src_app_common_memory_repository_index_listcomponentservice, src_app_common_user_state_index_userstateservice, src_app_repositories_careers_index_getcareersservice, FormComponent, Component, Inject (+17 more)

### Community 198 - "common/index.ts"
Cohesion: 0.13
Nodes (6): ArrayValidators, src_app_common_index_basequery, BaseQuery, src_app_repositories_schools_mappers_index_school2schoolvm, FindSchoolService, Injectable

### Community 210 - "schedules.service.ts"
Cohesion: 0.05
Nodes (43): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, src_app_common_timer_index_timevalidator, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable (+35 more)

## Knowledge Gaps
- **542 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+537 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1469 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **34 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `ref_angular_core` to `SchoolItemVM`, `teachers.module.ts`, `careers.module.ts`, `periods.module.ts`, `student-schedules/use-cases/index.ts`, `statistics.service.ts`, `src_app_common_index_usecase`, `UserStateService`, `departments.module.ts`, `active-period.service.ts`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `UseCase`, `url-access-guard.guard.ts`, `SelectExComponent`, `create-classroom.service.ts`, `PlannedSchedulesComponent`, `student-schedules.service.ts`, `DepartmentItemVM`, `student-schedules.component.ts`, `create-document.service.ts`, `MemoryDocumentsService`, `@angular/forms`, `TeacherItemVM`, `finished.component.ts`, `classrooms.module.ts`, `ScheduleItemVM`, `SchedulesService`, `schools.module.ts`, `settings.component.ts`, `@angular/material`, `get-classrooms.service.ts`, `sections.service.ts`, `PeriodVM`, `subject-demand-store.service.ts`, `teacher.service.ts`, `subjects.component.ts`, `common/index.ts`, `app-routing.module.ts`, `subject-demands.component.ts`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `ref_dashboard_sdk`, `schedules.service.ts`, `users.service.ts`, `src_app_common_memory_repository_index_usecase`, `get-periods.service.ts`, `VersionInfoComponent`, `admin.component.ts`, `login.service.ts`, `periods/model/index.ts`?**
  _High betweenness centrality (0.128) - this node is a cross-community bridge._
- **Why does `@angular/material` connect `@angular/material` to `teachers.module.ts`, `careers.module.ts`, `periods.module.ts`, `UserStateService`, `departments.module.ts`, `academic.module.ts`, `package.json`, `app.module.ts`, `SelectExComponent`, `PlannedSchedulesComponent`, `student-schedules.service.ts`, `DepartmentItemVM`, `student-schedules.component.ts`, `@angular/forms`, `classrooms.module.ts`, `ScheduleItemVM`, `SchedulesService`, `schools.module.ts`, `documents.module.ts`, `sections.service.ts`, `subjects.component.ts`, `subject-demands.component.ts`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `ref_dashboard_sdk`, `schedules.service.ts`, `users.service.ts`, `TeacherPickerComponent`, `settings.module.ts`, `VersionInfoComponent`, `admin.component.ts`, `periods/model/index.ts`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `FormComponent` connect `FormComponent` to `careers.module.ts`, `SchoolItemVM`, `users.service.ts`, `DepartmentItemVM`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _542 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `SchoolItemVM` be split into smaller, more focused modules?**
  _Cohesion score 0.09898989898989899 - nodes in this community are weakly interconnected._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `.setLoading` be split into smaller, more focused modules?**
  _Cohesion score 0.10668563300142248 - nodes in this community are weakly interconnected._