import { useEffect, useState } from 'react';

import {
  ChocolateGraphic,
  DonnutGraphic,
  TableStructure,
  ToogleButton,
  UserAlert,
} from '../components';
import { nanoid } from 'nanoid';
import {
  calculateFinalAmount,
  groupUsersByTardanzaFecha,
  mapUsersChoco,
  mapUsersDonnut,
} from '../../utils';
import Carousel from './Carousel';
import { useAlfajorStore, useFirestoreStore } from '../../store';
import {
  AlfajorSpringProps,
  AlfajorSpringUserProps,
  DataHistoryProps,
} from '../../interfaces';
import { Skeleton } from '../../ui';
import UserModal from '../components/User/UserModal/UserModal';
export const StatisticsPage = () => {
  const [isLate, setIsLate] = useState(true);
  const handleToggle = () => {
    setIsLate(!isLate);
  };
  const [isCandy, setIsCandy] = useState(true);
  const handleToggleGraphic = () => {
    setIsCandy(!isCandy);
  };

  const { fetchDocuments, documents } = useFirestoreStore();
  const { setAlfajor } = useAlfajorStore();
  const [alfajorCollection, setAlfajorCollection] =
    useState<AlfajorSpringProps | null>(null);
  const [historyCollection, setHistoryCollection] = useState<
    DataHistoryProps[] | null
  >(null);
  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  useEffect(() => {
    const collectionOpen = documents.find((doc) => doc.open);
    if (collectionOpen) {
      setAlfajorCollection(collectionOpen);
      const history = groupUsersByTardanzaFecha(collectionOpen?.users || []);
      setHistoryCollection(history);
    }
  }, [documents]);

  // const onUpdateDocument = () => {
  // updateDocument('JJ4874rwQa27IbVVR39s', mockHistory2);
  //};

  const [isModalOpen, setIsModalOpen] = useState(false);
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const handleOpenModal = (user: AlfajorSpringUserProps) => {
    setAlfajor(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Carousel>
        <div className="w-full md:w-1/3 relative h-full">
          <div className=" flex flex-row justify-between w-full top-0 right-0 pt-[20px] z-50 px-5 h-[10%]  ">
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Open Modal
            </button>
            <p className="ms-5 font-extrabold text-[35px] text-[#ffb400] ">
              Gráficos
            </p>
            {/* <button
            className="bg-amber-500 text-white font-bold p-2 rounded-md"
            onClick={onUpdateDocument}
          >
            Actualizar
          </button> */}
            <div>
              <ToogleButton
                handleToggle={handleToggleGraphic}
                isAction={isCandy}
                children1={
                  <img className="h-8 w-8 " src="../icons/gogosi.png" alt="" />
                }
                children2={
                  <img
                    className="h-8 w-8 "
                    src="../icons/chocolate.png"
                    alt=""
                  />
                }
                color="bg-amber-500"
              />
            </div>
          </div>
          <div className="flex flex-col h-[90%] ">
            {isCandy ? (
              alfajorCollection === null ? (
                <div className="flex flex-col items-center w-full gap-5 mt-[25%]">
                  <Skeleton type="circle" extraClass="w-[35vh] h-[35vh]" />
                  <Skeleton type="rect" extraClass="w-[60%] h-[30px]" />
                </div>
              ) : (
                <DonnutGraphic
                  data={mapUsersDonnut(alfajorCollection?.users || [])}
                />
              )
            ) : alfajorCollection === null ? (
              <div className="flex flex-row items-end justify-center w-full gap-5 mt-[20%]">
                <Skeleton type="rect" extraClass="w-[40px] h-[40vh]" />
                <Skeleton type="rect" extraClass="w-[40px] h-[30vh]" />
                <Skeleton type="rect" extraClass="w-[40px] h-[50vh]" />
                <Skeleton type="rect" extraClass="w-[40px] h-[25vh]" />
              </div>
            ) : (
              <ChocolateGraphic
                data={mapUsersChoco(alfajorCollection?.users || [])}
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
        <div className="w-full md:w-1/3  p-3 h-full">
          <TableStructure
            title={'Historial'}
            dataBody={historyCollection}
            result={calculateFinalAmount(alfajorCollection?.users || [])}
            key={nanoid()}
          >
            <TableStructure.Title />
            <TableStructure.Header
              children={
                <>
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
      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        items={items}
      />
    </>
  );
};
