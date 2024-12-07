import { useContext } from 'react';
import { TableInfoContext } from './TableStructure';

export const TableTitle = () => {
  const { title } = useContext(TableInfoContext);
  return (
    <p className=" font-extrabold text-[35px] text-[#ffb400] mb-2">{title}</p>
  );
};
