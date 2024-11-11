import { Navigate } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { ReactNode } from 'react';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { status } = useCheckAuth();

  return status !== 'unauthenticated' ? (
    children
  ) : (
    <Navigate to="/auth"></Navigate>
  );
};
