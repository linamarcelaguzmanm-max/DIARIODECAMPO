# Guía de Migración (Fase 1 -> Fase 2)

## Descripción
Este documento detalla el proceso para transformar el mockup de la Fase 1 en el sistema final de la Fase 2 del proyecto diarioCampo.

## Checklist Global de Migración
- [ ] Mapear servicios mock (`json-server`) a controladores reales (Node.js/Express).
- [ ] Convertir modelos TS en esquemas de base de datos (PostgreSQL) y DTOs.
- [ ] Reemplazar la simulación de datos por persistencia real.
- [ ] Implementar seguridad/autenticación (JWT/Passport).
- [ ] Refactorizar el frontend mockup siguiendo los estándares de `frontend-base`.

## Mapeo por Módulo

| Módulo Mockup | Controlador Express (Final) | Servicios Mock -> Reales | Modelos TS -> Database |
| --- | --- | --- | --- |
| Tablero | `dashboardController.js` | `DashboardService` | `DashboardStats` |
| Usuarios | `userController.js` | `UserService` | `usuarios` (Postgres) |
| Instituciones | `institutionController.js` | `InstitutionService` | `instituciones` (Postgres) |
| Practicas | `practiceController.js` | `PracticeService` | `practicas` (Postgres) |
| Diarios | `journalController.js` | `JournalService` | `diarios_campo` (Postgres) |
| Estudiantes | `studentController.js` | `StudentService` | `estudiantes` (Postgres) |

## Detalles de Implementación en Fase 2
- **frontend-final**: Se generará siguiendo la arquitectura de `frontend-base`.
- **backend-final**: Se generará siguiendo los estándares de `backend-base` (arquitectura de capas).
- **Lógica Funcional**: Validada previamente en el prototipo `/frontend-mockup`.
- **Endpoints**: Deben coincidir con los definidos en `API_CONTRACTS.md`.
