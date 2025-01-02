import { useContext } from 'react';
import { UserModalContext } from './UserModalEdit';

export const UserTittle = () => {
  const { onClose, loading } = useContext(UserModalContext);
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Editar usuario</h2>
      <button onClick={onClose} disabled={loading}>
        <i className="bi bi-x-circle"></i>
      </button>
    </div>
  );
};
