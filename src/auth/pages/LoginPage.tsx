import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store';
import { Notyf } from 'notyf';

export const LoginPage = () => {
  const navigate = useNavigate();
  const notyf = new Notyf();
  const onNavigateReport = () => {
    navigate('/page');
  };
  const { checkAuth, singInWithGoogle } = useAuthStore();
  const startGoogleSignIn = async () => {
    checkAuth();
    const result = await singInWithGoogle();
    if (result === 'ok') {
      notyf.success('Bienvenido');
      onNavigateReport();
    } else {
      notyf.error('Error al iniciar sesión');
    }
  };

  return (
    <>
      <div className="flex flex-row items-center h-[100vh] bg-pink-100">
        <div className="flex flex-col w-1/3 ">
          <img src="../big/red_alfajor.jpg" className="h-[100vh]" alt="logo" />
        </div>

        <div className="flex justify-center flex-row w-2/3">
          <div className="flex flex-col w-1/3 ">
            <h2 className="text-pink-600 font-bold text-3xl mb-3">
              Login Page
            </h2>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 border border-gray-300 rounded-md"
              />
              <div className="flex flex-row gap-2">
                <button className="bg-pink-600 text-white p-2 rounded-md w-4/5 font-bold">
                  Login
                </button>
                <button
                  className="bg-pink-600 text-white p-2 rounded-md w-1/5"
                  onClick={startGoogleSignIn}
                >
                  <i className="bi bi-google"></i>
                </button>
              </div>
              <button
                className="bg-amber-500 text-white font-bold p-2 rounded-md"
                onClick={onNavigateReport}
              >
                Ir al reporte como visitante
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
