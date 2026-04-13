# Registro de Módulos - Proyecto diarioCampo

## MÓDULO (PLANTILLA)
- **Nombre**: [Nombre del Módulo]
- **Propósito**: [Descripción corta]
- **Rutas**: [Rutas principales]
- **Componentes**: [Lista]
- **Servicios**: [Lista]
- **Modelos**: [Lista]
- **Dependencias**: [Otros módulos o librerías]
- **Reglas de Negocio**: [Lógica clave]
- **Notas de Migración**: [Consideraciones para Fase 2]

## Módulos Registrados

| Módulo | Propósito | Estado |
| --- | --- | --- |
| Tablero | Panel principal con métricas clave | Mockup |
| Usuarios | Gestión de cuentas y roles (Rector, Docente, Estudiante, Padre) | Mockup (React) |
| Instituciones | Gestión de instituciones educativas | Mockup (React) |
| Practicas | Gestión de prácticas pedagógicas | Mockup (React) |
| Diarios | Registro y análisis de diarios de campo | Mockup (React) |
| Estudiantes | Gestión de estudiantes y caracterización familiar | Mockup (React) |
| Necesidades | Identificación de necesidades educativas | Mockup (React) |
| Actividades | Planeación de intervenciones pedagógicas | Mockup (React) |
| Seguimiento | Evaluación y seguimiento de procesos | Mockup (React) |

---

### Example
- **Nombre**: Example Module
- **Propósito**: Sirve como referencia para la estructura de módulos.
- **Rutas**: `/example`
- **Componentes**: `ExamplePageComponent`, `ExampleCardComponent`
- **Servicios**: `ExampleService`
- **Modelos**: `ExampleModel`
- **Dependencias**: N/A
- **Reglas de Negocio**: CRUD simple de ejemplo.
- **Notas de Migración**: Mapear a `ExampleController` en .NET.
---

| --- | --- | --- |

### Usuarios
- **Nombre**: Users Module
- **Propósito**: Administración de cuentas de usuario y asignación de roles jerárquicos.
- **Rutas**: `/usuarios`
- **Componentes (React)**: `UserForm`, `UserList`
- **Servicios**: Fetch API
- **Modelos**: `User` (id, nombre, email, rol, estado)
- **Notas de Migración**: Implementar Auth (JWT) en Fase 2.

### Instituciones
- **Nombre**: Institutions Module
- **Propósito**: Administrar los centros educativos donde se realizan las prácticas.
- **Rutas**: `/instituciones`
- **Componentes**: `InstitutionListComponent`, `InstitutionFormComponent`
- **Servicios**: `InstitutionService`
- **Modelos**: `Institution`
- **Notas de Migración**: Mapear a tabla `instituciones` en Postgres.

### Practicas
- **Nombre**: Pedagogical Practices Module
- **Propósito**: Gestionar los periodos y objetivos de las prácticas.
- **Rutas**: `/practicas`
- **Componentes**: `PracticeListComponent`, `PracticeFormComponent`
- **Servicios**: `PracticeService`
- **Modelos**: `Practice`
- **Notas de Migración**: Depende de `Institution`.

### Diarios
- **Nombre**: Field Journals Module (Diarios de Campo)
- **Propósito**: Registro detallado de observaciones, interpretaciones y reflexiones.
- **Modelo**: 
```typescript
interface Journal {
  id: string;
  practicaId: string;
  fecha: string;
  descripcion: string;
  interpretacion: string;
  reflexion: string;
  evidencias?: string[]; // URLs o nombres de archivos de fotos
}
```
- **Rutas**: `/diarios`
- **Componentes (React)**: `DiarioForm`, `DiarioList`, `BuscarDiario`, `ReporteView`
- **Servicios**: Fetch API, Print Service (CSS Media Print)
- **Modelos**: `Journal` (Incluye arreglo de `evidencias`)
- **Reglas de Negocio**: Cada diario debe estar asociado a una práctica. Permite múltiples fotos por diario. Generación de reporte institucional en formato PDF.

### Estudiantes
- **Nombre**: Students & Families Module
- **Propósito**: Caracterización sociofamiliar y registro de estudiantes.
- **Rutas**: `/estudiantes`
- **Componentes**: `StudentListComponent`, `StudentFormComponent`, `FamilyDataComponent`
- **Servicios**: `StudentService`
- **Modelos**: `Student`, `Family`

### Actividades
- **Nombre**: Activity Planning Module
- **Propósito**: Planeación de intervenciones basadas en necesidades detectadas.
- **Rutas**: `/actividades`
- **Componentes**: `ActivityPlannerComponent`, `ActivityListComponent`
- **Servicios**: `ActivityService`
- **Modelos**: `Activity`
