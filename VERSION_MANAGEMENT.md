# 📋 Gestión de Versiones - SIGEIT

Este documento explica cómo usar el sistema de manejo de versiones implementado en el proyecto SIGEIT.

## 🚀 Comandos Disponibles

### Generación de Versiones

```bash
# Generar nueva versión automáticamente (recomendado)
npm run release

# Generar versión específica
npm run release:major    # 1.0.0 -> 2.0.0
npm run release:minor    # 1.0.0 -> 1.1.0  
npm run release:patch    # 1.0.0 -> 1.0.1

# Ver qué cambios se harían sin ejecutarlos
npm run release:dry
npm run version:check
```

### Verificación y Documentación

```bash
# Generar solo el changelog sin crear versión
npm run changelog

# Ejecutar linting
npm run lint
```

## 📝 Convención de Commits

Todos los commits deben seguir el formato [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[pie opcional]
```

### Tipos de Commit

- **feat**: Nueva funcionalidad
- **fix**: Corrección de bug
- **docs**: Documentación
- **style**: Cambios de formato (espacios, comas, etc.)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o corregir tests
- **chore**: Cambios en herramientas, configuración, etc.
- **build**: Cambios en el sistema de build
- **ci**: Cambios en CI/CD
- **revert**: Revertir un commit anterior

### Ejemplos

```bash
# Nueva funcionalidad
git commit -m "feat(reports): agregar modal de configuración para reportes"

# Corrección de bug
git commit -m "fix(schedules): corregir filtro por turnos en reportes"

# Documentación
git commit -m "docs: actualizar guía de uso de reportes"

# Refactorización
git commit -m "refactor(modal): optimizar lógica de validación"

# Mantenimiento
git commit -m "chore: actualizar dependencias de desarrollo"
```

## 🔄 Flujo de Trabajo

### 1. Desarrollo Normal
```bash
# Hacer cambios en el código
# Hacer commit con mensaje convencional
git add .
git commit -m "feat(reports): agregar nueva funcionalidad"

# Push al repositorio
git push origin feature-branch
```

### 2. Generar Nueva Versión
```bash
# Asegurarse de que todos los cambios están committeados
git status

# Generar nueva versión
npm run release

# Push de la nueva versión y tag
git push --follow-tags origin main
```

## 📊 Changelog Automático

El archivo `CHANGELOG.md` se actualiza automáticamente con:

- ✨ **Características**: Nuevas funcionalidades
- 🐛 **Correcciones**: Bugs corregidos
- ⚡️ **Mejoras**: Optimizaciones de rendimiento
- ♻️ **Refactorización**: Mejoras en el código
- 📚 **Documentación**: Actualizaciones de docs
- 🧪 **Tests**: Nuevos o mejorados tests
- 🏗️ **Build**: Cambios en el sistema de build
- 👷 **CI/CD**: Cambios en integración continua
- 🔧 **Mantenimiento**: Tareas de mantenimiento

## 🛡️ Validaciones Automáticas

### Pre-commit
- Ejecuta linting automáticamente
- Valida que el código cumple estándares

### Commit Message
- Valida formato de mensajes de commit
- Asegura consistencia en la documentación

## 🎯 Versiones Semánticas

El sistema usa [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Cambios incompatibles
- **MINOR** (0.1.0): Nuevas funcionalidades compatibles
- **PATCH** (0.0.1): Correcciones de bugs compatibles

## 📁 Archivos de Configuración

- `commitlint.config.js`: Configuración de validación de commits
- `.versionrc.json`: Configuración de standard-version
- `.husky/`: Hooks de git para validaciones
- `CHANGELOG.md`: Historial de cambios automático

## 🔧 Configuración del IDE

### VS Code
Instalar extensiones recomendadas:
- Conventional Commits
- GitLens
- ESLint

### Configuración de Commit Template
```bash
git config commit.template .gitmessage
```

## 🚨 Troubleshooting

### Error en Commit Message
```bash
# Si el commit falla por formato incorrecto
git commit -m "feat: descripción del cambio"
```

### Error en Pre-commit
```bash
# Si el linting falla, corregir errores y volver a intentar
npm run lint
git add .
git commit -m "fix: corregir errores de linting"
```

### Revertir Release
```bash
# Si necesitas revertir un release
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
git reset --hard HEAD~1
```

## 📞 Soporte

Para dudas sobre el sistema de versiones, consultar:
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Standard Version](https://github.com/conventional-changelog/standard-version)
