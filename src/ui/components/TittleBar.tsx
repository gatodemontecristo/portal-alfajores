import { useAuthStore } from '../../store';

export const TittleBar = () => {
  const { status, user } = useAuthStore();
  return (
    <nav className="w-screen bg-primary text-white flex flex-row justify-between items-center px-4 md:px-7 gap-6">
      <div className="flex flex-row  items-center">
        <img
          src="../logo/tinos.png"
          className="w-[100px] md:w-[120px] md:h-[80px]"
          alt=""
        />
        <h2 className="text-white font-bold text-xl ms-5 hidden md:flex">
          Portal de los alfajores {user?.email} {status}
        </h2>
      </div>
      <div className="flex flex-col  items-center">
        <h2 className="text-white font-bold text-lg ms-0 md:ms-5 flex md:hidden">
          Portal de los alfajores {user?.email} {status}
        </h2>
        <h2 className="text-white font-bold text-sm md:text-xl ms-0 md:ms-5 ">
          Spring Q4 SP5 | <span className="text-sm">27 Nov - 10 Dec</span>
        </h2>
      </div>
    </nav>
  );
};
