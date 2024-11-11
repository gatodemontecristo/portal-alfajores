import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AlfajoresApp } from './AlfajoresApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlfajoresApp />
  </StrictMode>,
);
