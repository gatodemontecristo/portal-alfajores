import { createContext } from 'react';
import { UserContextProps, UserAlertProps } from '../../../../interfaces';

const UserContext = createContext({} as UserContextProps);
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
