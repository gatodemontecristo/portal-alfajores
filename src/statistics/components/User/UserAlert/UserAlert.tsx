import { createContext } from 'react';
import { UserContextProps, UserAlertProps } from '../../../../interfaces';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);
const { Provider } = UserContext;

export const UserAlert = ({
  user,
  handleOpenModal,
  children,
}: UserAlertProps) => {
  return (
    <Provider
      value={{
        user,
      }}
    >
      <div
        className="flex flex-col items-center w-1/4"
        onClick={() => handleOpenModal(user)}
      >
        {children}
      </div>
    </Provider>
  );
};
