# Registro de Decisiones Técnicas (ADR) - diarioCampo

## ADR 001: Uso de Mockup en Fase 1
- **Estatus**: Aceptado
- **Contexto**: Necesidad de validar flujos de usuario rápidamente sin depender de la infraestructura de backend final.
- **Decisión**: Utilizar Angular para el frontend mockup y JSON Server para simular el backend.
- **Consecuencias**: Permite desarrollo paralelo y validación temprana, pero requiere un esfuerzo de migración en la Fase 2.

## ADR 002: Estructura Modular
- **Estatus**: Aceptado
- **Contexto**: El proyecto crecerá en complejidad.
- **Decisión**: Seguir una estructura de carpetas modular (`/modules`) desde el inicio, incluso en el mockup.
- **Consecuencias**: Facilita la organización y la migración futura por partes.
## ADR 003: Localización de Interfaz (Español)
- **Estatus**: Aceptado
- **Contexto**: El usuario final requiere que la aplicación esté en español.
- **Decisión**: Traducir todos los elementos de la interfaz (títulos, navegación, etiquetas) al español durante la Fase 1.
- **Consecuencias**: Mejora la experiencia de usuario y alineación con los requerimientos del cliente desde el prototipo.

## ADR 004: Modelo de Datos Relacional (PostgreSQL)
- **Estatus**: Aceptado
- **Contexto**: Los datos educativos tienen relaciones complejas y requieren integridad referencial fuerte.
- **Decisión**: Utilizar PostgreSQL como base de datos principal por su robustez y soporte para JSONB (caracterizaciones).
- **Consecuencias**: Garantiza escalabilidad y consistencia de datos.

## ADR 005: Backend Node.js con Express
- **Estatus**: Aceptado
- **Contexto**: Se requiere una API REST flexible y rápida de implementar.
- **Decisión**: Usar Node.js con Express para el backend final, siguiendo una arquitectura de capas.
- **Consecuencias**: Familiaridad del equipo y ecosistema amplio.

## ADR 006: Pivote de Tecnología Mockup (React)
- **Estatus**: Aceptado
- **Contexto**: El usuario solicitó una implementación rápida y completa usando React para validar el módulo de Diarios de Campo.
- **Decisión**: Cambiar la tecnología del prototipo funcional de Angular a React (Vite).
- **Consecuencias**: El desarrollo del prototipo se agiliza dada la preferencia del usuario, pero se debe mantener la consistencia con la arquitectura final propuesta.

## ADR 007: Uso de Modales para Formularios
- **Estatus**: Aceptado
- **Contexto**: Facilita la creación de registros sin navegar fuera de la lista principal.
- **Decisión**: Implementar la creación y edición de diarios de campo mediante ventanas modales.
- **Consecuencias**: Mejora la focalización del usuario en la tarea actual y mantiene el contexto visual.
