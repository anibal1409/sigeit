# Registro de cambios y decisiones — Sigeit (frontend)

Qué se cambió, qué se eliminó, qué se agregó y **por qué**. Sirve a las personas del
equipo y a los asistentes (Cursor y Claude) para entender el estado del código antes
de modificarlo.

**Cómo mantenerlo:** cada cambio funcional, eliminación o decisión de diseño se añade
arriba, con fecha, en el mismo commit que el cambio. Los commits dicen *qué*; este
archivo explica el *porqué* y cómo encaja cada pieza.

---

## 2026-10-18

### Seguridad y permisos de la UI (fase 1 de la auditoría + requisitos del backend)

- **Interceptor** (`common/http-interceptor`):
  - Cierra la sesión ante **cualquier 401** y ante el 403 `Inactive or deleted user.`
    (usuario desactivado o eliminado). Antes solo cerraba si el 401 traía uno de tres
    mensajes en español, y un usuario eliminado quedaba dentro viendo errores.
  - Ante cualquier otro **403** muestra "No tiene permiso para esta acción".
  - Ignora las peticiones a `/auth/`: el login con credenciales erróneas también da 401.
  - **Convención:** las pantallas no tratan 401/403; en sus `error:` usan
    `isHandledHttpError(error)` (`common/http-interceptor/http-errors.ts`) para no
    duplicar el aviso.
- **Guard de rol** (`admin/role.guard.ts`): impide entrar por URL a secciones que el rol
  no tiene en el menú y lleva a `/dashboard`. Solo mira el primer segmento bajo
  `/dashboard`, porque `scheludes/academic-charge` comparte nombre con la opción
  "Carga Académica". El menú y el guard usan la misma matriz (`MENU` en
  `admin/data/menu.ts`, con `menuForRole` y `canAccessSection`), que debe coincidir con la
  de la API.
- **Formatos para el jefe de departamento:** se añadió `HeadDepartment` al menú. Su
  departamento ya queda fijo en el formulario y la API le devuelve la lista filtrada.
- **Modal de confirmación sin HTML:** ya no usa `[innerHTML]`. El cuerpo es texto con
  `**negrita**` y `\n` para separar párrafos (`parseBoldText` en `common/text`, también
  usado por las plantillas de documentos). Los 15 mensajes que usaban `<strong>` y la
  lista de choques de horarios (antes `<ul><li>`, ahora viñetas `•`) se adaptaron.
  Motivo: los nombres escritos por el usuario no deben interpretarse como marcado.
- **`UserStateService`:** lee `localStorage` una sola vez (antes parseaba en cada
  `getRole()` o `getDepartmentId()`), con `try/catch`, porque un valor corrupto impedía
  arrancar la app. Se eliminaron `getUser$()` (su única suscripción, en el panel, no
  aportaba nada) y el `getUserStorage()` público.
- **Números de oficio (modal masivo):**
  - El número inicial no puede ser menor que el siguiente disponible.
  - El año de la fecha debe estar entre el del último oficio emitido y el actual.
  - Los 400 de la API se muestran traducidos (`officeNumberErrorMessage`).
  - El rol Profesor no llega a esta pantalla por el guard de rol.
- **Lint:** se instalaron `@angular-eslint` 16 y `@typescript-eslint` 5, se añadió el
  target `lint` en `angular.json` y se corrigió `.eslintrc.json` (le faltaba el prefijo
  `plugin:`). Se aplicó `ng lint --fix`. Quedan 28 errores y 296 avisos (sobre todo
  `any`) para la fase 2.
- **Pruebas:** `admin/data/menu.spec.ts` (matriz de permisos) y
  `common/text/bold-text.spec.ts` (que no se interprete HTML). Karma no arranca porque
  hay specs antiguos que no compilan (ver *Pendientes*); la misma lógica se comprobó
  compilando esos archivos y ejecutándolos con Node.
- **Corrección de la auditoría:** `ConfirmModalModule` **no** es código muerto: aunque
  nadie lo importa, declara `ConfirmModalComponent`, e Ivy lo necesita para compilar
  su plantilla.

### Inscripción de estudiantes eliminada del frontend (`5f457c9`, `cfc5260`)

- **Qué:** se quitaron el menú y la ruta `/dashboard/inscription`, las pantallas de
  inscripción finalizada (`student-schedules/finished`) y de horario inscrito
  (`student-schedules/schedule`), los modelos `inscription-*` y `stage`, el mapper de
  inscripciones y los casos de uso `create/update/delete/find/get/close-inscription`.
  El SDK se regeneró sin inscripciones ni `section.inscribed`.
- **Por qué:** la inscripción dejó de formar parte del sistema. "Horarios"
  (`/dashboard/schedules-students`) queda solo para consultar horarios y armar
  combinaciones sin choques.

### Formatos de documento (`/dashboard/formats`) — `77be1ac`, `41bab94`, `b083e17`

- **Qué:** un *formato* es la plantilla de texto de un tipo de documento para un
  departamento. Por ahora el único tipo es `academic_charge` (carta de carga académica).
  - Lista con nombre, tipo, departamento y estado. El administrador filtra por
    departamento (el filtro va en la URL); el jefe de departamento solo ve el suyo
    (lo garantiza el backend).
  - El formulario es una página (`/formats/form?id=`): nombre, tipo, departamento
    (fijo para el jefe de departamento), activo, **cuerpo** y **firma** con botones para
    insertar variables y una vista previa en vivo.
- **Formato del texto** (`documents/model/document-template.ts`):
  - Cada línea es un párrafo; una línea vacía deja un espacio; `**texto**` va en negrita.
  - Variables de `academic_charge`: `{profesor}`, `{periodo}`, `{horas}`,
    `{departamento}` y `{tabla}`, que marca dónde va la tabla de horarios y es
    obligatoria.
  - En la firma, las líneas que empiezan por `C.c.` van a la izquierda y en letra
    pequeña, como en la carta original.
  - `DEFAULT_TEMPLATES` es el texto por defecto: se usa al crear un formato y al generar
    la carta si el departamento no tiene formato activo.
- **Solo un formato activo por departamento y tipo:** al activar uno, el backend
  desactiva los demás.
- **Eliminado:** el campo `description` (guardaba texto como JSON con doble
  serialización); `CUSTOM_ELEMENTS_SCHEMA` del módulo, porque ocultaba errores de
  plantilla.
- **Nuevo:** `document-template.ts` (variables, plantillas por defecto, `fillTemplate`,
  `parseTemplateLine`), `document-2-document-dto.ts`.
- **`TypeDocument`:** del SDK solo se toma el **tipo**; el valor se define en
  `documents/model/type-document.ts`. Reexportarlo desde el SDK hacía que el dev server
  descartara el valor y fallara la compilación.

### Correlativos de oficio por departamento — `709d298`

- **Qué:** en Configuración, tarjeta "Correlativos de oficio" con una fila por
  departamento: prefijo (p. ej. `DIS`), último número del año, próximo código y si la
  generación masiva **pide** el número inicial.
- **Por qué:** antes el número de oficio vivía en `sessionStorage`: se perdía al cerrar
  el navegador, siempre arrancaba en 248 y dos usuarios podían emitir el mismo número.
  Cada departamento lleva su propio correlativo.
- **Reglas (backend):** se reinicia cada año. Los números se **reservan** con
  `POST /setting/department/:id/office-numbers` dentro de una transacción con bloqueo de
  fila, así nunca se repiten. El código se arma en el backend:
  `PREFIJO-NNN/AAAA` (p. ej. `DIS-249/2026`).

### Carta de carga académica desde el formato — `2170be2`

- **Qué** (`schedules/academic-charge-teacher`):
  - El cuerpo y la firma salen del formato activo del departamento elegido
    (`GET /document/active`); si no hay (404), se usa `DEFAULT_TEMPLATES`.
  - El encabezado toma la escuela y el departamento de la base de datos; antes decía
    siempre "Ingeniería de Sistemas".
  - El número de oficio se reserva en el backend antes de generar (individual: 1;
    masiva: uno por profesor).
  - El modal masivo muestra el número inicial solo si el departamento tiene
    "pedir en masiva"; si no, el backend asigna los siguientes.
  - La tabla de horarios está en `buildChargeTable` y se inserta donde el formato tiene
    `{tabla}`.
- **Eliminado:** `sessionStorage('codeDepartment')`, `formatDisCode`, todos los textos
  fijos de la carta (incluida la firma de "Prof. MSc. Roger Díaz").
- **Importante:** Ingeniería de Sistemas debe crear su formato con su firma; sin él,
  sus cartas salen con el texto genérico ("Jefe(a) de Departamento").

### Configuración conectada a la API — `d62eb25`

- **Qué:** `/dashboard/settings` funciona como página: carga y guarda con
  `SettingService` del SDK (`GET`/`PATCH /setting`), valida horas (`type="time"`), que la
  salida sea posterior a la entrada y los rangos de duración (1–240 min) e intervalo
  (0–60 min).
- **Por qué:** antes pedía `http://localhost:3000/settings/1` (no existía en el backend),
  el botón Guardar no hacía nada y era un modal abierto como página.
- **Valores por defecto de periodos:** el formulario de **periodo nuevo** toma de aquí
  la duración, el intervalo y las horas. Si la API falla, quedan los valores fijos
  (07:00, 45 min, 5 min). El horario que se usa para planificar sigue siendo el de cada
  periodo.
- **Eliminado:** casos de uso `find-setting`, `settings-save-vm`, `RowActionSetting`, el
  método `open()` del modal y el import directo de `SettingsModule` en `AdminModule`.

### Filtros de las listas en la URL — `f6be70d`

- **Qué:** búsqueda, página, tamaño y orden de la tabla compartida (`sigeit-table`) y los
  filtros propios de cada pantalla (departamento, semestre, asignatura, sección,
  agrupación, pestaña de itinerarios, etc.) se guardan en la URL.
- **Por qué:** al recargar, la pantalla vuelve a donde estaba y el enlace se puede
  compartir.
- **Cómo:** `common/url-query.ts` (`writeUrlQuery`, `readUrlNumber`). Escribe con
  `replaceUrl` (no llena el historial) y `queryParamsHandling: 'merge'`. En las cascadas
  (departamento → semestre → asignatura → sección) el valor de la URL queda *pendiente*
  y se aplica cuando llega la lista correspondiente.
- **Excepciones:** los componentes abiertos como modal no tocan la URL; el departamento
  no se escribe si el usuario ya tiene uno asignado.
- **Regla:** toda lista nueva con filtros debe usar este mecanismo.

### Otras asignaturas en el mismo bloque horario — `a3b60c7`, `9ad1e3e`

- **Qué:** en el detalle de horario, cada bloque tiene un botón que muestra qué otras
  asignaturas **empiezan a la misma hora el mismo día** en otras aulas (la hora de fin
  puede variar). Se consulta al pulsar y se guarda en memoria.
- **Arreglo asociado:** la API devuelve `period`, `day`, `classroom` y `section` como
  objetos, sin las columnas `*Id`. `Schedule2ScheduleVM` ahora toma el id de la relación
  cuando falta; esto también arregla cualquier pantalla que dependiera de esos ids.

### Horario semanal en el perfil y diálogos a 90vh — `3dda440`

- El perfil del profesor muestra su horario de la semana. Los diálogos de perfil y de
  detalle de horario usan tamaños comunes (`PROFILE_DIALOG`, `SCHEDULE_DETAILS_DIALOG`).

### Reglas y skill del proyecto — `ca42695` y siguientes

- `.cursor/rules/app.mdc` es la fuente única de reglas (Cursor la aplica siempre;
  `CLAUDE.md` apunta a ella).
- `.claude/skills/sigeit-standards/SKILL.md` (enlazada en `.cursor/skills/`) explica cómo
  desarrollar y revisar con esas reglas.

---

## Contratos con el backend (`sigeit-api`)

| Endpoint | Uso en el frontend |
|---|---|
| `GET`/`PATCH /setting` | Configuración general; `PATCH` solo Administrador |
| `GET /setting/department` | Lista de correlativos (Configuración) |
| `GET`/`PATCH /setting/department/:id` | Correlativo de un departamento (modal masivo / Configuración) |
| `POST /setting/department/:id/office-numbers` | Reserva números de oficio `{ count, year, start? }` |
| `GET /document?departmentId=&type=` | Lista de formatos |
| `GET /document/active?departmentId=&type=` | Formato activo; 404 si no hay |
| `POST`/`PATCH`/`DELETE /document` | Gestión de formatos (Administrador o jefe del departamento) |

Tras cambiar el backend: `npm run build:client:full` en `sigeit-api` regenera
`projects/dashboard-sdk`.

## Pendientes

- **Seguridad (backend):** la mayoría de los endpoints no comprueban el rol; solo
  `setting` y `document`. Hace falta un guard de roles global.
- **Backend:** antes de desplegar, migración de `document` (`description` →
  `body` + `signature`, `department` obligatorio).
- **Pantallas sin desarrollar (la API ya está lista):** Estadísticas (`StatisticsService`,
  contrato en `sigeit-api/src/repositories/statistics/FRONTEND_CHARTJS_CONTRACT.md`),
  Auditoría de cambios (`AuditService`, solo Administrador) y Perfil (hoy muestra
  `profile works!`).
- **Auditoría del 2026-10-18** (ver la skill `sigeit-standards` para repetirla):
  1. ~~Seguridad del frontend~~ (hecho, ver arriba).
  2. Código muerto y fugas (incluye arreglar los specs que no compilan, p. ej. los que
     importan `admin-sdk` o servicios inexistentes, para que `ng test sigeit` vuelva a
     funcionar): exports sin uso, 53 variables sin usar, `console.*`,
     `ngOnDestroy` ausente en `planned-schedules` y `sections-overview`, `subscribe`
     anidados.
  3. Duplicación: tabla agrupada repetida en `planned-schedules` y `sections-overview`
     (263 líneas), itinerarios por aula y por día, `normalize`/`fullName`, carga de
     catálogos.
  4. Lógica a servicios: generador del `.docx` de carga académica y detección de choques
     de `student-schedules`.
  5. Nombres en inglés (`scheludes`, `schelude-*`, `getDepartaments`, `carrerId`) y
     JSDoc.
  6. Dependencias: Angular 16 sin soporte, `xlsx` 0.18.5 y `lodash` con vulnerabilidades.
