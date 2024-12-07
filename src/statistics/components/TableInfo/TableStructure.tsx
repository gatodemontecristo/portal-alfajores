import { createContext } from 'react';
import { TableInfoContextProps, TableInfoProps } from '../../../interfaces';

// eslint-disable-next-line react-refresh/only-export-components
export const TableInfoContext = createContext({} as TableInfoContextProps);
const { Provider } = TableInfoContext;

export const TableStructure = ({
  title,
  dataBody,
  result,
  children,
}: TableInfoProps) => {
  return (
    <Provider
      value={{
        title,
        dataBody,
        result,
      }}
    >
      <div className="flex flex-col bg-[#ffffffc5] h-[100%] p-5 gap-2 rounded-xl  ">
        {children}
      </div>
    </Provider>
  );
};
