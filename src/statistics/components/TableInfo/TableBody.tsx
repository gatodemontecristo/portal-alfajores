import { useContext } from 'react';
import { TableInfoContext } from './TableStructure';
import { nanoid } from 'nanoid';
import { calculateTotalAmount, getUsersString } from '../../../utils';
export const TableBody = () => {
  const { dataBody } = useContext(TableInfoContext);

  return (
    <div className="flex flex-col overflow-y-scroll custom-scrollbar">
      {dataBody.map((item) => (
        <div className="flex flex-row w-full" key={nanoid()}>
          <p className="w-1/5">{item.date}</p>
          <div className="w-3/5">
            <p
              dangerouslySetInnerHTML={{
                __html: getUsersString(item.users),
              }}
            />
          </div>
          <p className="w-1/5">S/.{calculateTotalAmount(item.users)}</p>
        </div>
      ))}
    </div>
  );
};
