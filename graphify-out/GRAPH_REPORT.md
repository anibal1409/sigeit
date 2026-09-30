# Graph Report - sigeit  (2026-09-30)

## Corpus Check
- 997 files · ~180,858 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 77 file(s) not represented in the graph (top: .scss 63, (none) 11, .mdc 1)

## Summary
- 4182 nodes · 10834 edges · 207 communities (180 shown, 27 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 346 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0ed00e91`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- periods/model/index.ts
- teachers.module.ts
- .setLoading
- admin.component.ts
- src_app_common_memory_repository_index_usecase
- StudentSchedulesComponent
- models.ts
- StatisticsService
- ref_angular_common
- CareerItemVM
- schedule.service.ts
- error-handler.module.ts
- InscriptionVM
- SchedulesService
- StudentSchedulesService
- users.service.ts
- find-setting.service.ts
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- UseCase
- memory-repository/index.ts
- sections.service.ts
- SectionsManageComponent
- SchoolVM
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- careers.module.ts
- SectionVM
- AcademicChargeTeacherComponent
- Configuration
- AuthService
- TogglePasswordViewComponent
- GetCareersService
- FormComponent
- subjects.service.ts
- schedules.service.ts
- app.module.ts
- dependencies
- departments.module.ts
- bulk-academic-charge-modal.component.ts
- schedules/model/index.ts
- 📱 Sistema de Visualización de Versión - SIGEIT
- schedules/use-cases/get-schedules/get-schedules.service.ts
- ClassroomsService
- 📋 Gestión de Versiones - SIGEIT
- period.service.ts
- AcademicChargeTeacherComponent
- devDependencies
- school.service.ts
- SectionService
- logger.service.ts
- active-period.service.ts
- settings.module.ts
- SectionsOverviewComponent
- Changelog
- scripts
- RowOptionVM
- classrooms.module.ts
- DayService
- documents.module.ts
- create-document.service.ts
- SubjectsComponent
- SchedulesComponent
- production
- teacher.service.ts
- teacher-degree.service.ts
- create-section.service.ts
- AuditService
- InscriptionService
- AdminComponent
- sections.component.ts
- SchoolItemVM
- SectionsComponent
- Componente de Vista General de Secciones
- SubjectDemandPanelComponent
- ScheduleItemVM
- ref_angular_core
- @angular/material
- DocumentsComponent
- teachers.component.ts
- FormComponent
- ReportConfigModalComponent
- document.service.ts
- SubjectDemandService
- TeacherPickerComponent
- auth.module.ts
- UserService
- schools.module.ts
- FormComponent
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- SubjectDemandStoreService
- VersionService
- FormComponent
- schedules/index.ts
- FormComponent
- period-comparison-response-dto.ts
- ClassroomVM
- ListComponentService
- Sistema de Período Académico Global
- UserItemVM
- get-classrooms.service.ts
- ClassroomsMemoryService
- classrooms/form/form.component.ts
- FormComponent
- users/form/form.component.ts
- projects
- options
- toast.module.ts
- admin-routing.module.ts
- schools/model/index.ts
- documents/form/form.component.ts
- FormComponent
- auditoria
- SubjectDemandsService
- DegreeFormComponent
- VersionDisplayComponent
- profile.module.ts
- UserStateVM
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- ClassroomType
- FinishedComponent
- FormComponent
- find-document.service.ts
- VersionInfoComponent
- rxjs
- delete-inscription.service.ts
- build
- development
- @
- @
- ScheduleComponent
- create-schedule.service.ts
- get-schools.service.ts
- ToastService
- TeacherItemVM
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- GlobalPeriodService
- create-inscription.service.ts
- BaseQuery
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- CareersComponent
- AppModule
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
- AcademicComponent
- TeacherAcademicService
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
- DepartmentItemVM
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- RecoveryPasswordComponent
- lib/public-api.ts
- classrooms.component.ts
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts
- ProfileComponent
- PeriodVM
- generate-report.service.ts

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 170 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 79 edges
4. `StudentSchedulesComponent` - 74 edges
5. `@angular/forms` - 65 edges
6. `UserStateService` - 63 edges
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

## Communities (207 total, 27 thin omitted)

### Community 0 - "periods/model/index.ts"
Cohesion: 0.13
Nodes (15): src_app_repositories_periods_model_index_periodvm, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, RowActionPeriod, delete, setActive, update (+7 more)

### Community 1 - "teachers.module.ts"
Cohesion: 0.08
Nodes (25): src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, src_app_repositories_teachers_memory_index_teachermemoryservice, TeacherMemoryService, Injectable, src_app_repositories_teachers_model_index_teacherbasequery, TeachersModule, NgModule (+17 more)

### Community 3 - "admin.component.ts"
Cohesion: 0.16
Nodes (10): AdminModule, NgModule, src_app_admin_data_index_menu, MENU, src_app_admin_models_index_optionmenu, src_app_common_user_state_index_userstatevm, src_app_common_version_index_versiondisplaycomponent, src_app_common_version_index_versioninfocomponent (+2 more)

### Community 4 - "src_app_common_memory_repository_index_usecase"
Cohesion: 0.13
Nodes (11): src_app_common_memory_repository_index_usecase, src_app_repositories_documents_mappers_index_document2documentitemvm, src_app_repositories_documents_memory_index_memorydocumentsservice, MemoryDocumentsService, Injectable, DeleteDocumentService, Injectable, GetDocumentsService (+3 more)

### Community 6 - "models.ts"
Cohesion: 0.06
Nodes (40): CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateInscriptionDto (+32 more)

### Community 7 - "StatisticsService"
Cohesion: 0.05
Nodes (26): StatisticsService, Inject, Injectable, Optional, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+18 more)

### Community 8 - "ref_angular_common"
Cohesion: 0.10
Nodes (27): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+19 more)

### Community 9 - "CareerItemVM"
Cohesion: 0.08
Nodes (20): Career2CareerItemVM(), Career2CareerVM(), src_app_repositories_careers_mappers_index_career2careeritemvm, src_app_repositories_careers_mappers_index_career2careervm, CareerMemoryService, Injectable, CareerBaseQuery, CareerItemVM (+12 more)

### Community 10 - "schedule.service.ts"
Cohesion: 0.07
Nodes (25): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ScheduleService, Injectable, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus (+17 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "InscriptionVM"
Cohesion: 0.16
Nodes (9): src_app_repositories_users_index_useritemvm, inscription2InscriptionVM(), InscriptionBaseQuery, InscriptionVM, StageInscription, Registered, Validated, GetInscriptionsService (+1 more)

### Community 13 - "SchedulesService"
Cohesion: 0.07
Nodes (11): ClassroomsSchedulesComponent, Component, Input, DayVM, ScheduleComponent, Component, Input, SchedulesService (+3 more)

### Community 14 - "StudentSchedulesService"
Cohesion: 0.11
Nodes (3): SavedSchedule, StudentSchedulesService, Injectable

### Community 15 - "users.service.ts"
Cohesion: 0.06
Nodes (27): ref_admin_sdk, src_app_common_memory_repository_index_basequery, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, Injectable, UserMemoryService, CreateUserService (+19 more)

### Community 16 - "find-setting.service.ts"
Cohesion: 0.15
Nodes (9): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, FindSettingService (+1 more)

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.09
Nodes (17): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, Directive, HostListener (+9 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (42): engines, node, @angular/common, @angular/core, tslib, name, private, version (+34 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "UseCase"
Cohesion: 0.09
Nodes (14): src_app_common_index_usecase, UseCase, src_app_repositories_periods_mappers_index_period2perioditemvm, PeriodMemoryService, Injectable, src_app_repositories_periods_model_index_perioditemvm, CreatePeriodService, Injectable (+6 more)

### Community 21 - "memory-repository/index.ts"
Cohesion: 0.14
Nodes (3): MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus

### Community 22 - "sections.service.ts"
Cohesion: 0.09
Nodes (25): src_app_common_index_subjectdemandmodule, src_app_common_memory_repository_index_listcomponentservice, SubjectDemandModule, NgModule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_sections_manage_index_sectionsmanagecomponent (+17 more)

### Community 23 - "SectionsManageComponent"
Cohesion: 0.11
Nodes (4): normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "SchoolVM"
Cohesion: 0.31
Nodes (4): Inject, SchoolVM, SchoolsComponent, Component

### Community 25 - "SelectExComponent"
Cohesion: 0.08
Nodes (7): @angular/cdk, NormalizeWords(), searchCallback(), SelectExComponent, Component, Input, ViewChild

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.11
Nodes (4): Group, PlannedSchedulesComponent, Component, ReportConfig

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.05
Nodes (42): SelectExModule, NgModule, src_app_common_state_index_statemodule, StateModule, NgModule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule (+34 more)

### Community 28 - "careers.module.ts"
Cohesion: 0.10
Nodes (19): CareersRoutingModule, routes, NgModule, CareersService, Injectable, src_app_repositories_careers_memory_index_careermemoryservice, src_app_repositories_careers_model_index_careervm, DeleteCareerService (+11 more)

### Community 29 - "SectionVM"
Cohesion: 0.09
Nodes (19): src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_sections_model_index_sectionbasequery, src_app_repositories_sections_model_index_sectionvm, RowActionSection, delete, update (+11 more)

### Community 30 - "AcademicChargeTeacherComponent"
Cohesion: 0.17
Nodes (4): AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "GetCareersService"
Cohesion: 0.09
Nodes (12): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_repositories_careers_index_careeritemvm, GetCareersService (+4 more)

### Community 35 - "FormComponent"
Cohesion: 0.12
Nodes (5): clashHtml(), FormComponent, Component, Input, Output

### Community 36 - "subjects.service.ts"
Cohesion: 0.06
Nodes (30): src_app_common_index_statemodule, src_app_repositories_careers_index_getcareersservice, src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_memory_index_subjectmemoryservice, SubjectMemoryService (+22 more)

### Community 37 - "schedules.service.ts"
Cohesion: 0.07
Nodes (33): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, src_app_repositories_schedules_model_index_intervals, src_app_repositories_schedules_model_index_intervalsselect (+25 more)

### Community 38 - "app.module.ts"
Cohesion: 0.06
Nodes (26): @angular/router, ref_error_handler, ref_http_form_data_client, ref_toast, xlsx, AppRoutingModule, routes, NgModule (+18 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "departments.module.ts"
Cohesion: 0.05
Nodes (35): src_app_common_index_listcomponentservice, src_app_common_index_memoryrepository, src_app_common_index_selectexmodule, src_app_common_index_tablemodule, DepartmentsComponent, Component, DepartmentsRoutingModule, routes (+27 more)

### Community 41 - "bulk-academic-charge-modal.component.ts"
Cohesion: 0.15
Nodes (7): BulkAcademicChargeModalComponent, BulkAcademicChargeModalData, BulkAcademicChargeModalResult, BulkDownloadMode, Component, Inject, src_app_repositories_teachers_index_teacheritemvm

### Community 42 - "schedules/model/index.ts"
Cohesion: 0.12
Nodes (13): Day2DayVM(), src_app_repositories_schedules_mappers_index_day2dayvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm, Schedule2ScheduleItemVM(), Schedule2ScheduleVM(), src_app_repositories_schedules_model_index_dayvm, src_app_repositories_schedules_model_index_schedulevm, RowActionSchedule (+5 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "schedules/use-cases/get-schedules/get-schedules.service.ts"
Cohesion: 0.13
Nodes (9): src_app_repositories_schedules_index_schedule2scheduleitemvm, ScheduleBaseQuery, GetPlannedSchedulesService, Injectable, GetSchedulesService, Injectable, src_app_repositories_schedules_use_cases_get_schedules_index_getschedulesservice, GetSchedulesService (+1 more)

### Community 45 - "ClassroomsService"
Cohesion: 0.13
Nodes (7): ClassroomsService, Injectable, Inject, FindClassroomService, Injectable, Injectable, UpdateClassroomService

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "period.service.ts"
Cohesion: 0.12
Nodes (11): PeriodService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

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

### Community 53 - "active-period.service.ts"
Cohesion: 0.21
Nodes (4): src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodVM(), ToPlanPeriodService, Injectable

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

### Community 59 - "classrooms.module.ts"
Cohesion: 0.12
Nodes (13): ClassroomsModule, NgModule, ClassroomsRoutingModule, routes, NgModule, src_app_repositories_classrooms_memory_index_classroomsmemoryservice, DeleteClassroomService, Injectable (+5 more)

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.15
Nodes (13): src_app_common_table_index_tablemodule, DocumentsModule, NgModule, DocumentsRoutingModule, routes, NgModule, src_app_repositories_documents_form_index_formcomponent, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice (+5 more)

### Community 62 - "create-document.service.ts"
Cohesion: 0.18
Nodes (11): Document2DocumentItemVM(), DocumentBaseQuery, DocumentItemVM, DocumentVM, RowActionDocument, delete, update, TypeDocument (+3 more)

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "teacher.service.ts"
Cohesion: 0.14
Nodes (19): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Injectable, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, HiringEvaluationStatus (+11 more)

### Community 67 - "teacher-degree.service.ts"
Cohesion: 0.09
Nodes (25): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherDegreeService, Injectable, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+17 more)

### Community 68 - "create-section.service.ts"
Cohesion: 0.09
Nodes (11): src_app_repositories_sections_mappers_index_section2sectionitemvm, src_app_repositories_sections_memory_index_sectionmemoryservice, SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm, CreateSectionService, Injectable, RemoveSectionService (+3 more)

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "AdminComponent"
Cohesion: 0.17
Nodes (5): AdminComponent, Component, AdminService, Injectable, optionMenu

### Community 72 - "sections.component.ts"
Cohesion: 0.06
Nodes (31): lodash, src_app_common_index_confirmmodalcomponent, src_app_common_index_optionaction, src_app_common_index_semestervm, src_app_common_index_tabledatavm, src_app_common_index_tableservice, OptionAction, TableDataVM (+23 more)

### Community 73 - "SchoolItemVM"
Cohesion: 0.16
Nodes (9): src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_model_index_schoolitemvm, SchoolItemVM, CreateSchoolService, Injectable, FindSchoolService (+1 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.23
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "SubjectDemandPanelComponent"
Cohesion: 0.21
Nodes (3): SubjectDemandPanelComponent, Component, Input

### Community 77 - "ScheduleItemVM"
Cohesion: 0.15
Nodes (7): ScheduleItemVM, src_app_repositories_schedules_schedule_details_index_scheduledetailscomponent, ScheduleDetailsComponent, Component, Inject, Optional, Output

### Community 78 - "ref_angular_core"
Cohesion: 0.08
Nodes (20): ref_angular_core, HttpInterceptorInterceptor, Injectable, src_app_common_index_semesters, src_app_common_state_index_stateservice, StateComponent, Component, HostBinding (+12 more)

### Community 79 - "@angular/material"
Cohesion: 0.06
Nodes (26): @angular/forms, @angular/material, moment, ArrayValidators, ConfirmModalComponent, Component, Inject, Output (+18 more)

### Community 81 - "teachers.component.ts"
Cohesion: 0.14
Nodes (22): src_app_common_index_uploadsizeerror, src_app_repositories_departments_index_departmentitemvm, Editing, GradeIssue, src_app_repositories_teachers_form_index_formcomponent, src_app_repositories_teachers_model_index_category_options, src_app_repositories_teachers_model_index_dedication_options, src_app_repositories_teachers_model_index_degree_level_options (+14 more)

### Community 82 - "FormComponent"
Cohesion: 0.18
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

### Community 87 - "auth.module.ts"
Cohesion: 0.06
Nodes (24): FormControlTestComponent, Component, @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, AuthRoutingModule, routes (+16 more)

### Community 88 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 89 - "schools.module.ts"
Cohesion: 0.12
Nodes (13): src_app_repositories_schools_memory_index_schoolmemoryservice, SchoolsModule, NgModule, routes, SchoolsRoutingModule, NgModule, SchoolsService, Injectable (+5 more)

### Community 90 - "FormComponent"
Cohesion: 0.15
Nodes (7): FormComponent, Component, Inject, Input, Output, SubjectsService, Injectable

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
Cohesion: 0.20
Nodes (4): isValidDemandConfig(), SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 98 - "schedules/index.ts"
Cohesion: 0.20
Nodes (6): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, routes, SchedulesRoutingModule, NgModule

### Community 99 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "period-comparison-response-dto.ts"
Cohesion: 0.26
Nodes (8): PeriodComparisonDeltaDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodComparisonResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodMetricResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SubjectDemandIncreaseItemDto

### Community 101 - "ClassroomVM"
Cohesion: 0.22
Nodes (11): Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, src_app_repositories_classrooms_mappers_index_classroom2classroomvm, ClassroomItemVM, ClassroomVM, src_app_repositories_classrooms_model_index_classroomitemvm, src_app_repositories_classrooms_model_index_classroomvm (+3 more)

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "UserItemVM"
Cohesion: 0.13
Nodes (17): src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_teachers_index_teachervm, src_app_repositories_users_mappers_index_user2useritemvm, src_app_repositories_users_mappers_index_user2uservm, User2UserItemVM(), User2UserVM(), src_app_repositories_users_model_index_user_roles_value (+9 more)

### Community 105 - "get-classrooms.service.ts"
Cohesion: 0.31
Nodes (4): ClassroomBaseQuery, src_app_repositories_classrooms_model_index_classroombasequery, GetClassroomsService, Injectable

### Community 106 - "ClassroomsMemoryService"
Cohesion: 0.20
Nodes (4): ClassroomsMemoryService, Injectable, CreateClassroomService, Injectable

### Community 107 - "classrooms/form/form.component.ts"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Input, Output, src_app_repositories_classrooms_model_index_classroom_types

### Community 108 - "FormComponent"
Cohesion: 0.22
Nodes (4): FormComponent, Component, Input, Output

### Community 109 - "users/form/form.component.ts"
Cohesion: 0.11
Nodes (14): src_app_repositories_schools_index_schoolitemvm, FormComponent, Component, Inject, Input, Output, src_app_repositories_users_model_index_user_roles, UserRole (+6 more)

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

### Community 114 - "schools/model/index.ts"
Cohesion: 0.17
Nodes (8): src_app_common_index_rowoptionvm, RowActionDepartment, delete, update, src_app_repositories_schools_model_index_schoolvm, RowActionSchool, delete, update

### Community 115 - "documents/form/form.component.ts"
Cohesion: 0.13
Nodes (9): DocumentsFileService, Injectable, FormComponent, Component, Inject, Input, Optional, Output (+1 more)

### Community 116 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "SubjectDemandsService"
Cohesion: 0.16
Nodes (5): Inject, SubjectDemandsComponent, Component, SubjectDemandsService, Injectable

### Community 119 - "DegreeFormComponent"
Cohesion: 0.14
Nodes (5): DegreeFormComponent, normalize(), Component, Input, Output

### Community 120 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

### Community 121 - "profile.module.ts"
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

### Community 131 - "ClassroomType"
Cohesion: 0.33
Nodes (5): CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

### Community 133 - "FormComponent"
Cohesion: 0.17
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 134 - "find-document.service.ts"
Cohesion: 0.19
Nodes (8): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_model_index_documentbasequery, src_app_repositories_documents_model_index_documentitemvm, src_app_repositories_documents_model_index_documentvm, FindDocumentService, Injectable

### Community 135 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 136 - "rxjs"
Cohesion: 0.07
Nodes (31): ref_dashboard_sdk, rxjs, src_app_common_index_computecoverage, src_app_common_index_sections_load_panel_key, src_app_common_index_stateservice, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemanddialogcomponent, src_app_common_index_subjectdemanddialogdata (+23 more)

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

### Community 143 - "create-schedule.service.ts"
Cohesion: 0.09
Nodes (10): src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm, src_app_repositories_schedules_memory_index_schedulememoryservice, ScheduleMemoryService, Injectable, CreateScheduleService, Injectable, DeleteScheduleService, Injectable (+2 more)

### Community 144 - "get-schools.service.ts"
Cohesion: 0.13
Nodes (9): src_app_repositories_schools_mappers_index_school2schoolitemvm, SchoolMemoryService, Injectable, DeleteSchoolService, Injectable, GetSchoolsService, Injectable, Injectable (+1 more)

### Community 145 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 146 - "TeacherItemVM"
Cohesion: 0.10
Nodes (13): src_app_common_memory_repository_index_memoryrepository, Teacher2TeacherItemVM(), TeacherVM2TeacherDto(), RowActionTeacher, academic, delete, profile, update (+5 more)

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

### Community 153 - "create-inscription.service.ts"
Cohesion: 0.09
Nodes (10): src_app_repositories_sections_index_section2sectionitemvm, src_app_repositories_users_index_user2useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, src_app_student_schedules_model_index_inscriptionvm, CreateInscriptionService, Injectable, FindInscriptionService, Injectable (+2 more)

### Community 154 - "BaseQuery"
Cohesion: 0.18
Nodes (5): src_app_common_index_basequery, BaseQuery, Optional, FindPeriodService, Injectable

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

### Community 163 - "AppModule"
Cohesion: 0.50
Nodes (3): @angular/platform-browser-dynamic, AppModule, NgModule

### Community 164 - "UserStateService"
Cohesion: 0.08
Nodes (12): AppComponent, Component, StateService, Injectable, TableService, Injectable, Injectable, UserStateService (+4 more)

### Community 165 - "periods.module.ts"
Cohesion: 0.20
Nodes (12): src_app_repositories_periods_memory_index_periodmemoryservice, PeriodsRoutingModule, routes, NgModule, PeriodsService, Injectable, src_app_repositories_periods_use_cases_index_createperiodservice, src_app_repositories_periods_use_cases_index_deleteperiodservice (+4 more)

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

### Community 176 - "AcademicComponent"
Cohesion: 0.21
Nodes (4): AcademicComponent, fullName(), normalize(), Component

### Community 177 - "TeacherAcademicService"
Cohesion: 0.16
Nodes (4): GradeSearchComponent, Component, TeacherAcademicService, Injectable

### Community 178 - "SectionItemVM"
Cohesion: 0.11
Nodes (12): src_app_repositories_sections_index_sectionbasequery, src_app_repositories_sections_index_sectionitemvm, src_app_repositories_sections_index_sectionmemoryservice, SectionBaseQuery, SectionItemVM, CardSectionSchedulesComponent, Component, Input (+4 more)

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
Cohesion: 0.22
Nodes (6): Department2DepartmentItemVM(), Department2DepartmentVM(), DepartmentBaseQuery, DepartmentItemVM, DepartmentVM, src_app_repositories_schools_index_school2schoolvm

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.16
Nodes (17): LevelBar, attendedByLevel(), computeCoverage(), CoverageStatus, DEFAULT_DEMAND_CONFIG, DEFAULT_DEMAND_FACTOR, DEFAULT_SECTION_CAPACITY, DEMAND_CONFIG_KEY (+9 more)

### Community 198 - "classrooms.component.ts"
Cohesion: 0.27
Nodes (4): ClassroomsComponent, Component, src_app_repositories_classrooms_form_index_formcomponent, src_app_repositories_classrooms_model_index_rowactionclassroom

### Community 208 - "ProfileComponent"
Cohesion: 0.33
Nodes (3): ProfileComponent, Component, Inject

### Community 212 - "PeriodVM"
Cohesion: 0.19
Nodes (5): Period2PeriodItemVM(), PeriodItemVM, PeriodVM, Injectable, UpdatePeriodService

## Knowledge Gaps
- **535 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+530 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1428 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **27 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `periods/model/index.ts`, `teachers.module.ts`, `admin.component.ts`, `src_app_common_memory_repository_index_usecase`, `find-document.service.ts`, `VersionInfoComponent`, `ref_angular_common`, `CareerItemVM`, `schedule.service.ts`, `delete-inscription.service.ts`, `InscriptionVM`, `SchedulesService`, `create-schedule.service.ts`, `get-schools.service.ts`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `UseCase`, `memory-repository/index.ts`, `sections.service.ts`, `find-setting.service.ts`, `users.service.ts`, `SelectExComponent`, `BaseQuery`, `student-schedules.service.ts`, `careers.module.ts`, `SectionVM`, `create-inscription.service.ts`, `GetCareersService`, `UserStateService`, `schedules.service.ts`, `app.module.ts`, `periods.module.ts`, `departments.module.ts`, `subjects.service.ts`, `schedules/model/index.ts`, `schedules/use-cases/get-schedules/get-schedules.service.ts`, `period.service.ts`, `school.service.ts`, `SectionItemVM`, `active-period.service.ts`, `settings.module.ts`, `RowOptionVM`, `classrooms.module.ts`, `create-document.service.ts`, `teacher.service.ts`, `teacher-degree.service.ts`, `subject-demand-store.service.ts`, `create-section.service.ts`, `classrooms.component.ts`, `sections.component.ts`, `SchoolItemVM`, `ref_angular_core`, `@angular/material`, `teachers.component.ts`, `document.service.ts`, `PeriodVM`, `generate-report.service.ts`, `auth.module.ts`, `ClassroomVM`, `UserItemVM`, `get-classrooms.service.ts`, `classrooms/form/form.component.ts`, `FormComponent`, `users/form/form.component.ts`, `documents/form/form.component.ts`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `Configuration` connect `ref_angular_common` to `StatisticsService`, `schedule.service.ts`, `DefaultService`, `AuthService`, `ApiModule`, `period.service.ts`, `school.service.ts`, `SectionService`, `DayService`, `teacher.service.ts`, `teacher-degree.service.ts`, `AuditService`, `InscriptionService`, `document.service.ts`, `SubjectDemandService`, `UserService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `CustomHttpParameterCodec` connect `ref_angular_common` to `StatisticsService`, `schedule.service.ts`, `DefaultService`, `AuthService`, `period.service.ts`, `school.service.ts`, `SectionService`, `DayService`, `teacher.service.ts`, `teacher-degree.service.ts`, `AuditService`, `InscriptionService`, `document.service.ts`, `SubjectDemandService`, `UserService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _535 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `periods/model/index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12554112554112554 - nodes in this community are weakly interconnected._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08081632653061224 - nodes in this community are weakly interconnected._
- **Should `.setLoading` be split into smaller, more focused modules?**
  _Cohesion score 0.13768115942028986 - nodes in this community are weakly interconnected._