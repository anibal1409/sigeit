# Graph Report - sigeit  (2026-09-29)

## Corpus Check
- 965 files · ~168,241 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 69 file(s) not represented in the graph (top: .scss 55, (none) 11, .mdc 1)

## Summary
- 3939 nodes · 10169 edges · 207 communities (171 shown, 36 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 324 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2722a42f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- common/index.ts
- teachers.component.ts
- @angular/material
- schedules.service.ts
- rxjs
- StudentSchedulesComponent
- models.ts
- statistics.service.ts
- ref_angular_common
- ref_angular_core
- schedule.service.ts
- error-handler.module.ts
- student-schedules.service.ts
- SchedulesService
- UserStateService
- users.service.ts
- settings.module.ts
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- periods/form/form.component.ts
- MemoryRepository
- sections.service.ts
- users/form/form.component.ts
- SectionVM
- SelectExComponent
- PlannedSchedulesComponent
- classrooms.component.ts
- careers.module.ts
- ScheduleItemVM
- CareerItemVM
- Configuration
- AuthService
- TogglePasswordViewComponent
- sign-up.service.ts
- FormComponent
- subjects.service.ts
- create-school.service.ts
- app.module.ts
- dependencies
- documents/form/form.component.ts
- ScheduleComponent
- schedules/form/form.component.ts
- 📱 Sistema de Visualización de Versión - SIGEIT
- documents.module.ts
- PeriodVM
- 📋 Gestión de Versiones - SIGEIT
- PeriodService
- AcademicChargeTeacherComponent
- devDependencies
- school.service.ts
- SectionService
- logger.service.ts
- SubjectDemandStoreService
- schedules/index.ts
- SectionsOverviewComponent
- Changelog
- scripts
- TableService
- InscriptionVM
- DayService
- academic.module.ts
- GetDepartmentsService
- create-document.service.ts
- SchedulesComponent
- production
- teacher.service.ts
- departments/index.ts
- SubjectVM
- AuditService
- InscriptionService
- admin.component.ts
- documents.component.ts
- SchoolItemVM
- SectionsComponent
- Componente de Vista General de Secciones
- subject-demand-store.service.ts
- departments.module.ts
- departments/model/index.ts
- UserService
- SectionItemVM
- FormComponent
- ReportConfigModalComponent
- DocumentService
- SubjectDemandService
- auth.module.ts
- users.component.ts
- classrooms.module.ts
- schools.component.ts
- FormComponent
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- subject-demands.component.ts
- VersionService
- FormComponent
- CreateDocumentService
- FormComponent
- GlobalPeriodService
- app-routing.module.ts
- LoginComponent
- Sistema de Período Académico Global
- schools.module.ts
- TableComponent
- CreateClassroomService
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- VersionInfoComponent
- DepartmentItemVM
- FormComponent
- FormComponent
- auditoria
- reset-password.component.ts
- ListComponentService
- StudentSchedulesService
- profile.module.ts
- CardSubjectSchedulesComponent
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
- AdminComponent
- login.service.ts
- SubjectDemandsService
- VersionDisplayComponent
- SubjectsComponent
- build
- development
- @
- @
- StateModule
- BulkAcademicChargeModalComponent
- SubjectDemandsComponent
- subjects.component.ts
- TeachersComponent
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- admin-routing.module.ts
- HttpInterceptorInterceptor
- PeriodsComponent
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- login.component.spec.ts
- RecoveryPasswordComponent
- url-access-guard.guard.ts
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
- ClassroomsService
- api-interfaces/src/index.ts
- api-interfaces/ng-package.json
- dashboard-sdk/ng-package.json
- error-handler/ng-package.json
- form-control-errors/ng-package.json
- http-form-data-client/ng-package.json
- logger/ng-package.json
- login/ng-package.json
- toast/ng-package.json
- profile.service.ts
- RemoveSectionService
- .eslintrc.json
- ng-package.json
- array-validator.directive.ts
- FindDepartmentService
- GenerateReportService
- lib/public-api.ts
- .constructor
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 163 edges
2. `UseCase` - 134 edges
3. `StudentSchedulesComponent` - 74 edges
4. `@angular/material` - 73 edges
5. `@angular/forms` - 61 edges
6. `UserStateService` - 59 edges
7. `StateService` - 58 edges
8. `ScheduleItemVM` - 49 edges
9. `DepartmentItemVM` - 47 edges
10. `Configuration` - 46 edges

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

## Communities (207 total, 36 thin omitted)

### Community 0 - "common/index.ts"
Cohesion: 0.06
Nodes (33): src_app_common_index_basequery, src_app_common_index_statemodule, src_app_common_index_tablemodule, src_app_common_index_usecase, BaseQuery, CareerBaseQuery, src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_mappers_index_period2periodvm (+25 more)

### Community 1 - "teachers.component.ts"
Cohesion: 0.06
Nodes (37): Inject, src_app_repositories_teachers_form_index_formcomponent, src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, Teacher2TeacherItemVM(), src_app_repositories_teachers_memory_index_teachermemoryservice, TeacherMemoryService, Injectable, src_app_repositories_teachers_model_index_rowactionteacher (+29 more)

### Community 2 - "@angular/material"
Cohesion: 0.06
Nodes (44): @angular/forms, @angular/material, @angular/router, src_app_common_confirm_modal_index_confirmmodalcomponent, src_app_common_index_confirmmodalcomponent, src_app_common_index_semesters, src_app_common_index_semestervm, src_app_common_semester_index_semesters (+36 more)

### Community 3 - "schedules.service.ts"
Cohesion: 0.05
Nodes (45): src_app_common_subject_demand_index_subjectdemandmodule, src_app_common_table_index_tablemodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable (+37 more)

### Community 4 - "rxjs"
Cohesion: 0.09
Nodes (32): ref_dashboard_sdk, rxjs, src_app_common_memory_repository_index_basequery, src_app_common_memory_repository_index_usecase, src_app_common_memory_repository_models_index_paginationstatus, UseCase, src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, src_app_repositories_classrooms_memory_index_classroomsmemoryservice (+24 more)

### Community 6 - "models.ts"
Cohesion: 0.06
Nodes (40): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDocumentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+32 more)

### Community 7 - "statistics.service.ts"
Cohesion: 0.05
Nodes (33): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, StatisticsService, Injectable, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CurriculumSemesterStatItemDto (+25 more)

### Community 8 - "ref_angular_common"
Cohesion: 0.11
Nodes (26): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+18 more)

### Community 9 - "ref_angular_core"
Cohesion: 0.05
Nodes (9): ref_angular_core, src_app_repositories_careers_mappers_index_career2careeritemvm, src_app_repositories_careers_mappers_index_career2careervm, CareerMemoryService, Injectable, src_app_repositories_careers_memory_index_careermemoryservice, src_app_repositories_careers_model_index_careerbasequery, src_app_repositories_careers_model_index_careeritemvm (+1 more)

### Community 10 - "schedule.service.ts"
Cohesion: 0.07
Nodes (28): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ScheduleService, Injectable, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus (+20 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "student-schedules.service.ts"
Cohesion: 0.06
Nodes (29): src_app_common_index_selectexmodule, src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectsmodule, src_app_student_schedules_card_section_schedules_index_cardsectionschedulescomponent, src_app_student_schedules_card_subject_schedules_index_cardsubjectschedulescomponent (+21 more)

### Community 13 - "SchedulesService"
Cohesion: 0.08
Nodes (11): ClassroomsSchedulesComponent, Component, Input, Intervals, ScheduleComponent, Component, Input, SchedulesService (+3 more)

### Community 14 - "UserStateService"
Cohesion: 0.07
Nodes (18): AdminService, Injectable, AppComponent, Component, src_app_common_index_computecoverage, src_app_common_index_stateservice, src_app_common_index_subjectdemandstoreservice, src_app_common_index_subjectdemandsummary (+10 more)

### Community 15 - "users.service.ts"
Cohesion: 0.07
Nodes (24): ref_admin_sdk, GetCareersService, Injectable, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_memory_index_usersmemoryservice, CreateUserService, Injectable, DeleteUserService (+16 more)

### Community 16 - "settings.module.ts"
Cohesion: 0.07
Nodes (20): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, SettingsComponent (+12 more)

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.08
Nodes (19): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, FormControlTestComponent, Component (+11 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (41): engines, node, @angular/common, @angular/core, tslib, name, private, version (+33 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "periods/form/form.component.ts"
Cohesion: 0.07
Nodes (22): ref_toast, FormComponent, Component, Inject, Input, Output, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value (+14 more)

### Community 21 - "MemoryRepository"
Cohesion: 0.06
Nodes (11): src_app_common_index_memoryrepository, src_app_common_memory_repository_index_memoryrepository, Optional, MemoryRepository, PaginationStatus, ClassroomsMemoryService, Injectable, SubjectMemoryService (+3 more)

### Community 22 - "sections.service.ts"
Cohesion: 0.08
Nodes (21): src_app_common_index_subjectdemandmodule, TableModule, NgModule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_model_index_sectionbasequery, src_app_repositories_sections_sections_overview_index_sectionsoverviewcomponent (+13 more)

### Community 23 - "users/form/form.component.ts"
Cohesion: 0.08
Nodes (24): src_app_repositories_departments_index_department2departmentvm, src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_school2schoolvm, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_teachers_index_teachervm, Inject, User2UserVM() (+16 more)

### Community 24 - "SectionVM"
Cohesion: 0.11
Nodes (20): src_app_repositories_sections_mappers_index_section2sectionitemvm, src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_sections_memory_index_sectionmemoryservice, SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm (+12 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.08
Nodes (9): @angular/cdk, NormalizeWords(), searchCallback(), SelectExComponent, Component, Input, ViewChild, SelectExModule (+1 more)

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.11
Nodes (4): Group, PlannedSchedulesComponent, Component, ReportConfig

### Community 27 - "classrooms.component.ts"
Cohesion: 0.10
Nodes (18): lodash, src_app_repositories_classrooms_form_index_formcomponent, Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), ClassroomBaseQuery, ClassroomItemVM, ClassroomVM, src_app_repositories_classrooms_model_index_classroom_types (+10 more)

### Community 28 - "careers.module.ts"
Cohesion: 0.10
Nodes (15): src_app_common_index_optionaction, CareersComponent, Component, CareersRoutingModule, routes, NgModule, CareersService, Injectable (+7 more)

### Community 29 - "ScheduleItemVM"
Cohesion: 0.12
Nodes (11): src_app_repositories_classrooms_mappers_index_classroom2classroomvm, Day2DayVM(), Schedule2ScheduleItemVM(), Schedule2ScheduleVM(), DayVM, RowActionSchedule, delete, update (+3 more)

### Community 30 - "CareerItemVM"
Cohesion: 0.10
Nodes (15): Career2CareerItemVM(), Career2CareerVM(), CareerItemVM, CareerVM, RowActionCareer, delete, update, CreateCareerService (+7 more)

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "sign-up.service.ts"
Cohesion: 0.09
Nodes (11): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_auth_use_cases_index_createuserstudentservice, src_app_repositories_careers_index_careeritemvm (+3 more)

### Community 35 - "FormComponent"
Cohesion: 0.11
Nodes (5): clashHtml(), FormComponent, Component, Input, Output

### Community 36 - "subjects.service.ts"
Cohesion: 0.11
Nodes (18): src_app_repositories_careers_index_getcareersservice, SubjectsService, Injectable, CreateSubjectService, Injectable, DeleteSubjectService, Injectable, FindSubjectService (+10 more)

### Community 37 - "create-school.service.ts"
Cohesion: 0.11
Nodes (13): src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_memory_index_schoolmemoryservice, SchoolMemoryService, Injectable, src_app_repositories_schools_model_index_schoolitemvm, CreateSchoolService, Injectable, DeleteSchoolService (+5 more)

### Community 38 - "app.module.ts"
Cohesion: 0.08
Nodes (22): @angular/platform-browser-dynamic, ref_error_handler, ref_http_form_data_client, AppModule, NgModule, GlobalPeriodModule, NgModule, src_app_common_global_period_index_globalperiodmodule (+14 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "documents/form/form.component.ts"
Cohesion: 0.15
Nodes (14): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), Document2DocumentVM(), DocumentBaseQuery, DocumentItemVM, DocumentVM, src_app_repositories_documents_model_index_typedocument, RowActionDocument (+6 more)

### Community 41 - "ScheduleComponent"
Cohesion: 0.10
Nodes (9): FinishedComponent, Component, src_app_student_schedules_finished_index_finishedcomponent, src_app_student_schedules_schedule_index_schedulecomponent, ScheduleComponent, Component, routes, StudentSchedulesRoutingModule (+1 more)

### Community 42 - "schedules/form/form.component.ts"
Cohesion: 0.11
Nodes (13): moment, ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, ModalMessageModel (+5 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "documents.module.ts"
Cohesion: 0.15
Nodes (13): src_app_common_memory_repository_index_listcomponentservice, DocumentsModule, NgModule, DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice (+5 more)

### Community 45 - "PeriodVM"
Cohesion: 0.13
Nodes (5): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable, PeriodVM

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "PeriodService"
Cohesion: 0.11
Nodes (10): PeriodService, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponsePeriodDto (+2 more)

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

### Community 53 - "SubjectDemandStoreService"
Cohesion: 0.13
Nodes (7): SubjectDemandPanelComponent, Component, Input, computeCoverage(), SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 54 - "schedules/index.ts"
Cohesion: 0.09
Nodes (9): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_index_scheduleitemvm, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, PlanningAuditComponent, Component, routes, SchedulesRoutingModule (+1 more)

### Community 55 - "SectionsOverviewComponent"
Cohesion: 0.16
Nodes (3): Group, SectionsOverviewComponent, Component

### Community 56 - "Changelog"
Cohesion: 0.09
Nodes (21): 0.0.1 (2025-09-21), 0.0.2 (2025-09-21), 0.0.3 (2025-09-21), ✨ Características, ✨ Características, ✨ Características, ✨ Características, Changelog (+13 more)

### Community 57 - "scripts"
Cohesion: 0.09
Nodes (22): scripts, build, build-error-handler, build:prod, build-projects, build:versioned, changelog, dashboard-sdk (+14 more)

### Community 58 - "TableService"
Cohesion: 0.19
Nodes (9): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl(), TableService (+1 more)

### Community 59 - "InscriptionVM"
Cohesion: 0.16
Nodes (8): src_app_repositories_users_index_useritemvm, InscriptionBaseQuery, InscriptionVM, StageInscription, Registered, Validated, Injectable, UpdateInscriptionService

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "academic.module.ts"
Cohesion: 0.12
Nodes (17): src_app_common_state_index_statemodule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule, routes, NgModule (+9 more)

### Community 62 - "GetDepartmentsService"
Cohesion: 0.13
Nodes (9): DepartmentsMemoryService, Injectable, src_app_repositories_departments_model_index_departmentitemvm, DeleteDepartmentService, Injectable, GetDepartmentsService, Injectable, Injectable (+1 more)

### Community 63 - "create-document.service.ts"
Cohesion: 0.16
Nodes (8): src_app_repositories_documents_mappers_index_document2documentitemvm, src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_memory_index_memorydocumentsservice, MemoryDocumentsService, Injectable, src_app_repositories_documents_model_index_documentbasequery, src_app_repositories_documents_model_index_documentitemvm, src_app_repositories_documents_model_index_documentvm

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "teacher.service.ts"
Cohesion: 0.16
Nodes (9): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Inject, Injectable, Optional, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseTeacherDto (+1 more)

### Community 67 - "departments/index.ts"
Cohesion: 0.13
Nodes (10): DepartmentsComponent, Component, DepartmentsRoutingModule, routes, NgModule, src_app_repositories_departments_form_index_formcomponent, src_app_repositories_departments_model_index_rowactiondepartment, RowActionDepartment (+2 more)

### Community 68 - "SubjectVM"
Cohesion: 0.21
Nodes (7): Subject2SubjectVM(), RowActionSubject, delete, update, SubjectBaseQuery, SubjectItemVM, SubjectVM

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "admin.component.ts"
Cohesion: 0.15
Nodes (11): AdminModule, NgModule, src_app_admin_data_index_menu, MENU, src_app_admin_models_index_optionmenu, src_app_common_global_period_index_globalperiodservice, src_app_common_user_state_index_userstatevm, src_app_common_version_index_versiondisplaycomponent (+3 more)

### Community 72 - "documents.component.ts"
Cohesion: 0.13
Nodes (10): src_app_common_table_index_optionaction, src_app_common_table_index_tabledatavm, src_app_common_table_index_tableservice, DocumentsComponent, Component, DocumentsFileService, Injectable, Inject (+2 more)

### Community 73 - "SchoolItemVM"
Cohesion: 0.20
Nodes (7): src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), SchoolItemVM, SchoolVM, FindSchoolService, Injectable

### Community 74 - "SectionsComponent"
Cohesion: 0.16
Nodes (7): SectionsComponent, Component, HostBinding, Inject, Input, Optional, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "subject-demand-store.service.ts"
Cohesion: 0.14
Nodes (14): chart.js, ng2-charts, SubjectDemandModule, NgModule, CoverageStatus, DEFAULT_DEMAND_FACTOR, DEMAND_FACTOR_KEY, DEMAND_PREFERENCE_KEYS (+6 more)

### Community 77 - "departments.module.ts"
Cohesion: 0.20
Nodes (10): DepartmentsService, Injectable, src_app_repositories_departments_memory_index_departmentsmemoryservice, src_app_repositories_departments_use_cases_index_createdepartmentservice, src_app_repositories_departments_use_cases_index_deletedepartmentservice, src_app_repositories_departments_use_cases_index_finddepartmentservice, src_app_repositories_departments_use_cases_index_getdepartmentsservice, src_app_repositories_departments_use_cases_index_updatedepartmentservice (+2 more)

### Community 78 - "departments/model/index.ts"
Cohesion: 0.22
Nodes (8): Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentitemvm, src_app_repositories_departments_mappers_index_department2departmentvm, src_app_repositories_departments_model_index_departmentbasequery, src_app_repositories_departments_model_index_departmentvm, CreateDepartmentService, Injectable

### Community 79 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 81 - "SectionItemVM"
Cohesion: 0.19
Nodes (9): RowActionSection, delete, update, SectionBaseQuery, SectionItemVM, src_app_repositories_subjects_index_subjectitemvm, CardSectionSchedulesComponent, Component (+1 more)

### Community 82 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 83 - "ReportConfigModalComponent"
Cohesion: 0.12
Nodes (3): ReportConfigModalComponent, Component, Inject

### Community 84 - "DocumentService"
Cohesion: 0.17
Nodes (6): DocumentService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "auth.module.ts"
Cohesion: 0.18
Nodes (10): AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent, src_app_auth_login_index_loginservice, src_app_auth_recovery_password_index_recoverypasswordcomponent, src_app_auth_reset_password_index_resetpasswordcomponent, src_app_auth_sign_up_index_signupcomponent (+2 more)

### Community 87 - "users.component.ts"
Cohesion: 0.16
Nodes (8): src_app_common_index_tabledatavm, src_app_common_index_tableservice, src_app_repositories_users_form_index_formcomponent, src_app_repositories_users_model_index_rowactionuser, Component, UsersComponent, Injectable, UsersService

### Community 88 - "classrooms.module.ts"
Cohesion: 0.21
Nodes (11): ClassroomsRoutingModule, routes, NgModule, GetClassroomsService, Injectable, src_app_repositories_classrooms_use_cases_index_createclassroomservice, src_app_repositories_classrooms_use_cases_index_deleteclassroomservice, src_app_repositories_classrooms_use_cases_index_findclassroomservice (+3 more)

### Community 89 - "schools.component.ts"
Cohesion: 0.17
Nodes (7): src_app_repositories_schools_form_index_formcomponent, src_app_repositories_schools_model_index_rowactionschool, SchoolsComponent, Component, routes, SchoolsRoutingModule, NgModule

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

### Community 95 - "subject-demands.component.ts"
Cohesion: 0.20
Nodes (8): src_app_common_subject_demand_index_subjectdemandstoreservice, ImportDemandComponent, Component, SubjectDemandsModule, NgModule, routes, SubjectDemandsRoutingModule, NgModule

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 98 - "CreateDocumentService"
Cohesion: 0.13
Nodes (8): CreateDocumentService, Injectable, DeleteDocumentService, Injectable, FindDocumentService, Injectable, Injectable, UpdateDocumentService

### Community 99 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 101 - "app-routing.module.ts"
Cohesion: 0.16
Nodes (7): AppRoutingModule, routes, NgModule, AuthGuard, Injectable, AuthLoginGuard, Injectable

### Community 102 - "LoginComponent"
Cohesion: 0.16
Nodes (4): LoginComponent, Component, LoginService, Injectable

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "schools.module.ts"
Cohesion: 0.24
Nodes (8): src_app_common_index_listcomponentservice, SchoolsService, Injectable, src_app_repositories_schools_use_cases_index_createschoolservice, src_app_repositories_schools_use_cases_index_deleteschoolservice, src_app_repositories_schools_use_cases_index_findschoolservice, src_app_repositories_schools_use_cases_index_getschoolsservice, src_app_repositories_schools_use_cases_index_updateschoolservice

### Community 105 - "TableComponent"
Cohesion: 0.20
Nodes (5): TableComponent, Component, Input, Output, ViewChild

### Community 106 - "CreateClassroomService"
Cohesion: 0.14
Nodes (8): CreateClassroomService, Injectable, DeleteClassroomService, Injectable, FindClassroomService, Injectable, Injectable, UpdateClassroomService

### Community 107 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.21
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 109 - "FormComponent"
Cohesion: 0.24
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

### Community 113 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 114 - "DepartmentItemVM"
Cohesion: 0.29
Nodes (3): DepartmentBaseQuery, DepartmentItemVM, DepartmentVM

### Community 115 - "FormComponent"
Cohesion: 0.23
Nodes (4): FormComponent, Component, Input, Output

### Community 116 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "reset-password.component.ts"
Cohesion: 0.23
Nodes (3): ResetPasswordComponent, Component, passwordMatchValidator()

### Community 120 - "StudentSchedulesService"
Cohesion: 0.27
Nodes (3): SavedSchedule, StudentSchedulesService, Injectable

### Community 121 - "profile.module.ts"
Cohesion: 0.27
Nodes (7): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule

### Community 122 - "CardSubjectSchedulesComponent"
Cohesion: 0.18
Nodes (4): CardSubjectSchedulesComponent, Component, Input, Output

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
Cohesion: 0.27
Nodes (5): src_app_common_index_rowoptionvm, src_app_repositories_schools_model_index_schoolvm, RowActionSchool, delete, update

### Community 132 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 133 - "AdminComponent"
Cohesion: 0.27
Nodes (3): AdminComponent, Component, optionMenu

### Community 135 - "SubjectDemandsService"
Cohesion: 0.20
Nodes (3): Inject, SubjectDemandsService, Injectable

### Community 136 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

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

### Community 142 - "StateModule"
Cohesion: 0.28
Nodes (6): StateComponent, Component, HostBinding, Input, StateModule, NgModule

### Community 143 - "BulkAcademicChargeModalComponent"
Cohesion: 0.25
Nodes (3): BulkAcademicChargeModalComponent, Component, Inject

### Community 145 - "subjects.component.ts"
Cohesion: 0.28
Nodes (5): src_app_repositories_subjects_form_index_formcomponent, src_app_repositories_subjects_model_index_rowactionsubject, routes, SubjectsRoutingModule, NgModule

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

### Community 152 - "admin-routing.module.ts"
Cohesion: 0.32
Nodes (5): AdminRoutingModule, routes, NgModule, Component, WelcomeComponent

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

### Community 162 - "login.component.spec.ts"
Cohesion: 0.38
Nodes (4): @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule

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

### Community 176 - "ClassroomsService"
Cohesion: 0.33
Nodes (3): ClassroomsService, Injectable, Inject

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

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

## Knowledge Gaps
- **524 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+519 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1355 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **36 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `common/index.ts`, `teachers.component.ts`, `@angular/material`, `schedules.service.ts`, `login.service.ts`, `statistics.service.ts`, `ref_angular_common`, `ref_angular_core`, `schedule.service.ts`, `student-schedules.service.ts`, `SchedulesService`, `UserStateService`, `users.service.ts`, `settings.module.ts`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `periods/form/form.component.ts`, `subjects.component.ts`, `sections.service.ts`, `users/form/form.component.ts`, `SectionVM`, `SelectExComponent`, `classrooms.component.ts`, `careers.module.ts`, `sign-up.service.ts`, `url-access-guard.guard.ts`, `create-school.service.ts`, `subjects.service.ts`, `documents/form/form.component.ts`, `schedules/form/form.component.ts`, `school.service.ts`, `TableService`, `GetDepartmentsService`, `create-document.service.ts`, `teacher.service.ts`, `departments/index.ts`, `admin.component.ts`, `documents.component.ts`, `SchoolItemVM`, `subject-demand-store.service.ts`, `departments.module.ts`, `departments/model/index.ts`, `FormComponent`, `users.component.ts`, `classrooms.module.ts`, `schools.component.ts`, `subject-demands.component.ts`, `app-routing.module.ts`, `schools.module.ts`, `VersionInfoComponent`, `reset-password.component.ts`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `StudentSchedulesComponent` connect `StudentSchedulesComponent` to `@angular/material`, `SubjectVM`, `ScheduleComponent`, `student-schedules.service.ts`, `PeriodVM`, `UserStateService`, `SectionItemVM`, `StudentSchedulesService`, `ScheduleItemVM`, `CareerItemVM`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `CustomHttpParameterCodec` connect `ref_angular_common` to `AuthService`, `teacher.service.ts`, `AuditService`, `InscriptionService`, `statistics.service.ts`, `schedule.service.ts`, `DayService`, `PeriodService`, `UserService`, `school.service.ts`, `SectionService`, `DocumentService`, `DefaultService`, `SubjectDemandService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _524 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `common/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05750350631136045 - nodes in this community are weakly interconnected._
- **Should `teachers.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.056179775280898875 - nodes in this community are weakly interconnected._
- **Should `@angular/material` be split into smaller, more focused modules?**
  _Cohesion score 0.055379746835443035 - nodes in this community are weakly interconnected._