import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app';
import { DataContextProvider } from './context/datacontext';
import createMirageServer from './mirage/createmirageserver';

import './styles/index.scss';

createMirageServer();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
