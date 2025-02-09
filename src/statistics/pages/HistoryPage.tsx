import { useEffect, useState } from 'react';
import { HistoryButton, ToogleButton, UserAlert, UserBig } from '../components';
import Carousel from './Carousel';
import { nanoid } from 'nanoid';
import { AlfajorSpringProps } from '../../interfaces';
import { useFirestoreStore, useHistoryStore } from '../../store';
import { Skeleton } from '../../ui';
import { useLoadImages } from '../hooks';

const compareDates = (a: string, b: string): number => {
  const [dayA, monthA, yearA] = a.split('/').map(Number);
  const [dayB, monthB, yearB] = b.split('/').map(Number);

  const dateA = new Date(yearA, monthA - 1, dayA);
  const dateB = new Date(yearB, monthB - 1, dayB);

  return dateB.getTime() - dateA.getTime();
};
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
    setHistory(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchDocuments]);
  const { imagesLoaded } = useLoadImages();
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
                .sort((a, b) => compareDates(a.fecha, b.fecha))
                .filter((item) => !item.open)
                .map((doc) => (
                  <HistoryButton
                    history={history}
                    handleSelectHistory={() => handleSelectHistory(doc)}
                    doc={doc}
                    key={nanoid()}
                  ></HistoryButton>
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
            {history === null || !imagesLoaded ? (
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
