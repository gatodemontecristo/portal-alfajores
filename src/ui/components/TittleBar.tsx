export const TittleBar = () => {
  return (
    <nav className="w-screen bg-primary text-white flex flex-row justify-between items-center px-7 gap-6">
      <div className="flex flex-row  items-center">
        <img src="../logo/tinos.png" className="w-[120px] h-[80px]" alt="" />
        <h2 className="text-white font-bold text-xl ms-5">
          Portal de los alfajores
        </h2>
      </div>
      <div className="flex flex-row  items-center">
        <h2 className="text-white font-bold text-xl ms-5">Spring Q4 SP5 | </h2>
        <h4 className="text-white font-bold text-sm ms-5">27 Nov - 10 Dec</h4>
      </div>
    </nav>
  );
};
