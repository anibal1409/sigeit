
// Este archivo se genera automáticamente durante el build
export const VERSION_INFO = {
  "APP_VERSION": "0.0.0",
  "BUILD_DATE": "2025-09-21T21:37:18.551Z",
  "ENVIRONMENT": "development",
  "NODE_VERSION": "v22.19.0",
  "ANGULAR_VERSION": "^16.2.0"
};

// Inyectar en window para acceso global
if (typeof window !== 'undefined') {
  window.APP_VERSION = VERSION_INFO.APP_VERSION;
  window.BUILD_DATE = VERSION_INFO.BUILD_DATE;
  window.ENVIRONMENT = VERSION_INFO.ENVIRONMENT;
  window.NODE_VERSION = VERSION_INFO.NODE_VERSION;
  window.ANGULAR_VERSION = VERSION_INFO.ANGULAR_VERSION;
}
