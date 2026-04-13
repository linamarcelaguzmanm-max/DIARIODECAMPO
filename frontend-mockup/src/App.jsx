import { useState, useEffect } from 'react';
import DiarioForm from './components/DiarioForm';
import DiarioList from './components/DiarioList';
import BuscarDiario from './components/BuscarDiario';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ReporteView from './components/ReporteView';

const BASE_URL = 'http://localhost:4000';

function App() {
  const [activeModule, setActiveModule] = useState('diarios');
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [viewReport, setViewReport] = useState(null); // Estado para el diario seleccionado para reporte

  useEffect(() => {
    fetchData();
  }, [activeModule]);

  const fetchData = async (query = '') => {
    setLoading(true);
    try {
      const endpoint = activeModule === 'diarios' ? '/diarios' : '/usuarios';
      const url = query ? `${BASE_URL}${endpoint}?q=${query}` : `${BASE_URL}${endpoint}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error al cargar ${activeModule}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
      alert('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrUpdate = async (formData) => {
    try {
      const endpoint = activeModule === 'diarios' ? '/diarios' : '/usuarios';
      const url = formData.id ? `${BASE_URL}${endpoint}/${formData.id}` : `${BASE_URL}${endpoint}`;
      const method = formData.id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error en la operación');
      
      setSelectedItem(null);
      setShowModal(false);
      fetchData();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este registro?')) return;
    
    try {
      const endpoint = activeModule === 'diarios' ? '/diarios' : '/usuarios';
      const response = await fetch(`${BASE_URL}${endpoint}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar');
      fetchData();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      {viewReport ? (
        <ReporteView 
          diario={viewReport} 
          onBack={() => setViewReport(null)} 
        />
      ) : (
        <>
          <header className="app-header">
            <div className="header-content">
              <h1 className="logo-text">DIARIO DE CAMPO <span className="logo-dot">.</span></h1>
              <nav className="main-nav">
                <button 
                  className={`nav-diarios ${activeModule === 'diarios' ? 'active' : ''}`} 
                  onClick={() => setActiveModule('diarios')}
                >
                  DIARIOS DE CAMPO
                </button>
                <button 
                  className={`nav-usuarios ${activeModule === 'usuarios' ? 'active' : ''}`} 
                  onClick={() => setActiveModule('usuarios')}
                >
                  USUARIOS Y ROLES
                </button>
              </nav>
            </div>
          </header>

          <main className="app-main">
            <section className="top-section">
              <div className="actions-bar">
                {activeModule === 'diarios' && (
                  <button className="btn-create-fuchsia" onClick={() => setShowModal(true)}>
                    + CREAR NUEVO DIARIO DE CAMPO
                  </button>
                )}
              </div>
              <BuscarDiario 
                onSearch={fetchData} 
                onClear={fetchData} 
                placeholder={activeModule === 'diarios' ? 'Buscar diarios...' : 'Buscar usuarios...'} 
              />
            </section>

            <section className="content-grid-list">
              {activeModule === 'diarios' ? (
                <>
                  {showModal && (
                    <div className="modal-overlay">
                      <div className="modal-content animate-zoom">
                        <button className="btn-close" onClick={() => { setShowModal(false); setSelectedItem(null); }}>×</button>
                        <DiarioForm 
                          onSubmit={handleCreateOrUpdate} 
                          selectedDiario={selectedItem}
                          onCancel={() => { setShowModal(false); setSelectedItem(null); }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="list-container full-width">
                    {loading ? <div className="spinner">Cargando...</div> : (
                      <DiarioList 
                        diarios={data} 
                        onEdit={(diario) => { setSelectedItem(diario); setShowModal(true); }} 
                        onDelete={handleDelete} 
                        onReport={(diario) => setViewReport(diario)}
                      />
                    )}
                  </div>
                </>
              ) : (
                <>
                  <UserForm 
                    onSubmit={handleCreateOrUpdate} 
                    selectedUser={selectedItem}
                    onCancel={() => setSelectedItem(null)}
                  />
                  <div className="list-container full-width">
                    {loading ? <div className="spinner">Cargando...</div> : (
                      <UserList users={data} onEdit={setSelectedItem} onDelete={handleDelete} />
                    )}
                  </div>
                </>
              )}
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
