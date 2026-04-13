# Proyecto diarioCampo

Repositorio base para el desarrollo del proyecto diarioCampo, estructurado en dos fases (Mockup y Final).

## Estructura del Repositorio
- `/docs`: Documentación estratégica persistente y contratos de API.
- `/frontend-mockup`: Prototipo funcional (Fase 1) desarrollado en Angular 18.
- `/backend-mock`: API simulada con JSON Server para pruebas.
- `/shared`: Directorio para lógica o modelos compartidos.
- `/scripts`: Scripts de automatización y utilidad.
- `/frontend-base` / `/backend-base`: Proyectos de referencia técnica (SOLO LECTURA).
- `/frontend-final` / `/backend-final`: Espacios para la generación del proyecto real (Fase 2).

## Requisitos
- **Node.js**: v20.13.1+ (Se recomienda usar la versión integrada de VS si no está en PATH).
- **npm**: v10.5.2+.
- **Angular CLI**: v18.

---

### ⚠️ Solución: npm no reconocido
Si recibes el error *"El término 'npm' no se reconoce"*, ejecuta el siguiente comando en tu terminal de **PowerShell** antes de continuar:

```powershell
$env:PATH += ";C:\Program Files\Microsoft Visual Studio\2022\Enterprise\MSBuild\Microsoft\VisualStudio\NodeJs"
```

*Esto habilitará temporalmente node y npm en tu sesión actual de terminal.*

---

## Cómo ejecutar el Mockup (Fase 1)

### 1. Iniciar el Backend Mock
```bash
cd backend-mock
npm install
npm run start
```
- **URL**: `http://localhost:3001`
- **Datos**: Referencia en `db.json`.

### 2. Iniciar el Frontend Mockup
```bash
cd frontend-mockup
npm install
# Si tienes Angular CLI global:
ng serve
# O usando npx:
npx ng serve
```
- **URL**: `http://localhost:4200`

## Configuración de Entorno
El frontend utiliza el backend simulado. Asegúrese de que el `apiUrl` apunte a `http://localhost:3001`.

## Mantenimiento de Documentación
Es OBLIGATORIO actualizar los archivos en `/docs` durante cada iteración:
- `MODULE_REGISTRY.md`: Registrar cada nuevo módulo Angular creado.
- `API_CONTRACTS.md`: Documentar nuevos endpoints y modelos de datos.
- `MIGRATION_GUIDE.md`: Anotar cualquier consideración para el paso a Fase 2.

---
*Este repositorio ha sido configurado para permitir una transición fluida entre la validación funcional (Mockup) y la implementación empresarial (Final).*
