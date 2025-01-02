import { createContext } from 'react';
import {
  UserModalEditPros,
  UserModalContextProps,
} from '../../../../interfaces';
// eslint-disable-next-line react-refresh/only-export-components
export const UserModalContext = createContext({} as UserModalContextProps);
const { Provider } = UserModalContext;
export const UserModalEdit = ({
  onClose,
  loading,
  handleSubmit,
  isOpen,
  children,
}: UserModalEditPros) => {
  return (
    <Provider
      value={{
        onClose,
        loading,
      }}
    >
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <form onSubmit={handleSubmit} className="md:w-1/3 w-5/6">
            <div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
          </form>
        </div>
      )}
    </Provider>
  );
};
