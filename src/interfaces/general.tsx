import { ReactElement } from 'react';

export interface DataTagsProps {
  date: string;
  over9: boolean;
}
export interface UserProps {
  user: string;
  genre: 'male' | 'female';
  amount: number;
  color: string;
  dates: DataTagsProps[];
}

export interface UserContextProps {
  user: UserProps;
}

export interface UserAlertProps {
  user: UserProps;
  children?: ReactElement | ReactElement[];
}

export interface UserAlertHOCProps {
  ({ children, user }: UserAlertProps): JSX.Element;
  Image: () => JSX.Element;
  Info: () => JSX.Element;
  Date: () => JSX.Element;
}
