# Reglas de desarrollo - Sigeit (frontend)

Seguir siempre `.cursor/rules/app.mdc`: es la fuente única de reglas, compartida con Cursor.
Resumen (el detalle está en ese archivo):

- Código en inglés (nombres, archivos, carpetas, rutas); comentarios y documentación en español.
- Todo documentado con JSDoc en español; la lógica no trivial, comentada.
- Lógica de negocio en servicios o funciones puras; los componentes solo gestionan la vista.
- Componentes reutilizables; no se crean componentes de un solo uso sin justificación.
- Sin código duplicado ni muerto; métodos de 50 líneas como máximo; sin `any`.
- Suscripciones canceladas, sin `subscribe` anidados, `trackBy` en listas.
- Seguridad: permisos en el backend, nada sensible en storage, sin `innerHTML` con datos del usuario.
- Estilos en `rem`; filtros de listas en la URL; API solo con `dashboard-sdk`.

Antes de modificar algo, leer `docs/CHANGELOG.md` (qué se cambió y por qué) y, al terminar,
añadir ahí el cambio en el mismo commit.

Para desarrollar y revisar con estas reglas, usar la skill `sigeit-standards`
(`.claude/skills/sigeit-standards/SKILL.md`).
