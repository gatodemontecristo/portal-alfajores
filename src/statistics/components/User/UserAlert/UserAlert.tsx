import { createContext } from 'react';
import { UserContextProps, UserAlertProps } from '../../../../interfaces';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);
const { Provider } = UserContext;

export const UserAlert = ({ user, children }: UserAlertProps) => {
  return (
    <Provider
      value={{
        user,
      }}
    >
      <div>{children}</div>
    </Provider>
  );
};
