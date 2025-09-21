
// Este archivo se genera automáticamente durante el build
export const VERSION_INFO = {
  "APP_VERSION": "0.0.3",
  "BUILD_DATE": "2025-09-21T21:53:06.005Z",
  "ENVIRONMENT": "development",
  "NODE_VERSION": "v22.19.0",
  "ANGULAR_VERSION": "^16.2.0"
};

// Extender la interfaz Window para incluir las propiedades de versión
declare global {
  interface Window {
    APP_VERSION?: string;
    BUILD_DATE?: string;
    ENVIRONMENT?: string;
    NODE_VERSION?: string;
    ANGULAR_VERSION?: string;
  }
}

// Inyectar en window para acceso global
if (typeof window !== 'undefined') {
  window.APP_VERSION = VERSION_INFO.APP_VERSION;
  window.BUILD_DATE = VERSION_INFO.BUILD_DATE;
  window.ENVIRONMENT = VERSION_INFO.ENVIRONMENT;
  window.NODE_VERSION = VERSION_INFO.NODE_VERSION;
  window.ANGULAR_VERSION = VERSION_INFO.ANGULAR_VERSION;
}
