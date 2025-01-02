import { AlfajorSpringTardProps } from '../../../../interfaces';
import { nanoid } from 'nanoid';
import { useAlfajorStore } from '../../../../store';

const DefaultMessageList = ({ title }: { title: string }) => {
  return (
    <li className="flex justify-center p-2 border-b border-gray-200 text-center">
      <p className="text-xl text-gray-500 italic font-light">{title}</p>
    </li>
  );
};
export interface UserListProps {
  deleteAssistance: (date: string) => void;
}
export interface AlfajorRowListProps {
  item: AlfajorSpringTardProps;
  deleteAssistance: (date: string) => void;
}
const AlfajorRowList = ({ item, deleteAssistance }: AlfajorRowListProps) => {
  return (
    <li className="flex justify-between p-2 border-b border-gray-200">
      <p>
        {item.fecha} - {item.over9 ? 'Supertarde 😡' : 'Tarde 😠'}
      </p>
      <button onClick={() => deleteAssistance(item.fecha)}>
        <i className="bi bi-x-lg"></i>
      </button>
    </li>
  );
};
export const UserList = ({ deleteAssistance }: UserListProps) => {
  const { alfajor } = useAlfajorStore();
  return (
    <ul className="space-y-2  my-5">
      {alfajor?.tardanzas.length === 0 && (
        <DefaultMessageList title="No hay tardanzas"></DefaultMessageList>
      )}
      {alfajor?.tardanzas.map((item) => (
        <AlfajorRowList
          {...{ item, deleteAssistance }}
          key={nanoid()}
        ></AlfajorRowList>
      ))}
    </ul>
  );
};
