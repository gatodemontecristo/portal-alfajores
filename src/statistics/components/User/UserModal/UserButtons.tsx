import { useContext } from 'react';
import { UserModalContext } from './UserModalEdit';

export interface UserButtonsProps {
  handleUpdateUser: () => void;
}
export const UserButtons = ({ handleUpdateUser }: UserButtonsProps) => {
  const { loading } = useContext(UserModalContext);
  return (
    <div className="flex justify-end  mb-4">
      {loading ? (
        <div className="flex mx-5">
          <span className="loader2"></span>
        </div>
      ) : (
        <button
          onClick={handleUpdateUser}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md flex gap-2"
        >
          <i className="bi bi-floppy-fill"></i>
          Aceptar
        </button>
      )}
    </div>
  );
};
