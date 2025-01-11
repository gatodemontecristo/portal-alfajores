import { useHistoryStore } from '../../../../store';

export const UserInfo = () => {
  const { history } = useHistoryStore();
  const getTitle = () => {
    if (history?.ganador === 'Navidad') return `Especial: ${history.ganador}`;
    return `Ganador: ${history?.ganador}`;
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {history === null ? (
        <>
          <p className="text-center text-black text-[25px] font-bold italic">
            Sin ganador
          </p>
          <span
            className={`text-center text-white text-[18px]	px-2 py-1 font-semibold rounded-3xl bg-slate-500 w-fit`}
          >
            <p>Sin monto (?)</p>
          </span>
          <p className="text-center text-black text-[18px] font-normal italic">
            -- Sprint sin seleccionar --
          </p>
        </>
      ) : (
        <>
          <p className="text-center text-black text-[25px] font-bold">
            {getTitle()}
          </p>
          <span
            className={`text-center text-white text-[18px]	px-2 py-1 font-semibold rounded-3xl ${history?.ganador === 'Navidad' ? 'bg-red-500' : 'bg-yellow-500'} w-fit`}
          >
            <p>Monto: S/. {history?.monto} soles</p>
          </span>
          <p className="text-center text-black text-[18px] font-normal">
            {history?.name} | {history?.range}
          </p>
        </>
      )}
    </div>
  );
};
