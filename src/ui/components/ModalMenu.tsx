import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store';
import { Notyf } from 'notyf';
import { nanoid } from 'nanoid';
import { NavBarModule } from './NavBarModule';
import { navBarModuleData } from '../../utils';

interface ModalMenuProps {
  toggleModal: () => void;
  isOpen: boolean;
}
export const ModalMenu = ({ toggleModal, isOpen }: ModalMenuProps) => {
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
    <>
      <div
        className={`fixed md:hidden top-20 left-[-190px] text-white flex flex-col justify-start h-[calc(100vh-5rem)] lg:w-1/4 md:w-1/2 w-1/2 bg-secondary shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <ul className="flex flex-col items-center justify-center gap-0">
          {navBarModuleData.map((item) => (
            <NavBarModule
              key={nanoid()}
              image={item.image}
              title={item.title}
              path={item.path}
            />
          ))}
        </ul>
        <div className="absolute bottom-20 w-full p-3">
          <button
            className="bg-pink-600 text-white p-2 rounded-md w-full"
            onClick={onNavigateLogin}
          >
            <i className="bi bi-door-open-fill"></i>
          </button>
        </div>
      </div>
      {/* Fondo oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleModal} // Cerrar el modal al hacer clic fuera
        ></div>
      )}
    </>
  );
};
