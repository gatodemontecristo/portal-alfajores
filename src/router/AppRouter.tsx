import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CreateRouter } from './CreateRouter';

export const AppRouter = () => {
  const router = createBrowserRouter(CreateRouter());
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
