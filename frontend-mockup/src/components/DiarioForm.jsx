import { useState, useEffect } from 'react';

const DiarioForm = ({ onSubmit, selectedDiario, onCancel }) => {
  const initialFormState = {
    numero_diario: '',
    fecha: '',
    institucion: '',
    practica: '',
    descripcion: '',
    interpretacion: '',
    reflexion: '',
    evidencias: []
  };

  const [formData, setFormData] = useState(initialFormState);
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    if (selectedDiario) {
      setFormData(selectedDiario);
      setPreviews(selectedDiario.evidencias || []);
    } else {
      setFormData(initialFormState);
      setPreviews([]);
    }
  }, [selectedDiario]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    // Simulación de carga: creamos URLs locales para las fotos
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews([...previews, ...newPreviews]);
    setFormData({ ...formData, evidencias: [...(formData.evidencias || []), ...newPreviews] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormState);
  };

  return (
    <div className="form-wrapper">
      <h3>{selectedDiario ? 'Editar Diario' : 'Nuevo Diario de Campo'}</h3>
      <form onSubmit={handleSubmit} className="diario-form">
        <div className="form-row">
          <div className="form-group">
            <label>Número de Diario</label>
            <input
              name="numero_diario"
              type="number"
              value={formData.numero_diario}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha</label>
            <input
              name="fecha"
              type="date"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Institución</label>
            <input
              name="institucion"
              value={formData.institucion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Práctica</label>
            <input
              name="practica"
              value={formData.practica}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Interpretación</label>
          <textarea
            name="interpretacion"
            value={formData.interpretacion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Reflexión</label>
          <textarea
            name="reflexion"
            value={formData.reflexion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Evidencias Fotográficas</label>
          <div className="file-upload-zone">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              id="file-input"
              className="hidden"
            />
            <label htmlFor="file-input" className="btn-upload">
              📷 Seleccionar Fotos de la Clase
            </label>
          </div>
          <div className="previews-grid">
            {previews.map((src, index) => (
              <img key={index} src={src} alt="Vista previa" className="img-preview" />
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {selectedDiario ? 'Actualizar' : 'Guardar'}
          </button>
          {selectedDiario && (
            <button type="button" onClick={onCancel} className="btn-cancel">
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DiarioForm;
