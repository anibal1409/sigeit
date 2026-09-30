# Graph Report - sigeit  (2026-09-30)

## Corpus Check
- 997 files · ~180,769 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 77 file(s) not represented in the graph (top: .scss 63, (none) 11, .mdc 1)

## Summary
- 4182 nodes · 10835 edges · 217 communities (180 shown, 37 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 346 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `413c5bb9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- PeriodVM
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
- StudentSchedulesService
- SchedulesService
- PeriodsComponent
- users.service.ts
- SettingsComponent
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- PeriodMemoryService
- memory-repository/index.ts
- sections.service.ts
- SectionsManageComponent
- GetSchoolsService
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- careers.module.ts
- get-teachers.service.ts
- AcademicChargeTeacherComponent
- Configuration
- AuthService
- TogglePasswordViewComponent
- sign-up.service.ts
- FormComponent
- subjects.service.ts
- schedules.service.ts
- app.module.ts
- dependencies
- DepartmentItemVM
- BulkAcademicChargeModalComponent
- schedules/model/index.ts
- 📱 Sistema de Visualización de Versión - SIGEIT
- ScheduleBaseQuery
- academic.module.ts
- 📋 Gestión de Versiones - SIGEIT
- period.service.ts
- AcademicChargeTeacherComponent
- devDependencies
- school.service.ts
- SectionService
- logger.service.ts
- UseCase
- ref_angular_core
- SectionsOverviewComponent
- Changelog
- scripts
- RowOptionVM
- classrooms.module.ts
- DayService
- documents.module.ts
- create-document.service.ts
- UsersComponent
- SchedulesComponent
- production
- teacher.service.ts
- teacher-degree.service.ts
- SectionMemoryService
- AuditService
- InscriptionService
- AdminComponent
- common/index.ts
- create-school.service.ts
- SectionsComponent
- Componente de Vista General de Secciones
- SubjectDemandPanelComponent
- ScheduleItemVM
- subjects/form/form.component.ts
- @angular/material
- DocumentsComponent
- rxjs
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
- SchoolItemVM
- schedules/index.ts
- FormComponent
- period-comparison-response-dto.ts
- ClassroomVM
- ListComponentService
- Sistema de Período Académico Global
- UserItemVM
- get-classrooms.service.ts
- update-classroom.service.ts
- FormComponent
- FormComponent
- users/form/form.component.ts
- projects
- options
- toast.module.ts
- admin-routing.module.ts
- SchoolVM
- documents/form/form.component.ts
- FormComponent
- auditoria
- SubjectDemandsService
- DegreeFormComponent
- VersionDisplayComponent
- profile.module.ts
- SectionItemVM
- api-interfaces/package.json
- dashboard-sdk/package.json
- error-handler/package.json
- form-control-errors/package.json
- http-form-data-client/package.json
- logger/package.json
- login/package.json
- toast/package.json
- ClassroomType
- IntervalsService
- FormComponent
- find-document.service.ts
- VersionInfoComponent
- sections-manage.component.ts
- delete-inscription.service.ts
- build
- development
- @
- @
- ScheduleComponent
- ScheduleMemoryService
- SchoolMemoryService
- ToastService
- TeacherItemVM
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- GlobalPeriodService
- get-inscriptions.service.ts
- BaseQuery
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- delete-classroom.service.ts
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
- CardSubjectSchedulesComponent
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
- url-access-guard.guard.ts
- PlanningAuditComponent
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- RecoveryPasswordComponent
- lib/public-api.ts
- ClassroomsComponent
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts
- ProfileComponent
- CloseInscriptionService
- CreatePeriodService
- FindPeriodService
- UpdatePeriodService
- FindSchoolService
- GenerateReportService
- FormControlTestComponent
- ArrayValidators

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

## Communities (217 total, 37 thin omitted)

### Community 0 - "PeriodVM"
Cohesion: 0.11
Nodes (15): src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, PeriodVM, RowActionPeriod, delete, setActive, update (+7 more)

### Community 1 - "teachers.module.ts"
Cohesion: 0.08
Nodes (23): src_app_common_memory_repository_index_memoryrepository, src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, src_app_repositories_teachers_memory_index_teachermemoryservice, TeacherMemoryService, Injectable, TeachersModule, NgModule (+15 more)

### Community 3 - "admin.component.ts"
Cohesion: 0.23
Nodes (6): src_app_admin_data_index_menu, MENU, src_app_admin_models_index_optionmenu, src_app_common_user_state_index_userstatevm, src_app_common_version_index_versionservice, src_app_repositories_users_model_index_userrole

### Community 4 - "src_app_common_memory_repository_index_usecase"
Cohesion: 0.12
Nodes (11): src_app_common_memory_repository_index_usecase, src_app_repositories_documents_mappers_index_document2documentitemvm, src_app_repositories_documents_memory_index_memorydocumentsservice, MemoryDocumentsService, Injectable, DeleteDocumentService, Injectable, GetDocumentsService (+3 more)

### Community 5 - "StudentSchedulesComponent"
Cohesion: 0.06
Nodes (3): SavedSchedule, StudentSchedulesComponent, Component

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
Cohesion: 0.12
Nodes (12): CareersComponent, Component, Career2CareerItemVM(), Career2CareerVM(), src_app_repositories_careers_mappers_index_career2careervm, CareerBaseQuery, CareerItemVM, CareerVM (+4 more)

### Community 10 - "schedule.service.ts"
Cohesion: 0.07
Nodes (25): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ScheduleService, Injectable, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus (+17 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "StudentSchedulesService"
Cohesion: 0.17
Nodes (5): inscription2InscriptionVM(), InscriptionBaseQuery, InscriptionVM, StudentSchedulesService, Injectable

### Community 13 - "SchedulesService"
Cohesion: 0.07
Nodes (11): ClassroomsSchedulesComponent, Component, Input, DayVM, ScheduleComponent, Component, Input, SchedulesService (+3 more)

### Community 15 - "users.service.ts"
Cohesion: 0.07
Nodes (27): ref_admin_sdk, src_app_common_memory_repository_index_basequery, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_mappers_index_user2useritemvm, src_app_repositories_users_mappers_index_user2uservm, src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, Injectable (+19 more)

### Community 16 - "SettingsComponent"
Cohesion: 0.09
Nodes (14): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, SettingsComponent (+6 more)

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.09
Nodes (17): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, Directive, HostListener (+9 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (42): engines, node, @angular/common, @angular/core, tslib, name, private, version (+34 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "PeriodMemoryService"
Cohesion: 0.12
Nodes (8): PeriodMemoryService, Injectable, DeletePeriodService, Injectable, GetPeriodsService, Injectable, SetActivePeriodService, Injectable

### Community 21 - "memory-repository/index.ts"
Cohesion: 0.13
Nodes (3): MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus

### Community 22 - "sections.service.ts"
Cohesion: 0.08
Nodes (28): src_app_common_index_selectexmodule, src_app_common_index_subjectdemandmodule, src_app_common_index_tablemodule, src_app_common_memory_repository_index_listcomponentservice, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_model_index_sectionbasequery (+20 more)

### Community 23 - "SectionsManageComponent"
Cohesion: 0.10
Nodes (5): computeCoverage(), normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "GetSchoolsService"
Cohesion: 0.13
Nodes (7): Inject, SchoolsService, Injectable, CreateSchoolService, Injectable, GetSchoolsService, Injectable

### Community 25 - "SelectExComponent"
Cohesion: 0.08
Nodes (9): @angular/cdk, NormalizeWords(), searchCallback(), SelectExComponent, Component, Input, ViewChild, SelectExModule (+1 more)

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.11
Nodes (4): Group, PlannedSchedulesComponent, Component, ReportConfig

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.08
Nodes (25): CareersModule, NgModule, src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectsmodule, src_app_student_schedules_card_section_schedules_index_cardsectionschedulescomponent, src_app_student_schedules_card_subject_schedules_index_cardsubjectschedulescomponent (+17 more)

### Community 28 - "careers.module.ts"
Cohesion: 0.07
Nodes (26): CareersRoutingModule, routes, NgModule, src_app_repositories_careers_mappers_index_career2careeritemvm, CareerMemoryService, Injectable, src_app_repositories_careers_memory_index_careermemoryservice, src_app_repositories_careers_model_index_careeritemvm (+18 more)

### Community 29 - "get-teachers.service.ts"
Cohesion: 0.22
Nodes (9): Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_subjects_index_subject2subjectitemvm, src_app_repositories_teachers_mappers_index_teacher2teachervm, Teacher2TeacherVM(), src_app_repositories_teachers_model_index_teacherbasequery, src_app_repositories_teachers_model_index_teacheritemvm, FindTeacherService (+1 more)

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

### Community 34 - "sign-up.service.ts"
Cohesion: 0.08
Nodes (17): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_repositories_careers_index_careeritemvm, src_app_repositories_users_index_saveuser (+9 more)

### Community 35 - "FormComponent"
Cohesion: 0.11
Nodes (5): clashHtml(), FormComponent, Component, Input, Output

### Community 36 - "subjects.service.ts"
Cohesion: 0.06
Nodes (34): src_app_common_index_statemodule, src_app_repositories_careers_index_getcareersservice, src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_memory_index_subjectmemoryservice, SubjectMemoryService (+26 more)

### Community 37 - "schedules.service.ts"
Cohesion: 0.10
Nodes (29): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable (+21 more)

### Community 38 - "app.module.ts"
Cohesion: 0.05
Nodes (29): @angular/router, ref_error_handler, ref_http_form_data_client, ref_toast, xlsx, AppComponent, Component, AppRoutingModule (+21 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "DepartmentItemVM"
Cohesion: 0.07
Nodes (31): src_app_common_index_listcomponentservice, DepartmentsRoutingModule, NgModule, DepartmentsService, Injectable, Department2DepartmentItemVM(), src_app_repositories_departments_mappers_index_department2departmentitemvm, src_app_repositories_departments_mappers_index_department2departmentvm (+23 more)

### Community 41 - "BulkAcademicChargeModalComponent"
Cohesion: 0.25
Nodes (3): BulkAcademicChargeModalComponent, Component, Inject

### Community 42 - "schedules/model/index.ts"
Cohesion: 0.10
Nodes (18): Day2DayVM(), src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm, Schedule2ScheduleItemVM(), Schedule2ScheduleVM(), src_app_repositories_schedules_memory_index_schedulememoryservice, src_app_repositories_schedules_model_index_scheduleitemvm, src_app_repositories_schedules_model_index_schedulevm (+10 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "ScheduleBaseQuery"
Cohesion: 0.10
Nodes (9): src_app_repositories_schedules_index_schedule2scheduleitemvm, ScheduleBaseQuery, GetPlannedSchedulesService, Injectable, GetSchedulesService, Injectable, src_app_repositories_schedules_use_cases_get_schedules_index_getschedulesservice, GetSchedulesService (+1 more)

### Community 45 - "academic.module.ts"
Cohesion: 0.12
Nodes (17): src_app_common_state_index_statemodule, StateModule, NgModule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule (+9 more)

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

### Community 53 - "UseCase"
Cohesion: 0.26
Nodes (10): src_app_common_index_usecase, UseCase, src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_mappers_index_period2periodvm, Period2PeriodItemVM(), Period2PeriodVM(), src_app_repositories_periods_memory_index_periodmemoryservice, src_app_repositories_periods_model_index_perioditemvm (+2 more)

### Community 54 - "ref_angular_core"
Cohesion: 0.07
Nodes (14): ref_angular_core, StateComponent, Component, HostBinding, Input, src_app_repositories_sections_index_sectionmemoryservice, src_app_repositories_sections_mappers_index_section2sectionitemvm, src_app_repositories_sections_mappers_index_section2sectionvm (+6 more)

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
Cohesion: 0.14
Nodes (17): ClassroomsModule, NgModule, ClassroomsRoutingModule, routes, NgModule, ClassroomsService, Injectable, src_app_repositories_classrooms_form_index_formcomponent (+9 more)

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

### Community 68 - "SectionMemoryService"
Cohesion: 0.11
Nodes (9): SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm, CreateSectionService, Injectable, RemoveSectionService, Injectable, Injectable (+1 more)

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "AdminComponent"
Cohesion: 0.17
Nodes (5): AdminComponent, Component, AdminService, Injectable, optionMenu

### Community 72 - "common/index.ts"
Cohesion: 0.06
Nodes (38): ConfirmModalComponent, Component, Output, src_app_common_index_confirmmodalcomponent, src_app_common_index_optionaction, src_app_common_index_semesters, src_app_common_index_semestervm, src_app_common_index_tabledatavm (+30 more)

### Community 73 - "create-school.service.ts"
Cohesion: 0.35
Nodes (7): src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_memory_index_schoolmemoryservice, src_app_repositories_schools_model_index_schoolitemvm, src_app_repositories_schools_model_index_schoolvm

### Community 74 - "SectionsComponent"
Cohesion: 0.20
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "SubjectDemandPanelComponent"
Cohesion: 0.21
Nodes (4): SubjectDemandPanelComponent, Component, Input, levelPercent()

### Community 77 - "ScheduleItemVM"
Cohesion: 0.15
Nodes (7): ScheduleItemVM, src_app_repositories_schedules_schedule_details_index_scheduledetailscomponent, ScheduleDetailsComponent, Component, Inject, Optional, Output

### Community 78 - "subjects/form/form.component.ts"
Cohesion: 0.14
Nodes (6): lodash, HttpInterceptorInterceptor, Injectable, src_app_common_user_state_index_userstateservice, src_app_repositories_careers_index_careervm, src_app_repositories_teachers_index_teachervm

### Community 79 - "@angular/material"
Cohesion: 0.06
Nodes (24): @angular/forms, @angular/material, moment, Inject, ConfirmModalModule, NgModule, src_app_common_confirm_modal_index_confirmmodalcomponent, ModalMessageModel (+16 more)

### Community 81 - "rxjs"
Cohesion: 0.07
Nodes (44): ref_dashboard_sdk, rxjs, src_app_common_index_uploadsizeerror, src_app_common_subject_demand_index_subjectdemandstoreservice, MAX_UPLOAD_SIZE, uploadSizeError(), src_app_repositories_departments_index_departmentitemvm, SectionVM (+36 more)

### Community 82 - "FormComponent"
Cohesion: 0.12
Nodes (8): CareersService, Injectable, FormComponent, Component, Inject, Input, Output, src_app_repositories_careers_model_index_careervm

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
Cohesion: 0.07
Nodes (22): @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent (+14 more)

### Community 88 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 89 - "schools.module.ts"
Cohesion: 0.13
Nodes (12): SchoolsModule, NgModule, routes, SchoolsRoutingModule, NgModule, DeleteSchoolService, Injectable, src_app_repositories_schools_use_cases_index_createschoolservice (+4 more)

### Community 90 - "FormComponent"
Cohesion: 0.17
Nodes (6): FormComponent, Component, Input, Output, SubjectsService, Injectable

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
Cohesion: 0.18
Nodes (5): isValidDemandConfig(), SubjectDemandStoreService, summarizeDemand(), Injectable, Inject

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "SchoolItemVM"
Cohesion: 0.16
Nodes (6): FormComponent, Component, Inject, Input, Output, SchoolItemVM

### Community 98 - "schedules/index.ts"
Cohesion: 0.18
Nodes (6): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, routes, SchedulesRoutingModule, NgModule

### Community 99 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "period-comparison-response-dto.ts"
Cohesion: 0.26
Nodes (8): PeriodComparisonDeltaDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodComparisonResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodMetricResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SubjectDemandIncreaseItemDto

### Community 101 - "ClassroomVM"
Cohesion: 0.20
Nodes (9): Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), ClassroomVM, RowActionClassroom, delete, update, CreateClassroomService, Injectable (+1 more)

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "UserItemVM"
Cohesion: 0.12
Nodes (17): src_app_repositories_departments_index_department2departmentvm, src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_school2schoolvm, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teacher2teachervm, User2UserItemVM(), User2UserVM(), src_app_repositories_users_model_index_user_roles_value (+9 more)

### Community 105 - "get-classrooms.service.ts"
Cohesion: 0.18
Nodes (9): src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, src_app_repositories_classrooms_mappers_index_classroom2classroomvm, ClassroomBaseQuery, ClassroomItemVM, src_app_repositories_classrooms_model_index_classroombasequery, FindClassroomService, Injectable, GetClassroomsService (+1 more)

### Community 106 - "update-classroom.service.ts"
Cohesion: 0.17
Nodes (5): ClassroomsMemoryService, Injectable, src_app_repositories_classrooms_model_index_classroomitemvm, Injectable, UpdateClassroomService

### Community 107 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.20
Nodes (4): FormComponent, Component, Input, Output

### Community 109 - "users/form/form.component.ts"
Cohesion: 0.11
Nodes (10): src_app_repositories_schools_index_schoolitemvm, FormComponent, Component, Inject, Input, Output, src_app_repositories_users_model_index_user_roles, USER_ROLES (+2 more)

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
Cohesion: 0.14
Nodes (13): AdminModule, NgModule, AdminRoutingModule, routes, NgModule, src_app_common_version_index_versiondisplaycomponent, src_app_common_version_index_versioninfocomponent, SectionsModule (+5 more)

### Community 114 - "SchoolVM"
Cohesion: 0.15
Nodes (10): src_app_common_index_rowoptionvm, RowActionDepartment, delete, update, RowActionSchool, delete, update, SchoolVM (+2 more)

### Community 115 - "documents/form/form.component.ts"
Cohesion: 0.13
Nodes (9): DocumentsFileService, Injectable, FormComponent, Component, Inject, Input, Optional, Output (+1 more)

### Community 116 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "SubjectDemandsService"
Cohesion: 0.18
Nodes (4): SubjectDemandsComponent, Component, SubjectDemandsService, Injectable

### Community 119 - "DegreeFormComponent"
Cohesion: 0.14
Nodes (5): DegreeFormComponent, normalize(), Component, Input, Output

### Community 120 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

### Community 121 - "profile.module.ts"
Cohesion: 0.18
Nodes (9): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule, ProfileService (+1 more)

### Community 122 - "SectionItemVM"
Cohesion: 0.19
Nodes (9): RowActionSection, delete, update, SectionBaseQuery, SectionItemVM, src_app_repositories_subjects_index_subjectitemvm, CardSectionSchedulesComponent, Component (+1 more)

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

### Community 132 - "IntervalsService"
Cohesion: 0.20
Nodes (6): src_app_repositories_schedules_model_index_intervalsselect, Intervals, IntervalSelect, IntervalsSelect, IntervalsService, Injectable

### Community 133 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 134 - "find-document.service.ts"
Cohesion: 0.19
Nodes (8): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_model_index_documentbasequery, src_app_repositories_documents_model_index_documentitemvm, src_app_repositories_documents_model_index_documentvm, FindDocumentService, Injectable

### Community 135 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 136 - "sections-manage.component.ts"
Cohesion: 0.21
Nodes (12): src_app_common_index_computecoverage, src_app_common_index_sections_load_panel_key, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemanddialogcomponent, src_app_common_index_subjectdemanddialogdata, src_app_common_index_subjectdemandstoreservice, src_app_common_index_subjectdemandsummary, SubjectCoverage (+4 more)

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

### Community 142 - "ScheduleComponent"
Cohesion: 0.17
Nodes (4): FinishedComponent, Component, ScheduleComponent, Component

### Community 143 - "ScheduleMemoryService"
Cohesion: 0.18
Nodes (4): ScheduleMemoryService, Injectable, DeleteScheduleService, Injectable

### Community 144 - "SchoolMemoryService"
Cohesion: 0.17
Nodes (5): src_app_common_index_memoryrepository, SchoolMemoryService, Injectable, Injectable, UpdateSchoolService

### Community 145 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 146 - "TeacherItemVM"
Cohesion: 0.17
Nodes (6): Teacher2TeacherItemVM(), TeacherVM2TeacherDto(), TeacherBaseQuery, TeacherItemVM, TeachersComponent, Component

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

### Community 153 - "get-inscriptions.service.ts"
Cohesion: 0.09
Nodes (14): src_app_repositories_sections_index_section2sectionitemvm, src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, src_app_student_schedules_model_index_inscriptionvm, StageInscription, Registered, Validated (+6 more)

### Community 154 - "BaseQuery"
Cohesion: 0.27
Nodes (3): src_app_common_index_basequery, BaseQuery, DepartmentBaseQuery

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
Cohesion: 0.07
Nodes (16): StateService, Injectable, TableService, Injectable, src_app_common_user_state_models_index_userstatevm, UserStateVM, Injectable, UserStateService (+8 more)

### Community 165 - "periods.module.ts"
Cohesion: 0.20
Nodes (11): PeriodsRoutingModule, routes, NgModule, PeriodsService, Injectable, src_app_repositories_periods_use_cases_index_createperiodservice, src_app_repositories_periods_use_cases_index_deleteperiodservice, src_app_repositories_periods_use_cases_index_findperiodservice (+3 more)

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

### Community 178 - "CardSubjectSchedulesComponent"
Cohesion: 0.18
Nodes (4): CardSubjectSchedulesComponent, Component, Input, Output

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

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.16
Nodes (15): LevelBar, attendedByLevel(), CoverageStatus, DEFAULT_DEMAND_CONFIG, DEFAULT_DEMAND_FACTOR, DEFAULT_SECTION_CAPACITY, DEMAND_CONFIG_KEY, DEMAND_PREFERENCE_KEYS (+7 more)

### Community 208 - "ProfileComponent"
Cohesion: 0.33
Nodes (3): ProfileComponent, Component, Inject

## Knowledge Gaps
- **534 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+529 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1428 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **37 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `PeriodVM`, `teachers.module.ts`, `admin.component.ts`, `src_app_common_memory_repository_index_usecase`, `find-document.service.ts`, `VersionInfoComponent`, `ref_angular_common`, `CareerItemVM`, `schedule.service.ts`, `sections-manage.component.ts`, `delete-inscription.service.ts`, `SchedulesService`, `ScheduleMemoryService`, `SettingsComponent`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `PeriodMemoryService`, `memory-repository/index.ts`, `sections.service.ts`, `users.service.ts`, `SelectExComponent`, `get-inscriptions.service.ts`, `student-schedules.service.ts`, `careers.module.ts`, `get-teachers.service.ts`, `sign-up.service.ts`, `delete-classroom.service.ts`, `UserStateService`, `schedules.service.ts`, `app.module.ts`, `periods.module.ts`, `DepartmentItemVM`, `subjects.service.ts`, `schedules/model/index.ts`, `ScheduleBaseQuery`, `period.service.ts`, `school.service.ts`, `UseCase`, `ref_angular_core`, `RowOptionVM`, `classrooms.module.ts`, `url-access-guard.guard.ts`, `create-document.service.ts`, `teacher.service.ts`, `teacher-degree.service.ts`, `subject-demand-store.service.ts`, `common/index.ts`, `create-school.service.ts`, `subjects/form/form.component.ts`, `@angular/material`, `CloseInscriptionService`, `FormComponent`, `document.service.ts`, `auth.module.ts`, `schools.module.ts`, `ClassroomVM`, `UserItemVM`, `get-classrooms.service.ts`, `update-classroom.service.ts`, `FormComponent`, `users/form/form.component.ts`, `documents/form/form.component.ts`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `Configuration` connect `ref_angular_common` to `StatisticsService`, `schedule.service.ts`, `DefaultService`, `AuthService`, `ApiModule`, `period.service.ts`, `school.service.ts`, `SectionService`, `DayService`, `teacher.service.ts`, `teacher-degree.service.ts`, `AuditService`, `InscriptionService`, `document.service.ts`, `SubjectDemandService`, `UserService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `CustomHttpParameterCodec` connect `ref_angular_common` to `StatisticsService`, `schedule.service.ts`, `DefaultService`, `AuthService`, `period.service.ts`, `school.service.ts`, `SectionService`, `DayService`, `teacher.service.ts`, `teacher-degree.service.ts`, `AuditService`, `InscriptionService`, `document.service.ts`, `SubjectDemandService`, `UserService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _534 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `PeriodVM` be split into smaller, more focused modules?**
  _Cohesion score 0.10666666666666667 - nodes in this community are weakly interconnected._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07536231884057971 - nodes in this community are weakly interconnected._
- **Should `.setLoading` be split into smaller, more focused modules?**
  _Cohesion score 0.14855072463768115 - nodes in this community are weakly interconnected._