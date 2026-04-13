# Contexto para Agentes de IA - Proyecto diarioCampo

> [!IMPORTANT]
> **REGLA CRÍTICA**: Antes de realizar cualquier cambio, el Agente de IA DEBE leer [/docs/PHASE_CONTROL.md](file:///c:/Users/JoseMercado/source/repos/diarioCampo/docs/PHASE_CONTROL.md) para verificar la fase actual y las carpetas permitidas.

## Estructura del Repositorio
- `/docs`: Documentación estratégica persistente.
- `/frontend-mockup`: Mockup funcional (Angular) - FASE 1.
- `/backend-mock`: Backend simulado (JSON Server) - FASE 1.
- `/shared`: Código compartido entre frontend y backend (opcional).
- `/scripts`: Scripts de utilidad.
- `/frontend-base`: Proyectos base de referencia (SOLO LECTURA).
- `/backend-base`: Proyectos base de referencia (SOLO LECTURA).
- `/frontend-final`: Proyecto final (FASE 2).
- `/backend-final`: Proyecto final (FASE 2).

## Fases del Proyecto
1. **Fase 1 (Actual)**: Construcción de un mockup demostrativo. Foco en pantallas, flujo de usuario y contratos de API simulados.
2. **Fase 2**: Generación del sistema real usando la lógica definida en `/docs` y los estándares de `/frontend-base` y `/backend-base`.

## Reglas de Oro
- **frontend-base y backend-base son SOLO referencia.** NO deben modificarse nunca.
- **frontend-mockup y backend-mock son temporales.** Se usan para validar requisitos.
- **Fase 2**: `frontend-final` y `backend-final` se generarán siguiendo los estándares de las carpetas `-base` y la lógica de `/docs`.

## Obligación Documental
En cada iteración deben actualizarse:
- `MODULE_REGISTRY.md`
- `API_CONTRACTS.md`
- `MIGRATION_GUIDE.md`

## Convención de Módulos (Angular)
Ubicación: `/frontend-mockup/src/app/modules/<modulo>`
Estructura interna:
- `pages/`
- `components/`
- `services/`
- `models/`
- `routes/`

## Checklist de Calidad
- [ ] Código modular y sin mezclar lógica entre módulos.
- [ ] Contratos de API documentados antes de mockear.
- [ ] Interfaz responsiva y con estética premium.
- [ ] Si hay ambigüedad -> documentar en `DECISIONS.md` antes de implementar.
