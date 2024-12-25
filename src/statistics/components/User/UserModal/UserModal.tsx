import React, { useState } from 'react';
import { useAlfajorStore, useFirestoreStore } from '../../../../store';
import { useForm } from 'react-hook-form';
import { formatDateToMMDD } from '../../../../utils';
import { Notyf } from 'notyf';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: string[];
}
export interface IFormEditAssistance {
  dateLate: string;
  over9: boolean;
}

const UserModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const notyf = new Notyf();
  if (!isOpen) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { documents, updateDocument } = useFirestoreStore();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setDeleteTardanza, setAddTardanza } = useAlfajorStore();

  const updateUserField = async (
    documentId: string,
    userIndex: number,
    field: string,
    value: string,
  ) => {
    const document = documents.find((doc) => doc.id === documentId);

    if (document) {
      const updatedUsers = [...document.users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        [field]: value,
      };
      console.log('updateUserField');
      console.log(documentId, updatedUsers);
      await updateDocument(documentId, { users: updatedUsers });
    }
  };
  const handleUpdateUser = () => {
    updateUserField('JJ4874rwQa27IbVVR39s', 0, 'name', 'Calif');
  };

  const handleUpdateUserTardanza = () => {
    const fechaFormat = formatDateToMMDD(getValues('dateLate'));
    const dateArray = alfajor?.tardanzas.filter(
      (item) => item.fecha === fechaFormat,
    );
    if (dateArray?.length) {
      notyf.error('Fecha ya existe');
      return;
    }
    setAddTardanza({
      fecha: fechaFormat,
      over9: getValues('over9'),
    });
  };

  const deleteAssistance = (date: string) => {
    setDeleteTardanza(date);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { alfajor } = useAlfajorStore();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { register, handleSubmit, getValues } = useForm<IFormEditAssistance>();
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit(handleUpdateUserTardanza)}
        className=" w-1/3"
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Editar usuario</h2>
            <button onClick={onClose}>
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className="ms-2 text-sm">Fecha de tardanza: </p>
                <input
                  type="date"
                  id="date"
                  {...register('dateLate', { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  {...register('over9')}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="form-checkbox ms-2 h-5 w-5 bg-orange-500 text-orange-500 border-2 border-orange-500 rounded focus:ring-0 focus:outline-none"
                />
                <p className="text-sm">Supertarde?</p>
              </div>
            </div>

            <button
              type="submit"
              className="text-gray-500 hover:text-gray-700 flex gap-2"
            >
              <i className="bi bi-plus-circle"></i>
              Agregar
            </button>
          </div>
          <ul className="space-y-2  mb-4">
            {alfajor?.tardanzas.map((item, index) => (
              <li
                key={index}
                className="flex justify-between p-2 border-b border-gray-200"
              >
                <p>
                  {item.fecha} - {item.over9 ? 'Supertarde 😡' : 'Tarde 😠'}
                </p>
                <button onClick={() => deleteAssistance(item.fecha)}>
                  <i className="bi bi-x-lg"></i>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-end  mb-4">
            <button
              onClick={onClose}
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex gap-2"
            >
              <i className="bi bi-floppy-fill"></i>
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
