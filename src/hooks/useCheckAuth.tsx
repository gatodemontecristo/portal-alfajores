import { useEffect } from 'react';
import { useAuthStore } from '../store';

export const useCheckAuth = () => {
  const { status, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);
  console.log(status);
  return {
    status,
  };
};
