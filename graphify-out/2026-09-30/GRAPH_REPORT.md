# Graph Report - sigeit  (2026-09-30)

## Corpus Check
- 993 files · ~178,816 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 74 file(s) not represented in the graph (top: .scss 60, (none) 11, .mdc 1)

## Summary
- 4130 nodes · 10714 edges · 195 communities (169 shown, 26 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 343 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `45c113f5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- periods.module.ts
- teachers.module.ts
- SubjectsComponent
- users/form/form.component.ts
- get-users.service.ts
- StudentSchedulesComponent
- models.ts
- StatisticsService
- ref_angular_common
- CareerItemVM
- schedule.service.ts
- error-handler.module.ts
- finished.component.ts
- SchedulesService
- StateService
- users.service.ts
- settings.module.ts
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- rxjs
- MemoryRepository
- sections.service.ts
- SectionsManageComponent
- classrooms/model/index.ts
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- careers.module.ts
- ScheduleMemoryService
- PeriodVM
- Configuration
- AuthService
- TogglePasswordViewComponent
- sign-up.component.ts
- FormComponent
- subjects.service.ts
- schedules.service.ts
- app.module.ts
- dependencies
- DepartmentsMemoryService
- schedules/academic-charge-teacher/academic-charge-teacher.component.ts
- DayVM
- 📱 Sistema de Visualización de Versión - SIGEIT
- student-schedules.component.ts
- academic.module.ts
- 📋 Gestión de Versiones - SIGEIT
- period.service.ts
- ScheduleItemVM
- devDependencies
- school.service.ts
- SectionService
- logger.service.ts
- schedules/use-cases/index.ts
- SectionVM
- SectionsOverviewComponent
- Changelog
- scripts
- TableService
- classrooms.module.ts
- DayService
- documents.module.ts
- departments.module.ts
- users.component.ts
- SchedulesComponent
- production
- teacher.service.ts
- teacher-degree.service.ts
- SectionsService
- AuditService
- InscriptionService
- admin.component.ts
- schedules.component.ts
- SchoolItemVM
- SectionsComponent
- Componente de Vista General de Secciones
- SubjectDemandStoreService
- teachers.component.ts
- @angular/material
- .setLoading
- TeacherAcademicService
- FormComponent
- ReportConfigModalComponent
- document.service.ts
- SubjectDemandService
- TeacherPickerComponent
- auth.module.ts
- UserService
- schools.module.ts
- subjects/form/form.component.ts
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- subject-demands.component.ts
- VersionService
- FormComponent
- schedules/index.ts
- FormComponent
- period-comparison-response-dto.ts
- ClassroomVM
- ListComponentService
- Sistema de Período Académico Global
- ScheduleDetailsComponent
- ConfirmModalComponent
- ClassroomsMemoryService
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- subjects.component.ts
- DepartmentItemVM
- FormComponent
- FormComponent
- auditoria
- SchoolsComponent
- .constructor
- CareersComponent
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
- SubjectsService
- FormComponent
- TeacherItemVM
- FindClassroomService
- @angular/router
- build
- development
- @
- @
- StudentSchedulesService
- SubjectItemVM
- ToastService
- TeachersComponent
- test
- sigeit
- DefaultService
- lib/param.ts
- Sigeit
- ref_angular_core
- GlobalPeriodService
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- UserStateService
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
- .eslintrc.json
- ng-package.json
- sections-manage.component.ts
- lib/public-api.ts
- classrooms.component.ts
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 169 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 77 edges
4. `StudentSchedulesComponent` - 74 edges
5. `@angular/forms` - 64 edges
6. `UserStateService` - 61 edges
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

## Communities (195 total, 26 thin omitted)

### Community 0 - "periods.module.ts"
Cohesion: 0.05
Nodes (35): ref_toast, src_app_common_index_statemodule, src_app_common_memory_repository_index_listcomponentservice, src_app_repositories_periods_form_index_formcomponent, PeriodMemoryService, Injectable, src_app_repositories_periods_model_index_rowactionperiod, src_app_repositories_periods_model_index_stage_periods (+27 more)

### Community 1 - "teachers.module.ts"
Cohesion: 0.07
Nodes (21): GetDepartmentsService, Injectable, src_app_repositories_teachers_memory_index_teachermemoryservice, TeacherMemoryService, Injectable, routes, TeachersRoutingModule, NgModule (+13 more)

### Community 3 - "users/form/form.component.ts"
Cohesion: 0.08
Nodes (23): src_app_repositories_departments_index_department2departmentvm, src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_school2schoolvm, src_app_repositories_schools_index_schoolitemvm, src_app_repositories_schools_index_schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_teachers_index_teachervm, src_app_repositories_users_model_index_user_roles (+15 more)

### Community 4 - "get-users.service.ts"
Cohesion: 0.13
Nodes (12): ref_admin_sdk, src_app_common_memory_repository_index_basequery, src_app_repositories_users_mappers_index_user2useritemvm, src_app_repositories_users_mappers_index_user2uservm, User2UserItemVM(), User2UserVM(), src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice (+4 more)

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
Cohesion: 0.13
Nodes (11): Career2CareerItemVM(), Career2CareerVM(), src_app_repositories_careers_mappers_index_career2careervm, CareerItemVM, CareerVM, src_app_repositories_careers_model_index_careerbasequery, RowActionCareer, delete (+3 more)

### Community 10 - "schedule.service.ts"
Cohesion: 0.07
Nodes (25): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ScheduleService, Injectable, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus (+17 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "finished.component.ts"
Cohesion: 0.09
Nodes (18): src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionBaseQuery, InscriptionVM, StageInscription (+10 more)

### Community 13 - "SchedulesService"
Cohesion: 0.07
Nodes (10): ClassroomsSchedulesComponent, Component, Input, ScheduleComponent, Component, Input, SchedulesService, Injectable (+2 more)

### Community 14 - "StateService"
Cohesion: 0.07
Nodes (17): AppComponent, Component, src_app_common_index_semesters, src_app_common_index_semestervm, src_app_common_index_tableservice, src_app_common_state_index_stateservice, StateComponent, Component (+9 more)

### Community 15 - "users.service.ts"
Cohesion: 0.10
Nodes (23): GetCareersService, Injectable, src_app_repositories_careers_use_cases_index_getcareersservice, src_app_repositories_departments_index_getdepartmentsservice, src_app_repositories_schools_index_getschoolsservice, Injectable, UserMemoryService, CreateUserService (+15 more)

### Community 16 - "settings.module.ts"
Cohesion: 0.07
Nodes (20): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, SettingsComponent (+12 more)

### Community 17 - "form-control-errors.directive.ts"
Cohesion: 0.09
Nodes (17): COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, Component, Input, FormControlErrorsDirective, Directive, HostListener (+9 more)

### Community 18 - "package.json"
Cohesion: 0.05
Nodes (39): engines, node, @angular/common, @angular/core, tslib, name, private, version (+31 more)

### Community 19 - "http-form-data-client.service.ts"
Cohesion: 0.10
Nodes (18): BlobVM, projects_http_form_data_client_src_lib_class_index_blobvm, HttpFormDataClientModule, NgModule, HttpFormDataClientService, Inject, Injectable, Optional (+10 more)

### Community 20 - "rxjs"
Cohesion: 0.09
Nodes (18): ref_dashboard_sdk, rxjs, src_app_common_index_basequery, src_app_common_index_usecase, BaseQuery, CareerBaseQuery, src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_mappers_index_period2periodvm (+10 more)

### Community 22 - "sections.service.ts"
Cohesion: 0.08
Nodes (21): src_app_common_index_subjectdemandmodule, TableModule, NgModule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_model_index_sectionbasequery, src_app_repositories_sections_sections_manage_index_sectionsmanagecomponent (+13 more)

### Community 23 - "SectionsManageComponent"
Cohesion: 0.12
Nodes (4): normalize(), SectionsManageComponent, toRow(), Component

### Community 24 - "classrooms/model/index.ts"
Cohesion: 0.27
Nodes (9): Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm, src_app_repositories_classrooms_memory_index_classroomsmemoryservice, ClassroomBaseQuery, ClassroomItemVM, src_app_repositories_classrooms_model_index_classroombasequery, src_app_repositories_classrooms_model_index_classroomitemvm (+1 more)

### Community 25 - "SelectExComponent"
Cohesion: 0.10
Nodes (4): SelectExComponent, Component, Input, ViewChild

### Community 26 - "PlannedSchedulesComponent"
Cohesion: 0.10
Nodes (7): xlsx, Group, PlannedSchedulesComponent, Component, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfig, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfigmodalcomponent, ReportConfig

### Community 27 - "student-schedules.service.ts"
Cohesion: 0.07
Nodes (20): src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectsmodule, src_app_student_schedules_card_section_schedules_index_cardsectionschedulescomponent, src_app_student_schedules_card_subject_schedules_index_cardsubjectschedulescomponent, StudentSchedulesModule (+12 more)

### Community 28 - "careers.module.ts"
Cohesion: 0.08
Nodes (23): CareersRoutingModule, routes, NgModule, CareersService, Injectable, src_app_repositories_careers_form_index_formcomponent, src_app_repositories_careers_mappers_index_career2careeritemvm, CareerMemoryService (+15 more)

### Community 29 - "ScheduleMemoryService"
Cohesion: 0.12
Nodes (8): ScheduleMemoryService, Injectable, CreateScheduleService, Injectable, DeleteScheduleService, Injectable, Injectable, UpdateScheduleService

### Community 30 - "PeriodVM"
Cohesion: 0.11
Nodes (8): src_app_common_user_state_index_userstateservice, AcademicChargeTeacherComponent, Component, AcademicChargeTeacherService, Injectable, PeriodVM, src_app_repositories_schedules_index_dayvm, src_app_repositories_schedules_index_scheduledetailscomponent

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
Nodes (11): SignUpComponent, Component, SignUpService, Injectable, CreateUserStudentService, Injectable, src_app_auth_use_cases_index_createuserstudentservice, src_app_repositories_careers_index_careeritemvm (+3 more)

### Community 35 - "FormComponent"
Cohesion: 0.09
Nodes (9): moment, src_app_common_timer_index_timevalidator, timeValidator(), clashHtml(), FormComponent, Component, Input, Output (+1 more)

### Community 36 - "subjects.service.ts"
Cohesion: 0.33
Nodes (6): src_app_repositories_careers_index_getcareersservice, src_app_repositories_subjects_use_cases_index_createsubjectservice, src_app_repositories_subjects_use_cases_index_deletesubjectservice, src_app_repositories_subjects_use_cases_index_findsubjectservice, src_app_repositories_subjects_use_cases_index_getsubjectsservice, src_app_repositories_subjects_use_cases_index_updatesubjectservice

### Community 37 - "schedules.service.ts"
Cohesion: 0.07
Nodes (33): src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable, src_app_repositories_schedules_model_index_intervals (+25 more)

### Community 38 - "app.module.ts"
Cohesion: 0.06
Nodes (29): @angular/platform-browser-dynamic, ref_error_handler, ref_http_form_data_client, AppModule, NgModule, AppRoutingModule, routes, NgModule (+21 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "DepartmentsMemoryService"
Cohesion: 0.12
Nodes (8): DepartmentsMemoryService, Injectable, CreateDepartmentService, Injectable, DeleteDepartmentService, Injectable, Injectable, UpdateDepartmentService

### Community 41 - "schedules/academic-charge-teacher/academic-charge-teacher.component.ts"
Cohesion: 0.13
Nodes (10): docx, file-saver, jszip, BulkAcademicChargeModalComponent, BulkAcademicChargeModalData, BulkAcademicChargeModalResult, BulkDownloadMode, Component (+2 more)

### Community 42 - "DayVM"
Cohesion: 0.15
Nodes (12): src_app_repositories_classrooms_mappers_index_classroom2classroomvm, Day2DayVM(), src_app_repositories_schedules_mappers_index_day2dayvm, Schedule2ScheduleVM(), DayVM, src_app_repositories_schedules_model_index_dayvm, src_app_repositories_schedules_model_index_scheduleitemvm, RowActionSchedule (+4 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "student-schedules.component.ts"
Cohesion: 0.09
Nodes (17): src_app_repositories_careers_index_careervm, src_app_repositories_periods_index_periodvm, src_app_repositories_periods_index_stageperiod, StagePeriod, finalized, Planned, toPlan, toStart (+9 more)

### Community 45 - "academic.module.ts"
Cohesion: 0.11
Nodes (19): src_app_common_state_index_statemodule, StateModule, NgModule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteacherservice, AcademicModule, NgModule, AcademicRoutingModule (+11 more)

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "period.service.ts"
Cohesion: 0.12
Nodes (11): PeriodService, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 48 - "ScheduleItemVM"
Cohesion: 0.14
Nodes (3): AcademicChargeTeacherComponent, Component, ScheduleItemVM

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

### Community 53 - "schedules/use-cases/index.ts"
Cohesion: 0.12
Nodes (5): GetPlannedSchedulesService, Injectable, GetSchedulesService, Injectable, src_app_repositories_schedules_use_cases_get_schedules_index_getschedulesservice

### Community 54 - "SectionVM"
Cohesion: 0.10
Nodes (18): src_app_repositories_sections_mappers_index_section2sectionitemvm, src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_sections_memory_index_sectionmemoryservice, SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm (+10 more)

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
Cohesion: 0.11
Nodes (14): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl(), TableComponent (+6 more)

### Community 59 - "classrooms.module.ts"
Cohesion: 0.24
Nodes (8): ClassroomsService, Injectable, src_app_repositories_classrooms_model_index_classroom_types, src_app_repositories_classrooms_use_cases_index_createclassroomservice, src_app_repositories_classrooms_use_cases_index_deleteclassroomservice, src_app_repositories_classrooms_use_cases_index_findclassroomservice, src_app_repositories_classrooms_use_cases_index_getclassroomsservice, src_app_repositories_classrooms_use_cases_index_updateclassroomservice

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.05
Nodes (48): lodash, src_app_common_index_rowoptionvm, src_app_common_memory_repository_index_memoryrepository, src_app_common_table_index_tablemodule, src_app_repositories_departments_index_department2departmentitemvm, DocumentsModule, NgModule, DocumentsRoutingModule (+40 more)

### Community 62 - "departments.module.ts"
Cohesion: 0.09
Nodes (20): src_app_common_index_listcomponentservice, src_app_common_index_optionaction, src_app_common_index_selectexmodule, src_app_common_index_tabledatavm, src_app_common_index_tablemodule, DepartmentsComponent, Component, DepartmentsRoutingModule (+12 more)

### Community 63 - "users.component.ts"
Cohesion: 0.11
Nodes (7): src_app_repositories_users_form_index_formcomponent, src_app_repositories_users_model_index_rowactionuser, Component, UsersComponent, routes, NgModule, UsersRoutingModule

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "teacher.service.ts"
Cohesion: 0.14
Nodes (19): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherService, Injectable, CreateTeacherDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EmploymentStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, HiringEvaluationStatus (+11 more)

### Community 67 - "teacher-degree.service.ts"
Cohesion: 0.09
Nodes (25): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherDegreeService, Injectable, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+17 more)

### Community 68 - "SectionsService"
Cohesion: 0.21
Nodes (3): SectionsService, Injectable, SubjectBaseQuery

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "admin.component.ts"
Cohesion: 0.08
Nodes (21): AdminComponent, Component, AdminModule, NgModule, AdminRoutingModule, routes, NgModule, AdminService (+13 more)

### Community 72 - "schedules.component.ts"
Cohesion: 0.11
Nodes (14): src_app_common_confirm_modal_index_confirmmodalcomponent, src_app_common_semester_index_semesters, src_app_common_semester_index_semestervm, SEMESTERS, SemesterVM, src_app_common_table_index_optionaction, src_app_common_table_index_tabledatavm, src_app_common_table_index_tableservice (+6 more)

### Community 73 - "SchoolItemVM"
Cohesion: 0.15
Nodes (14): src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_memory_index_schoolmemoryservice, src_app_repositories_schools_model_index_schoolitemvm, src_app_repositories_schools_model_index_schoolvm, RowActionSchool (+6 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.20
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "SubjectDemandStoreService"
Cohesion: 0.14
Nodes (6): SubjectDemandPanelComponent, Component, Input, SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 77 - "teachers.component.ts"
Cohesion: 0.16
Nodes (21): src_app_common_index_confirmmodalcomponent, src_app_common_index_uploadsizeerror, src_app_common_index_userstateservice, DegreeFormData, src_app_repositories_teachers_form_index_formcomponent, src_app_repositories_teachers_model_index_category_options, src_app_repositories_teachers_model_index_dedication_options, src_app_repositories_teachers_model_index_degree_level_options (+13 more)

### Community 79 - "@angular/material"
Cohesion: 0.15
Nodes (8): @angular/forms, @angular/material, ArrayValidators, src_app_common_select_ex_index_selectexmodule, NormalizeWords(), searchCallback(), SelectExModule, NgModule

### Community 81 - "TeacherAcademicService"
Cohesion: 0.08
Nodes (10): DegreeFormComponent, Component, Inject, GradeSearchComponent, Component, ProfileComponent, Component, Inject (+2 more)

### Community 82 - "FormComponent"
Cohesion: 0.17
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
Cohesion: 0.21
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "auth.module.ts"
Cohesion: 0.07
Nodes (21): FormControlTestComponent, Component, @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, AuthRoutingModule, routes (+13 more)

### Community 88 - "UserService"
Cohesion: 0.17
Nodes (7): Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UserRespondeDto

### Community 89 - "schools.module.ts"
Cohesion: 0.07
Nodes (22): src_app_repositories_schools_form_index_formcomponent, SchoolMemoryService, Injectable, src_app_repositories_schools_model_index_rowactionschool, routes, SchoolsRoutingModule, NgModule, SchoolsService (+14 more)

### Community 90 - "subjects/form/form.component.ts"
Cohesion: 0.19
Nodes (5): src_app_repositories_departments_index_departmentitemvm, FormComponent, Component, Input, Output

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
Cohesion: 0.09
Nodes (15): src_app_common_subject_demand_index_subjectdemandstoreservice, MAX_UPLOAD_SIZE, uploadSizeError(), ImportDemandComponent, Component, Inject, SubjectDemandsComponent, Component (+7 more)

### Community 96 - "VersionService"
Cohesion: 0.09
Nodes (15): Component, VersionDisplayComponent, Component, Inject, VersionInfoComponent, Injectable, VersionInfo, VersionService (+7 more)

### Community 97 - "FormComponent"
Cohesion: 0.20
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 98 - "schedules/index.ts"
Cohesion: 0.16
Nodes (6): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, routes, SchedulesRoutingModule, NgModule

### Community 99 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "period-comparison-response-dto.ts"
Cohesion: 0.26
Nodes (8): PeriodComparisonDeltaDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodComparisonResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodMetricResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SubjectDemandIncreaseItemDto

### Community 101 - "ClassroomVM"
Cohesion: 0.20
Nodes (6): ClassroomVM, RowActionClassroom, delete, update, Injectable, UpdateClassroomService

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "ScheduleDetailsComponent"
Cohesion: 0.18
Nodes (5): ScheduleDetailsComponent, Component, Inject, Optional, Output

### Community 105 - "ConfirmModalComponent"
Cohesion: 0.22
Nodes (7): ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, ModalMessageModel

### Community 106 - "ClassroomsMemoryService"
Cohesion: 0.11
Nodes (9): src_app_common_index_memoryrepository, ClassroomsMemoryService, Injectable, CreateClassroomService, Injectable, DeleteClassroomService, Injectable, GetClassroomsService (+1 more)

### Community 107 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.19
Nodes (5): FormComponent, Component, Inject, Input, Output

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

### Community 113 - "subjects.component.ts"
Cohesion: 0.28
Nodes (5): src_app_repositories_subjects_form_index_formcomponent, src_app_repositories_subjects_model_index_rowactionsubject, routes, SubjectsRoutingModule, NgModule

### Community 114 - "DepartmentItemVM"
Cohesion: 0.11
Nodes (17): Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentitemvm, src_app_repositories_departments_mappers_index_department2departmentvm, src_app_repositories_departments_memory_index_departmentsmemoryservice, DepartmentBaseQuery, DepartmentItemVM, DepartmentVM (+9 more)

### Community 115 - "FormComponent"
Cohesion: 0.19
Nodes (6): FormComponent, Component, Inject, Input, Optional, Output

### Community 116 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 119 - ".constructor"
Cohesion: 0.25
Nodes (4): DeleteSubjectService, Injectable, FindSubjectService, Injectable

### Community 121 - "profile.module.ts"
Cohesion: 0.18
Nodes (9): ProfileComponent, Component, ProfileModule, NgModule, ProfileRoutingModule, routes, NgModule, ProfileService (+1 more)

### Community 122 - "SectionItemVM"
Cohesion: 0.09
Nodes (15): src_app_repositories_schedules_index_scheduleitemvm, src_app_repositories_sections_index_sectionitemvm, RowActionSection, delete, update, SectionBaseQuery, SectionItemVM, src_app_repositories_subjects_index_subjectitemvm (+7 more)

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

### Community 132 - "SubjectsService"
Cohesion: 0.33
Nodes (3): Inject, SubjectsService, Injectable

### Community 133 - "FormComponent"
Cohesion: 0.17
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 134 - "TeacherItemVM"
Cohesion: 0.13
Nodes (19): src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, Teacher2TeacherItemVM(), Teacher2TeacherVM(), TeacherVM2TeacherDto(), src_app_repositories_teachers_model_index_teacherbasequery, src_app_repositories_teachers_model_index_teacheritemvm, src_app_repositories_teachers_model_index_teachervm (+11 more)

### Community 137 - "@angular/router"
Cohesion: 0.13
Nodes (8): @angular/router, LoginComponent, Component, LoginService, Injectable, routes, StateRoutingModule, NgModule

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

### Community 142 - "StudentSchedulesService"
Cohesion: 0.11
Nodes (7): FinishedComponent, Component, SavedSchedule, ScheduleComponent, Component, StudentSchedulesService, Injectable

### Community 143 - "SubjectItemVM"
Cohesion: 0.10
Nodes (17): src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_memory_index_subjectmemoryservice, SubjectMemoryService, Injectable, src_app_repositories_subjects_model_index_subjectbasequery (+9 more)

### Community 145 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

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

### Community 153 - "ref_angular_core"
Cohesion: 0.07
Nodes (18): ref_angular_core, src_app_common_memory_repository_index_usecase, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus, UseCase, src_app_repositories_schedules_index_schedule2scheduleitemvm, src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm (+10 more)

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

### Community 164 - "UserStateService"
Cohesion: 0.12
Nodes (7): HttpInterceptorInterceptor, Injectable, DEMAND_PREFERENCE_KEYS, src_app_common_user_state_models_index_userstatevm, UserStateVM, Injectable, UserStateService

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

### Community 194 - "sections-manage.component.ts"
Cohesion: 0.12
Nodes (22): ng2-charts, src_app_common_index_computecoverage, src_app_common_index_stateservice, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemandstoreservice, src_app_common_index_subjectdemandsummary, SubjectDemandModule, NgModule (+14 more)

### Community 198 - "classrooms.component.ts"
Cohesion: 0.16
Nodes (7): ClassroomsComponent, Component, ClassroomsRoutingModule, routes, NgModule, src_app_repositories_classrooms_form_index_formcomponent, src_app_repositories_classrooms_model_index_rowactionclassroom

## Knowledge Gaps
- **528 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+523 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1404 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `periods.module.ts`, `teachers.module.ts`, `users/form/form.component.ts`, `get-users.service.ts`, `TeacherItemVM`, `ref_angular_common`, `@angular/router`, `schedule.service.ts`, `CareerItemVM`, `finished.component.ts`, `StateService`, `SubjectItemVM`, `settings.module.ts`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `users.service.ts`, `sections.service.ts`, `classrooms/model/index.ts`, `ref_angular_core`, `PlannedSchedulesComponent`, `student-schedules.service.ts`, `careers.module.ts`, `PeriodVM`, `sign-up.component.ts`, `FormComponent`, `UserStateService`, `schedules.service.ts`, `app.module.ts`, `subjects.service.ts`, `schedules/academic-charge-teacher/academic-charge-teacher.component.ts`, `DayVM`, `student-schedules.component.ts`, `period.service.ts`, `school.service.ts`, `schedules/use-cases/index.ts`, `SectionVM`, `TableService`, `classrooms.module.ts`, `url-access-guard.guard.ts`, `departments.module.ts`, `documents.module.ts`, `users.component.ts`, `teacher.service.ts`, `teacher-degree.service.ts`, `sections-manage.component.ts`, `classrooms.component.ts`, `admin.component.ts`, `schedules.component.ts`, `SchoolItemVM`, `teachers.component.ts`, `@angular/material`, `document.service.ts`, `auth.module.ts`, `schools.module.ts`, `subjects/form/form.component.ts`, `subject-demands.component.ts`, `VersionService`, `subjects.component.ts`, `DepartmentItemVM`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `StudentSchedulesComponent` connect `StudentSchedulesComponent` to `sections-manage.component.ts`, `UserStateService`, `schedules.component.ts`, `CareerItemVM`, `DayVM`, `student-schedules.component.ts`, `StudentSchedulesService`, `ScheduleItemVM`, `SectionItemVM`, `student-schedules.service.ts`, `PeriodVM`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `Configuration` connect `ref_angular_common` to `StatisticsService`, `schedule.service.ts`, `DefaultService`, `AuthService`, `ApiModule`, `period.service.ts`, `school.service.ts`, `SectionService`, `DayService`, `teacher.service.ts`, `teacher-degree.service.ts`, `AuditService`, `InscriptionService`, `document.service.ts`, `SubjectDemandService`, `UserService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _528 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `periods.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0546448087431694 - nodes in this community are weakly interconnected._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07149758454106281 - nodes in this community are weakly interconnected._
- **Should `users/form/form.component.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08408408408408409 - nodes in this community are weakly interconnected._