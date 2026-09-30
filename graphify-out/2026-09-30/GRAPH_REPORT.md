# Graph Report - sigeit  (2026-09-30)

## Corpus Check
- 998 files · ~181,824 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 77 file(s) not represented in the graph (top: .scss 63, (none) 11, .mdc 1)

## Summary
- 4200 nodes · 10883 edges · 212 communities (184 shown, 28 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 349 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e88510a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- periods/form/form.component.ts
- teachers.module.ts
- admin.component.ts
- get-documents.service.ts
- StudentSchedulesComponent
- models.ts
- statistics.service.ts
- rxjs
- CareerItemVM
- ScheduleService
- error-handler.module.ts
- finished.component.ts
- SchedulesService
- StudentSchedulesService
- users.service.ts
- StateService
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- PeriodMemoryService
- memory-repository/index.ts
- sections.service.ts
- SectionsManageComponent
- teacher.service.ts
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- careers.module.ts
- find-section.service.ts
- AcademicChargeTeacherComponent
- Configuration
- AuthService
- TogglePasswordViewComponent
- sign-up.service.ts
- FormComponent
- subjects.service.ts
- intervals.service.ts
- app.module.ts
- dependencies
- departments.module.ts
- BulkAcademicChargeModalComponent
- DayVM
- 📱 Sistema de Visualización de Versión - SIGEIT
- classrooms.module.ts
- period-audit-dto.ts
- 📋 Gestión de Versiones - SIGEIT
- PeriodService
- ScheduleItemVM
- devDependencies
- SchoolService
- SectionService
- logger.service.ts
- periods/use-cases/index.ts
- settings.module.ts
- SectionsOverviewComponent
- Changelog
- scripts
- RowOptionVM
- ClassroomVM
- DayService
- documents.module.ts
- create-document.service.ts
- academic.module.ts
- SchedulesComponent
- production
- users/form/form.component.ts
- TeacherDegreeService
- UseCase
- AuditService
- InscriptionService
- AdminComponent
- SubjectsComponent
- SchoolItemVM
- SectionsComponent
- Componente de Vista General de Secciones
- UsersComponent
- schedules.component.ts
- ref_angular_core
- @angular/material
- DocumentsComponent
- teachers.component.ts
- FormComponent
- planned-schedules.component.ts
- DocumentService
- SubjectDemandService
- TeacherPickerComponent
- @angular/forms
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
- departments/index.ts
- FormComponent
- sections-manage.component.ts
- GetDepartmentsService
- ListComponentService
- Sistema de Período Académico Global
- UserItemVM
- SubjectVM
- src_app_common_memory_repository_index_usecase
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- admin-routing.module.ts
- UserService
- documents/form/form.component.ts
- FormComponent
- auditoria
- SubjectDemandsComponent
- TeacherAcademicService
- VersionDisplayComponent
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
- ClassroomType
- UserMemoryService
- FormComponent
- GradeSearchComponent
- VersionInfoComponent
- subject-demands.component.ts
- TeacherItemVM
- build
- development
- @
- @
- subject-demand.module.ts
- schedules.service.ts
- SchoolMemoryService
- ToastService
- TeacherVM
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- GlobalPeriodService
- student-schedules/use-cases/index.ts
- common/index.ts
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- CareersComponent
- FormControlErrorsDirective
- UserStateService
- periods.module.ts
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
- PlanningAuditComponent
- SectionItemVM
- careers/model/index.ts
- api-interfaces/src/index.ts
- api-interfaces/ng-package.json
- dashboard-sdk/ng-package.json
- error-handler/ng-package.json
- form-control-errors/ng-package.json
- http-form-data-client/ng-package.json
- logger/ng-package.json
- login/ng-package.json
- toast/ng-package.json
- url-access-guard.guard.ts
- DepartmentItemVM
- ClassroomsComponent
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- find-career.service.ts
- subjects/model/index.ts
- lib/public-api.ts
- FindPeriodService
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts
- login.module.ts
- array-validator.directive.ts
- UpdateCareerService
- PeriodVM

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

## Communities (212 total, 28 thin omitted)

### Community 0 - "periods/form/form.component.ts"
Cohesion: 0.16
Nodes (12): lodash, ref_toast, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, STAGE_PERIODS, STAGE_PERIODS_VALUE, StagePeriod (+4 more)

### Community 1 - "teachers.module.ts"
Cohesion: 0.07
Nodes (23): src_app_repositories_teachers_memory_index_teachermemoryservice, TeacherMemoryService, Injectable, src_app_repositories_teachers_model_index_teacherbasequery, TeachersModule, NgModule, TeachersRoutingModule, NgModule (+15 more)

### Community 3 - "admin.component.ts"
Cohesion: 0.12
Nodes (14): AdminModule, NgModule, AdminService, Injectable, src_app_admin_data_index_menu, MENU, src_app_admin_models_index_optionmenu, src_app_common_user_state_index_userstatevm (+6 more)

### Community 4 - "get-documents.service.ts"
Cohesion: 0.10
Nodes (14): src_app_common_memory_repository_index_memoryrepository, src_app_repositories_documents_mappers_index_document2documentitemvm, src_app_repositories_documents_memory_index_memorydocumentsservice, MemoryDocumentsService, Injectable, src_app_repositories_documents_model_index_documentitemvm, CreateDocumentService, Injectable (+6 more)

### Community 6 - "models.ts"
Cohesion: 0.05
Nodes (51): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+43 more)

### Community 7 - "statistics.service.ts"
Cohesion: 0.05
Nodes (33): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, StatisticsService, Injectable, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CurriculumSemesterStatItemDto (+25 more)

### Community 8 - "rxjs"
Cohesion: 0.11
Nodes (28): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+20 more)

### Community 9 - "CareerItemVM"
Cohesion: 0.23
Nodes (8): Career2CareerItemVM(), Career2CareerVM(), src_app_repositories_careers_mappers_index_career2careeritemvm, CareerItemVM, CareerVM, src_app_repositories_careers_model_index_careervm, CreateCareerService, Injectable

### Community 10 - "ScheduleService"
Cohesion: 0.10
Nodes (12): ScheduleService, Inject, Injectable, Optional, FreeClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, FreeSlotDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+4 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "finished.component.ts"
Cohesion: 0.09
Nodes (18): src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionBaseQuery, InscriptionVM, StageInscription (+10 more)

### Community 13 - "SchedulesService"
Cohesion: 0.07
Nodes (10): ClassroomsSchedulesComponent, Component, Input, ScheduleComponent, Component, Input, SchedulesService, Injectable (+2 more)

### Community 14 - "StudentSchedulesService"
Cohesion: 0.14
Nodes (5): FinishedComponent, Component, SavedSchedule, StudentSchedulesService, Injectable

### Community 15 - "users.service.ts"
Cohesion: 0.10
Nodes (16): src_app_common_table_index_tablemodule, src_app_repositories_departments_index_getdepartmentsservice, src_app_repositories_schools_index_getschoolsservice, FindUserService, Injectable, src_app_repositories_users_use_cases_index_createuserservice, src_app_repositories_users_use_cases_index_deleteuserservice, src_app_repositories_users_use_cases_index_finduserservice (+8 more)

### Community 16 - "StateService"
Cohesion: 0.09
Nodes (28): AppComponent, Component, src_app_common_index_confirmmodalcomponent, src_app_common_index_optionaction, src_app_common_index_tabledatavm, src_app_common_index_tableservice, src_app_common_state_index_stateservice, StateService (+20 more)

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.14
Nodes (12): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsModule, NgModule, ErrorMessages (+4 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (42): engines, node, @angular/common, @angular/core, tslib, name, private, version (+34 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "PeriodMemoryService"
Cohesion: 0.10
Nodes (10): PeriodMemoryService, Injectable, CreatePeriodService, Injectable, GetPeriodsService, Injectable, SetActivePeriodService, Injectable (+2 more)

### Community 21 - "memory-repository/index.ts"
Cohesion: 0.13
Nodes (3): MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus

### Community 22 - "sections.service.ts"
Cohesion: 0.09
Nodes (25): src_app_common_index_subjectdemandmodule, src_app_common_index_tablemodule, src_app_common_memory_repository_index_listcomponentservice, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_sections_manage_index_sectionsmanagecomponent, src_app_repositories_sections_sections_overview_index_sectionsoverviewcomponent (+17 more)

### Community 23 - "SectionsManageComponent"
Cohesion: 0.11
Nodes (4): normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "teacher.service.ts"
Cohesion: 0.12
Nodes (21): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Inject, Injectable, Optional, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus (+13 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.08
Nodes (9): @angular/cdk, NormalizeWords(), searchCallback(), SelectExComponent, Component, Input, ViewChild, SelectExModule (+1 more)

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.11
Nodes (4): Group, PlannedSchedulesComponent, Component, ReportConfig

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.08
Nodes (28): src_app_common_index_semesters, src_app_common_index_semestervm, src_app_repositories_periods_index_stageperiod, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_schedules_index_scheduledetailscomponent, src_app_repositories_sections_index_sectionvm (+20 more)

### Community 28 - "careers.module.ts"
Cohesion: 0.18
Nodes (12): CareersRoutingModule, routes, NgModule, CareersService, Injectable, src_app_repositories_careers_form_index_formcomponent, src_app_repositories_careers_memory_index_careermemoryservice, src_app_repositories_careers_model_index_rowactioncareer (+4 more)

### Community 29 - "find-section.service.ts"
Cohesion: 0.13
Nodes (12): src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionVM(), src_app_repositories_sections_model_index_sectionbasequery, src_app_repositories_sections_model_index_sectionvm, RowActionSection, delete, update, FindSectionService (+4 more)

### Community 30 - "AcademicChargeTeacherComponent"
Cohesion: 0.15
Nodes (4): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.18
Nodes (9): TogglePasswordViewComponent, Component, HostBinding, HostListener, Input, DummyTestComponent, Component, TogglePasswordViewDirective (+1 more)

### Community 34 - "sign-up.service.ts"
Cohesion: 0.09
Nodes (12): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_auth_use_cases_index_createuserstudentservice, src_app_repositories_careers_index_careeritemvm (+4 more)

### Community 35 - "FormComponent"
Cohesion: 0.08
Nodes (10): moment, src_app_common_timer_index_timevalidator, timeValidator(), clashHtml(), FormComponent, Component, Input, Output (+2 more)

### Community 36 - "subjects.service.ts"
Cohesion: 0.10
Nodes (16): src_app_repositories_careers_index_careervm, src_app_repositories_careers_index_getcareersservice, src_app_repositories_subjects_model_index_subjectvm, SubjectsModule, NgModule, routes, SubjectsRoutingModule, NgModule (+8 more)

### Community 37 - "intervals.service.ts"
Cohesion: 0.20
Nodes (4): src_app_repositories_schedules_model_index_intervalsselect, Intervals, IntervalSelect, IntervalsSelect

### Community 38 - "app.module.ts"
Cohesion: 0.09
Nodes (17): @angular/platform-browser-dynamic, ref_error_handler, ref_http_form_data_client, AppModule, NgModule, AppRoutingModule, routes, NgModule (+9 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "departments.module.ts"
Cohesion: 0.07
Nodes (26): src_app_common_index_selectexmodule, DepartmentsModule, NgModule, DepartmentsRoutingModule, NgModule, DepartmentsService, Injectable, src_app_repositories_departments_mappers_index_department2departmentitemvm (+18 more)

### Community 41 - "BulkAcademicChargeModalComponent"
Cohesion: 0.25
Nodes (3): BulkAcademicChargeModalComponent, Component, Inject

### Community 42 - "DayVM"
Cohesion: 0.09
Nodes (17): src_app_repositories_schedules_index_schedule2scheduleitemvm, Day2DayVM(), src_app_repositories_schedules_mappers_index_day2dayvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm, Schedule2ScheduleItemVM(), Schedule2ScheduleVM(), DayVM, src_app_repositories_schedules_model_index_dayvm (+9 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "classrooms.module.ts"
Cohesion: 0.10
Nodes (18): ClassroomsModule, NgModule, ClassroomsRoutingModule, routes, NgModule, ClassroomsService, Injectable, src_app_repositories_classrooms_memory_index_classroomsmemoryservice (+10 more)

### Community 45 - "period-audit-dto.ts"
Cohesion: 0.17
Nodes (14): AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DayConflictsDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+6 more)

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "PeriodService"
Cohesion: 0.11
Nodes (10): PeriodService, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponsePeriodDto (+2 more)

### Community 48 - "ScheduleItemVM"
Cohesion: 0.16
Nodes (3): AcademicChargeTeacherComponent, Component, ScheduleItemVM

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

### Community 54 - "settings.module.ts"
Cohesion: 0.13
Nodes (11): SettingsComponent, Component, Output, SettingsModule, NgModule, routes, SettingsRoutingModule, NgModule (+3 more)

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
Nodes (12): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, RowOptionVM, getSpanishPaginatorIntl(), TableComponent, Component, Input (+4 more)

### Community 59 - "ClassroomVM"
Cohesion: 0.09
Nodes (22): Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, src_app_repositories_classrooms_mappers_index_classroom2classroomvm, ClassroomsMemoryService, Injectable, ClassroomBaseQuery, ClassroomItemVM (+14 more)

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.16
Nodes (12): DocumentsModule, NgModule, DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice, src_app_repositories_documents_use_cases_create_document_index_createdocumentservice (+4 more)

### Community 62 - "create-document.service.ts"
Cohesion: 0.13
Nodes (16): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentvm, DocumentBaseQuery, DocumentItemVM, DocumentVM, src_app_repositories_documents_model_index_documentbasequery (+8 more)

### Community 63 - "academic.module.ts"
Cohesion: 0.12
Nodes (17): src_app_common_state_index_statemodule, StateModule, NgModule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule (+9 more)

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "users/form/form.component.ts"
Cohesion: 0.17
Nodes (10): src_app_repositories_schools_index_schoolitemvm, src_app_repositories_users_model_index_user_roles, USER_ROLES, UserRole, Administrator, Director, HeadDepartment, Planner (+2 more)

### Community 67 - "TeacherDegreeService"
Cohesion: 0.09
Nodes (18): TeacherDegreeService, Inject, Injectable, Optional, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSectionTeacherDto (+10 more)

### Community 68 - "UseCase"
Cohesion: 0.08
Nodes (16): UseCase, src_app_repositories_sections_mappers_index_section2sectionitemvm, Section2SectionItemVM(), src_app_repositories_sections_memory_index_sectionmemoryservice, SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm, SectionVM (+8 more)

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "AdminComponent"
Cohesion: 0.18
Nodes (3): AdminComponent, Component, optionMenu

### Community 73 - "SchoolItemVM"
Cohesion: 0.15
Nodes (14): src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_memory_index_schoolmemoryservice, src_app_repositories_schools_model_index_schoolitemvm, src_app_repositories_schools_model_index_schoolvm, RowActionSchool (+6 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.21
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 77 - "schedules.component.ts"
Cohesion: 0.07
Nodes (23): src_app_common_confirm_modal_index_confirmmodalcomponent, src_app_common_user_state_index_userstateservice, src_app_repositories_periods_index_periodvm, BulkAcademicChargeModalData, BulkAcademicChargeModalResult, BulkDownloadMode, src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_index_scheduleitemvm (+15 more)

### Community 78 - "ref_angular_core"
Cohesion: 0.14
Nodes (10): ref_angular_core, StateComponent, Component, HostBinding, Input, routes, StateRoutingModule, NgModule (+2 more)

### Community 79 - "@angular/material"
Cohesion: 0.22
Nodes (8): @angular/material, ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, ModalMessageModel

### Community 80 - "DocumentsComponent"
Cohesion: 0.16
Nodes (6): DocumentsComponent, Component, DocumentsFileService, Injectable, Inject, Optional

### Community 81 - "teachers.component.ts"
Cohesion: 0.12
Nodes (27): src_app_common_index_uploadsizeerror, src_app_common_index_userstateservice, Editing, GradeIssue, src_app_repositories_teachers_form_index_formcomponent, DEFAULT_MIN_PERCENT, SubjectMatches, TeacherResult (+19 more)

### Community 82 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 83 - "planned-schedules.component.ts"
Cohesion: 0.07
Nodes (12): xlsx, src_app_common_global_period_index_globalperiodservice, src_app_common_semester_index_semesters, src_app_common_semester_index_semestervm, SEMESTERS, SemesterVM, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfig, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfigmodalcomponent (+4 more)

### Community 84 - "DocumentService"
Cohesion: 0.17
Nodes (6): DocumentService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "TeacherPickerComponent"
Cohesion: 0.19
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "@angular/forms"
Cohesion: 0.07
Nodes (23): @angular/forms, @angular/platform-browser, @angular/router, ref_recovery_password_service, AuthModule, NgModule, AuthRoutingModule, routes (+15 more)

### Community 88 - "find-setting.service.ts"
Cohesion: 0.14
Nodes (9): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, FindSettingService (+1 more)

### Community 89 - "schools.module.ts"
Cohesion: 0.09
Nodes (19): src_app_common_index_listcomponentservice, src_app_repositories_schools_form_index_formcomponent, src_app_repositories_schools_model_index_rowactionschool, SchoolsComponent, Component, SchoolsModule, NgModule, routes (+11 more)

### Community 90 - "FormComponent"
Cohesion: 0.20
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
Cohesion: 0.21
Nodes (4): isValidDemandConfig(), SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "FormComponent"
Cohesion: 0.17
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 98 - "departments/index.ts"
Cohesion: 0.12
Nodes (9): src_app_common_index_rowoptionvm, DepartmentsComponent, Component, routes, src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_schoolvm, RowActionUser, delete (+1 more)

### Community 99 - "FormComponent"
Cohesion: 0.21
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "sections-manage.component.ts"
Cohesion: 0.16
Nodes (15): src_app_common_index_computecoverage, src_app_common_index_sections_load_panel_key, src_app_common_index_stateservice, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemanddialogcomponent, src_app_common_index_subjectdemanddialogdata, src_app_common_index_subjectdemandstoreservice, src_app_common_index_subjectdemandsummary (+7 more)

### Community 101 - "GetDepartmentsService"
Cohesion: 0.12
Nodes (9): CareerMemoryService, Injectable, src_app_repositories_careers_model_index_careeritemvm, DeleteCareerService, Injectable, GetCareersService, Injectable, GetDepartmentsService (+1 more)

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "UserItemVM"
Cohesion: 0.16
Nodes (15): src_app_common_memory_repository_index_basequery, src_app_repositories_departments_index_department2departmentvm, src_app_repositories_schools_index_school2schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_users_mappers_index_user2useritemvm, src_app_repositories_users_mappers_index_user2uservm, User2UserItemVM(), User2UserVM() (+7 more)

### Community 105 - "SubjectVM"
Cohesion: 0.18
Nodes (10): src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_model_index_subjectbasequery, src_app_repositories_subjects_model_index_subjectitemvm, SubjectBaseQuery, SubjectItemVM, SubjectVM (+2 more)

### Community 106 - "src_app_common_memory_repository_index_usecase"
Cohesion: 0.12
Nodes (11): src_app_common_memory_repository_index_usecase, src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_memory_index_subjectmemoryservice, SubjectMemoryService, Injectable, CreateSubjectService, Injectable, DeleteSubjectService (+3 more)

### Community 107 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.19
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 109 - "FormComponent"
Cohesion: 0.20
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

### Community 113 - "admin-routing.module.ts"
Cohesion: 0.32
Nodes (5): AdminRoutingModule, routes, NgModule, Component, WelcomeComponent

### Community 114 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 115 - "documents/form/form.component.ts"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Input, Output, src_app_repositories_documents_model_index_typedocument

### Community 116 - "FormComponent"
Cohesion: 0.20
Nodes (4): FormComponent, Component, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 119 - "TeacherAcademicService"
Cohesion: 0.08
Nodes (9): AcademicComponent, fullName(), normalize(), Component, ProfileComponent, Component, Inject, TeacherAcademicService (+1 more)

### Community 120 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

### Community 121 - "repositories/profile/profile.module.ts"
Cohesion: 0.27
Nodes (7): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule

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

### Community 131 - "ClassroomType"
Cohesion: 0.33
Nodes (5): CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

### Community 132 - "UserMemoryService"
Cohesion: 0.09
Nodes (12): ref_admin_sdk, src_app_repositories_users_memory_index_usersmemoryservice, Injectable, UserMemoryService, CreateUserService, Injectable, DeleteUserService, Injectable (+4 more)

### Community 133 - "FormComponent"
Cohesion: 0.17
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 134 - "GradeSearchComponent"
Cohesion: 0.12
Nodes (8): GradeSearchComponent, groupByTeacher(), normalize(), Component, Inject, Optional, TeacherAcademicModule, NgModule

### Community 135 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 136 - "subject-demands.component.ts"
Cohesion: 0.12
Nodes (13): src_app_common_subject_demand_index_subjectdemandstoreservice, MAX_UPLOAD_SIZE, uploadSizeError(), ImportDemandComponent, Component, Inject, SubjectDemandsModule, NgModule (+5 more)

### Community 137 - "TeacherItemVM"
Cohesion: 0.16
Nodes (6): TeacherBaseQuery, TeacherItemVM, TeachersComponent, Component, FindTeacherService, Injectable

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

### Community 142 - "subject-demand.module.ts"
Cohesion: 0.24
Nodes (6): SubjectDemandDialogComponent, SubjectDemandDialogData, Component, Inject, SubjectDemandModule, NgModule

### Community 143 - "schedules.service.ts"
Cohesion: 0.06
Nodes (40): src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable, src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm (+32 more)

### Community 144 - "SchoolMemoryService"
Cohesion: 0.11
Nodes (9): src_app_common_index_memoryrepository, SchoolMemoryService, Injectable, CreateSchoolService, Injectable, DeleteSchoolService, Injectable, GetSchoolsService (+1 more)

### Community 145 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 146 - "TeacherVM"
Cohesion: 0.16
Nodes (14): Inject, src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, Teacher2TeacherItemVM(), Teacher2TeacherVM(), TeacherVM2TeacherDto(), src_app_repositories_teachers_model_index_teacheritemvm, src_app_repositories_teachers_model_index_teachervm (+6 more)

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
Cohesion: 0.16
Nodes (4): GlobalPeriodModule, NgModule, GlobalPeriodService, Injectable

### Community 153 - "student-schedules/use-cases/index.ts"
Cohesion: 0.11
Nodes (4): CloseInscriptionService, Injectable, DeleteInscriptionService, Injectable

### Community 154 - "common/index.ts"
Cohesion: 0.20
Nodes (11): ref_dashboard_sdk, src_app_common_index_basequery, src_app_common_index_usecase, BaseQuery, src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodItemVM(), Period2PeriodVM() (+3 more)

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

### Community 163 - "FormControlErrorsDirective"
Cohesion: 0.16
Nodes (7): FormControlErrorsDirective, FormControlTestComponent, Component, Directive, HostListener, Inject, Optional

### Community 164 - "UserStateService"
Cohesion: 0.11
Nodes (9): LoginService, Injectable, HttpInterceptorInterceptor, Injectable, DEMAND_PREFERENCE_KEYS, src_app_common_user_state_models_index_userstatevm, UserStateVM, Injectable (+1 more)

### Community 165 - "periods.module.ts"
Cohesion: 0.16
Nodes (14): src_app_common_index_statemodule, src_app_repositories_periods_form_index_formcomponent, src_app_repositories_periods_model_index_rowactionperiod, PeriodsRoutingModule, routes, NgModule, PeriodsService, Injectable (+6 more)

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
Cohesion: 0.09
Nodes (15): src_app_repositories_sections_index_section2sectionitemvm, src_app_repositories_sections_index_sectionbasequery, src_app_repositories_sections_index_sectionitemvm, src_app_repositories_sections_index_sectionmemoryservice, SectionBaseQuery, SectionItemVM, GetSectionsService, Injectable (+7 more)

### Community 179 - "careers/model/index.ts"
Cohesion: 0.43
Nodes (3): RowActionCareer, delete, update

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

### Community 190 - "DepartmentItemVM"
Cohesion: 0.12
Nodes (12): Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentvm, DepartmentBaseQuery, DepartmentItemVM, DepartmentVM, RowActionDepartment, delete (+4 more)

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.10
Nodes (18): LevelBar, SubjectDemandPanelComponent, Component, Input, attendedByLevel(), CoverageStatus, DEFAULT_DEMAND_CONFIG, DEFAULT_DEMAND_FACTOR (+10 more)

### Community 195 - "find-career.service.ts"
Cohesion: 0.15
Nodes (5): src_app_repositories_careers_mappers_index_career2careervm, CareerBaseQuery, src_app_repositories_careers_model_index_careerbasequery, FindCareerService, Injectable

### Community 196 - "subjects/model/index.ts"
Cohesion: 0.43
Nodes (3): RowActionSubject, delete, update

### Community 207 - "login.module.ts"
Cohesion: 0.14
Nodes (5): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewModule, NgModule

### Community 212 - "PeriodVM"
Cohesion: 0.14
Nodes (8): PeriodItemVM, PeriodVM, RowActionPeriod, delete, setActive, update, PeriodsComponent, Component

## Knowledge Gaps
- **539 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+534 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1439 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **28 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `periods/form/form.component.ts`, `teachers.module.ts`, `admin.component.ts`, `get-documents.service.ts`, `UserMemoryService`, `statistics.service.ts`, `VersionInfoComponent`, `CareerItemVM`, `subject-demands.component.ts`, `TeacherItemVM`, `finished.component.ts`, `SchedulesService`, `schedules.service.ts`, `StateService`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `SchoolMemoryService`, `memory-repository/index.ts`, `sections.service.ts`, `TeacherVM`, `teacher.service.ts`, `SelectExComponent`, `GlobalPeriodService`, `common/index.ts`, `careers.module.ts`, `find-section.service.ts`, `student-schedules.service.ts`, `student-schedules/use-cases/index.ts`, `sign-up.service.ts`, `FormComponent`, `UserStateService`, `periods.module.ts`, `app.module.ts`, `subjects.service.ts`, `departments.module.ts`, `DayVM`, `classrooms.module.ts`, `SectionItemVM`, `periods/use-cases/index.ts`, `settings.module.ts`, `RowOptionVM`, `ClassroomVM`, `url-access-guard.guard.ts`, `DepartmentItemVM`, `create-document.service.ts`, `subject-demand-store.service.ts`, `find-career.service.ts`, `UseCase`, `users/form/form.component.ts`, `SchoolItemVM`, `users.service.ts`, `schedules.component.ts`, `@angular/material`, `teachers.component.ts`, `FormComponent`, `planned-schedules.component.ts`, `@angular/forms`, `find-setting.service.ts`, `schools.module.ts`, `FormComponent`, `sections-manage.component.ts`, `GetDepartmentsService`, `UserItemVM`, `SubjectVM`, `src_app_common_memory_repository_index_usecase`, `documents/form/form.component.ts`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **Why does `Configuration` connect `rxjs` to `statistics.service.ts`, `ScheduleService`, `DefaultService`, `teacher.service.ts`, `AuthService`, `ApiModule`, `PeriodService`, `SchoolService`, `SectionService`, `DayService`, `TeacherDegreeService`, `AuditService`, `InscriptionService`, `DocumentService`, `SubjectDemandService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`, `UserService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `@angular/material` connect `@angular/material` to `periods/form/form.component.ts`, `teachers.module.ts`, `admin.component.ts`, `GradeSearchComponent`, `VersionInfoComponent`, `subject-demands.component.ts`, `SchedulesService`, `subject-demand.module.ts`, `schedules.service.ts`, `StateService`, `users.service.ts`, `package.json`, `sections.service.ts`, `SelectExComponent`, `student-schedules.service.ts`, `careers.module.ts`, `FormComponent`, `subjects.service.ts`, `periods.module.ts`, `app.module.ts`, `departments.module.ts`, `classrooms.module.ts`, `settings.module.ts`, `RowOptionVM`, `documents.module.ts`, `academic.module.ts`, `users/form/form.component.ts`, `schedules.component.ts`, `ref_angular_core`, `teachers.component.ts`, `FormComponent`, `planned-schedules.component.ts`, `TeacherPickerComponent`, `@angular/forms`, `schools.module.ts`, `sections-manage.component.ts`, `documents/form/form.component.ts`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _539 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07183673469387755 - nodes in this community are weakly interconnected._
- **Should `admin.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12333333333333334 - nodes in this community are weakly interconnected._
- **Should `get-documents.service.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1010752688172043 - nodes in this community are weakly interconnected._