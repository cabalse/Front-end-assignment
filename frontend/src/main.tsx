import ReactDOM from 'react-dom/client';

import App from './components/app';
import { DataContextProvider } from './context/datacontext';
import createMirageServer from './mirage/createmirageserver';

import './styles/index.scss';
import { StrictMode } from 'react';

if (import.meta.env.MODE === 'development') {
  createMirageServer({ environment: 'development' });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </StrictMode>
);
