const UserList = ({ users, onEdit, onDelete }) => {
  const getRoleBadge = (rol) => {
    const roles = {
      rector: { label: 'Rector', class: 'badge-rector' },
      docente: { label: 'Docente', class: 'badge-docente' },
      estudiante: { label: 'Estudiante', class: 'badge-estudiante' },
      padre: { label: 'Padre de Familia', class: 'badge-padre' }
    };
    return roles[rol] || { label: rol, class: '' };
  };

  return (
    <div className="list-wrapper">
      <h3>Lista de Usuarios</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.email}</td>
              <td>
                <span className={`badge ${getRoleBadge(user.rol).class}`}>
                  {getRoleBadge(user.rol).label}
                </span>
              </td>
              <td>
                <span className={`status-dot ${user.estado}`}></span>
                {user.estado === 'activo' ? 'Activo' : 'Inactivo'}
              </td>
              <td>
                <div className="table-actions">
                  <button onClick={() => onEdit(user)} className="btn-icon-edit" title="Editar">✏️</button>
                  <button onClick={() => onDelete(user.id)} className="btn-icon-delete" title="Eliminar">🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
