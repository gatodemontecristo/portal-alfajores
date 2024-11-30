export const NavBar = () => {
  return (
    <nav className=" w-auto bg-secondary text-white flex flex-col justify-center">
      <ul className="flex flex-col gap-0">
        <button className="p-3  w-[120px] flex flex-col items-center group">
          <div className="flex group-hover:bg-pinkberry rounded-md p-3">
            <img className="h-10 w-10 " src="../icons/alfajor.png" alt="" />
          </div>
          <p className="text-center text-black  text-[13px]	mt-1 font-semibold">
            Spring Actual
          </p>
        </button>
        <button className="p-3  w-[120px] flex flex-col items-center group">
          <div className="flex group-hover:bg-pinkberry rounded-md p-3">
            <img
              className="h-10 w-10 "
              src="../icons/dulces-suenos.png"
              alt=""
            />
          </div>
          <p className="text-center text-black text-[13px]	mt-1 font-semibold">
            Historial
          </p>
        </button>
      </ul>
    </nav>
  );
};
