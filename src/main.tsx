import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AlfajoresApp } from './AlfajoresApp';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlfajoresApp />
  </StrictMode>,
);
