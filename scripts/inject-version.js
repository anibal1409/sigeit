const fs = require('fs');
const path = require('path');

/**
 * Script para inyectar información de versión en la aplicación Angular
 */
function injectVersionInfo() {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // Información de versión
  const versionInfo = {
    APP_VERSION: packageJson.version,
    BUILD_DATE: new Date().toISOString(),
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    NODE_VERSION: process.version,
    ANGULAR_VERSION: packageJson.dependencies['@angular/core'] || 'unknown'
  };

  // Crear archivo de versión para Angular
  const versionContent = `
// Este archivo se genera automáticamente durante el build
export const VERSION_INFO = ${JSON.stringify(versionInfo, null, 2)};

// Inyectar en window para acceso global
if (typeof window !== 'undefined') {
  window.APP_VERSION = VERSION_INFO.APP_VERSION;
  window.BUILD_DATE = VERSION_INFO.BUILD_DATE;
  window.ENVIRONMENT = VERSION_INFO.ENVIRONMENT;
  window.NODE_VERSION = VERSION_INFO.NODE_VERSION;
  window.ANGULAR_VERSION = VERSION_INFO.ANGULAR_VERSION;
}
`;

  const versionFilePath = path.join(__dirname, '..', 'src', 'environments', 'version.ts');
  fs.writeFileSync(versionFilePath, versionContent);

  console.log('✅ Información de versión inyectada:');
  console.log(`   Versión: ${versionInfo.APP_VERSION}`);
  console.log(`   Entorno: ${versionInfo.ENVIRONMENT}`);
  console.log(`   Fecha: ${new Date(versionInfo.BUILD_DATE).toLocaleString()}`);
  console.log(`   Angular: ${versionInfo.ANGULAR_VERSION}`);
  console.log(`   Node: ${versionInfo.NODE_VERSION}`);
}

// Ejecutar si se llama directamente
if (require.main === module) {
  injectVersionInfo();
}

module.exports = { injectVersionInfo };
