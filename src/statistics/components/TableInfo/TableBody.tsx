import { useContext } from 'react';
import { TableInfoContext } from './TableStructure';
import { nanoid } from 'nanoid';
import { calculateTotalAmount, getUsersString } from '../../../utils';
import { Skeleton } from '../../../ui';
import { useStatisticsStore } from '../../../store';
export const TableBody = () => {
  const { dataBody } = useContext(TableInfoContext);
  const { alfajorCollection } = useStatisticsStore();
  return (
    <div className="flex flex-col overflow-y-scroll custom-scrollbar">
      {dataBody === null ? (
        <div className="flex flex-col items-center w-full gap-2 mt-[10px]">
          {Array.from({ length: 3 }).map(() => (
            <Skeleton type="rect" extraClass="w-full h-[25px]" key={nanoid()} />
          ))}
        </div>
      ) : dataBody.length === 0 ? (
        <div className="flex flex-col items-center w-full gap-5 mt-[25%]">
          <p className="text-xl italic">No hay registros</p>
        </div>
      ) : (
        dataBody
          .sort((a, b) => {
            const dateA = new Date(a.fecha.split('/').reverse().join('-'));
            const dateB = new Date(b.fecha.split('/').reverse().join('-'));
            return dateA.getTime() - dateB.getTime();
          })
          .map((item) => (
            <div className="flex flex-row w-full" key={nanoid()}>
              <p className="w-1/5">{item.fecha}</p>
              <div className="w-3/5">
                <p
                  dangerouslySetInnerHTML={{
                    __html: getUsersString(item.users),
                  }}
                />
              </div>
              <p className="w-1/5">
                S/.
                {calculateTotalAmount(
                  item.users,
                  alfajorCollection?.range || '',
                )}
              </p>
            </div>
          ))
      )}
    </div>
  );
};
