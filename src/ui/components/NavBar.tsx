import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store';
import { Notyf } from 'notyf';
// import { useAuthStore } from '../../store';
export const NavBar = () => {
  const navigate = useNavigate();
  const { logout, status } = useAuthStore();
  const notyf = new Notyf();
  const onNavigateLogin = async () => {
    if (status === 'authenticated') {
      await logout();
      notyf.error('Se deslogueo correctamente');
    }
    navigate('/auth/login');
  };
  return (
    <nav className=" w-auto bg-secondary text-white hidden flex-col justify-center md:flex relative">
      <ul className="flex flex-col gap-0">
        <button className="p-3  w-[120px] flex flex-col items-center group">
          <div className="flex group-hover:bg-pinkberry rounded-md p-3">
            <img className="h-10 w-10 " src="../icons/alfajor.png" alt="" />
          </div>
          <p className="text-center text-black  text-[13px]	mt-1 font-semibold">
            Sprint Actual
          </p>
        </button>
      </ul>
      <div className="absolute bottom-0 w-full p-3">
        <button
          className="bg-pink-600 text-white p-2 rounded-md w-full"
          onClick={onNavigateLogin}
        >
          <i className="bi bi-door-open-fill"></i>
        </button>
      </div>
    </nav>
  );
};
