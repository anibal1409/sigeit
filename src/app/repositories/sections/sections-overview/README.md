# Componente de Vista General de Secciones

Este componente proporciona una vista general de todas las secciones académicas de un departamento, mostrando información detallada sobre asignaturas, secciones, profesores y capacidad.

## Características

- **Filtrado por departamento**: Permite seleccionar un departamento específico para ver sus secciones
- **Agrupación flexible**: Permite agrupar las secciones por:
  - Semestre
  - Profesor
- **Columnas dinámicas**: Las columnas se adaptan según el tipo de agrupación:
  - **Agrupado por semestre**: No se muestra la columna semestre (redundante)
  - **Agrupado por profesor**: Se muestra la columna semestre para diferenciar asignaturas
- **Información completa**: Muestra:
  - Código de la asignatura
  - Nombre de la asignatura
  - Semestre (solo cuando se agrupa por profesor)
  - Nombre de la sección
  - Profesor asignado
  - Capacidad total
- **Exportación**: Permite descargar la información en formato Excel con columnas dinámicas
- **Navegación**: Botón para volver al dashboard de secciones

## Uso

### Navegación
El componente está disponible en la ruta: `/dashboard/sections/overview`

### Filtros
1. **Departamento**: Selecciona el departamento del cual quieres ver las secciones
2. **Agrupación**: Elige si quieres agrupar por semestre o por profesor

### Columnas Dinámicas
- **Agrupación por Semestre**: 
  - Código, Asignatura, Sección, Profesor, Capacidad
  - La columna semestre se oculta automáticamente
- **Agrupación por Profesor**:
  - Código, Asignatura, Semestre, Sección, Profesor, Capacidad
  - Se muestra la columna semestre para diferenciar asignaturas del mismo profesor

### Funcionalidades
- **Expandir/Colapsar grupos**: Haz clic en los encabezados de grupo para expandir o colapsar
- **Información inteligente**: Los campos repetidos se muestran vacíos para evitar redundancia visual
- **Descargar Excel**: Usa el botón de descarga para exportar la información con columnas adaptadas y formato profesional
- **Volver**: Usa el botón de volver para regresar al dashboard

## Reporte Excel

El componente genera reportes Excel profesionales con las siguientes características:

### **Formato del Reporte:**
1. **Título Principal**: "SECCIONES ACADEMICAS [DEPARTAMENTO]-[PERIODO]"
2. **Información del Departamento**: Nombre del departamento, período y fecha de generación
3. **Grupos Organizados**: Cada grupo (semestre o profesor) tiene su propio encabezado
4. **Columnas Dinámicas**: Se adaptan según el tipo de agrupación seleccionada
5. **Resumen Final**: Total de secciones incluidas en el reporte

### **Estilos Aplicados:**
- **Título Principal**: Fondo azul (#4684FF) con texto blanco y centrado
- **Encabezados de Grupo**: Fondo naranja (#FF6600) con texto blanco y centrado
- **Headers de Columnas**: Fondo azul (#4684FF) con texto blanco y centrado
- **Información del Departamento**: Fondo azul claro (#E3F2FD) con texto azul
- **Resumen Final**: Fondo verde (#28A745) con texto blanco y centrado
- **Ancho de Columnas**: Optimizado para mejor legibilidad
  - **Asignatura y Profesor**: 5 veces más anchas para mejor visualización del texto
  - **Otras columnas**: Tamaño estándar para mantener la proporción

### **Nombre del Archivo:**
El archivo se descarga con un nombre descriptivo que incluye:
- Período académico
- Tipo de reporte (secciones académicas)
- Abreviatura del departamento
- Fecha y hora de generación

**Ejemplo**: `2024-1_secciones_academicas_IS_15-12-2024_14-30.xlsx`

## Dependencias

- Angular Material (tabla, formularios, botones, iconos)
- Componente SelectEx para selección de departamentos
- Servicio de secciones para obtener datos
- Servicio de estado para manejo de loading
- Servicio de usuario para obtener información del usuario actual

## Estructura de Datos

El componente espera que las secciones tengan la siguiente estructura:
```typescript
interface SectionData {
  id: number;
  subject: {
    code: string;
    name: string;
    semester: number;
  };
  name: string; // nombre de la sección
  teacher: {
    firstName: string;
    lastName: string;
  };
  capacity: number;
}
```

## Lógica de Visualización

### Columnas Dinámicas
- **Agrupación por Semestre**: 
  - Código, Asignatura, Sección, Profesor, Capacidad
  - La columna semestre se oculta automáticamente
- **Agrupación por Profesor**:
  - Código, Asignatura, Semestre, Sección, Profesor, Capacidad
  - Se muestra la columna semestre para diferenciar asignaturas del mismo profesor

### Evitar Información Repetida
El componente implementa una lógica inteligente para evitar mostrar información redundante:
- **Código de asignatura**: Solo se muestra en la primera fila de cada asignatura
- **Nombre de asignatura**: Solo se muestra cuando cambia la asignatura
- **Semestre**: Solo se muestra cuando cambia el semestre (si está visible)
- **Sección**: Solo se muestra cuando cambia la sección
- **Profesor**: Solo se muestra cuando cambia el profesor
- **Capacidad**: Solo se muestra cuando cambia la capacidad

Esto resulta en una vista más limpia y fácil de leer, especialmente cuando hay múltiples secciones de la misma asignatura.

## API

El componente utiliza el endpoint existente:
- `GET /section/period/{periodId}` con filtros opcionales para departamento, semestre, etc.

## Permisos

Este componente está disponible para usuarios con los siguientes roles:
- Administrator
- Director
- HeadDepartment
- Planner 