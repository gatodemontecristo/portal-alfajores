import { ReactElement } from 'react';

export interface DataTagsProps {
  date: string;
  over9: boolean;
}
export interface UserProps {
  user: string;
  genre: 'male' | 'female';
  amount: number;
  dates: DataTagsProps[];
}

export interface UserContextProps {
  user: UserProps;
}

export interface UserAlertProps {
  user: UserProps;
  children?: ReactElement | ReactElement[];
}
