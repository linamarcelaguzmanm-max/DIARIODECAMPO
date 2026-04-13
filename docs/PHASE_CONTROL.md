# Control de Fases - Proyecto diarioCampo

## Fase Actual: **FASE_1** (Mockup)

---

## 🛠️ Reglas de Modificación por Fase

### FASE_1 (En curso)
| Carpeta | Acceso | Propósito |
| --- | --- | --- |
| `/docs` | ✅ Escritura | Documentar lógica, contratos y registro de módulos. |
| `/frontend-mockup` | ✅ Escritura | Desarrollo del prototipo funcional Angular. |
| `/backend-mock` | ✅ Escritura | Simulación de datos (JSON Server). |
| `/shared` / `/scripts` | ✅ Escritura | Utilidades y código compartido. |
| `/frontend-base` / `/backend-base` | 🚫 Bloqueado | Solo lectura futura para estándares. |
| `/frontend-final` / `/backend-final` | 🚫 Bloqueado | No deben contener código hasta la Fase 2. |

### FASE_2 (Proyecto Final)
| Carpeta | Acceso | Propósito |
| --- | --- | --- |
| `/docs` | ✅ Escritura | Actualizar guías de migración y documentación real. |
| `/frontend-mockup` | ✅ Lectura | Referencia del prototipo validado. |
| `/backend-mock` | ✅ Lectura | Referencia de contratos simulados. |
| `/frontend-final` | ✅ Escritura | Implementación definitiva con arquitectura base. |
| `/backend-final` | ✅ Escritura | Implementación definitiva con arquitectura base. |

---

## 🎯 Criterios para Pasar a FASE_2

Para que el proyecto sea promovido a Fase 2, se deben cumplir los siguientes hitos en el Mockup:

1. [ ] **Validación UX/UI**: Todas las pantallas principales del mockup han sido aprobadas.
2. [ ] **Contratos Cerrados**: `API_CONTRACTS.md` no tiene cambios pendientes y coincide con el mockup.
3. [ ] **Registro de Módulos**: Todos los módulos funcionales están registrados en `MODULE_REGISTRY.md`.
4. [ ] **Guía de Migración**: `MIGRATION_GUIDE.md` detalla el mapeo para cada módulo.
5. [ ] **Base de Referencia Lista**: Los proyectos en `/frontend-base` y `/backend-base` están poblados (si aplica).

---

## 🚫 Restricción de Seguridad
Cualquier intento de escribir en carpetas `*-final` durante la FASE_1 será rechazado automáticamente por el agente de IA, a menos que el estado de este documento se actualice a FASE_2.
