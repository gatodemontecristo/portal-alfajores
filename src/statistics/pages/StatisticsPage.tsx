import { useState } from 'react';

import {
  ChocolateGraphic,
  DonnutGraphic,
  TableStructure,
  ToogleButton,
  UserAlert,
} from '../components';
import { nanoid } from 'nanoid';
import { mockHistory, mockUsers } from '../../mock';
import {
  calculateFinalAmount,
  mapUsersChoco,
  mapUsersDonnut,
} from '../../utils';
import Carousel from './Carousel';
export const StatisticsPage = () => {
  const [isLate, setIsLate] = useState(true);
  const handleToggle = () => {
    setIsLate(!isLate);
  };
  const [isCandy, setIsCandy] = useState(true);
  const handleToggleGraphic = () => {
    setIsCandy(!isCandy);
  };
  return (
    // <div className="w-full flex flex-row pt-[40px] h-[80vh]">
    <Carousel>
      <div className="w-full md:w-1/3 relative h-full">
        <div className=" flex flex-row justify-between w-full top-0 right-0 pt-[20px] z-50 px-5 h-[10%]  ">
          <p className="ms-5 font-extrabold text-[35px] text-[#ffb400] ">
            Gráficos
          </p>
          <div>
            <ToogleButton
              handleToggle={handleToggleGraphic}
              isAction={isCandy}
              children1={
                <img className="h-8 w-8 " src="../icons/gogosi.png" alt="" />
              }
              children2={
                <img className="h-8 w-8 " src="../icons/chocolate.png" alt="" />
              }
              color="bg-amber-500"
            />
          </div>
        </div>
        <div className="flex flex-col h-[90%] ">
          {isCandy ? (
            <DonnutGraphic data={mapUsersDonnut(mockUsers)} />
          ) : (
            <ChocolateGraphic
              data={mapUsersChoco(mockUsers)}
            ></ChocolateGraphic>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/3 flex flex-col relative items-center justify-start gap-5">
        <div className="h-[10%] top-0  pt-[20px]">
          <ToogleButton
            handleToggle={handleToggle}
            isAction={isLate}
            children1={<span>Tardones</span>}
            children2={<span>Puntuales</span>}
          />
        </div>
        <div className="flex flex-row items-center  justify-center  flex-wrap  gap-4 overflow-y-scroll custom-scrollbar">
          {mockUsers
            .filter((user) =>
              isLate ? user.dates.length > 0 : user.dates.length == 0,
            )
            .map((user) => (
              <UserAlert {...{ user }} key={nanoid()}>
                <UserAlert.Image />
                <UserAlert.Info />
                <UserAlert.Date />
              </UserAlert>
            ))}
        </div>
      </div>
      <div className="w-full md:w-1/3  p-3 h-full">
        <TableStructure
          title={'Historial'}
          dataBody={mockHistory}
          result={calculateFinalAmount(mockUsers)}
          key={nanoid()}
        >
          <TableStructure.Title />
          <TableStructure.Header
            children={
              <>
                {' '}
                <p className="font-bold text-[20px] w-1/5">Fecha</p>
                <p className="font-bold text-[20px] w-3/5">Personas</p>
                <p className="font-bold text-[20px] w-1/5">Monto</p>
              </>
            }
          ></TableStructure.Header>
          <TableStructure.Body />
          <TableStructure.Result />
        </TableStructure>
      </div>
    </Carousel>
    // </div>
  );
};
