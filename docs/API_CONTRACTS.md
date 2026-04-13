# Contratos de API - Proyecto diarioCampo

## Convención de Errores HTTP
- 200/201: Éxito
- 400: Error de validación (Bad Request)
- 401: No autorizado
- 403: Prohibido
- 404: No encontrado
- 500: Error interno del servidor

## Plantilla RESOURCE
- **Recurso**: [Nombre]
- **Base Path**: `/api/v1/[recurso]`

## Plantilla ENDPOINT
- **Método**: [GET/POST/PUT/DELETE]
- **Ruta**: `/[ruta]`
- **Request Body**: [TS Interface]
- **Response Body**: [TS Interface]

## Recursos Definidos (Mock)

### Example Resource
- **Recurso**: Example
- **Mock Base URL**: `http://localhost:3001/examples`

#### GET /examples
- **Resumen**: Lista todos los ejemplos.
- **Response**: `ExampleModel[]`

#### POST /examples
- **Resumen**: Crea un nuevo ejemplo.
- **Request**: `Omit<ExampleModel, 'id'>`
- **Response**: `ExampleModel`

### Dashboard Resource
- **Recurso**: Dashboard
- **Mock Base URL**: `http://localhost:3001/dashboard-stats` (Simulado)

#### GET /dashboard-stats
- **Resumen**: Obtiene las métricas para el tablero principal.
- **Response**: `DashboardStats`

### Usuarios Resource
- **Recurso**: Usuarios
- **Mock Base URL**: `http://localhost:4000/usuarios`

#### GET /usuarios
- **Resumen**: Lista todos los usuarios.
- **Response**: `User[]`

#### POST /usuarios
- **Resumen**: Crea un nuevo usuario con rol.
- **Request**: `Omit<User, 'id'>`
- **Response**: `User`

### Diarios Resource
- **Recurso**: Diarios de Campo
- **Mock Base URL**: `http://localhost:4000/diarios`

#### GET /diarios
- **Resumen**: Lista todos los diarios registrados.
- **Response**: `Journal[]`

#### POST /diarios
- **Resumen**: Registra un nuevo diario.
- **Request**: `Omit<Journal, 'id'>`
- **Response**: `Journal`

### Estudiantes Resource
- **Recurso**: Estudiantes
- **Mock Base URL**: `http://localhost:4000/estudiantes`


## Modelos TypeScript (DTOs esperados en .NET)
```typescript
interface ExampleModel {
  id: number;
  name: string;
  description: string;
}

interface DashboardStats {
  diariosRegistrados: number;
  alertasActivas: number;
  sincronizado: boolean;
  ultimaSincronizacion: string;
}

interface User {
  id: string;
  nombre: string;
  email: string;
  rol: 'rector' | 'docente' | 'estudiante' | 'padre';
  estado: 'activo' | 'inactivo';
}

interface Institution {
  id: string;
  nombre: string;
  ubicacion: string;
  tipo: 'Pública' | 'Privada';
}

interface Practice {
  id: string;
  institucionId: string;
  nombre: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
}

interface Journal {
  id: string;
  practicaId: string;
  fecha: string;
  descripcion: string;
  interpretacion: string;
  reflexion: string;
  evidencias?: string[];
}

interface Student {
  id: string;
  nombre: string;
  edad: number;
  grupo: string;
  institucionId: string;
}

```

## Notas de Mock
- El backend-mock usa `json-server`.
- Todos los modelos TS definidos aquí se usarán para generar los DTOs y Entities en .NET Core durante la Fase 2.
