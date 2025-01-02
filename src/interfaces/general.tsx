import { ReactElement } from 'react';
import { TableHeaderProps } from '../statistics/components/TableInfo/TableHeader';
import { UserListProps } from '../statistics/components/User/UserModal/UserList';
import { UseFormProps } from '../statistics/components/User/UserModal/UseForm';

export interface DataTagsProps {
  date: string;
  over9: boolean;
}

export interface DataColumnProps {
  userName: string;
  over9: boolean;
}

export interface DataHistoryProps {
  fecha: string;
  users: DataColumnProps[];
}
export interface UserProps {
  user: string;
  genre: 'male' | 'female';
  amount: number;
  color: string;
  dates: DataTagsProps[];
  img: string | null;
}

export interface UserContextProps {
  user: AlfajorSpringUserProps;
}

export interface UserAlertProps {
  user: AlfajorSpringUserProps;
  handleOpenModal: (user: AlfajorSpringUserProps) => void;
  children?: ReactElement | ReactElement[];
}

export interface UserModalContextProps {
  onClose: () => void;
  loading: boolean;
}

export interface UserModalEditPros {
  handleSubmit: () => void;
  children?: ReactElement | ReactElement[];
  onClose: () => void;
  loading: boolean;
  isOpen: boolean;
}

export interface TableInfoContextProps {
  title: string;
  dataBody: DataHistoryProps[] | null;
  result: number;
}

export interface TableInfoProps {
  title: string;
  dataBody: DataHistoryProps[] | null;
  result: number;
  children?: ReactElement | ReactElement[];
}

export interface UserAlertHOCProps {
  ({ children, user }: UserAlertProps): JSX.Element;
  Image: () => JSX.Element;
  Info: () => JSX.Element;
  Date: () => JSX.Element;
}

export interface UserModalHOCProps {
  ({
    children,
    handleSubmit,
    onClose,
    loading,
  }: UserModalEditPros): JSX.Element;
  Tittle: () => JSX.Element;
  List: ({ deleteAssistance }: UserListProps) => JSX.Element;
  Form: ({
    register,
    isChecked,
    handleCheckboxChange,
  }: UseFormProps) => JSX.Element;
}

export interface TableStructureHOCProps {
  ({ children, title, dataBody, result }: TableInfoProps): JSX.Element;
  Title: () => JSX.Element;
  Header: ({ children }: TableHeaderProps) => JSX.Element;
  Body: () => JSX.Element;
  Result: () => JSX.Element;
}

export interface AlfajorSpringUserProps {
  color: string;
  index: number;
  genre: 'male' | 'female';
  img: string;
  name: string;
  tardanzas: AlfajorSpringTardProps[];
}
export interface AlfajorSpringTardProps {
  fecha: string;
  over9: boolean;
}
export interface AlfajorSpringProps {
  id: string;
  name: string;
  open: boolean;
  range: string;
  users: AlfajorSpringUserProps[];
}
