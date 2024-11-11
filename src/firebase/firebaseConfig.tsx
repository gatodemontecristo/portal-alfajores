// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

interface ImportMetaEnv {
  VITE_API_KEY: string;
  VITE_AUTH_DOMAIN: string;
  VITE_PROJECT_ID: string;
  VITE_STOREAGE_BUCKED: string;
  VITE_MESSAGING_SENDER_ID: string;
  VITE_APP_ID: string;
  VITE_MEASUREMENT_ID: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STOREAGE_BUCKED,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
