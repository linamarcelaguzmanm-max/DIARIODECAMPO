const DiarioList = ({ diarios, onEdit, onDelete, onReport }) => {
  if (diarios.length === 0) {
    return <p className="no-data">No hay diarios registrados.</p>;
  }

  return (
    <div className="list-wrapper">
      <h3>Diarios Registrados</h3>
      <div className="diarios-grid">
        {diarios.map((diario) => (
          <div key={diario.id} className="diario-card">
            <div className="card-header">
              <span>#{diario.numero_diario}</span>
              <span className="date">{diario.fecha}</span>
            </div>
            <div className="card-body">
              <p><strong>Institución:</strong> {diario.institucion}</p>
              <p><strong>Práctica:</strong> {diario.practica}</p>
              
              <div className="content-section">
                <strong>Descripción:</strong>
                <p>{diario.descripcion}</p>
              </div>
              
              <div className="content-section">
                <strong>Interpretación:</strong>
                <p>{diario.interpretacion}</p>
              </div>

              <div className="content-section">
                <strong>Reflexión:</strong>
                <p>{diario.reflexion}</p>
              </div>

              {diario.evidencias && diario.evidencias.length > 0 && (
                <div className="evidencias-section">
                  <strong>Fotos de la Clase:</strong>
                  <div className="evidencias-gallery">
                    {diario.evidencias.map((img, idx) => (
                      <img key={idx} src={img} alt={`Evidencia ${idx}`} className="evidencia-thumbnail" />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="card-footer">
              <button 
                onClick={() => onReport(diario)} 
                className="btn-report"
                title="Generar Reporte Institucional"
              >
                📄 Reporte
              </button>
              <button 
                onClick={() => onEdit(diario)} 
                className="btn-edit"
              >
                Editar
              </button>
              <button 
                onClick={() => onDelete(diario.id)} 
                className="btn-delete"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiarioList;
