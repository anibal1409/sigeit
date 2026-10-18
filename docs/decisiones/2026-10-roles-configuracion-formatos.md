# Roles, configuración, formatos e inscripción (octubre 2026) — frontend

Qué cambió en el frontend, por qué, y qué se eliminó. El detalle de la API está
en `sigeit-api/docs/decisiones/2026-10-roles-configuracion-formatos.md`.

Rama: `feat/api`.

---

## 1. SDK (`projects/dashboard-sdk`)
- Se regenera desde la API con `npm run build:client:full` en `sigeit-api`. No editarlo a mano.
- Nuevo: `SettingService` (configuración del instituto, correlativo por departamento, reserva de números de oficio), `TypeDocument`, y `body`/`signature` en los DTOs de formatos.
- Eliminado: `InscriptionService`, sus DTOs y `inscribed` en `ResponseSectionDto`.

## 2. Inscripción eliminada
- **Por qué:** la inscripción no funcionaba y se decidió quitarla en la API y el frontend.
- **Se quitó:** menú y ruta `/dashboard/inscription`; pantallas `finished` (inscripción finalizada) y `schedule` (horario inscrito); casos de uso `create/update/delete/find/get/close-inscription`; modelos `InscriptionVM`, `InscriptionBaseQuery`, `StageInscription`; el mapper; los botones Validar/Anular/Cerrar inscripción y su CSS; `validateId` en `SectionItemVM`.
- **Se conserva:** "Horarios" (`/dashboard/schedules-students`) para consultar la oferta, armar combinaciones, verificar el semestre y guardar horarios en el navegador. Sigue disponible para el estudiante.

## 3. Permisos: lo que ahora exige la API
La API aplica roles en todas las rutas (sin `@AllowRoles`, las escrituras son solo del Administrador). El menú (`admin/data/menu.ts`) debe coincidir:

| Qué | Roles |
|---|---|
| Escuelas, departamentos, carreras, materias, aulas, períodos, usuarios, demanda, configuración | Admin |
| Planificación (horarios y secciones), estadísticas | Admin, Director, Jefe de departamento*, Planificador |
| Profesores, títulos y notas | Admin, Director, Jefe de departamento |
| Formatos | Admin, Jefe de departamento* |
| Reservar números de oficio | Admin, Director, Planificador, Jefe de departamento* |
| Consultas | Cualquier rol con sesión |

\* Solo su propio departamento. Si se muestra algo que la API no permite, el usuario recibe `403`.

## 4. Reglas al consumir la API
- No enviar campos de más (`id`, `createdAt`, `deleted`…) en setting, document ni correlativo: la API responde `400`. Usar mappers que envíen solo los campos del DTO, como `Document2DocumentDto` y `Setting2SettingVm`.
- Reserva de números: `start` debe superar el último emitido y `year` estar entre el último año emitido y el actual; si no, `400`.
- `GET /document/active` responde `404` cuando no hay formato activo: usar el texto por defecto.

## 5. Pendiente
- Cerrar sesión cuando la API responda `403 "Inactive or deleted user."` (hoy el interceptor solo lo hace con `401`).
- Toast genérico ante `403` en el interceptor.
- Jefe de departamento en Planificación: no permitir editar horarios de otro departamento.
- Formatos para el jefe de departamento (menú y departamento fijo).
- Ocultar la generación de oficios al rol Profesor (la API responde `403`).
- Pantallas sin desarrollar: Estadísticas, Auditoría de cambios, Perfil.
