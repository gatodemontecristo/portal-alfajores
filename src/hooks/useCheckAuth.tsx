import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { login, logout } from '../store';
import useAuthStore from '../store/useAuthStore';

export const useCheckAuth = () => {
  const { status } = useAuthStore();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);
  return {
    status,
  };
};
