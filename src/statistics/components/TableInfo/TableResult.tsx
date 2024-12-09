import { useContext } from 'react';
import { TableInfoContext } from './TableStructure';

export const TableResult = () => {
  const { result, dataBody } = useContext(TableInfoContext);

  return (
    <div className="flex flex-row justify-between items-center w-full mt-auto pt-2 border-t-2 border-black">
      <p className="font-bold text-[20px] ">Monto total : </p>
      <span className="px-2 py-2 bg-amber-400 flex flex-row gap-4 w-[40%] justify-evenly  ">
        {dataBody === null ? (
          <span className="loader absolute top-[-10px]"></span>
        ) : (
          <p className="text-white font-bold text-[23px]">S/.{result}</p>
        )}

        <img className="h-8 w-8 " src="../icons/galleta.png" alt="" />
      </span>
    </div>
  );
};
