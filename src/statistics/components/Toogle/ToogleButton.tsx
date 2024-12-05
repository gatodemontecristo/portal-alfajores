import { ReactElement } from 'react';

export interface ToogleButtonProps {
  handleToggle: () => void;
  isAction: boolean;
  children1?: ReactElement | ReactElement[];
  children2?: ReactElement | ReactElement[];
  color?: string;
}
export const ToogleButton = ({
  handleToggle,
  isAction,
  children1,
  children2,
  color = 'bg-orange-500',
}: ToogleButtonProps) => {
  return (
    <>
      <button
        onClick={handleToggle}
        className={`px-4 py-2 font-bold rounded-l-md ${
          isAction ? `${color} text-white` : 'bg-gray-200 text-gray-700'
        }`}
      >
        {children1}
      </button>
      <button
        onClick={handleToggle}
        className={`px-4 py-2 font-bold  rounded-r-md ${
          !isAction ? `${color} text-white` : 'bg-gray-200 text-gray-700'
        }`}
      >
        {children2}
      </button>
    </>
  );
};
