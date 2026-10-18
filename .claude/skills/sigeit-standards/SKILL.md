---
name: sigeit-standards
description: Estándares de desarrollo y revisión del frontend Sigeit (Angular). Úsala al crear o modificar código del proyecto, y al revisar seguridad, rendimiento, duplicación, código muerto, documentación, idioma de los nombres, reparto de lógica entre servicios y componentes, o reutilización de componentes.
---

# Estándares Sigeit

Las reglas están en `.cursor/rules/app.mdc` (fuente única). Esta skill dice **cómo**
aplicarlas al desarrollar y **cómo comprobarlas** al revisar.

## Al desarrollar

1. **Antes de escribir:**
   - Leer `docs/CHANGELOG.md` para conocer los cambios y decisiones previos de esa parte.
   - Buscar lo que ya existe y reutilizarlo: `graphify query "<tema>"`, `common/`
     (tabla, `select-ex`, `url-query`, `confirm-modal`), servicios del módulo y del SDK.
   - Decidir dónde va cada cosa: la lógica en un servicio o función pura, y en el
     componente solo la vista.
2. **Al escribir:**
   - Nombres en inglés, comentarios y JSDoc en español.
   - JSDoc en cada clase, interfaz, método, función y propiedad pública.
   - Métodos de 50 líneas como máximo; sin `any`; suscripciones canceladas; sin
     `subscribe` anidados; `trackBy` en listas; medidas en `rem`.
   - Llamadas a la API solo con `dashboard-sdk`.
   - Filtros de listas en la URL (`writeUrlQuery`).
3. **Antes del commit:**
   - Ejecutar las comprobaciones de abajo sobre los archivos tocados.
   - Borrar el código que haya quedado sin uso.
   - Añadir el cambio a `docs/CHANGELOG.md` (qué, por qué, nuevo, eliminado).
   - `graphify update .`.
   - Commit con asunto en minúscula.

## Al revisar (checklist)

Por cada archivo cambiado, o por todo el proyecto si se pide una auditoría:

| Área | Qué comprobar |
|---|---|
| Seguridad | `[innerHTML]` con datos del usuario, `bypassSecurityTrust*`, datos sensibles en storage, `JSON.parse` sin `try/catch`, URLs o claves en el código, permisos que solo valida la UI |
| Rendimiento | suscripciones sin cancelar, `subscribe` anidados, peticiones en bucle, `*ngFor` sin `trackBy`, getters costosos en plantillas |
| Duplicación | funciones o bloques repetidos entre archivos; componentes casi iguales |
| Código muerto | archivos, exports, métodos, variables, imports o estilos sin uso; código comentado; `console.*` |
| Documentación | JSDoc en español en clases, métodos y propiedades públicas; comentarios del porqué en la lógica no trivial |
| Idioma | identificadores, archivos, carpetas, rutas y claves en inglés y bien escritos |
| Arquitectura | lógica de negocio en componentes que debería estar en servicios; componentes de un solo uso sin justificación; métodos > 50 líneas; componentes > 300 líneas; `any` |

Cada hallazgo se informa con la ruta y la línea, la gravedad (crítica, alta, media o
baja) y la corrección propuesta.

## Comprobaciones automáticas

```bash
# Variables, parámetros e imports sin usar
npx tsc --noEmit -p tsconfig.app.json --noUnusedLocals --noUnusedParameters

# Vulnerabilidades en dependencias de producción
npm audit --omit=dev

# Seguridad: HTML sin sanear, bypass, eval y logs
grep -rnE "innerHTML|bypassSecurity|eval\(|new Function\(|console\.(log|debug|info)" src/app --include='*.ts' --include='*.html'

# Tipado débil
grep -rnE ":\s*any\b|as any\b" src/app --include='*.ts' | grep -v spec

# Archivos .ts más grandes (candidatos a dividir)
find src/app -name '*.ts' ! -name '*.spec.ts' | xargs wc -l | sort -rn | head -15
```

Para detectar duplicación entre dos archivos sospechosos (por ejemplo, componentes
parecidos), compararlos con `difflib.SequenceMatcher` de Python sobre las líneas sin
espacios, y contar los bloques iguales de 5 líneas o más.
