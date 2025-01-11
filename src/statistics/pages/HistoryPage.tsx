import { useEffect, useState } from 'react';
import { ToogleButton, UserAlert, UserBig } from '../components';
import Carousel from './Carousel';
import { nanoid } from 'nanoid';
import { AlfajorSpringProps } from '../../interfaces';
import { useFirestoreStore, useHistoryStore } from '../../store';
import { Skeleton } from '../../ui';

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

  const { fetchDocuments, loading } = useFirestoreStore();
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
            {!loading ? (
              documents
                .filter((item) => !item.open)
                .map((doc) => (
                  <div
                    className={`group flex flex-row justify-between  text-white p-3 rounded-md w-full transition-all duration-300 ${history?.name === doc.name ? 'bg-orange-500' : 'bg-slate-600 hover:bg-slate-500'} `}
                    onClick={() => handleSelectHistory(doc)}
                  >
                    <p>
                      {doc.name} | {doc.range}
                    </p>
                    <i className="bi bi-caret-right-fill transform group-hover:translate-x-[-15px] transition-all duration-300"></i>
                  </div>
                ))
            ) : (
              <div className="flex flex-col items-center justify-start w-full gap-3">
                <Skeleton type="rect" extraClass="w-full h-[40px]" />
                <Skeleton type="rect" extraClass="w-full h-[40px]" />
                <Skeleton type="rect" extraClass="w-full h-[40px]" />
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col relative items-center justify-center gap-2">
          <UserBig>
            <UserBig.Icon />
            <UserBig.Image />
            <UserBig.Info />
          </UserBig>
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
              <div className="flex flex-col items-center w-full gap-5 mt-[25%] p-5 text-center">
                <p className="text-xl italic">
                  {`Selecciona un sprint para ver los participantes`}
                </p>
              </div>
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
