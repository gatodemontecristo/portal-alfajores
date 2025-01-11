import { useHistoryStore } from '../../../../store';

export const UserInfo = () => {
  const { history } = useHistoryStore();
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
            Ganador: {history.ganador}
          </p>
          <span
            className={`text-center text-white text-[18px]	px-2 py-1 font-semibold rounded-3xl bg-yellow-500 w-fit`}
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
