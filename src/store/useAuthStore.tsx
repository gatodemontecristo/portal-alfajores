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
import {
  AlfajorSpringProps,
  AlfajorSpringTardProps,
  AlfajorSpringUserProps,
} from '../interfaces';

const googleProvider = new GoogleAuthProvider();
export interface AuthStoreProps {
  user: User | null;
  status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated' | 'error';
  loginWithEmailPassword: (email: string, password: string) => void;
  singInWithGoogle: () => Promise<'ok' | 'error'>;
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
      singInWithGoogle: async (): Promise<'ok' | 'error'> => {
        set({ status: 'loading' });
        try {
          const userCredential = await signInWithPopup(auth, googleProvider);

          set({ user: userCredential.user, status: 'authenticated' });
          return 'ok';
        } catch (error) {
          set({ status: 'error' });
          console.error('Login error:', error);
          return 'error';
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
        set({ status: 'loading' });
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

export interface HistoryStoreState {
  history: AlfajorSpringProps | null;
  setHistory: (history: AlfajorSpringProps | null) => void;
}
export const useHistoryStore = create(
  persist<HistoryStoreState>(
    (set) => ({
      history: null,
      setHistory: (history) => {
        set({ history });
      },
    }),
    {
      name: 'history-collection',
    },
  ),
);

export interface FirestoreState {
  documents: AlfajorSpringProps[];
  loading: boolean;
  error: string | null;
  success: string | null;
  fetchDocuments: () => Promise<void>;
  updateDocument: (
    id: string,
    // data: AlfajorSpringProps | { users: AlfajorSpringUserProps[] },
    data: { users: AlfajorSpringUserProps[] },
  ) => Promise<void>;
}

export const useFirestoreStore = create(
  persist<FirestoreState>(
    (set, get) => ({
      documents: [],
      loading: false,
      error: null,
      success: null,
      fetchDocuments: async () => {
        set({ loading: true, error: null });
        try {
          const querySnapshot = await getDocs(collection(db, 'alfajor-user'));
          const docs = querySnapshot.docs
            .filter((doc) => Object.keys(doc.data()).length > 0)
            .map((doc) => {
              const data = doc.data();
              return {
                id: doc.id,
                name: data.name,
                open: data.open,
                range: data.range,
                ganador: data.ganador,
                monto: data.monto,
                users: data.users.map(
                  (user: AlfajorSpringUserProps, index: number) => {
                    return {
                      ...user,
                      index: index,
                      // tardanzas: user.tardanzas.map(
                      //   (tardanza: AlfajorSpringTardProps) => {
                      //     return {
                      //       ...tardanza,
                      //       fecha: new Date(tardanza.fecha).toLocaleDateString(),
                      //     };
                      //   },
                      // ),
                    };
                  },
                ),
              } as AlfajorSpringProps;
            });

          set({
            documents: docs,
            loading: false,
            error: null,
            success: 'Se obtuvieron los registros',
          });
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
          // const updateData = { ...data };
          await updateDoc(docRef, data);
          await get().fetchDocuments();
        } catch (err) {
          console.log(err);
          if (err instanceof Error) {
            set({ error: err.message, loading: false });
          } else {
            set({ error: 'An unknown error occurred', loading: false });
          }
        }
      },
    }),
    {
      name: 'alfajores-collection',
    },
  ),
);
export interface useAlfajorStoreProps {
  alfajor: AlfajorSpringUserProps | null;
  setAlfajor: (alfajor: AlfajorSpringUserProps) => void;
  setAddTardanza: (tardanza: AlfajorSpringTardProps) => void;
  setDeleteTardanza: (fecha: string) => void;
}
export const useAlfajorStore = create<useAlfajorStoreProps>((set) => ({
  alfajor: null,
  setAlfajor: (alfajor) => set({ alfajor }),
  setAddTardanza: (tardanza) =>
    set((state) => {
      if (state.alfajor) {
        return {
          alfajor: {
            ...state.alfajor,
            tardanzas: [...state.alfajor.tardanzas, tardanza],
          },
        };
      }
      return state;
    }),
  setDeleteTardanza: (fecha) =>
    set((state) => {
      if (state.alfajor) {
        return {
          alfajor: {
            ...state.alfajor,
            tardanzas: state.alfajor.tardanzas.filter(
              (tardanza) => tardanza.fecha !== fecha,
            ),
          },
        };
      }
      return state;
    }),
}));
