// store/authStore.js
import { create } from 'zustand';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { FirebaseAuth as auth } from '../firebase';
import { persist } from 'zustand/middleware';

export interface AuthStoreProps {
  user: User | null;
  status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated' | 'error';
  login: (email: string, password: string) => void;
  logout: () => void;
  checkAuth: () => void;
}
const useAuthStore = create(
  persist<AuthStoreProps>(
    (set) => ({
      user: null,
      status: 'idle',
      login: async (email, password) => {
        set({ status: 'loading' });
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
          );
          set({ user: userCredential.user, status: 'authenticated' });
        } catch (error) {
          set({ status: 'error' });
          console.error('Login error:', error);
        }
      },
      logout: async () => {
        set({ status: 'loading' });
        try {
          await signOut(auth);
          set({ user: null, status: 'unauthenticated' });
        } catch (error) {
          set({ status: 'error' });
          console.error('Logout error:', error);
        }
      },
      checkAuth: () => {
        // set({ status: 'loading' });
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            set({ user, status: 'authenticated' });
          } else {
            set({ user: null, status: 'unauthenticated' });
          }
        });
      },
    }),
    {
      name: 'auth-sesion',
    },
  ),
);

export default useAuthStore;
