import { UseFormRegister } from 'react-hook-form';

export interface IFormEditAssistance {
  dateLate: string;
  over9: boolean;
}
export interface UseFormProps {
  register: UseFormRegister<IFormEditAssistance>;
  isChecked: boolean;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const UseForm = ({
  register,
  isChecked,
  handleCheckboxChange,
}: UseFormProps) => {
  return (
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
        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex gap-2">
            <input
              type="checkbox"
              {...register('over9')}
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox ms-2 h-5 w-5 bg-orange-500 text-orange-500 border-2 border-orange-500 rounded focus:ring-0 focus:outline-none"
            />
            <div className="flex flex-col">
              <p className="text-sm">Supertarde?</p>
            </div>
          </div>
          <button
            type="submit"
            className="text-gray-500 hover:text-gray-700 md:hidden flex gap-2 "
          >
            <i className="bi bi-plus-circle"></i>
            Agregar
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="text-gray-500 hover:text-gray-700 md:flex hidden gap-2 "
      >
        <i className="bi bi-plus-circle"></i>
        Agregar
      </button>
    </div>
  );
};
