// store/authStore.js
import { create } from 'zustand';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { FirebaseAuth as auth, db } from '../firebase';
import { persist } from 'zustand/middleware';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { AlfajorSpringProps } from '../interfaces';

const googleProvider = new GoogleAuthProvider();
export interface AuthStoreProps {
  user: User | null;
  status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated' | 'error';
  loginWithEmailPassword: (email: string, password: string) => void;
  singInWithGoogle: () => void;
  logout: () => void;
  checkAuth: () => void;
}
export const useAuthStore = create(
  persist<AuthStoreProps>(
    (set) => ({
      user: null,
      status: 'idle',
      loginWithEmailPassword: async (email, password) => {
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
      singInWithGoogle: async () => {
        set({ status: 'loading' });
        try {
          const userCredential = await signInWithPopup(auth, googleProvider);

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

export interface FirestoreState {
  documents: AlfajorSpringProps[];
  loading: boolean;
  error: string | null;
  fetchDocuments: () => Promise<void>;
  updateDocument: (id: string, data: AlfajorSpringProps) => Promise<void>;
}

export const useFirestoreStore = create<FirestoreState>((set) => ({
  documents: [],
  loading: false,
  error: null,
  fetchDocuments: async () => {
    set({ loading: true, error: null });
    console.log('fetchDocuments');
    try {
      const querySnapshot = await getDocs(collection(db, 'alfajor-user'));
      const docs = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          open: data.open,
          range: data.range,
          users: data.users,
        } as AlfajorSpringProps;
      });
      console.log(docs);
      set({ documents: docs, loading: false });
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      } else {
        set({ error: 'An unknown error occurred', loading: false });
      }
    }
  },
  updateDocument: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const docRef = doc(db, 'alfajor-user', id);
      const updateData = { ...data };
      await updateDoc(docRef, updateData);
      set({ loading: false });
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      } else {
        set({ error: 'An unknown error occurred', loading: false });
      }
    }
  },
}));

export default useAuthStore;
