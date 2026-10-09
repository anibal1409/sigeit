# Graph Report - sigeit  (2026-10-01)

## Corpus Check
- 1004 files · ~184,858 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 78 file(s) not represented in the graph (top: .scss 64, (none) 11, .mdc 1)

## Summary
- 4244 nodes · 10978 edges · 208 communities (184 shown, 24 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 350 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3a70e857`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app-routing.module.ts
- teachers.module.ts
- admin.component.ts
- create-document.service.ts
- StudentSchedulesComponent
- models.ts
- StatisticsService
- ref_angular_core
- app.module.ts
- DepartmentVM
- error-handler.module.ts
- finished.component.ts
- schedules.service.ts
- StudentSchedulesService
- find-section.service.ts
- @angular/forms
- form-control-errors.directive.ts
- package.json
- http-form-data-client.service.ts
- AcademicChargeTeacherComponent
- UseCase
- periods.module.ts
- SectionsManageComponent
- teacher.service.ts
- SelectExComponent
- PlannedSchedulesComponent
- student-schedules.service.ts
- careers.module.ts
- users/form/form.component.ts
- TeacherAcademicService
- Configuration
- AuthService
- TogglePasswordViewComponent
- create-user-student.service.ts
- SchedulesService
- SchoolItemVM
- ref_dashboard_sdk
- AcademicChargeTeacherComponent
- dependencies
- departments.module.ts
- BulkAcademicChargeModalComponent
- ScheduleService
- 📱 Sistema de Visualización de Versión - SIGEIT
- memory-repository/index.ts
- documents/form/form.component.ts
- 📋 Gestión de Versiones - SIGEIT
- PeriodService
- DayVM
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
- get-documents.service.ts
- academic.module.ts
- SchedulesComponent
- production
- PeriodVM
- teacher-degree.service.ts
- update-section.service.ts
- AuditService
- InscriptionService
- UserItemVM
- user.service.ts
- subjects.service.ts
- SectionsComponent
- Componente de Vista General de Secciones
- periods/model/index.ts
- CareerItemVM
- AdminComponent
- ConfirmModalComponent
- SectionVM
- sections-manage.component.ts
- FormComponent
- sections.component.ts
- DocumentService
- SubjectDemandService
- TeacherPickerComponent
- GradeSearchComponent
- classrooms.component.ts
- schools.module.ts
- DepartmentItemVM
- CareerService
- ClassroomService
- DepartmentService
- SubjectService
- SubjectDemandStoreService
- VersionService
- ReportConfigModalComponent
- SectionItemVM
- FormComponent
- common/index.ts
- FormComponent
- subject-demand.module.ts
- Sistema de Período Académico Global
- users.service.ts
- periods.component.ts
- ScheduleItemVM
- FormComponent
- FormComponent
- FormComponent
- projects
- options
- toast.module.ts
- UsersComponent
- auth.module.ts
- FormComponent
- FormComponent
- auditoria
- VersionInfoComponent
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
- ClassroomType
- rxjs
- FormComponent
- period-comparison-response-dto.ts
- student-schedules/use-cases/index.ts
- subject-demands.component.ts
- TeachersComponent
- build
- development
- @
- @
- state-routing.module.ts
- ScheduleMemoryService
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
- admin.module.ts
- ApiInterfaces
- ErrorHandler
- FormControlErrors
- HttpFormDataClient
- Logger
- Login
- Toast
- VersionDisplayComponent
- get-setcions.service.ts
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
- HttpInterceptorInterceptor
- delete-inscription.service.ts
- admin-routing.module.ts
- reset-password.component.ts
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
- teachers/profile/profile.module.ts
- RecoveryPasswordComponent
- .eslintrc.json
- ng-package.json
- subject-demand-store.service.ts
- DocumentsFileService
- find-document.service.ts
- lib/public-api.ts
- SchoolsComponent
- commit-msg
- dashboard-sdk/git_push.sh
- lib/git_push.sh
- settings-save-vm.ts
- environment.auditoria.ts
- environment.prod.ts
- RowActionTeacher

## God Nodes (most connected - your core abstractions)
1. `rxjs` - 170 edges
2. `UseCase` - 134 edges
3. `@angular/material` - 81 edges
4. `StudentSchedulesComponent` - 76 edges
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

## Communities (208 total, 24 thin omitted)

### Community 0 - "app-routing.module.ts"
Cohesion: 0.17
Nodes (7): AppRoutingModule, routes, NgModule, AuthGuard, Injectable, AuthLoginGuard, Injectable

### Community 1 - "teachers.module.ts"
Cohesion: 0.07
Nodes (22): src_app_repositories_departments_index_departmentvm, src_app_repositories_schools_index_schoolvm, TeacherMemoryService, Injectable, routes, TeachersRoutingModule, NgModule, TeachersService (+14 more)

### Community 3 - "admin.component.ts"
Cohesion: 0.23
Nodes (7): src_app_admin_data_index_menu, MENU, src_app_admin_models_index_optionmenu, optionMenu, src_app_common_user_state_index_userstatevm, src_app_common_version_index_versionservice, src_app_repositories_users_model_index_userrole

### Community 4 - "create-document.service.ts"
Cohesion: 0.14
Nodes (8): src_app_common_memory_repository_index_memoryrepository, src_app_repositories_documents_memory_index_memorydocumentsservice, MemoryDocumentsService, Injectable, CreateDocumentService, Injectable, DeleteDocumentService, Injectable

### Community 6 - "models.ts"
Cohesion: 0.05
Nodes (49): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateCareerDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateClassroomDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDepartmentDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CreateDocumentDto (+41 more)

### Community 7 - "StatisticsService"
Cohesion: 0.05
Nodes (26): StatisticsService, Inject, Injectable, Optional, CareerSectionStatItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ClassroomUsageItemDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+18 more)

### Community 8 - "ref_angular_core"
Cohesion: 0.11
Nodes (28): APIS, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+20 more)

### Community 9 - "app.module.ts"
Cohesion: 0.07
Nodes (25): @angular/platform-browser-dynamic, ref_error_handler, ref_http_form_data_client, ref_toast, AppModule, NgModule, GlobalPeriodModule, NgModule (+17 more)

### Community 10 - "DepartmentVM"
Cohesion: 0.13
Nodes (12): src_app_common_index_memoryrepository, Department2DepartmentItemVM(), Department2DepartmentVM(), src_app_repositories_departments_mappers_index_department2departmentitemvm, src_app_repositories_departments_mappers_index_department2departmentvm, src_app_repositories_departments_memory_index_departmentsmemoryservice, DepartmentBaseQuery, DepartmentVM (+4 more)

### Community 11 - "error-handler.module.ts"
Cohesion: 0.07
Nodes (27): AlertServiceService, Injectable, projects_error_handler_src_lib_alert_service_index_alertserviceservice, AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, projects_error_handler_src_lib_consts_index_alertmethotkey, projects_error_handler_src_lib_consts_index_alertservicekey (+19 more)

### Community 12 - "finished.component.ts"
Cohesion: 0.11
Nodes (16): src_app_repositories_users_index_user2useritemvm, src_app_repositories_users_index_useritemvm, src_app_student_schedules_mappers_index_inscription2inscriptionvm, inscription2InscriptionVM(), src_app_student_schedules_model_index_inscriptionvm, InscriptionBaseQuery, InscriptionVM, StageInscription (+8 more)

### Community 13 - "schedules.service.ts"
Cohesion: 0.06
Nodes (39): src_app_common_select_ex_index_selectexmodule, src_app_common_subject_demand_index_subjectdemandmodule, ActivePeriodService, Injectable, src_app_repositories_periods_use_cases_index_activeperiodservice, src_app_repositories_periods_use_cases_index_toplanperiodservice, ToPlanPeriodService, Injectable (+31 more)

### Community 14 - "StudentSchedulesService"
Cohesion: 0.14
Nodes (3): SavedSchedule, StudentSchedulesService, Injectable

### Community 15 - "find-section.service.ts"
Cohesion: 0.21
Nodes (9): src_app_repositories_sections_mappers_index_section2sectionvm, Section2SectionItemVM(), Section2SectionVM(), src_app_repositories_sections_model_index_sectionbasequery, FindSectionService, Injectable, src_app_repositories_subjects_index_subject2subjectitemvm, src_app_repositories_teachers_mappers_index_teacher2teachervm (+1 more)

### Community 16 - "@angular/forms"
Cohesion: 0.07
Nodes (16): @angular/forms, moment, AppComponent, Component, src_app_common_index_stateservice, StateService, Injectable, TableService (+8 more)

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

### Community 21 - "UseCase"
Cohesion: 0.06
Nodes (8): ListComponentService, Optional, MemoryRepository, src_app_common_memory_repository_models_index_paginationstatus, PaginationStatus, UseCase, GenerateReportService, Injectable

### Community 22 - "periods.module.ts"
Cohesion: 0.08
Nodes (18): src_app_repositories_periods_mappers_index_period2perioditemvm, src_app_repositories_periods_memory_index_periodmemoryservice, PeriodMemoryService, Injectable, CreatePeriodService, Injectable, DeletePeriodService, Injectable (+10 more)

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
Cohesion: 0.09
Nodes (24): src_app_repositories_schedules_index_intervals, src_app_repositories_schedules_index_schedulebasequery, src_app_repositories_sections_index_sectionvm, src_app_repositories_subjects_index_subjectbasequery, src_app_repositories_subjects_index_subjectitemvm, src_app_repositories_subjects_index_subjectsmodule, src_app_student_schedules_card_section_schedules_index_cardsectionschedulescomponent, src_app_student_schedules_card_subject_schedules_index_cardsubjectschedulescomponent (+16 more)

### Community 28 - "careers.module.ts"
Cohesion: 0.07
Nodes (26): CareersRoutingModule, NgModule, src_app_repositories_careers_mappers_index_career2careeritemvm, CareerMemoryService, Injectable, src_app_repositories_careers_memory_index_careermemoryservice, CareerBaseQuery, src_app_repositories_careers_model_index_careerbasequery (+18 more)

### Community 29 - "users/form/form.component.ts"
Cohesion: 0.25
Nodes (3): lodash, src_app_repositories_schools_index_schoolitemvm, src_app_repositories_users_model_index_user_roles

### Community 30 - "TeacherAcademicService"
Cohesion: 0.09
Nodes (7): AcademicComponent, fullName(), normalize(), Component, Inject, TeacherAcademicService, Injectable

### Community 31 - "Configuration"
Cohesion: 0.08
Nodes (20): home_anibal_projects_sigeit_projects_dashboard_sdk_api_api, home_anibal_projects_sigeit_projects_dashboard_sdk_model_models, ApiModule, NgModule, Optional, SkipSelf, Configuration, ConfigurationParameters (+12 more)

### Community 32 - "AuthService"
Cohesion: 0.07
Nodes (16): AuthService, Inject, Injectable, Optional, ChangePasswordDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ChangePasswordResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+8 more)

### Community 33 - "TogglePasswordViewComponent"
Cohesion: 0.09
Nodes (14): LoginModule, NgModule, projects_login_src_lib_toggle_password_view_index_togglepasswordviewmodule, TogglePasswordViewComponent, Component, HostBinding, HostListener, Input (+6 more)

### Community 34 - "create-user-student.service.ts"
Cohesion: 0.24
Nodes (4): CreateUserStudentService, Injectable, src_app_repositories_users_model_index_saveuser, SaveUser

### Community 35 - "SchedulesService"
Cohesion: 0.08
Nodes (12): src_app_common_timer_index_timevalidator, timeValidator(), clashHtml(), FormComponent, Component, Input, Output, src_app_repositories_schedules_model_index_intervalselect (+4 more)

### Community 36 - "SchoolItemVM"
Cohesion: 0.12
Nodes (14): RowActionDepartment, delete, update, src_app_repositories_schools_mappers_index_school2schoolvm, School2SchoolItemVM(), School2SchoolVM(), src_app_repositories_schools_model_index_schoolvm, RowActionSchool (+6 more)

### Community 37 - "ref_dashboard_sdk"
Cohesion: 0.17
Nodes (14): ref_dashboard_sdk, src_app_repositories_teachers_mappers_index_teacher2teacheritemvm, src_app_repositories_teachers_mappers_index_teachervm2teacherdto, Teacher2TeacherItemVM(), TeacherVM2TeacherDto(), src_app_repositories_teachers_memory_index_teachermemoryservice, src_app_repositories_teachers_model_index_teacherbasequery, src_app_repositories_teachers_model_index_teacheritemvm (+6 more)

### Community 39 - "dependencies"
Cohesion: 0.07
Nodes (28): dependencies, ajv-formats, @angular/animations, @angular/cdk, @angular/common, @angular/compiler, @angular/core, @angular/forms (+20 more)

### Community 40 - "departments.module.ts"
Cohesion: 0.07
Nodes (27): src_app_common_index_listcomponentservice, src_app_common_index_selectexmodule, src_app_common_index_tablemodule, TableModule, NgModule, DepartmentsRoutingModule, NgModule, DepartmentsService (+19 more)

### Community 41 - "BulkAcademicChargeModalComponent"
Cohesion: 0.25
Nodes (3): BulkAcademicChargeModalComponent, Component, Inject

### Community 42 - "ScheduleService"
Cohesion: 0.09
Nodes (17): ScheduleService, Injectable, AuditSummaryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ConflictPairDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, CoverageStatus, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+9 more)

### Community 43 - "📱 Sistema de Visualización de Versión - SIGEIT"
Cohesion: 0.08
Nodes (25): 📁 **Archivos Creados/Modificados**, **Archivos Modificados:**, 🎯 **Beneficios**, **Cambiar Estilos:**, 🚀 **Cómo Funciona**, 🔍 **Debugging**, **Display en Menú de Usuario**, **Flujo Automático:** (+17 more)

### Community 44 - "memory-repository/index.ts"
Cohesion: 0.07
Nodes (33): src_app_common_index_statemodule, src_app_common_memory_repository_index_usecase, ClassroomsRoutingModule, routes, NgModule, Classroom2ClassroomItemVM(), Classroom2ClassroomVM(), src_app_repositories_classrooms_mappers_index_classroom2classroomitemvm (+25 more)

### Community 45 - "documents/form/form.component.ts"
Cohesion: 0.21
Nodes (8): DocumentBaseQuery, DocumentVM, src_app_repositories_documents_model_index_typedocument, RowActionDocument, delete, update, TypeDocument, AcademicCharge

### Community 46 - "📋 Gestión de Versiones - SIGEIT"
Cohesion: 0.08
Nodes (24): 1. Desarrollo Normal, 2. Generar Nueva Versión, 📁 Archivos de Configuración, 📊 Changelog Automático, 🚀 Comandos Disponibles, Commit Message, Configuración de Commit Template, 🔧 Configuración del IDE (+16 more)

### Community 47 - "PeriodService"
Cohesion: 0.11
Nodes (10): PeriodService, Inject, Injectable, Optional, CreatePeriodDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponsePeriodDto (+2 more)

### Community 48 - "DayVM"
Cohesion: 0.08
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

### Community 53 - "CardSubjectSchedulesComponent"
Cohesion: 0.20
Nodes (4): CardSubjectSchedulesComponent, Component, Input, Output

### Community 54 - "settings.module.ts"
Cohesion: 0.08
Nodes (18): src_app_repositories_settings_mappers_index_setting2settingvm, Setting2SettingVm(), src_app_repositories_settings_model_index_settingvm, RowActionSetting, delete, update, SettingVM, SettingsComponent (+10 more)

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
Cohesion: 0.12
Nodes (12): src_app_common_table_model_index_optionaction, src_app_common_table_model_index_rowoptionvm, src_app_common_table_model_index_tabledatavm, OptionAction, RowOptionVM, TableDataVM, getSpanishPaginatorIntl(), TableComponent (+4 more)

### Community 59 - "ScheduleComponent"
Cohesion: 0.15
Nodes (4): FinishedComponent, Component, ScheduleComponent, Component

### Community 60 - "DayService"
Cohesion: 0.12
Nodes (10): DayService, Inject, Injectable, Optional, CreateDayDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDayDto (+2 more)

### Community 61 - "documents.module.ts"
Cohesion: 0.20
Nodes (10): src_app_common_memory_repository_index_listcomponentservice, src_app_common_table_index_tablemodule, DocumentsModule, NgModule, src_app_repositories_documents_memory_memory_documents_index_memorydocumentsservice, src_app_repositories_documents_use_cases_create_document_index_createdocumentservice, src_app_repositories_documents_use_cases_delete_document_index_deletedocumentservice, src_app_repositories_documents_use_cases_find_document_index_finddocumentservice (+2 more)

### Community 62 - "get-documents.service.ts"
Cohesion: 0.17
Nodes (11): src_app_repositories_departments_index_department2departmentitemvm, Document2DocumentItemVM(), Document2DocumentVM(), src_app_repositories_documents_mappers_index_document2documentitemvm, DocumentItemVM, src_app_repositories_documents_model_index_documentitemvm, src_app_repositories_documents_model_index_documentvm, GetDocumentsService (+3 more)

### Community 63 - "academic.module.ts"
Cohesion: 0.08
Nodes (23): src_app_common_state_index_statemodule, StateComponent, Component, HostBinding, Input, StateModule, NgModule, src_app_repositories_academic_academic_charge_teacher_index_academicchargeteachercomponent (+15 more)

### Community 65 - "production"
Cohesion: 0.10
Nodes (20): serve, production, port, aot, baseHref, browserTarget, budgets, buildOptimizer (+12 more)

### Community 66 - "PeriodVM"
Cohesion: 0.12
Nodes (8): Period2PeriodItemVM(), Period2PeriodVM(), PeriodItemVM, PeriodVM, PeriodsComponent, Component, GetPeriodsService, Injectable

### Community 67 - "teacher-degree.service.ts"
Cohesion: 0.08
Nodes (31): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, TeacherDegreeService, Injectable, CreateTeacherDegreeDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, DegreeLevel, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, GradeStatus (+23 more)

### Community 68 - "update-section.service.ts"
Cohesion: 0.12
Nodes (8): src_app_repositories_sections_memory_index_sectionmemoryservice, SectionMemoryService, Injectable, src_app_repositories_sections_model_index_sectionitemvm, RemoveSectionService, Injectable, Injectable, UpdateSectionService

### Community 69 - "AuditService"
Cohesion: 0.15
Nodes (11): AuditService, Inject, Injectable, Optional, AuditLogsPageDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, EntityAuditHistoryDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-… (+3 more)

### Community 70 - "InscriptionService"
Cohesion: 0.15
Nodes (8): InscriptionService, Inject, Injectable, Optional, CloseInscriptionDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseInscriptionDto

### Community 71 - "UserItemVM"
Cohesion: 0.09
Nodes (18): src_app_repositories_schools_index_school2schoolvm, src_app_repositories_teachers_index_teacher2teachervm, src_app_repositories_users_mappers_index_user2useritemvm, src_app_repositories_users_mappers_index_user2uservm, User2UserItemVM(), User2UserVM(), src_app_repositories_users_model_index_user_roles_value, src_app_repositories_users_model_index_useritemvm (+10 more)

### Community 72 - "user.service.ts"
Cohesion: 0.14
Nodes (10): NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, Inject, Injectable, Optional, UserService, CreateUserDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, UpdateUserDto (+2 more)

### Community 73 - "subjects.service.ts"
Cohesion: 0.06
Nodes (39): src_app_repositories_careers_index_getcareersservice, src_app_repositories_departments_index_departmentitemvm, src_app_repositories_subjects_form_index_formcomponent, src_app_repositories_subjects_mappers_index_subject2subjectitemvm, src_app_repositories_subjects_mappers_index_subject2subjectvm, Subject2SubjectItemVM(), Subject2SubjectVM(), src_app_repositories_subjects_memory_index_subjectmemoryservice (+31 more)

### Community 74 - "SectionsComponent"
Cohesion: 0.21
Nodes (5): SectionsComponent, Component, HostBinding, Input, Output

### Community 75 - "Componente de Vista General de Secciones"
Cohesion: 0.11
Nodes (18): API, Características, Columnas Dinámicas, Columnas Dinámicas, Componente de Vista General de Secciones, Dependencias, **Estilos Aplicados:**, Estructura de Datos (+10 more)

### Community 76 - "periods/model/index.ts"
Cohesion: 0.13
Nodes (15): src_app_repositories_periods_model_index_periodvm, src_app_repositories_periods_model_index_stage_periods, src_app_repositories_periods_model_index_stage_periods_value, src_app_repositories_periods_model_index_stageperiod, RowActionPeriod, delete, setActive, update (+7 more)

### Community 77 - "CareerItemVM"
Cohesion: 0.16
Nodes (9): Career2CareerItemVM(), Career2CareerVM(), src_app_repositories_careers_mappers_index_career2careervm, CareerItemVM, CareerVM, RowActionCareer, delete, update (+1 more)

### Community 78 - "AdminComponent"
Cohesion: 0.16
Nodes (3): AdminComponent, Component, UserStateVM

### Community 79 - "ConfirmModalComponent"
Cohesion: 0.22
Nodes (7): ConfirmModalComponent, Component, Inject, Output, ConfirmModalModule, NgModule, ModalMessageModel

### Community 80 - "SectionVM"
Cohesion: 0.17
Nodes (8): src_app_repositories_sections_mappers_index_section2sectionitemvm, src_app_repositories_sections_model_index_sectionvm, RowActionSection, delete, update, SectionVM, CreateSectionService, Injectable

### Community 81 - "sections-manage.component.ts"
Cohesion: 0.08
Nodes (38): @angular/router, src_app_common_index_computecoverage, src_app_common_index_sections_load_panel_key, src_app_common_index_subjectcoverage, src_app_common_index_subjectdemanddialogcomponent, src_app_common_index_subjectdemanddialogdata, src_app_common_index_subjectdemandstoreservice, src_app_common_index_subjectdemandsummary (+30 more)

### Community 82 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 83 - "sections.component.ts"
Cohesion: 0.07
Nodes (23): src_app_common_index_confirmmodalcomponent, src_app_common_index_optionaction, src_app_common_index_semesters, src_app_common_index_semestervm, src_app_common_index_tabledatavm, src_app_common_index_tableservice, CareersComponent, Component (+15 more)

### Community 84 - "DocumentService"
Cohesion: 0.17
Nodes (6): DocumentService, Inject, Injectable, Optional, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseDocumentDto

### Community 85 - "SubjectDemandService"
Cohesion: 0.15
Nodes (8): SubjectDemandService, Inject, Injectable, Optional, ImportSubjectDemandResultDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, ResponseSubjectDemandDto

### Community 86 - "TeacherPickerComponent"
Cohesion: 0.17
Nodes (6): fullName(), normalize(), TeacherPickerComponent, Component, Input, Output

### Community 87 - "GradeSearchComponent"
Cohesion: 0.12
Nodes (6): GradeSearchComponent, groupByTeacher(), normalize(), Component, Inject, Optional

### Community 88 - "classrooms.component.ts"
Cohesion: 0.12
Nodes (11): src_app_common_index_rowoptionvm, ClassroomsComponent, Component, ClassroomsService, Injectable, src_app_repositories_classrooms_form_index_formcomponent, src_app_repositories_classrooms_model_index_classroom_types, src_app_repositories_classrooms_model_index_rowactionclassroom (+3 more)

### Community 89 - "schools.module.ts"
Cohesion: 0.08
Nodes (21): src_app_repositories_schools_mappers_index_school2schoolitemvm, src_app_repositories_schools_memory_index_schoolmemoryservice, SchoolMemoryService, Injectable, src_app_repositories_schools_model_index_schoolitemvm, routes, SchoolsRoutingModule, NgModule (+13 more)

### Community 90 - "DepartmentItemVM"
Cohesion: 0.10
Nodes (8): DepartmentItemVM, FormComponent, Component, Inject, Input, Output, SubjectsComponent, Component

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
Nodes (4): isValidDemandConfig(), SubjectDemandStoreService, summarizeDemand(), Injectable

### Community 96 - "VersionService"
Cohesion: 0.23
Nodes (3): Inject, Injectable, VersionService

### Community 97 - "ReportConfigModalComponent"
Cohesion: 0.12
Nodes (3): ReportConfigModalComponent, Component, Inject

### Community 98 - "SectionItemVM"
Cohesion: 0.19
Nodes (9): SectionBaseQuery, SectionItemVM, CardSectionSchedulesComponent, Component, Input, checkSemester(), clash(), SemesterCheck (+1 more)

### Community 99 - "FormComponent"
Cohesion: 0.24
Nodes (4): FormComponent, Component, Input, Output

### Community 100 - "common/index.ts"
Cohesion: 0.12
Nodes (7): ArrayValidators, src_app_common_index_basequery, src_app_common_index_usecase, BaseQuery, src_app_repositories_periods_mappers_index_period2periodvm, FindPeriodService, Injectable

### Community 101 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 102 - "subject-demand.module.ts"
Cohesion: 0.24
Nodes (6): SubjectDemandDialogComponent, SubjectDemandDialogData, Component, Inject, SubjectDemandModule, NgModule

### Community 103 - "Sistema de Período Académico Global"
Cohesion: 0.14
Nodes (13): 1. En el Header Principal, 2. En Componentes Específicos, 3. Banner Local del Período, Características, Componentes, Dependencias, Estilos, GlobalPeriodService (+5 more)

### Community 104 - "users.service.ts"
Cohesion: 0.08
Nodes (27): ref_admin_sdk, src_app_common_memory_repository_index_basequery, src_app_repositories_careers_use_cases_index_getcareersservice, src_app_repositories_schools_index_getschoolsservice, src_app_repositories_users_memory_index_usermemoryservice, src_app_repositories_users_memory_index_usersmemoryservice, Injectable, UserMemoryService (+19 more)

### Community 105 - "periods.component.ts"
Cohesion: 0.21
Nodes (6): src_app_repositories_periods_form_index_formcomponent, src_app_repositories_periods_model_index_perioditemvm, src_app_repositories_periods_model_index_rowactionperiod, PeriodsRoutingModule, routes, NgModule

### Community 106 - "ScheduleItemVM"
Cohesion: 0.08
Nodes (22): src_app_repositories_classrooms_mappers_index_classroom2classroomvm, src_app_repositories_schedules_index_schedule2scheduleitemvm, Day2DayVM(), src_app_repositories_schedules_mappers_index_schedule2scheduleitemvm, src_app_repositories_schedules_mappers_index_schedule2schedulevm, Schedule2ScheduleItemVM(), Schedule2ScheduleVM(), src_app_repositories_schedules_memory_index_schedulememoryservice (+14 more)

### Community 107 - "FormComponent"
Cohesion: 0.18
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 108 - "FormComponent"
Cohesion: 0.19
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 109 - "FormComponent"
Cohesion: 0.11
Nodes (12): FormComponent, Component, Inject, Input, Output, UserRole, Administrator, Director (+4 more)

### Community 110 - "projects"
Cohesion: 0.15
Nodes (12): cli, analytics, architect, prefix, projectType, root, sourceRoot, newProjectRoot (+4 more)

### Community 111 - "options"
Cohesion: 0.22
Nodes (13): options, allowedCommonJsDependencies, assets, index, inlineStyleLanguage, main, outputPath, polyfills (+5 more)

### Community 112 - "toast.module.ts"
Cohesion: 0.27
Nodes (5): TOAST_OPTIONS, ToastModule, NgModule, @ngx-translate/core, toastr

### Community 114 - "auth.module.ts"
Cohesion: 0.17
Nodes (11): AuthRoutingModule, routes, NgModule, src_app_auth_login_index_logincomponent, src_app_auth_login_index_loginservice, src_app_auth_recovery_password_index_recoverypasswordcomponent, src_app_auth_reset_password_index_resetpasswordcomponent, src_app_auth_sign_up_index_signupcomponent (+3 more)

### Community 115 - "FormComponent"
Cohesion: 0.26
Nodes (4): FormComponent, Component, Input, Output

### Community 116 - "FormComponent"
Cohesion: 0.16
Nodes (5): FormComponent, Component, Inject, Input, Output

### Community 117 - "auditoria"
Cohesion: 0.17
Nodes (12): aot, baseHref, budgets, buildOptimizer, extractLicenses, fileReplacements, namedChunks, optimization (+4 more)

### Community 118 - "VersionInfoComponent"
Cohesion: 0.22
Nodes (5): Component, VersionInfoComponent, VersionInfo, VERSION_INFO, Window

### Community 119 - "DegreeFormComponent"
Cohesion: 0.11
Nodes (5): DegreeFormComponent, normalize(), Component, Input, Output

### Community 120 - "documents.component.ts"
Cohesion: 0.14
Nodes (10): src_app_common_table_index_optionaction, src_app_common_table_index_tabledatavm, src_app_common_table_index_tableservice, DocumentsComponent, Component, DocumentsRoutingModule, routes, NgModule (+2 more)

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

### Community 131 - "ClassroomType"
Cohesion: 0.33
Nodes (5): CLASSROOM_TYPES, ClassroomType, Classrroom, Laboratory, Virtual

### Community 132 - "rxjs"
Cohesion: 0.08
Nodes (27): @angular/material, rxjs, src_app_common_confirm_modal_index_confirmmodalcomponent, src_app_common_semester_index_semesters, src_app_common_semester_index_semestervm, SEMESTERS, SemesterVM, src_app_common_state_index_stateservice (+19 more)

### Community 133 - "FormComponent"
Cohesion: 0.13
Nodes (7): FormComponent, Component, Inject, Input, Output, PeriodsService, Injectable

### Community 134 - "period-comparison-response-dto.ts"
Cohesion: 0.26
Nodes (8): PeriodComparisonDeltaDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodComparisonResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, PeriodMetricResponseDto, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, NOTE: This class is auto generated by OpenAPI Generator (https://openapi-…, SubjectDemandIncreaseItemDto

### Community 136 - "subject-demands.component.ts"
Cohesion: 0.11
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

### Community 142 - "state-routing.module.ts"
Cohesion: 0.50
Nodes (3): routes, StateRoutingModule, NgModule

### Community 143 - "ScheduleMemoryService"
Cohesion: 0.16
Nodes (5): src_app_repositories_schedules_index_scheduleitemvm, ScheduleMemoryService, Injectable, DeleteScheduleService, Injectable

### Community 145 - "ToastService"
Cohesion: 0.20
Nodes (4): ToastService, Inject, Injectable, Optional

### Community 146 - "schedules/index.ts"
Cohesion: 0.07
Nodes (13): src_app_repositories_schedules_academic_charge_teacher_index_academicchargeteachercomponent, src_app_repositories_schedules_planned_schedules_index_plannedschedulescomponent, src_app_repositories_schedules_planning_audit_index_planningauditcomponent, PlanningAuditComponent, Component, ScheduleDetailsComponent, Component, Inject (+5 more)

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

### Community 153 - "planned-schedules.component.ts"
Cohesion: 0.19
Nodes (8): xlsx, src_app_common_global_period_index_globalperiodservice, ShiftRow, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfig, src_app_repositories_schedules_planned_schedules_report_config_modal_index_reportconfigmodalcomponent, sectionShift(), Shift, SHIFT_LABELS

### Community 154 - "admin.module.ts"
Cohesion: 0.24
Nodes (6): AdminModule, NgModule, AdminService, Injectable, src_app_common_version_index_versiondisplaycomponent, src_app_common_version_index_versioninfocomponent

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

### Community 162 - "VersionDisplayComponent"
Cohesion: 0.20
Nodes (7): Component, VersionDisplayComponent, 1. **Servicio de Versión (`VersionService`)**, 2. **Componente de Visualización (`VersionDisplayComponent`)**, 3. **Modal de Información (`VersionInfoComponent`)**, 4. **Inyección Automática de Versión**, 🎯 **Características Implementadas**

### Community 163 - "get-setcions.service.ts"
Cohesion: 0.20
Nodes (3): src_app_repositories_sections_index_section2sectionitemvm, src_app_repositories_sections_index_sectionbasequery, src_app_repositories_sections_index_sectionmemoryservice

### Community 164 - "login.service.ts"
Cohesion: 0.17
Nodes (4): LoginComponent, Component, LoginService, Injectable

### Community 165 - "SignUpComponent"
Cohesion: 0.16
Nodes (4): SignUpComponent, Component, SignUpService, Injectable

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

### Community 178 - "admin-routing.module.ts"
Cohesion: 0.32
Nodes (5): AdminRoutingModule, routes, NgModule, Component, WelcomeComponent

### Community 179 - "reset-password.component.ts"
Cohesion: 0.23
Nodes (3): ResetPasswordComponent, Component, passwordMatchValidator()

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
Cohesion: 0.12
Nodes (18): src_app_common_index_subjectdemandmodule, src_app_repositories_departments_index_departmentbasequery, src_app_repositories_periods_index_activeperiodservice, src_app_repositories_periods_index_toplanperiodservice, src_app_repositories_sections_sections_manage_index_sectionsmanagecomponent, src_app_repositories_sections_sections_overview_index_sectionsoverviewcomponent, routes, SectionsRoutingModule (+10 more)

### Community 190 - "teachers/profile/profile.module.ts"
Cohesion: 0.18
Nodes (8): DegreeDetailComponent, STATUS_LABELS, Component, Input, src_app_repositories_teachers_model_index_gradelabel, gradeLabel(), TeacherProfileModule, NgModule

### Community 191 - "RecoveryPasswordComponent"
Cohesion: 0.18
Nodes (6): @angular/platform-browser, ref_recovery_password_service, AuthModule, NgModule, RecoveryPasswordComponent, Component

### Community 192 - ".eslintrc.json"
Cohesion: 0.50
Nodes (3): ignorePatterns, overrides, root

### Community 193 - "ng-package.json"
Cohesion: 0.50
Nodes (3): lib, entryFile, $schema

### Community 194 - "subject-demand-store.service.ts"
Cohesion: 0.11
Nodes (23): LevelBar, SubjectDemandPanelComponent, Component, Input, attendedByLevel(), computeCoverage(), CoverageStatus, DEFAULT_DEMAND_CONFIG (+15 more)

### Community 195 - "DocumentsFileService"
Cohesion: 0.29
Nodes (4): DocumentsFileService, Injectable, Inject, Optional

### Community 196 - "find-document.service.ts"
Cohesion: 0.33
Nodes (4): src_app_repositories_documents_mappers_index_document2documentvm, src_app_repositories_documents_model_index_documentbasequery, FindDocumentService, Injectable

### Community 207 - "RowActionTeacher"
Cohesion: 0.33
Nodes (5): RowActionTeacher, academic, delete, profile, update

## Knowledge Gaps
- **541 isolated node(s):** `root`, `ignorePatterns`, `overrides`, `$schema`, `version` (+536 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1456 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **24 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `rxjs` connect `rxjs` to `app-routing.module.ts`, `teachers.module.ts`, `admin.component.ts`, `create-document.service.ts`, `models.ts`, `student-schedules/use-cases/index.ts`, `ref_angular_core`, `subject-demands.component.ts`, `DepartmentVM`, `finished.component.ts`, `schedules.service.ts`, `ScheduleMemoryService`, `@angular/forms`, `form-control-errors.directive.ts`, `package.json`, `http-form-data-client.service.ts`, `url-access-guard.guard.ts`, `UseCase`, `periods.module.ts`, `find-section.service.ts`, `teacher.service.ts`, `SelectExComponent`, `admin.module.ts`, `planned-schedules.component.ts`, `careers.module.ts`, `users/form/form.component.ts`, `student-schedules.service.ts`, `create-user-student.service.ts`, `SchedulesService`, `login.service.ts`, `SchoolItemVM`, `get-setcions.service.ts`, `ref_dashboard_sdk`, `departments.module.ts`, `memory-repository/index.ts`, `documents/form/form.component.ts`, `DayVM`, `delete-inscription.service.ts`, `reset-password.component.ts`, `settings.module.ts`, `RowOptionVM`, `sections.service.ts`, `get-documents.service.ts`, `subject-demand-store.service.ts`, `teacher-degree.service.ts`, `find-document.service.ts`, `PeriodVM`, `update-section.service.ts`, `UserItemVM`, `user.service.ts`, `subjects.service.ts`, `periods/model/index.ts`, `CareerItemVM`, `SectionVM`, `sections-manage.component.ts`, `sections.component.ts`, `classrooms.component.ts`, `schools.module.ts`, `common/index.ts`, `users.service.ts`, `periods.component.ts`, `ScheduleItemVM`, `VersionInfoComponent`, `documents.component.ts`?**
  _High betweenness centrality (0.132) - this node is a cross-community bridge._
- **Why does `@angular/material` connect `rxjs` to `teachers.module.ts`, `admin.component.ts`, `subject-demands.component.ts`, `app.module.ts`, `schedules.service.ts`, `@angular/forms`, `package.json`, `schedules/index.ts`, `periods.module.ts`, `SelectExComponent`, `admin.module.ts`, `planned-schedules.component.ts`, `careers.module.ts`, `users/form/form.component.ts`, `student-schedules.service.ts`, `SchedulesService`, `departments.module.ts`, `memory-repository/index.ts`, `documents/form/form.component.ts`, `DayVM`, `reset-password.component.ts`, `settings.module.ts`, `RowOptionVM`, `documents.module.ts`, `sections.service.ts`, `academic.module.ts`, `teachers/profile/profile.module.ts`, `subjects.service.ts`, `periods/model/index.ts`, `ConfirmModalComponent`, `sections-manage.component.ts`, `sections.component.ts`, `TeacherPickerComponent`, `classrooms.component.ts`, `schools.module.ts`, `subject-demand.module.ts`, `users.service.ts`, `periods.component.ts`, `ScheduleItemVM`, `auth.module.ts`, `VersionInfoComponent`, `documents.component.ts`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `Configuration` connect `ref_angular_core` to `models.ts`, `StatisticsService`, `DefaultService`, `teacher.service.ts`, `AuthService`, `ApiModule`, `PeriodService`, `SchoolService`, `SectionService`, `DayService`, `teacher-degree.service.ts`, `AuditService`, `InscriptionService`, `user.service.ts`, `DocumentService`, `SubjectDemandService`, `CareerService`, `ClassroomService`, `DepartmentService`, `SubjectService`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `root`, `ignorePatterns`, `overrides` to the rest of the system?**
  _541 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `teachers.module.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.070578231292517 - nodes in this community are weakly interconnected._
- **Should `create-document.service.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `StudentSchedulesComponent` be split into smaller, more focused modules?**
  _Cohesion score 0.06533575317604355 - nodes in this community are weakly interconnected._