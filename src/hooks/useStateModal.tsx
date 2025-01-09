import { useForm } from 'react-hook-form';
import { useAlfajorStore, useFirestoreStore } from '../store';
import { formatDateToMMDD } from '../utils';
import { AlfajorSpringTardProps } from '../interfaces';
import { Notyf } from 'notyf';
import { useState } from 'react';
import { IFormEditAssistance } from '../statistics/components/User/UserModal/UseForm';

export const useStateModal = ({ idGlobal }: { idGlobal: string }) => {
  const { alfajor } = useAlfajorStore();
  const { setDeleteTardanza, setAddTardanza } = useAlfajorStore();
  const { documents, loading, updateDocument } = useFirestoreStore();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { register, handleSubmit, getValues } = useForm<IFormEditAssistance>();
  const notyf = new Notyf();
  const updateUserField = async (
    documentId: string,
    userIndex: number,
    field: string,
    value: AlfajorSpringTardProps[],
  ) => {
    const document = documents.find((doc) => doc.id === documentId);

    if (document) {
      const updatedUsers = [...document.users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        [field]: value,
      };
      console.log('documentId', documentId);
      console.log('updatedUsers', updatedUsers);
      await updateDocument(documentId, { users: updatedUsers });
    }
  };

  const handleUpdateUser = () => {
    if (alfajor?.tardanzas !== undefined) {
      updateUserField(idGlobal, alfajor.index, 'tardanzas', alfajor.tardanzas);
    }
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const submitHandleForm = handleSubmit(handleUpdateUserTardanza);

  return {
    loading,
    handleUpdateUser,
    handleUpdateUserTardanza,
    deleteAssistance,
    handleCheckboxChange,
    isChecked,
    register,
    submitHandleForm,
  };
};
