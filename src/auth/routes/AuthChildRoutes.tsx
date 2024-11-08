import { Navigate } from 'react-router-dom';
import { LoginPage } from '../pages';

export const AuthChildRoutes = [
  { path: 'login', element: <LoginPage></LoginPage> },
  { path: '/auth/*', element: <Navigate to="/auth/login" /> },
  { path: '/auth/', element: <Navigate to="/auth/login" /> },
];
