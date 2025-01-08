import { useEffect, useState } from 'react';
import { Skeleton } from '../../ui';
import { ToogleButton, UserAlert } from '../components';
import Carousel from './Carousel';
import { nanoid } from 'nanoid';
import { AlfajorSpringProps } from '../../interfaces';
import { useFirestoreStore, useHistoryStore } from '../../store';

export const HistoryPage = () => {
  const [isLate, setIsLate] = useState(true);
  const handleToggle = () => {
    setIsLate(!isLate);
  };

  const handleOpenModal = () => {};

  const { documents } = useFirestoreStore();
  const { setHistory, history } = useHistoryStore();
  const handleSelectHistory = (item: AlfajorSpringProps) => {
    setHistory(item);
  };

  const getWinnerImg = ({ ganador }: { ganador: string | undefined }) => {
    const winner = history?.users.find(
      (user) => user.name === history?.ganador,
    );
    if (ganador === 'Navidad') return '../winners/navidad.png';
    else if (winner)
      return winner.img === ''
        ? winner.genre === 'female'
          ? '../people/mujer.png'
          : '../people/hombre.png'
        : winner.img;

    return '../winners/gato.png';
  };

  const { fetchDocuments } = useFirestoreStore();
  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);
  return (
    <>
      <Carousel>
        <div className="w-full md:w-1/3 relative h-full flex flex-col items-center justify-center p-10">
          <p className="ms-10 font-extrabold text-[35px] text-[#ffb400] absolute top-0 left-0">
            Sprints pasados
          </p>
          <div className="flex flex-col items-center justify-start    overflow-y-scroll custom-scrollbar gap-3 w-full">
            {documents
              .filter((item) => !item.open)
              .map((doc) => (
                <div
                  className="group flex flex-row justify-between bg-slate-600 text-white p-3 rounded-md w-full hover:bg-slate-500 transition-all duration-300"
                  onClick={() => handleSelectHistory(doc)}
                >
                  <p>
                    {doc.name} | {doc.range}
                  </p>
                  <i className="bi bi-caret-right-fill transform group-hover:translate-x-[-15px] transition-all duration-300"></i>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col relative items-center justify-center gap-2">
          <div className="flex justify-center items-center w-[70px]">
            <img src={`../big/crown.png`} alt="" />
          </div>
          <div className="flex w-2/3 border-solid border-[14px] border-[#fdbd22] rounded-full p-3 overflow-hidden">
            <img src={getWinnerImg({ ganador: history?.ganador })} alt="" />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            {history === null ? (
              <>
                <p className="text-center text-black text-[25px] font-bold italic">
                  Sin ganador
                </p>
                <span
                  className={`text-center text-white text-[18px]	px-2 py-1 font-semibold rounded-3xl bg-slate-500 w-fit`}
                >
                  <p>Sin monto (?)</p>
                </span>
                <p className="text-center text-black text-[18px] font-normal italic">
                  -- Sprint sin seleccionar --
                </p>
              </>
            ) : (
              <>
                <p className="text-center text-black text-[25px] font-bold">
                  Ganador: {history.ganador}
                </p>
                <span
                  className={`text-center text-white text-[18px]	px-2 py-1 font-semibold rounded-3xl bg-yellow-500 w-fit`}
                >
                  <p>Monto: S/. {history?.monto} soles</p>
                </span>
                <p className="text-center text-black text-[18px] font-normal">
                  {history?.name} | {history?.range}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-start    overflow-y-scroll custom-scrollbar gap-3 w-full md:w-1/3 ">
          <div className="flex flex-row items-center justify-evenly h-[10%] top-0  pt-[20px] w-full">
            <ToogleButton
              handleToggle={handleToggle}
              isAction={isLate}
              children1={<span>Pagaron</span>}
              children2={<span>Concursaron</span>}
            />
          </div>
          <div className="flex flex-row items-center w-full justify-center  flex-wrap  gap-4 overflow-y-scroll custom-scrollbar">
            {history === null ? (
              Array.from({ length: 6 }).map(() => (
                <div
                  className="flex flex-col items-center w-1/4 gap-2 mt-[15%]"
                  key={nanoid()}
                >
                  <Skeleton type="circle" extraClass="w-[10vh] h-[10vh]" />
                  <Skeleton type="rect" extraClass="w-full h-[25px]" />
                </div>
              ))
            ) : history?.users.filter((user) =>
                isLate ? user.monto > 0 : user.monto == 0,
              ).length > 0 ? (
              history?.users
                .filter((user) => (isLate ? user.monto > 0 : user.monto == 0))
                .map((user) => (
                  <UserAlert {...{ user, handleOpenModal }} key={nanoid()}>
                    <UserAlert.Image />
                    <UserAlert.Info disable={false} />
                    <UserAlert.Date disable={false} />
                  </UserAlert>
                ))
            ) : (
              <div className="flex flex-col items-center w-full gap-5 mt-[25%]">
                <p className="text-xl italic">
                  {`${isLate ? 'Ninguno pagó :)' : 'Ningún puntual :('}`}
                </p>
              </div>
            )}
          </div>
        </div>
      </Carousel>
    </>
  );
};
