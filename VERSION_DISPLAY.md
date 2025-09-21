# 📱 Sistema de Visualización de Versión - SIGEIT

Este documento explica cómo funciona el sistema de visualización de versión implementado en la aplicación SIGEIT.

## 🎯 **Características Implementadas**

### 1. **Servicio de Versión (`VersionService`)**
- Obtiene información de versión desde múltiples fuentes
- Proporciona métodos para formatear la información
- Observable para actualizaciones en tiempo real

### 2. **Componente de Visualización (`VersionDisplayComponent`)**
- Muestra la versión en el navbar de la aplicación
- Diseño responsive y accesible
- Click para abrir información detallada

### 3. **Modal de Información (`VersionInfoComponent`)**
- Modal detallado con toda la información de versión
- Información formateada y organizada
- Función de copiar al portapapeles

### 4. **Inyección Automática de Versión**
- Script que inyecta información durante el build
- Información actualizada automáticamente
- Compatible con el sistema de versionado semántico

## 🚀 **Cómo Funciona**

### **Información Mostrada**
```
Versión: 0.0.0
Entorno: development
Fecha de Build: 21 de septiembre de 2025, 17:35
Angular: ^16.2.0
Node.js: v22.19.0
```

### **Ubicación en la App**
- **Navbar**: Muestra versión compacta (ej: `v0.0.0 (development)`)
- **Click**: Abre modal con información completa
- **Responsive**: En móviles solo muestra el ícono

## 🔧 **Scripts Disponibles**

```bash
# Inyectar información de versión
npm run inject-version

# Build con información de versión
npm run build:versioned

# Build de producción con versión
npm run build:prod

# Generar nueva versión (incluye inyección automática)
npm run release
```

## 📁 **Archivos Creados/Modificados**

### **Nuevos Archivos:**
- `src/app/common/version/version.service.ts` - Servicio principal
- `src/app/common/version/version-info.component.ts` - Modal de información
- `src/app/common/version/version-display.component.ts` - Componente de visualización
- `src/app/common/version/index.ts` - Exportaciones
- `src/environments/version.ts` - Información de versión generada
- `scripts/inject-version.js` - Script de inyección

### **Archivos Modificados:**
- `src/app/admin/admin.component.html` - Agregado display de versión
- `src/app/admin/admin.module.ts` - Importaciones y declaraciones
- `package.json` - Scripts de build con versión

## 🎨 **Interfaz de Usuario**

### **Display Compacto (Navbar)**
```
[ℹ️] v0.0.0 (development) [⌄]
```
- Hover: Cambia color y muestra flecha
- Click: Abre modal detallado

### **Modal Detallado**
```
┌─────────────────────────────────┐
│ ℹ️  Información de Versión      │
├─────────────────────────────────┤
│ 🏷️  Versión: 0.0.0             │
│ 🔧  Entorno: DEVELOPMENT       │
│ ⏰  Fecha de Build: 21/9/2025  │
│ 🔌  Angular: ^16.2.0           │
│ 💾  Node.js: v22.19.0          │
├─────────────────────────────────┤
│ ℹ️  Esta información se actualiza │
│    automáticamente con cada     │
│    release                      │
├─────────────────────────────────┤
│        [Cerrar] [📋 Copiar]    │
└─────────────────────────────────┘
```

## 🔄 **Integración con Sistema de Versionado**

### **Flujo Automático:**
1. **Desarrollo**: Script inyecta versión actual
2. **Release**: `npm run release` actualiza versión
3. **Build**: Información se incluye en la aplicación
4. **Deploy**: Usuario ve versión actualizada

### **Variables de Entorno:**
```javascript
window.APP_VERSION = "0.0.0"
window.BUILD_DATE = "2025-09-21T21:35:08.000Z"
window.ENVIRONMENT = "development"
window.NODE_VERSION = "v22.19.0"
window.ANGULAR_VERSION = "^16.2.0"
```

## 🛠️ **Personalización**

### **Modificar Información Mostrada:**
Editar `src/app/common/version/version.service.ts`:
```typescript
getVersionInfo(): VersionInfo {
  return {
    version: this.getAppVersion(),
    buildDate: this.getBuildDate(),
    environment: this.getEnvironment(),
    // Agregar más campos aquí
    customField: 'Valor personalizado'
  };
}
```

### **Cambiar Estilos:**
Editar estilos en `version-display.component.ts` y `version-info.component.ts`

### **Modificar Ubicación:**
Agregar `<app-version-display></app-version-display>` en cualquier componente

## 🔍 **Debugging**

### **Verificar Información:**
```javascript
// En consola del navegador
console.log(window.APP_VERSION);
console.log(window.BUILD_DATE);
console.log(window.ENVIRONMENT);
```

### **Verificar Servicio:**
```typescript
// En cualquier componente
constructor(private versionService: VersionService) {}

ngOnInit() {
  console.log(this.versionService.getVersionInfo());
}
```

## 📱 **Responsive Design**

- **Desktop**: Muestra texto completo
- **Tablet**: Muestra versión abreviada
- **Mobile**: Solo ícono (click para ver detalles)

## 🎯 **Beneficios**

1. **Transparencia**: Usuarios saben qué versión están usando
2. **Debugging**: Fácil identificación de problemas
3. **Actualización**: Información automática en cada release
4. **Profesionalismo**: Interfaz moderna y funcional
5. **Accesibilidad**: Información disponible para soporte técnico

## 🚀 **Próximos Pasos**

- [ ] Integrar con API para verificar actualizaciones
- [ ] Agregar historial de versiones
- [ ] Notificaciones de nuevas versiones
- [ ] Métricas de uso por versión

## 📞 **Soporte**

Para dudas sobre el sistema de versión:
- Revisar logs del script de inyección
- Verificar que `version.ts` se genere correctamente
- Comprobar que el servicio esté inyectado en el módulo correcto
