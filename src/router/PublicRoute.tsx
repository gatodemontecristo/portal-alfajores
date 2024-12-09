import { Navigate } from 'react-router-dom';
import { useCheckAuth } from '../hooks';
import { ReactNode } from 'react';

export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { status } = useCheckAuth();

  return status !== 'authenticated'
    ? children
    : children;
      // <Navigate to="/statistics"></Navigate>
};
