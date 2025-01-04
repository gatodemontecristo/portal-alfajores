import { useState } from 'react';
import { Skeleton } from '../../ui';
import { ToogleButton, UserAlert } from '../components';
import Carousel from './Carousel';
import { nanoid } from 'nanoid';
import { AlfajorSpringProps } from '../../interfaces';

export const HistoryPage = () => {
  const [isLate, setIsLate] = useState(true);
  const handleToggle = () => {
    setIsLate(!isLate);
  };
  const [alfajorCollection, setAlfajorCollection] =
    useState<AlfajorSpringProps | null>(null);

  const handleOpenModal = () => {};
  return (
    <>
      <Carousel>
        <div className="w-full md:w-1/3 relative h-full flex flex-col items-center justify-center p-10">
          <p className="ms-10 font-extrabold text-[35px] text-[#ffb400] absolute top-0 left-0">
            Sprints pasados
          </p>
          <div className="flex flex-col items-center justify-start    overflow-y-scroll custom-scrollbar gap-3 w-full">
            <div className="flex flex-row justify-between bg-slate-600 text-white p-3 rounded-md w-full">
              <p>Spring Q4 SP5 | 27 Nov - 1111 Dec</p>
              <i className="bi bi-caret-right-fill"></i>
            </div>
            <div className="flex flex-row justify-between bg-slate-600 text-white p-3 rounded-md w-full">
              <p>Spring Q4 SP5 | 27 Nov - 22222 Dec</p>
              <i className="bi bi-caret-right-fill"></i>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col relative items-center justify-center gap-2">
          <div className="flex justify-center items-center w-[70px]">
            <img src={`../big/crown.png`} alt="" />
          </div>
          <div className="flex w-2/3 border-solid border-[14px] border-[#fdbd22] rounded-full p-3 overflow-hidden">
            <img src={`../people/mujer.png`} alt="" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <p className="text-center text-black text-[25px] font-bold">
              Ganador: Diana
            </p>
            <span
              className={`text-center text-white text-[18px]	px-2 py-1 font-semibold rounded-3xl bg-yellow-500 w-fit`}
            >
              <p>Monto: S/. 50 soles</p>
            </span>
            <p className="text-center text-black text-[18px] font-normal">
              Spring Q4 SP5 | 27 Nov - 10 Dec
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3  p-3 h-full">
          <div className="flex flex-row items-center justify-evenly h-[10%] top-0  pt-[20px] w-full">
            <ToogleButton
              handleToggle={handleToggle}
              isAction={isLate}
              children1={<span>Pagaron</span>}
              children2={<span>Concursaron</span>}
            />
            <div className="flex flex-col gap-1">
              <div className="flex flex-rown gap-2 items-center">
                <div className="w-[20px] h-[20px] bg-slate-400"></div>
                <p className="text-xs">Tardanza</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div className="w-[20px] h-[20px] bg-yellow-500"></div>
                <p className="text-xs">Supertardanza</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center w-full justify-center  flex-wrap  gap-4 overflow-y-scroll custom-scrollbar">
            {alfajorCollection === null
              ? Array.from({ length: 6 }).map(() => (
                  <div
                    className="flex flex-col items-center w-1/4 gap-2 mt-[15%]"
                    key={nanoid()}
                  >
                    <Skeleton type="circle" extraClass="w-[10vh] h-[10vh]" />
                    <Skeleton type="rect" extraClass="w-full h-[25px]" />
                  </div>
                ))
              : alfajorCollection?.users
                  .filter((user) =>
                    isLate
                      ? user.tardanzas.length > 0
                      : user.tardanzas.length == 0,
                  )
                  .map((user) => (
                    <UserAlert {...{ user, handleOpenModal }} key={nanoid()}>
                      <UserAlert.Image />
                      <UserAlert.Info />
                      <UserAlert.Date />
                    </UserAlert>
                  ))}
          </div>
        </div>
      </Carousel>
    </>
  );
};
