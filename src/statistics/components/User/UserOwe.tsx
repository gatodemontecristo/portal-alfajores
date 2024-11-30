export const UserOwe = () => {
  return (
    <div className="flex flex-col w-[120px] justify-center gap-1 ">
      <div className="flex w-[120px] border-solid border-8 border-[#fdbd22] rounded-full p-3">
        <img src="../people/hombre.png" alt="" />
      </div>
      <div className="flex flex-col">
        <p className="text-center text-black text-[20px] font-bold">Juan</p>
        <p className="text-center text-black text-[16px] font-normal">
          Desde: S/.50
        </p>
      </div>
      <div className="flex flex-row gap-1 flex-wrap justify-center">
        <span className="text-center text-white text-[11px]	px-2 py-1 font-semibold rounded-3xl bg-slate-400">
          <p>07/11</p>
        </span>
        <span className="text-center text-white text-[11px]	px-2 py-1 font-semibold rounded-3xl bg-yellow-500">
          <p>07/11</p>
        </span>
        <span className="text-center text-white text-[11px]	px-2 py-1 font-semibold rounded-3xl bg-yellow-500">
          <p>07/11</p>
        </span>
      </div>
    </div>
  );
};
