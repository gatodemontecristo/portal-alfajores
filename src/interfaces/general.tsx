import { ReactElement } from 'react';
import { TableHeaderProps } from '../statistics/components/TableInfo/TableHeader';

export interface DataTagsProps {
  date: string;
  over9: boolean;
}

export interface DataColumnProps {
  user: string;
  over9: boolean;
}

export interface DataHistoryProps {
  date: string;
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
  children?: ReactElement | ReactElement[];
}

export interface TableInfoContextProps {
  title: string;
  dataBody: DataHistoryProps[];
  result: number;
}

export interface TableInfoProps {
  title: string;
  dataBody: DataHistoryProps[];
  result: number;
  children?: ReactElement | ReactElement[];
}

export interface UserAlertHOCProps {
  ({ children, user }: UserAlertProps): JSX.Element;
  Image: () => JSX.Element;
  Info: () => JSX.Element;
  Date: () => JSX.Element;
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
