// Ensure fetch is writable and configurable in all environments
try {
  const origFetch = window.fetch;
  let currentFetch = typeof origFetch === 'function' ? origFetch.bind(window) : null;
  const desc = {
    get: () => currentFetch,
    set: (val: typeof window.fetch) => {
      currentFetch = val;
    },
    configurable: true,
    enumerable: true,
  };
  Object.defineProperty(window, 'fetch', desc);
  if (typeof Window !== 'undefined' && Window.prototype) {
    try {
      Object.defineProperty(Window.prototype, 'fetch', desc);
    } catch {}
  }
} catch {}

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
