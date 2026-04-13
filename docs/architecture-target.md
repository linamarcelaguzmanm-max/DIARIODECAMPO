# Arquitectura Objetivo - diarioCampo

## Frontend (Fase 2)
- **Framework**: Angular 17+
- **Patrón**: Arquitectura modular con carga perezosa (Lazy Loading).
- **Estado**: Gestión de estado reactiva (RxJS / Signals).
- **Estándares**: Referenciar `frontend-base`.

## Backend (Fase 2)
- **Framework**: .NET Core 8+
- **Patrón**: Clean Architecture (Domain Driven Design Lite).
- **Base de Datos**: SQL Server.
- **API**: RESTful con documentación en Swagger.
- **Estándares**: Referenciar `backend-base`.

## Comunicación
- El frontend se comunica con el backend a través de contratos definidos en `API_CONTRACTS.md`.
- Uso de Interceptores para manejo de errores y autenticación.
