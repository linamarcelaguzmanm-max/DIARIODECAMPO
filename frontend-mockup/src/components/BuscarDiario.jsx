import { useState } from 'react';

const BuscarDiario = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Buscar por institución, práctica o número..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <div className="search-buttons">
          <button type="submit" className="btn-search">Buscar</button>
          <button type="button" onClick={handleClear} className="btn-clear">Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default BuscarDiario;
