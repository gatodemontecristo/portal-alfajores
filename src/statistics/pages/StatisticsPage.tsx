import { useEffect, useState } from 'react';

import {
  ChocolateGraphic,
  DonnutGraphic,
  TableStructure,
  ToogleButton,
  UserAlert,
  UserModalEdit,
} from '../components';
import { nanoid } from 'nanoid';
import {
  calculateFinalAmount,
  groupUsersByTardanzaFecha,
  mapUsersChoco,
  mapUsersDonnut,
} from '../../utils';
import Carousel from './Carousel';
import {
  useAlfajorStore,
  useAuthStore,
  useFirestoreStore,
  useStatisticsStore,
} from '../../store';
import { AlfajorSpringUserProps } from '../../interfaces';
import { Skeleton } from '../../ui';
import { Notyf } from 'notyf';
import { useStateModal } from '../../hooks';
import { useLoadImages } from '../hooks';
export const StatisticsPage = () => {
  const [isLate, setIsLate] = useState(true);
  const notyf = new Notyf();
  const handleToggle = () => {
    setIsLate(!isLate);
  };
  const [isCandy, setIsCandy] = useState(true);
  const handleToggleGraphic = () => {
    setIsCandy(!isCandy);
  };

  const { fetchDocuments, documents, error, success, loading } =
    useFirestoreStore();
  const { setAlfajor } = useAlfajorStore();

  const {
    alfajorCollection,
    setAlfajorCollection,
    historyCollection,
    setHistoryCollection,
  } = useStatisticsStore();

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  useEffect(() => {
    const collectionOpen = documents.find((doc) => doc.open);
    if (collectionOpen) {
      console.log('collectionOpen', collectionOpen);
      setAlfajorCollection(collectionOpen);
      const history = groupUsersByTardanzaFecha(collectionOpen?.users || []);
      setHistoryCollection(history);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documents]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { status } = useAuthStore();
  const handleOpenModal = (alfajorUser: AlfajorSpringUserProps) => {
    if (status === 'authenticated') {
      setAlfajor(alfajorUser);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!loading) {
      if (error === null && success !== null) {
        notyf.success(success);
      } else if (error !== null) {
        notyf.error(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  const {
    submitHandleForm,
    deleteAssistance,
    handleCheckboxChange,
    isChecked,
    register,
    handleUpdateUser,
  } = useStateModal({ idGlobal: alfajorCollection?.id || '' });
  // const onUpdateDocument = () => {
  //   console.log('documents', documents);
  //   //updateDocument('gHUyaoFNK84nOx7deRfA', documents[3]);
  // };
  const { imagesLoaded } = useLoadImages();

  return (
    <>
      <Carousel>
        <div className="w-full md:w-1/3 relative h-full">
          <div className=" flex flex-row justify-between w-full top-0 right-0 pt-[20px] z-50 px-5 h-[10%]  ">
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
              ) : alfajorCollection.users.filter(
                  (user) => user.tardanzas.length > 0,
                ).length > 0 ? (
                <DonnutGraphic
                  data={mapUsersDonnut(
                    alfajorCollection?.users || [],
                    alfajorCollection?.range || '',
                  )}
                />
              ) : (
                <div className="flex flex-col items-center w-full gap-5 mt-[25%]">
                  <p className="text-xl italic">
                    Sin data para generar gráficos
                  </p>
                </div>
              )
            ) : alfajorCollection === null ? (
              <div className="flex flex-row items-end justify-center w-full gap-5 mt-[20%]">
                <Skeleton type="rect" extraClass="w-[40px] h-[40vh]" />
                <Skeleton type="rect" extraClass="w-[40px] h-[30vh]" />
                <Skeleton type="rect" extraClass="w-[40px] h-[50vh]" />
                <Skeleton type="rect" extraClass="w-[40px] h-[25vh]" />
              </div>
            ) : alfajorCollection.users.filter(
                (user) => user.tardanzas.length > 0,
              ).length > 0 ? (
              <ChocolateGraphic
                data={mapUsersChoco(
                  alfajorCollection?.users || [],
                  alfajorCollection?.range || '',
                )}
              ></ChocolateGraphic>
            ) : (
              <div className="flex flex-col items-center w-full gap-5 mt-[25%]">
                <p className="text-xl italic">Sin data para generar gráficos</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col relative items-center justify-start gap-5">
          <div className="flex flex-row items-center justify-evenly h-[10%] top-0  pt-[20px] w-full">
            <ToogleButton
              handleToggle={handleToggle}
              isAction={isLate}
              children1={<span>Tardones</span>}
              children2={<span>Puntuales</span>}
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
            {alfajorCollection === null || !imagesLoaded ? (
              Array.from({ length: 6 }).map(() => (
                <div
                  className="flex flex-col items-center w-1/4 gap-2 mt-[15%]"
                  key={nanoid()}
                >
                  <Skeleton type="circle" extraClass="w-[10vh] h-[10vh]" />
                  <Skeleton type="rect" extraClass="w-full h-[25px]" />
                </div>
              ))
            ) : alfajorCollection?.users.filter((user) =>
                isLate ? user.tardanzas.length > 0 : user.tardanzas.length == 0,
              ).length > 0 ? (
              alfajorCollection?.users
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
                ))
            ) : (
              <div className="flex flex-col items-center w-full gap-5 mt-[25%]">
                <p className="text-xl italic">
                  {`${isLate ? 'Ningún tardon :)' : 'Ningún puntual :('}`}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/3  p-3 h-full">
          <TableStructure
            title={'Historial'}
            dataBody={historyCollection}
            result={calculateFinalAmount(
              alfajorCollection?.users || [],
              alfajorCollection?.range || '',
            )}
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

      <UserModalEdit
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        handleSubmit={submitHandleForm}
        loading={loading}
      >
        <UserModalEdit.Tittle />
        <UserModalEdit.Form
          register={register}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
        <UserModalEdit.List deleteAssistance={deleteAssistance} />
        <UserModalEdit.Buttons handleUpdateUser={handleUpdateUser} />
      </UserModalEdit>
    </>
  );
};
