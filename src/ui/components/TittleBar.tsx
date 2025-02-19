import { useState } from 'react';
import {
  useAuthStore,
  useFirestoreStore,
  useStatisticsStore,
} from '../../store';
import { ModalMenu } from './ModalMenu';

export const TittleBar = () => {
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const { loading } = useFirestoreStore();
  const { alfajorCollection } = useStatisticsStore();
  return (
    <>
      <nav className="w-screen bg-primary text-white flex flex-row justify-between items-center px-2 md:px-7 gap-4 md:gap-6">
        <button
          className="bg-primary border-white text-white p-2 rounded-md font-bold md:hidden text-4xl"
          onClick={toggleModal}
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="flex flex-row  items-center">
          <img
            src="../logo/tinos.png"
            className="w-[120px] md:w-[120px] md:h-[80px]"
            alt=""
          />
          <h2 className="text-white font-bold text-xl ms-5 hidden md:flex">
            Portal de los alfajores - {user?.email || 'Sin autenticar'}
          </h2>
        </div>
        <div className="flex flex-col  items-center text-center">
          <h2 className="text-white font-bold text-sm ms-0 md:ms-0  flex flex-col md:hidden">
            <p>Portal de los alfajores - {user?.email || 'Sin autenticar'}</p>
          </h2>

          {loading ? (
            <span className="loader absolute top-[-10px]"></span>
          ) : (
            <h2 className="text-white font-bold text-sm md:text-xl ms-0 md:ms-5 ">
              {alfajorCollection === null ? (
                <p className="italic">--Sin sprint actual--</p>
              ) : (
                <p>
                  {alfajorCollection.name} |{' '}
                  <span className="text-sm">{alfajorCollection.range}</span>
                </p>
              )}
            </h2>
          )}
        </div>
      </nav>
      <ModalMenu {...{ isOpen, toggleModal }}></ModalMenu>
    </>
  );
};
