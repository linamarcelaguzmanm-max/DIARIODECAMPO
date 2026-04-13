import { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, selectedUser, onCancel }) => {
  const initialFormState = {
    nombre: '',
    email: '',
    rol: 'docente',
    estado: 'activo'
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    } else {
      setFormData(initialFormState);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormState);
  };

  return (
    <div className="form-wrapper">
      <h3>{selectedUser ? 'Editar Usuario' : 'Nuevo Usuario'}</h3>
      <form onSubmit={handleSubmit} className="diario-form">
        <div className="form-group">
          <label>Nombre Completo</label>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="usuario@ejemplo.com"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rol en el Sistema</label>
            <select name="rol" value={formData.rol} onChange={handleChange} required>
              <option value="rector">Rector</option>
              <option value="docente">Docente</option>
              <option value="estudiante">Estudiante</option>
              <option value="padre">Padre de Familia</option>
            </select>
          </div>
          <div className="form-group">
            <label>Estado</label>
            <select name="estado" value={formData.estado} onChange={handleChange} required>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {selectedUser ? 'Actualizar Usuario' : 'Crear Usuario'}
          </button>
          {selectedUser && (
            <button type="button" onClick={onCancel} className="btn-cancel">
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
