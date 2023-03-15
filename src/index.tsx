import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Global } from './assets/ui/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);

