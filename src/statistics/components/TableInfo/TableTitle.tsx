import { useContext } from 'react';
import { TableInfoContext } from './TableStructure';

export const TableTitle = () => {
  const { title } = useContext(TableInfoContext);
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <p className=" font-extrabold text-[35px] text-[#ffb400] mb-2">{title}</p>
      <div className="flex flex-col gap-1">
        <p className="text-xs">Normal : Tardanza</p>
        <p className="text-xs font-bold">Negrita : Supertardanza</p>
      </div>
    </div>
  );
};
