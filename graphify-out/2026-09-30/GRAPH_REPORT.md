# Graph Report - sigeit  (2026-09-30)

## Corpus Check
- 986 files · ~175,109 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 72 file(s) not represented in the graph (top: .scss 58, (none) 11, .mdc 1)

## Summary
- 4060 nodes · 10507 edges · 213 communities (185 shown, 28 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 331 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `98ee47e1`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- periods.module.ts
- teachers.module.ts
- sections.component.ts
- schedules.service.ts
- src_app_common_memory_repository_index_usecase
- StudentSchedulesComponent
- models.ts
- StatisticsService
- ref_angular_common
- UseCase
- schedule.service.ts
- error-handler.module.ts
- student-schedules.service.ts
- ClassroomsSchedulesComponent
- UserStateService
- users.service.ts
- settings.module.ts
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- periods/model/index.ts
- memory-repository/index.ts
- sections.service.ts
- user-item-vm.ts
- SectionItemVM
- SelectExComponent
- PlannedSchedulesComponent
- DayVM
- careers.component.ts
- ScheduleItemVM
- CareerItemVM
- Configuration
- AuthService
- TogglePasswordViewComponent
- sign-up.component.ts
- SchedulesService
- subjects.service.ts
- get-schools.service.ts
- app.module.ts
- dependencies
- documents/form/form.component.ts
- schedules/academic-charge-teacher/academic-charge-teacher.component.ts
- ConfirmModalComponent
- 📱 Sistema de Visualización de Versión - SIGEIT
- documents.module.ts
- AcademicChargeTeacherComponent
- 📋 Gestión de Versiones - SIGEIT
- PeriodService
- AcademicChargeTeacherComponent
- devDependencies
- SchoolService
- SectionService
- logger.service.ts
- SubjectDemandStoreService
- schedules.component.ts
- SectionsOverviewComponent
- Changelog
- scripts
- RowOptionVM
- finished.component.ts
- DayService
- academic.module.ts
- departments.module.ts
- create-document.service.ts
- SchedulesComponent
- production
- teacher.service.ts
- TeacherDegreeService
- SubjectVM
- AuditService
- InscriptionService
- admin.component.ts
- DocumentsComponent
- SchoolItemVM
- SectionsComponent
- Componente de Vista General de Secciones
- subject-demand-store.service.ts
- rxjs
- BaseQuery
- UserService
- .setLoading
- TeacherAcademicService
- FormComponent
- ReportConfigModalComponent
- document.service.ts
- SubjectDemandService
- auth.module.ts
- UsersComponent
- IntervalsService
- schools.module.ts
- FormComponent
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- subject-demands.module.ts
- VersionService
- FormComponent
- MemoryDocumentsService
- FormComponent
- find-schedule.service.ts
- UserItemVM
- PeriodVM
- Sistema de Período Académico Global
- SchoolsService
- find-setting.service.ts
- classrooms.module.ts
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- version.service.ts
- DepartmentItemVM
- FormComponent
- FormComponent
- auditoria
- @angular/material
- ListComponentService
- StudentSchedulesService
- ref_angular_core
- student-schedules.component.ts
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- schools/model/index.ts
- ToastService
- FormComponent
- get-teachers.service.ts
- ImportDemandComponent
- VersionDisplayComponent
- TeacherVM
- build
- development
- @
- @
- create-teacher.service.ts
- TeacherMemoryService
- SubjectDemandsComponent
- UserMemoryService
- TeacherItemVM
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- find-user.service.ts
- ScheduleComponent
- periods.component.ts
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- period-comparison-response-dto.ts
- UsersService
- PlanningAuditComponent
- ClassroomsComponent
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
- DegreeFormComponent
- find-document.service.ts
- CloseInscriptionService
- SubjectMemoryService
- api-interfaces/src/index.ts
- api-interfaces/ng-package.json
- dashboard-sdk/ng-package.json
- error-handler/ng-package.json
- form-control-errors/ng-package.json
- http-form-data-client/ng-package.json
- logger/ng-package.json
- login/ng-package.json
- toast/ng-package.json
- delete-inscription.service.ts
- find-school.service.ts
- DocumentsFileService
- .eslintrc.json
- ng-package.json
- common/index.ts
- SchoolsComponent
- generate-report.service.ts
- lib/public-api.ts
- ClassroomType
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts
- VersionInfoComponent
- AppModule
- CreateSubjectService
- UpdateSubjectService
- 🛠️ **Personalización**
- 📁 **Archivos Creados/Modificados**

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 168 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 75 edges
4. `StudentSchedulesComponent` - 74 edges
5. `@angular/forms` - 63 edges
6. `UserStateService` - 59 edges
7. `StateService` - 58 edges
8. `ScheduleItemVM` - 49 edges
9. `Configuration` - 48 edges
10. `DepartmentItemVM` - 47 edges

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

## Communities (213 total, 28 thin omitted)

### Community 0 - "periods.module.ts"
Cohesion: 0.09
Nodes (22): src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_memory_index_periodmemoryservice, PeriodMemoryService, Injectable, PeriodsService, Injectable, CreatePeriodService, Injectable (+14 more)

### Community 1 - "teachers.module.ts"
Cohesion: 0.15
Nodes (12): src_app_common_memory_repository_index_listcomponentservice, src_app_repositories_teachers_memory_index_teachermemoryservice, routes, TeachersRoutingModule, NgModule, DeleteTeacherService, Injectable, src_app_repositories_teachers_use_cases_index_createteacherservice (+4 more)

### Community 2 - "sections.component.ts"
Cohesion: 0.07
Nodes (28): lodash, AppComponent, Component, src_app_common_index_confirmmodalcomponent, src_app_common_index_optionaction, src_app_common_index_tabledatavm, src_app_common_index_tableservice, src_app_common_state_index_stateservice (+20 more)

### Community 3 - "schedules.service.ts"
Cohesion: 0.05
Nodes (43): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, src_app_repositories_departments_use_cases_index_getdepartmentsservice, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, src_app_repositories_schedules_index_schedule2scheduleitemvm (+35 more)

### Community 4 - "src_app_common_memory_repository_index_usecase"
Cohesion: 0.29
Nodes (8): src_app_common_memory_repository_index_usecase, src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_memory_index_subjectmemoryservice, src_app_repositories_subjects_model_index_subjectbasequery, src_app_repositories_subjects_model_index_subjectitemvm

### Community 6 - "models.ts"
Cohesion: 0.06
Nodes (39): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateInscriptionDto (+31 more)

### Community 7 - "StatisticsService"
Cohesion: 0.05
Nodes (26): StatisticsService, Inject, Injectable, Optional, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+18 more)

### Community 8 - "ref_angular_common"
Cohesion: 0.12
Nodes (24): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+16 more)

### Community 9 - "UseCase"
Cohesion: 0.07
Nodes (30): ref_dashboard_sdk, src_app_common_index_usecase, UseCase, CareersRoutingModule, NgModule, CareersService, Injectable, src_app_repositories_careers_mappers_index_career2careeritemvm (+22 more)

### Community 10 - "schedule.service.ts"
Cohesion: 0.07
Nodes (27): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ScheduleService, Inject, Injectable, Optional, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto (+19 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "student-schedules.service.ts"
Cohesion: 0.06
Nodes (34): src_app_common_index_selectexmodule, SelectExModule, NgModule, src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectsmodule (+26 more)

### Community 13 - "ClassroomsSchedulesComponent"
Cohesion: 0.15
Nodes (5): ClassroomsSchedulesComponent, Component, Input, ScheduleDisplayService, Injectable

### Community 14 - "UserStateService"
Cohesion: 0.07
Nodes (15): StateService, Injectable, TableService, Injectable, src_app_common_user_state_models_index_userstatevm, UserStateVM, Injectable, UserStateService (+7 more)

### Community 15 - "users.service.ts"
Cohesion: 0.15
Nodes (16): ref_admin_sdk, src_app_repositories_careers_use_cases_index_getcareersservice, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, GetUsersService, Injectable, src_app_repositories_users_use_cases_index_createuserservice (+8 more)

### Community 16 - "settings.module.ts"
Cohesion: 0.15
Nodes (9): SettingsComponent, Component, Output, routes, SettingsRoutingModule, NgModule, SettingsService, Injectable (+1 more)

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.08
Nodes (19): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, FormControlTestComponent, Component (+11 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (40): engines, node, @angular/common, @angular/core, tslib, name, private, version (+32 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "periods/model/index.ts"
Cohesion: 0.13
Nodes (14): src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, RowActionPeriod, delete, setActive, update, STAGE_PERIODS (+6 more)

### Community 21 - "memory-repository/index.ts"
Cohesion: 0.13
Nodes (3): MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus

### Community 22 - "sections.service.ts"
Cohesion: 0.07
Nodes (26): src_app_common_index_subjectdemandmodule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_mappers_index_section2sectionitemvm, src_app_repositories_sections_memory_index_sectionmemoryservice, SectionMemoryService, Injectable (+18 more)

### Community 23 - "user-item-vm.ts"
Cohesion: 0.14
Nodes (14): src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teachervm, USER_ROLES, UserRole, Administrator, Director, HeadDepartment (+6 more)

### Community 24 - "SectionItemVM"
Cohesion: 0.11
Nodes (16): src_app_repositories_sections_index_section2sectionitemvm, src_app_repositories_sections_index_sectionbasequery, src_app_repositories_sections_index_sectionmemoryservice, src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionItemVM(), src_app_repositories_sections_model_index_sectionbasequery, src_app_repositories_sections_model_index_sectionvm, RowActionSection (+8 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.10
Nodes (4): SelectExComponent, Component, Input, ViewChild

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.11
Nodes (4): Group, PlannedSchedulesComponent, Component, ReportConfig

### Community 27 - "DayVM"
Cohesion: 0.15
Nodes (13): src_app_common_index_rowoptionvm, src_app_common_timer_index_timevalidator, ClassroomVM, src_app_repositories_classrooms_model_index_classroomvm, RowActionClassroom, delete, update, DayVM (+5 more)

### Community 28 - "careers.component.ts"
Cohesion: 0.21
Nodes (5): CareersComponent, Component, routes, src_app_repositories_careers_form_index_formcomponent, src_app_repositories_careers_model_index_rowactioncareer

### Community 29 - "ScheduleItemVM"
Cohesion: 0.11
Nodes (8): Schedule2ScheduleItemVM(), ScheduleBaseQuery, ScheduleItemVM, ScheduleDetailsComponent, Component, Inject, Optional, Output

### Community 30 - "CareerItemVM"
Cohesion: 0.17
Nodes (8): Career2CareerItemVM(), Career2CareerVM(), CareerBaseQuery, CareerItemVM, CareerVM, RowActionCareer, delete, update

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "sign-up.component.ts"
Cohesion: 0.10
Nodes (10): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_auth_use_cases_index_createuserstudentservice, src_app_repositories_users_index_saveuser (+2 more)

### Community 35 - "SchedulesService"
Cohesion: 0.10
Nodes (8): clashHtml(), FormComponent, Component, Input, Output, ScheduleVM, SchedulesService, Injectable

### Community 36 - "subjects.service.ts"
Cohesion: 0.13
Nodes (10): src_app_common_index_statemodule, src_app_repositories_careers_index_getcareersservice, SubjectsRoutingModule, NgModule, FindSubjectService, Injectable, src_app_repositories_subjects_use_cases_index_createsubjectservice, src_app_repositories_subjects_use_cases_index_deletesubjectservice (+2 more)

### Community 37 - "get-schools.service.ts"
Cohesion: 0.17
Nodes (6): src_app_repositories_schools_mappers_index_school2schoolitemvm, SchoolMemoryService, Injectable, src_app_repositories_schools_model_index_schoolitemvm, GetSchoolsService, Injectable

### Community 38 - "app.module.ts"
Cohesion: 0.06
Nodes (29): ref_error_handler, ref_http_form_data_client, ref_toast, AppRoutingModule, routes, NgModule, AuthGuard, Injectable (+21 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "documents/form/form.component.ts"
Cohesion: 0.23
Nodes (8): DocumentBaseQuery, DocumentVM, src_app_repositories_documents_model_index_typedocument, RowActionDocument, delete, update, TypeDocument, AcademicCharge

### Community 41 - "schedules/academic-charge-teacher/academic-charge-teacher.component.ts"
Cohesion: 0.08
Nodes (12): src_app_common_user_state_index_userstateservice, src_app_repositories_periods_index_periodvm, BulkAcademicChargeModalComponent, BulkAcademicChargeModalData, BulkAcademicChargeModalResult, BulkDownloadMode, Component, Inject (+4 more)

### Community 42 - "ConfirmModalComponent"
Cohesion: 0.22
Nodes (7): ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, ModalMessageModel

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.11
Nodes (18): 🎯 **Beneficios**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:**, **Información Mostrada**, 🔄 **Integración con Sistema de Versionado**, 🎨 **Interfaz de Usuario** (+10 more)

### Community 44 - "documents.module.ts"
Cohesion: 0.14
Nodes (13): src_app_common_table_index_tablemodule, DocumentsModule, NgModule, DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice (+5 more)

### Community 45 - "AcademicChargeTeacherComponent"
Cohesion: 0.15
Nodes (4): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "PeriodService"
Cohesion: 0.11
Nodes (10): PeriodService, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponsePeriodDto (+2 more)

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

### Community 53 - "SubjectDemandStoreService"
Cohesion: 0.14
Nodes (6): SubjectDemandPanelComponent, Component, Input, SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 54 - "schedules.component.ts"
Cohesion: 0.11
Nodes (12): src_app_common_confirm_modal_index_confirmmodalcomponent, src_app_common_table_index_optionaction, src_app_common_table_index_tabledatavm, src_app_common_table_index_tableservice, src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_model_index_rowactionschedule, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent (+4 more)

### Community 55 - "SectionsOverviewComponent"
Cohesion: 0.14
Nodes (3): Group, SectionsOverviewComponent, Component

### Community 56 - "Changelog"
Cohesion: 0.09
Nodes (21): 0.0.1 (2025-09-21), 0.0.2 (2025-09-21), 0.0.3 (2025-09-21), ✨ Características, ✨ Características, ✨ Características, ✨ Características, Changelog (+13 more)

### Community 57 - "scripts"
Cohesion: 0.09
Nodes (22): scripts, build, build-error-handler, build:prod, build-projects, build:versioned, changelog, dashboard-sdk (+14 more)

### Community 58 - "RowOptionVM"
Cohesion: 0.09
Nodes (15): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl(), TableComponent (+7 more)

### Community 59 - "finished.component.ts"
Cohesion: 0.11
Nodes (12): src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, FinishedComponent, Component, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionBaseQuery (+4 more)

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "academic.module.ts"
Cohesion: 0.13
Nodes (15): src_app_common_state_index_statemodule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule, routes, NgModule (+7 more)

### Community 62 - "departments.module.ts"
Cohesion: 0.07
Nodes (28): StateModule, NgModule, TableModule, NgModule, DepartmentsRoutingModule, routes, NgModule, DepartmentsService (+20 more)

### Community 63 - "create-document.service.ts"
Cohesion: 0.16
Nodes (12): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentitemvm, DocumentItemVM, src_app_repositories_documents_model_index_documentitemvm, CreateDocumentService, Injectable (+4 more)

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "teacher.service.ts"
Cohesion: 0.12
Nodes (21): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Inject, Injectable, Optional, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus (+13 more)

### Community 67 - "TeacherDegreeService"
Cohesion: 0.08
Nodes (22): TeacherDegreeService, Inject, Injectable, Optional, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+14 more)

### Community 68 - "SubjectVM"
Cohesion: 0.23
Nodes (6): RowActionSubject, delete, update, SubjectBaseQuery, SubjectItemVM, SubjectVM

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "admin.component.ts"
Cohesion: 0.05
Nodes (27): AdminComponent, Component, AdminModule, NgModule, AdminRoutingModule, routes, NgModule, AdminService (+19 more)

### Community 73 - "SchoolItemVM"
Cohesion: 0.18
Nodes (10): src_app_repositories_careers_index_careervm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_model_index_schoolvm, SchoolItemVM, SchoolVM, CreateSchoolService, Injectable (+2 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.21
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "subject-demand-store.service.ts"
Cohesion: 0.14
Nodes (15): chart.js, ng2-charts, SubjectDemandModule, NgModule, computeCoverage(), CoverageStatus, DEFAULT_DEMAND_FACTOR, DEMAND_FACTOR_KEY (+7 more)

### Community 77 - "rxjs"
Cohesion: 0.15
Nodes (21): rxjs, xlsx, DegreeFormData, Inject, src_app_repositories_teachers_form_index_formcomponent, src_app_repositories_teachers_model_index_category_options, src_app_repositories_teachers_model_index_dedication_options, src_app_repositories_teachers_model_index_degree_level_options (+13 more)

### Community 78 - "BaseQuery"
Cohesion: 0.10
Nodes (7): src_app_common_index_basequery, BaseQuery, src_app_repositories_periods_mappers_index_period2periodvm, FindPeriodService, Injectable, ToPlanPeriodService, Injectable

### Community 79 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 81 - "TeacherAcademicService"
Cohesion: 0.11
Nodes (7): GradeSearchComponent, Component, ProfileComponent, Component, Inject, TeacherAcademicService, Injectable

### Community 82 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 83 - "ReportConfigModalComponent"
Cohesion: 0.09
Nodes (8): src_app_common_semester_index_semesters, src_app_common_semester_index_semestervm, SEMESTERS, SemesterVM, FieldOption, ReportConfigModalComponent, Component, Inject

### Community 84 - "document.service.ts"
Cohesion: 0.15
Nodes (9): DocumentService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto (+1 more)

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "auth.module.ts"
Cohesion: 0.06
Nodes (22): @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent (+14 more)

### Community 88 - "IntervalsService"
Cohesion: 0.13
Nodes (8): moment, timeValidator(), src_app_repositories_schedules_model_index_intervalsselect, Intervals, IntervalSelect, IntervalsSelect, IntervalsService, Injectable

### Community 89 - "schools.module.ts"
Cohesion: 0.21
Nodes (11): src_app_repositories_schools_form_index_formcomponent, src_app_repositories_schools_memory_index_schoolmemoryservice, src_app_repositories_schools_model_index_rowactionschool, routes, SchoolsRoutingModule, NgModule, src_app_repositories_schools_use_cases_index_createschoolservice, src_app_repositories_schools_use_cases_index_deleteschoolservice (+3 more)

### Community 90 - "FormComponent"
Cohesion: 0.23
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

### Community 95 - "subject-demands.module.ts"
Cohesion: 0.17
Nodes (8): src_app_common_subject_demand_index_subjectdemandstoreservice, SubjectDemandsModule, NgModule, routes, SubjectDemandsRoutingModule, NgModule, SubjectDemandsService, Injectable

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 98 - "MemoryDocumentsService"
Cohesion: 0.15
Nodes (6): src_app_common_memory_repository_index_memoryrepository, src_app_repositories_documents_memory_index_memorydocumentsservice, MemoryDocumentsService, Injectable, DeleteDocumentService, Injectable

### Community 99 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "find-schedule.service.ts"
Cohesion: 0.14
Nodes (9): Day2DayVM(), src_app_repositories_schedules_mappers_index_day2dayvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm, Schedule2ScheduleVM(), src_app_repositories_schedules_model_index_schedulevm, FindScheduleService, Injectable, GetDaysService (+1 more)

### Community 101 - "UserItemVM"
Cohesion: 0.18
Nodes (12): src_app_repositories_schools_index_school2schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_users_mappers_index_user2useritemvm, User2UserItemVM(), User2UserVM(), src_app_repositories_users_model_index_user_roles_value, src_app_repositories_users_model_index_uservm, USER_ROLES_VALUE (+4 more)

### Community 102 - "PeriodVM"
Cohesion: 0.20
Nodes (5): Period2PeriodItemVM(), Period2PeriodVM(), src_app_repositories_periods_model_index_periodvm, PeriodItemVM, PeriodVM

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "SchoolsService"
Cohesion: 0.18
Nodes (5): Inject, SchoolsService, Injectable, DeleteSchoolService, Injectable

### Community 105 - "find-setting.service.ts"
Cohesion: 0.14
Nodes (9): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, FindSettingService (+1 more)

### Community 106 - "classrooms.module.ts"
Cohesion: 0.06
Nodes (32): src_app_common_index_listcomponentservice, src_app_common_index_memoryrepository, src_app_common_index_tablemodule, Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, src_app_repositories_classrooms_mappers_index_classroom2classroomvm, ClassroomsMemoryService (+24 more)

### Community 107 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 109 - "FormComponent"
Cohesion: 0.23
Nodes (4): FormComponent, Component, Input, Output

### Community 110 - "projects"
Cohesion: 0.15
Nodes (12): cli, analytics, architect, prefix, projectType, root, sourceRoot, newProjectRoot (+4 more)

### Community 111 - "options"
Cohesion: 0.22
Nodes (13): options, allowedCommonJsDependencies, assets, index, inlineStyleLanguage, main, outputPath, polyfills (+5 more)

### Community 112 - "toast.module.ts"
Cohesion: 0.27
Nodes (5): TOAST_OPTIONS, ToastModule, NgModule, @ngx-translate/core, toastr

### Community 113 - "version.service.ts"
Cohesion: 0.39
Nodes (3): VersionInfo, VERSION_INFO, Window

### Community 114 - "DepartmentItemVM"
Cohesion: 0.11
Nodes (12): Inject, Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentvm, DepartmentBaseQuery, DepartmentItemVM, DepartmentVM, RowActionDepartment (+4 more)

### Community 115 - "FormComponent"
Cohesion: 0.23
Nodes (4): FormComponent, Component, Input, Output

### Community 116 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "@angular/material"
Cohesion: 0.14
Nodes (15): @angular/cdk, @angular/forms, @angular/material, @angular/router, src_app_common_index_computecoverage, src_app_common_index_stateservice, src_app_common_index_subjectdemandstoreservice, src_app_common_index_subjectdemandsummary (+7 more)

### Community 120 - "StudentSchedulesService"
Cohesion: 0.24
Nodes (3): SavedSchedule, StudentSchedulesService, Injectable

### Community 121 - "ref_angular_core"
Cohesion: 0.10
Nodes (16): ref_angular_core, StateComponent, Component, HostBinding, Input, Injectable, UrlAccessGuardGuard, ProfileComponent (+8 more)

### Community 122 - "student-schedules.component.ts"
Cohesion: 0.07
Nodes (17): src_app_common_index_semesters, src_app_common_index_semestervm, src_app_repositories_periods_index_stageperiod, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_scheduledetailscomponent, src_app_repositories_schedules_index_scheduleitemvm, src_app_repositories_sections_index_sectionitemvm, src_app_repositories_subjects_index_subjectvm (+9 more)

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

### Community 131 - "schools/model/index.ts"
Cohesion: 0.43
Nodes (3): RowActionSchool, delete, update

### Community 132 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 133 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 134 - "get-teachers.service.ts"
Cohesion: 0.23
Nodes (7): Section2SectionVM(), src_app_repositories_subjects_index_subject2subjectitemvm, src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teacher2teachervm, Teacher2TeacherVM(), src_app_repositories_teachers_model_index_teacherbasequery, src_app_repositories_teachers_model_index_teacheritemvm

### Community 135 - "ImportDemandComponent"
Cohesion: 0.22
Nodes (3): ImportDemandComponent, Component, Inject

### Community 136 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

### Community 137 - "TeacherVM"
Cohesion: 0.24
Nodes (6): src_app_repositories_teachers_model_index_teachervm, RowActionTeacher, delete, profile, update, TeacherVM

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

### Community 142 - "create-teacher.service.ts"
Cohesion: 0.21
Nodes (7): src_app_repositories_teachers_mappers_index_teachervm2teacherdto, Teacher2TeacherItemVM(), TeacherVM2TeacherDto(), CreateTeacherService, Injectable, Injectable, UpdateTeacherService

### Community 143 - "TeacherMemoryService"
Cohesion: 0.15
Nodes (4): TeacherMemoryService, Injectable, FindTeacherService, Injectable

### Community 145 - "UserMemoryService"
Cohesion: 0.18
Nodes (5): Injectable, UserMemoryService, src_app_repositories_users_model_index_useritemvm, DeleteUserService, Injectable

### Community 146 - "TeacherItemVM"
Cohesion: 0.20
Nodes (4): TeacherBaseQuery, TeacherItemVM, TeachersComponent, Component

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

### Community 152 - "find-user.service.ts"
Cohesion: 0.17
Nodes (4): src_app_common_memory_repository_index_basequery, src_app_repositories_users_mappers_index_user2uservm, FindUserService, Injectable

### Community 153 - "ScheduleComponent"
Cohesion: 0.28
Nodes (3): ScheduleComponent, Component, Input

### Community 154 - "periods.component.ts"
Cohesion: 0.14
Nodes (8): src_app_repositories_periods_form_index_formcomponent, src_app_repositories_periods_model_index_perioditemvm, src_app_repositories_periods_model_index_rowactionperiod, PeriodsComponent, Component, PeriodsRoutingModule, routes, NgModule

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

### Community 162 - "period-comparison-response-dto.ts"
Cohesion: 0.26
Nodes (8): PeriodComparisonDeltaDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodComparisonResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodMetricResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SubjectDemandIncreaseItemDto

### Community 163 - "UsersService"
Cohesion: 0.20
Nodes (5): Inject, CreateUserService, Injectable, Injectable, UsersService

### Community 165 - "ClassroomsComponent"
Cohesion: 0.22
Nodes (5): ClassroomsComponent, Component, ClassroomsRoutingModule, routes, NgModule

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

### Community 176 - "DegreeFormComponent"
Cohesion: 0.25
Nodes (3): DegreeFormComponent, Component, Inject

### Community 177 - "find-document.service.ts"
Cohesion: 0.29
Nodes (5): src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_model_index_documentbasequery, src_app_repositories_documents_model_index_documentvm, FindDocumentService, Injectable

### Community 179 - "SubjectMemoryService"
Cohesion: 0.18
Nodes (4): SubjectMemoryService, Injectable, DeleteSubjectService, Injectable

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

### Community 190 - "find-school.service.ts"
Cohesion: 0.18
Nodes (3): src_app_repositories_schools_mappers_index_school2schoolvm, FindSchoolService, Injectable

### Community 191 - "DocumentsFileService"
Cohesion: 0.29
Nodes (4): DocumentsFileService, Injectable, Inject, Optional

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 198 - "ClassroomType"
Cohesion: 0.33
Nodes (5): CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

### Community 208 - "AppModule"
Cohesion: 0.50
Nodes (3): @angular/platform-browser-dynamic, AppModule, NgModule

### Community 211 - "🛠️ **Personalización**"
Cohesion: 0.50
Nodes (4): **Cambiar Estilos:**, **Modificar Información Mostrada:**, **Modificar Ubicación:**, 🛠️ **Personalización**

### Community 212 - "📁 **Archivos Creados/Modificados**"
Cohesion: 0.67
Nodes (3): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, **Nuevos Archivos:**

## Knowledge Gaps
- **526 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+521 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1388 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **28 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `periods.module.ts`, `teachers.module.ts`, `sections.component.ts`, `schedules.service.ts`, `src_app_common_memory_repository_index_usecase`, `get-teachers.service.ts`, `ref_angular_common`, `UseCase`, `schedule.service.ts`, `TeacherVM`, `student-schedules.service.ts`, `UserStateService`, `create-teacher.service.ts`, `settings.module.ts`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `periods/model/index.ts`, `memory-repository/index.ts`, `sections.service.ts`, `UserMemoryService`, `SectionItemVM`, `find-user.service.ts`, `periods.component.ts`, `DayVM`, `careers.component.ts`, `sign-up.component.ts`, `subjects.service.ts`, `get-schools.service.ts`, `app.module.ts`, `documents/form/form.component.ts`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `find-document.service.ts`, `CloseInscriptionService`, `SubjectMemoryService`, `schedules.component.ts`, `RowOptionVM`, `finished.component.ts`, `delete-inscription.service.ts`, `departments.module.ts`, `create-document.service.ts`, `find-school.service.ts`, `teacher.service.ts`, `generate-report.service.ts`, `admin.component.ts`, `SchoolItemVM`, `subject-demand-store.service.ts`, `users.service.ts`, `BaseQuery`, `document.service.ts`, `auth.module.ts`, `schools.module.ts`, `subject-demands.module.ts`, `MemoryDocumentsService`, `find-schedule.service.ts`, `UserItemVM`, `PeriodVM`, `find-setting.service.ts`, `classrooms.module.ts`, `FormComponent`, `version.service.ts`, `DepartmentItemVM`, `@angular/material`, `ref_angular_core`, `student-schedules.component.ts`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `CustomHttpParameterCodec` connect `ref_angular_common` to `StatisticsService`, `schedule.service.ts`, `DefaultService`, `AuthService`, `PeriodService`, `SchoolService`, `SectionService`, `DayService`, `teacher.service.ts`, `TeacherDegreeService`, `AuditService`, `InscriptionService`, `UserService`, `document.service.ts`, `SubjectDemandService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `PlannedSchedulesComponent` connect `PlannedSchedulesComponent` to `schedules.service.ts`, `PeriodVM`, `UserStateService`, `DepartmentItemVM`, `@angular/material`, `schedules.component.ts`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _526 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `periods.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14855072463768115 - nodes in this community are weakly interconnected._
- **Should `sections.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06826241134751773 - nodes in this community are weakly interconnected._