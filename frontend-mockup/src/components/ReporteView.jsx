import React from 'react';

const ReporteView = ({ diario, onBack }) => {
  if (!diario) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="report-container-wrapper">
      <div className="report-actions no-print">
        <button className="btn-secondary" onClick={onBack}>← Volver</button>
        <button className="btn-submit" onClick={handlePrint}>🖨️ Descargar / Imprimir Reporte</button>
      </div>

      <div className="report-page printable-area">
        {/* Encabezado Institucional - Estilo Areandina */}
        <header className="report-header">
          <div className="header-top-bar">
            <h2 className="brand-name">AREANDINA</h2>
          </div>
          <div className="header-main">
            <div className="logo-section">
              <p className="sub-tag">Fundación Universitaria del Área Andina</p>
            </div>
            <div className="resolution-info">
              Personería Jurídica Res. 22215 Mineducación Dic. 9-83
            </div>
          </div>
        </header>

        {/* Títulos de Facultad */}
        <div className="faculty-info">
          <h3>FACULTAD DE EDUCACIÓN</h3>
          <h4>MÓDULO DE PRÁCTICA PEDAGÓGICA</h4>
          <h4>LICENCIATURA EN EDUCACIÓN INFANTIL</h4>
          <h2 className="document-title">FORMATO DE DIARIO DE CAMPO</h2>
        </div>

        {/* Datos Básicos */}
        <div className="metadata-grid">
          <div className="meta-item"><strong>INSTITUCIÓN:</strong> {diario.institucion}</div>
          <div className="meta-item"><strong>DIARIO N°:</strong> {diario.numero_diario}</div>
          <div className="meta-item"><strong>PRÁCTICA:</strong> {diario.practica}</div>
          <div className="meta-item"><strong>FECHA:</strong> {diario.fecha}</div>
        </div>

        {/* Tabla de Diario */}
        <table className="report-table">
          <thead>
            <tr>
              <th colSpan="3" className="table-main-header">DIARIO DE CAMPO</th>
            </tr>
            <tr>
              <th>Descripción</th>
              <th>Interpretación</th>
              <th>Reflexión</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{diario.descripcion}</td>
              <td>{diario.interpretacion}</td>
              <td>{diario.reflexion}</td>
            </tr>
          </tbody>
        </table>

        {/* Evidencias si existen */}
        {diario.evidencias && diario.evidencias.length > 0 && (
          <div className="report-evidencias">
            <h5>Evidencias Fotográficas:</h5>
            <div className="evidencias-gallery-report">
              {diario.evidencias.map((img, idx) => (
                <img key={idx} src={img} alt="Evidencia" className="report-img" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReporteView;
