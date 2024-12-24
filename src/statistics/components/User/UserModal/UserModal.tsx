import React from 'react';
import { useAlfajorStore, useFirestoreStore } from '../../../../store';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: string[];
}

const UserModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { documents, updateDocument } = useFirestoreStore();

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { alfajor } = useAlfajorStore();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleUpdateUser}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Open Modal
          </button>
          <h2 className="text-xl font-bold">Modal Title</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <ul className="space-y-2">
          {alfajor?.tardanzas.map((item, index) => (
            <li key={index} className="p-2 border-b border-gray-200">
              {item.fecha} - {item.over9 ? 'Supertarde 😡' : 'Tarde 😠'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserModal;
