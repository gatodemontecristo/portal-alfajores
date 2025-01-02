import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store';
import { Notyf } from 'notyf';
import { navBarModuleData } from '../../utils';
import { NavBarModule } from './NavBarModule';
import { nanoid } from 'nanoid';
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
        {navBarModuleData.map((item) => (
          <NavBarModule key={nanoid()} image={item.image} title={item.title} />
        ))}
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
