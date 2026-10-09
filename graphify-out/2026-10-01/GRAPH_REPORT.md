# Graph Report - sigeit  (2026-10-01)

## Corpus Check
- 1003 files · ~184,181 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 78 file(s) not represented in the graph (top: .scss 64, (none) 11, .mdc 1)

## Summary
- 4237 nodes · 10960 edges · 207 communities (181 shown, 26 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 349 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3a70e857`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- UserStateService
- teachers.module.ts
- admin.component.ts
- MemoryDocumentsService
- StudentSchedulesComponent
- models.ts
- statistics.service.ts
- ref_angular_common
- app.module.ts
- ScheduleService
- error-handler.module.ts
- InscriptionVM
- schedules.service.ts
- StudentSchedulesService
- ActivePeriodService
- StateService
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- AcademicChargeTeacherComponent
- MemoryRepository
- common/index.ts
- SectionsManageComponent
- teacher.service.ts
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- CareerMemoryService
- users/form/form.component.ts
- TeacherAcademicService
- Configuration
- AuthService
- TogglePasswordViewComponent
- create-user-student.service.ts
- FormComponent
- subjects.service.ts
- TeacherItemVM
- AcademicChargeTeacherComponent
- dependencies
- DepartmentItemVM
- bulk-academic-charge-modal.component.ts
- period-audit-dto.ts
- 📱 Sistema de Visualización de Versión - SIGEIT
- classrooms.module.ts
- documents/model/index.ts
- 📋 Gestión de Versiones - SIGEIT
- PeriodService
- ClassroomsSchedulesComponent
- devDependencies
- SchoolService
- SectionService
- logger.service.ts
- CardSubjectSchedulesComponent
- settings.module.ts
- SectionsOverviewComponent
- Changelog
- scripts
- RowOptionVM
- ScheduleComponent
- DayService
- documents.module.ts
- ref_angular_core
- academic.module.ts
- SchedulesComponent
- production
- careers.module.ts
- TeacherDegreeService
- SectionItemVM
- AuditService
- InscriptionService
- UserItemVM
- subjects.component.ts
- create-subject.service.ts
- SectionsComponent
- Componente de Vista General de Secciones
- SubjectVM
- create-career.service.ts
- student-schedules.component.ts
- ConfirmModalComponent
- sections.component.ts
- @angular/material
- FormComponent
- CareerItemVM
- document.service.ts
- SubjectDemandService
- TeacherPickerComponent
- GradeSearchComponent
- ScheduleItemVM
- schools.module.ts
- FormComponent
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- SubjectDemandStoreService
- VersionService
- ReportConfigModalComponent
- ScheduleComponent
- FormComponent
- @angular/forms
- UserMemoryService
- subject-demand.module.ts
- Sistema de Período Académico Global
- users.service.ts
- find-subject.service.ts
- schedules/academic-charge-teacher/academic-charge-teacher.component.ts
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- users.component.ts
- auth.module.ts
- FormComponent
- FormComponent
- auditoria
- SchedulesService
- DegreeFormComponent
- documents.component.ts
- repositories/profile/profile.module.ts
- SubjectDemandsComponent
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- classrooms/form/form.component.ts
- schedules.component.ts
- FormComponent
- ScheduleBaseQuery
- ListComponentService
- subject-demands.component.ts
- TeachersComponent
- build
- development
- @
- @
- state/index.ts
- .constructor
- url-access-guard.guard.ts
- ToastService
- schedules/index.ts
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- GlobalPeriodService
- planned-schedules.component.ts
- .ngOnInit
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- sign-up.component.ts
- ScheduleDetailsComponent
- login.service.ts
- SignUpComponent
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
- http-interceptor.interceptor.ts
- careers/form/form.component.ts
- find-user.service.ts
- ResetPasswordComponent
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
- degree-detail.component.ts
- RecoveryPasswordComponent
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- documents-routing.module.ts
- CareersService
- lib/public-api.ts
- GetDocumentsService
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
- `2. **Componente de Visualización (`VersionDisplayComponent`)**` --references--> `VersionDisplayComponent`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version-display.component.ts
- `3. **Modal de Información (`VersionInfoComponent`)**` --references--> `VersionInfoComponent`  [INFERRED]
  VERSION_DISPLAY.md → src/app/common/version/version-info.component.ts
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

## Communities (207 total, 26 thin omitted)

### Community 0 - "UserStateService"
Cohesion: 0.13
Nodes (9): routes, AuthGuard, Injectable, AuthLoginGuard, Injectable, src_app_common_user_state_models_index_userstatevm, UserStateVM, Injectable (+1 more)

### Community 1 - "teachers.module.ts"
Cohesion: 0.07
Nodes (19): TeacherMemoryService, Injectable, src_app_repositories_teachers_model_index_teacherbasequery, TeachersRoutingModule, NgModule, TeachersService, Injectable, CreateTeacherService (+11 more)

### Community 3 - "admin.component.ts"
Cohesion: 0.08
Nodes (18): AdminComponent, Component, AdminModule, NgModule, AdminRoutingModule, routes, NgModule, AdminService (+10 more)

### Community 4 - "MemoryDocumentsService"
Cohesion: 0.11
Nodes (10): MemoryDocumentsService, Injectable, CreateDocumentService, Injectable, DeleteDocumentService, Injectable, FindDocumentService, Injectable (+2 more)

### Community 6 - "models.ts"
Cohesion: 0.06
Nodes (41): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateInscriptionDto (+33 more)

### Community 7 - "statistics.service.ts"
Cohesion: 0.05
Nodes (33): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, StatisticsService, Injectable, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CurriculumSemesterStatItemDto (+25 more)

### Community 8 - "ref_angular_common"
Cohesion: 0.10
Nodes (28): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+20 more)

### Community 9 - "app.module.ts"
Cohesion: 0.07
Nodes (28): @angular/platform-browser-dynamic, ref_error_handler, ref_http_form_data_client, ref_toast, AppModule, NgModule, AppRoutingModule, NgModule (+20 more)

### Community 10 - "ScheduleService"
Cohesion: 0.10
Nodes (12): ScheduleService, Inject, Injectable, Optional, FreeClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, FreeSlotDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+4 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "InscriptionVM"
Cohesion: 0.08
Nodes (14): src_app_repositories_sections_index_section2sectionitemvm, src_app_repositories_users_index_user2useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionVM, CreateInscriptionService, Injectable (+6 more)

### Community 13 - "schedules.service.ts"
Cohesion: 0.07
Nodes (30): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, src_app_repositories_schedules_model_index_intervals, src_app_repositories_schedules_model_index_intervalsselect, src_app_repositories_schedules_model_index_schedulebasequery, IntervalsSelect (+22 more)

### Community 14 - "StudentSchedulesService"
Cohesion: 0.17
Nodes (3): SavedSchedule, StudentSchedulesService, Injectable

### Community 15 - "ActivePeriodService"
Cohesion: 0.10
Nodes (12): ActivePeriodService, Injectable, ToPlanPeriodService, Injectable, FindSectionService, Injectable, GetSectionsService, Injectable (+4 more)

### Community 16 - "StateService"
Cohesion: 0.12
Nodes (8): AppComponent, Component, StateService, Injectable, TableService, Injectable, Inject, Optional

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.08
Nodes (19): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, FormControlTestComponent, Component (+11 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (42): engines, node, @angular/common, @angular/core, tslib, name, private, version (+34 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "AcademicChargeTeacherComponent"
Cohesion: 0.13
Nodes (5): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable, Intervals

### Community 22 - "common/index.ts"
Cohesion: 0.04
Nodes (54): src_app_common_index_basequery, BaseQuery, CareerBaseQuery, Inject, src_app_repositories_periods_form_index_formcomponent, src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodItemVM() (+46 more)

### Community 23 - "SectionsManageComponent"
Cohesion: 0.10
Nodes (4): normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "teacher.service.ts"
Cohesion: 0.11
Nodes (24): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Injectable, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, HiringEvaluationStatus (+16 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.10
Nodes (4): SelectExComponent, Component, Input, ViewChild

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.15
Nodes (3): PlannedSchedulesComponent, Component, ReportConfig

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.07
Nodes (29): src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectitemvm, src_app_repositories_subjects_index_subjectsmodule, CardSectionSchedulesComponent, Component (+21 more)

### Community 28 - "CareerMemoryService"
Cohesion: 0.11
Nodes (9): src_app_common_memory_repository_index_memoryrepository, CareerMemoryService, Injectable, CreateCareerService, Injectable, DeleteCareerService, Injectable, Injectable (+1 more)

### Community 29 - "users/form/form.component.ts"
Cohesion: 0.12
Nodes (15): src_app_repositories_schools_index_schoolitemvm, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teachervm, src_app_repositories_users_model_index_user_roles, USER_ROLES, UserRole, Administrator, Director (+7 more)

### Community 30 - "TeacherAcademicService"
Cohesion: 0.08
Nodes (9): AcademicComponent, fullName(), normalize(), Component, Inject, Optional, Inject, TeacherAcademicService (+1 more)

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.05
Nodes (23): AuthService, Inject, Injectable, Optional, Inject, Injectable, Optional, UserService (+15 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "create-user-student.service.ts"
Cohesion: 0.19
Nodes (4): CreateUserStudentService, Injectable, src_app_repositories_users_model_index_saveuser, SaveUser

### Community 35 - "FormComponent"
Cohesion: 0.08
Nodes (11): moment, src_app_common_timer_index_timevalidator, timeValidator(), clashHtml(), FormComponent, Component, Input, Output (+3 more)

### Community 36 - "subjects.service.ts"
Cohesion: 0.16
Nodes (12): src_app_common_index_tablemodule, src_app_repositories_careers_index_getcareersservice, GetCareersService, Injectable, SubjectsService, Injectable, DeleteSubjectService, Injectable (+4 more)

### Community 37 - "TeacherItemVM"
Cohesion: 0.17
Nodes (15): src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, Teacher2TeacherItemVM(), TeacherVM2TeacherDto(), src_app_repositories_teachers_memory_index_teachermemoryservice, src_app_repositories_teachers_model_index_teacheritemvm, src_app_repositories_teachers_model_index_teachervm, RowActionTeacher (+7 more)

### Community 38 - "AcademicChargeTeacherComponent"
Cohesion: 0.15
Nodes (3): AcademicChargeTeacherComponent, Component, BulkAcademicChargeModalResult

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "DepartmentItemVM"
Cohesion: 0.04
Nodes (45): src_app_common_index_listcomponentservice, src_app_common_index_optionaction, src_app_common_index_selectexmodule, src_app_common_index_tabledatavm, src_app_common_index_tableservice, src_app_common_index_usecase, DepartmentsComponent, Component (+37 more)

### Community 41 - "bulk-academic-charge-modal.component.ts"
Cohesion: 0.18
Nodes (5): BulkAcademicChargeModalComponent, BulkAcademicChargeModalData, BulkDownloadMode, Component, Inject

### Community 42 - "period-audit-dto.ts"
Cohesion: 0.17
Nodes (14): AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DayConflictsDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+6 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "classrooms.module.ts"
Cohesion: 0.06
Nodes (34): src_app_common_index_memoryrepository, ClassroomsComponent, Component, ClassroomsRoutingModule, routes, NgModule, ClassroomsService, Injectable (+26 more)

### Community 45 - "documents/model/index.ts"
Cohesion: 0.25
Nodes (7): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), Document2DocumentVM(), DocumentBaseQuery, DocumentVM, TypeDocument, AcademicCharge

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "PeriodService"
Cohesion: 0.11
Nodes (10): PeriodService, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponsePeriodDto (+2 more)

### Community 48 - "ClassroomsSchedulesComponent"
Cohesion: 0.14
Nodes (5): ClassroomsSchedulesComponent, Component, Input, ScheduleDisplayService, Injectable

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

### Community 53 - "CardSubjectSchedulesComponent"
Cohesion: 0.20
Nodes (4): CardSubjectSchedulesComponent, Component, Input, Output

### Community 54 - "settings.module.ts"
Cohesion: 0.07
Nodes (20): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, SettingsComponent (+12 more)

### Community 55 - "SectionsOverviewComponent"
Cohesion: 0.15
Nodes (3): Group, SectionsOverviewComponent, Component

### Community 56 - "Changelog"
Cohesion: 0.09
Nodes (21): 0.0.1 (2025-09-21), 0.0.2 (2025-09-21), 0.0.3 (2025-09-21), ✨ Características, ✨ Características, ✨ Características, ✨ Características, Changelog (+13 more)

### Community 57 - "scripts"
Cohesion: 0.09
Nodes (22): scripts, build, build-error-handler, build:prod, build-projects, build:versioned, changelog, dashboard-sdk (+14 more)

### Community 58 - "RowOptionVM"
Cohesion: 0.10
Nodes (14): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl(), TableComponent (+6 more)

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.19
Nodes (11): src_app_common_index_statemodule, src_app_common_memory_repository_index_listcomponentservice, src_app_common_table_index_tablemodule, DocumentsModule, NgModule, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice, src_app_repositories_documents_use_cases_create_document_index_createdocumentservice, src_app_repositories_documents_use_cases_delete_document_index_deletedocumentservice (+3 more)

### Community 62 - "ref_angular_core"
Cohesion: 0.09
Nodes (16): ref_angular_core, ref_dashboard_sdk, rxjs, src_app_common_memory_repository_index_usecase, src_app_common_memory_repository_models_index_paginationstatus, UseCase, src_app_repositories_documents_mappers_index_document2documentitemvm, src_app_repositories_documents_mappers_index_document2documentvm (+8 more)

### Community 63 - "academic.module.ts"
Cohesion: 0.13
Nodes (16): src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule, routes, NgModule, src_app_repositories_periods_index_periodsmodule (+8 more)

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "careers.module.ts"
Cohesion: 0.16
Nodes (9): CareersRoutingModule, routes, NgModule, src_app_repositories_careers_form_index_formcomponent, src_app_repositories_careers_model_index_rowactioncareer, src_app_repositories_careers_use_cases_index_createcareerservice, src_app_repositories_careers_use_cases_index_deletecareerservice, src_app_repositories_careers_use_cases_index_findcareerservice (+1 more)

### Community 67 - "TeacherDegreeService"
Cohesion: 0.08
Nodes (27): TeacherDegreeService, Inject, Injectable, Optional, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+19 more)

### Community 68 - "SectionItemVM"
Cohesion: 0.12
Nodes (16): src_app_repositories_sections_mappers_index_section2sectionitemvm, Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_sections_memory_index_sectionmemoryservice, SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm, SectionBaseQuery (+8 more)

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "UserItemVM"
Cohesion: 0.18
Nodes (12): src_app_repositories_schools_index_school2schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_users_mappers_index_user2useritemvm, User2UserItemVM(), User2UserVM(), src_app_repositories_users_model_index_user_roles_value, src_app_repositories_users_model_index_uservm, USER_ROLES_VALUE (+4 more)

### Community 72 - "subjects.component.ts"
Cohesion: 0.15
Nodes (8): src_app_repositories_subjects_form_index_formcomponent, src_app_repositories_subjects_model_index_rowactionsubject, src_app_repositories_subjects_model_index_subjectvm, SubjectsComponent, Component, routes, SubjectsRoutingModule, NgModule

### Community 73 - "create-subject.service.ts"
Cohesion: 0.16
Nodes (9): src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_memory_index_subjectmemoryservice, SubjectMemoryService, Injectable, src_app_repositories_subjects_model_index_subjectitemvm, CreateSubjectService, Injectable, Injectable (+1 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.21
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "SubjectVM"
Cohesion: 0.20
Nodes (8): Subject2SubjectItemVM(), Subject2SubjectVM(), RowActionSubject, delete, update, SubjectBaseQuery, SubjectItemVM, SubjectVM

### Community 77 - "create-career.service.ts"
Cohesion: 0.19
Nodes (9): Career2CareerItemVM(), Career2CareerVM(), src_app_repositories_careers_mappers_index_career2careeritemvm, src_app_repositories_careers_mappers_index_career2careervm, src_app_repositories_careers_memory_index_careermemoryservice, src_app_repositories_careers_model_index_careerbasequery, src_app_repositories_careers_model_index_careeritemvm, src_app_repositories_careers_model_index_careervm (+1 more)

### Community 78 - "student-schedules.component.ts"
Cohesion: 0.09
Nodes (19): src_app_common_index_semesters, src_app_common_index_semestervm, src_app_common_state_index_stateservice, src_app_repositories_careers_index_careervm, src_app_repositories_periods_index_stageperiod, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_scheduledetailscomponent, src_app_repositories_schedules_index_scheduleitemvm (+11 more)

### Community 79 - "ConfirmModalComponent"
Cohesion: 0.22
Nodes (7): ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, ModalMessageModel

### Community 80 - "sections.component.ts"
Cohesion: 0.16
Nodes (8): src_app_repositories_sections_model_index_rowactionsection, src_app_repositories_sections_model_index_sectionvm, RowActionSection, delete, update, SectionVM, SectionsService, Injectable

### Community 81 - "@angular/material"
Cohesion: 0.10
Nodes (32): @angular/material, @angular/router, src_app_common_index_confirmmodalcomponent, src_app_common_index_uploadsizeerror, src_app_common_index_userstateservice, Editing, src_app_repositories_teachers_form_index_formcomponent, DEFAULT_MIN_PERCENT (+24 more)

### Community 82 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 83 - "CareerItemVM"
Cohesion: 0.17
Nodes (5): CareersComponent, Component, CareerItemVM, FindCareerService, Injectable

### Community 84 - "document.service.ts"
Cohesion: 0.15
Nodes (9): DocumentService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto (+1 more)

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "TeacherPickerComponent"
Cohesion: 0.17
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "GradeSearchComponent"
Cohesion: 0.15
Nodes (4): GradeSearchComponent, groupByTeacher(), normalize(), Component

### Community 88 - "ScheduleItemVM"
Cohesion: 0.16
Nodes (10): src_app_common_index_rowoptionvm, ClassroomVM, src_app_repositories_classrooms_model_index_classroomvm, RowActionClassroom, delete, update, RowActionSchedule, delete (+2 more)

### Community 89 - "schools.module.ts"
Cohesion: 0.05
Nodes (39): Inject, src_app_repositories_schools_form_index_formcomponent, src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_memory_index_schoolmemoryservice, SchoolMemoryService (+31 more)

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
Cohesion: 0.19
Nodes (4): isValidDemandConfig(), SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 96 - "VersionService"
Cohesion: 0.09
Nodes (15): Component, VersionDisplayComponent, Component, Inject, VersionInfoComponent, Injectable, VersionInfo, VersionService (+7 more)

### Community 97 - "ReportConfigModalComponent"
Cohesion: 0.12
Nodes (3): ReportConfigModalComponent, Component, Inject

### Community 98 - "ScheduleComponent"
Cohesion: 0.25
Nodes (3): ScheduleComponent, Component, Input

### Community 99 - "FormComponent"
Cohesion: 0.26
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "@angular/forms"
Cohesion: 0.06
Nodes (26): @angular/cdk, @angular/forms, @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, ArrayValidators, src_app_common_index_computecoverage (+18 more)

### Community 101 - "UserMemoryService"
Cohesion: 0.14
Nodes (7): Injectable, UserMemoryService, src_app_repositories_users_model_index_useritemvm, DeleteUserService, Injectable, Injectable, UpdateUserService

### Community 102 - "subject-demand.module.ts"
Cohesion: 0.24
Nodes (6): SubjectDemandDialogComponent, SubjectDemandDialogData, Component, Inject, SubjectDemandModule, NgModule

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "users.service.ts"
Cohesion: 0.14
Nodes (17): ref_admin_sdk, src_app_common_memory_repository_index_basequery, src_app_repositories_careers_use_cases_index_getcareersservice, src_app_repositories_departments_index_getdepartmentsservice, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, FindUserService (+9 more)

### Community 105 - "find-subject.service.ts"
Cohesion: 0.17
Nodes (4): src_app_repositories_subjects_mappers_index_subject2subjectvm, src_app_repositories_subjects_model_index_subjectbasequery, FindSubjectService, Injectable

### Community 106 - "schedules/academic-charge-teacher/academic-charge-teacher.component.ts"
Cohesion: 0.13
Nodes (16): src_app_common_user_state_index_userstateservice, Classroom2ClassroomVM(), src_app_repositories_classrooms_mappers_index_classroom2classroomvm, src_app_repositories_periods_index_periodvm, Day2DayVM(), src_app_repositories_schedules_mappers_index_day2dayvm, src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm (+8 more)

### Community 107 - "FormComponent"
Cohesion: 0.09
Nodes (10): FormComponent, Component, Inject, Input, Output, FormComponent, Component, Inject (+2 more)

### Community 108 - "FormComponent"
Cohesion: 0.26
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

### Community 113 - "users.component.ts"
Cohesion: 0.17
Nodes (7): src_app_repositories_users_form_index_formcomponent, src_app_repositories_users_model_index_rowactionuser, Component, UsersComponent, routes, NgModule, UsersRoutingModule

### Community 114 - "auth.module.ts"
Cohesion: 0.18
Nodes (10): AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent, src_app_auth_login_index_loginservice, src_app_auth_recovery_password_index_recoverypasswordcomponent, src_app_auth_reset_password_index_resetpasswordcomponent, src_app_auth_sign_up_index_signupcomponent (+2 more)

### Community 115 - "FormComponent"
Cohesion: 0.17
Nodes (6): FormComponent, Component, Inject, Input, Optional, Output

### Community 116 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "SchedulesService"
Cohesion: 0.14
Nodes (4): PlanningAuditComponent, Component, SchedulesService, Injectable

### Community 119 - "DegreeFormComponent"
Cohesion: 0.10
Nodes (6): DegreeFormComponent, GradeIssue, normalize(), Component, Input, Output

### Community 120 - "documents.component.ts"
Cohesion: 0.14
Nodes (12): src_app_common_table_index_optionaction, src_app_common_table_index_tabledatavm, src_app_common_table_index_tableservice, DocumentsComponent, Component, DocumentsFileService, Injectable, DocumentItemVM (+4 more)

### Community 121 - "repositories/profile/profile.module.ts"
Cohesion: 0.18
Nodes (9): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule, ProfileService (+1 more)

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

### Community 131 - "classrooms/form/form.component.ts"
Cohesion: 0.17
Nodes (9): lodash, src_app_repositories_classrooms_model_index_classroom_types, CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual, src_app_repositories_departments_index_departmentitemvm (+1 more)

### Community 132 - "schedules.component.ts"
Cohesion: 0.19
Nodes (8): src_app_common_semester_index_semesters, src_app_common_semester_index_semestervm, SEMESTERS, SemesterVM, DepartmentVM, src_app_repositories_schedules_model_index_rowactionschedule, FieldOption, src_app_repositories_sections_index_sectionscomponent

### Community 133 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 134 - "ScheduleBaseQuery"
Cohesion: 0.16
Nodes (6): src_app_repositories_schedules_index_schedule2scheduleitemvm, ScheduleBaseQuery, FindScheduleService, Injectable, GetSchedulesService, Injectable

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

### Community 142 - "state/index.ts"
Cohesion: 0.18
Nodes (9): StateComponent, Component, HostBinding, Input, StateModule, NgModule, routes, StateRoutingModule (+1 more)

### Community 143 - ".constructor"
Cohesion: 0.09
Nodes (10): GetClassroomsService, Injectable, ScheduleMemoryService, Injectable, CreateScheduleService, Injectable, DeleteScheduleService, Injectable (+2 more)

### Community 145 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 146 - "schedules/index.ts"
Cohesion: 0.16
Nodes (6): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, routes, SchedulesRoutingModule, NgModule

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

### Community 152 - "GlobalPeriodService"
Cohesion: 0.14
Nodes (4): GlobalPeriodService, Injectable, PeriodsComponent, Component

### Community 153 - "planned-schedules.component.ts"
Cohesion: 0.19
Nodes (8): xlsx, src_app_common_global_period_index_globalperiodservice, ShiftRow, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfig, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfigmodalcomponent, sectionShift(), Shift, SHIFT_LABELS

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

### Community 162 - "sign-up.component.ts"
Cohesion: 0.23
Nodes (6): SignUpService, Injectable, src_app_auth_use_cases_index_createuserstudentservice, src_app_common_confirm_modal_index_confirmmodalcomponent, src_app_repositories_careers_index_careeritemvm, src_app_repositories_users_index_saveuser

### Community 163 - "ScheduleDetailsComponent"
Cohesion: 0.20
Nodes (5): ScheduleDetailsComponent, Component, Inject, Optional, Output

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

### Community 176 - "http-interceptor.interceptor.ts"
Cohesion: 0.28
Nodes (3): HttpInterceptorInterceptor, Injectable, DEMAND_PREFERENCE_KEYS

### Community 177 - "careers/form/form.component.ts"
Cohesion: 0.36
Nodes (4): CareerVM, RowActionCareer, delete, update

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
Cohesion: 0.07
Nodes (24): src_app_common_index_subjectdemandmodule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_model_index_sectionbasequery, src_app_repositories_sections_sections_manage_index_sectionsmanagecomponent, src_app_repositories_sections_sections_overview_index_sectionsoverviewcomponent, routes (+16 more)

### Community 190 - "degree-detail.component.ts"
Cohesion: 0.25
Nodes (5): DegreeDetailComponent, STATUS_LABELS, Component, Input, src_app_repositories_teachers_model_index_gradelabel

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.10
Nodes (19): LevelBar, SubjectDemandPanelComponent, Component, Input, attendedByLevel(), computeCoverage(), CoverageStatus, DEFAULT_DEMAND_CONFIG (+11 more)

### Community 195 - "documents-routing.module.ts"
Cohesion: 0.33
Nodes (4): DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent

### Community 196 - "CareersService"
Cohesion: 0.33
Nodes (3): CareersService, Injectable, Inject

## Knowledge Gaps
- **541 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+536 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1456 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `ref_angular_core` to `UserStateService`, `teachers.module.ts`, `admin.component.ts`, `classrooms/form/form.component.ts`, `schedules.component.ts`, `ScheduleBaseQuery`, `statistics.service.ts`, `ref_angular_common`, `subject-demands.component.ts`, `InscriptionVM`, `schedules.service.ts`, `StateService`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `url-access-guard.guard.ts`, `common/index.ts`, `teacher.service.ts`, `planned-schedules.component.ts`, `student-schedules.service.ts`, `users/form/form.component.ts`, `sign-up.component.ts`, `create-user-student.service.ts`, `login.service.ts`, `FormComponent`, `subjects.service.ts`, `TeacherItemVM`, `DepartmentItemVM`, `classrooms.module.ts`, `http-interceptor.interceptor.ts`, `careers/form/form.component.ts`, `find-user.service.ts`, `settings.module.ts`, `RowOptionVM`, `sections.service.ts`, `subject-demand-store.service.ts`, `careers.module.ts`, `SectionItemVM`, `UserItemVM`, `subjects.component.ts`, `create-subject.service.ts`, `create-career.service.ts`, `student-schedules.component.ts`, `sections.component.ts`, `@angular/material`, `document.service.ts`, `ScheduleItemVM`, `schools.module.ts`, `VersionService`, `@angular/forms`, `users.service.ts`, `find-subject.service.ts`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `users.component.ts`, `DegreeFormComponent`, `documents.component.ts`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Why does `@angular/material` connect `@angular/material` to `teachers.module.ts`, `admin.component.ts`, `classrooms/form/form.component.ts`, `schedules.component.ts`, `subject-demands.component.ts`, `app.module.ts`, `schedules.service.ts`, `state/index.ts`, `package.json`, `common/index.ts`, `planned-schedules.component.ts`, `student-schedules.service.ts`, `users/form/form.component.ts`, `sign-up.component.ts`, `FormComponent`, `ScheduleDetailsComponent`, `subjects.service.ts`, `DepartmentItemVM`, `bulk-academic-charge-modal.component.ts`, `classrooms.module.ts`, `careers/form/form.component.ts`, `settings.module.ts`, `RowOptionVM`, `documents.module.ts`, `sections.service.ts`, `academic.module.ts`, `careers.module.ts`, `subjects.component.ts`, `student-schedules.component.ts`, `ConfirmModalComponent`, `sections.component.ts`, `TeacherPickerComponent`, `ScheduleItemVM`, `schools.module.ts`, `VersionService`, `@angular/forms`, `subject-demand.module.ts`, `users.service.ts`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `users.component.ts`, `auth.module.ts`, `documents.component.ts`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `Configuration` connect `ref_angular_common` to `statistics.service.ts`, `ScheduleService`, `DefaultService`, `teacher.service.ts`, `AuthService`, `ApiModule`, `PeriodService`, `SchoolService`, `SectionService`, `DayService`, `TeacherDegreeService`, `AuditService`, `InscriptionService`, `document.service.ts`, `SubjectDemandService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _541 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UserStateService` be split into smaller, more focused modules?**
  _Cohesion score 0.12535612535612536 - nodes in this community are weakly interconnected._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07188160676532769 - nodes in this community are weakly interconnected._
- **Should `admin.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08414634146341464 - nodes in this community are weakly interconnected._