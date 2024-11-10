import { useEffect } from 'react';

import useAuthStore from '../store/useAuthStore';

export const useCheckAuth = () => {
  const { status, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);
  return {
    status,
  };
};
