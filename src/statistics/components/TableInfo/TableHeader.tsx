import { ReactElement } from 'react';

export interface TableHeaderProps {
  children: ReactElement | ReactElement[];
}
export const TableHeader = ({ children }: TableHeaderProps) => {
  return (
    <div className="flex flex-row w-full mb-2 border-b-2 border-black">
      {children}
    </div>
  );
};
