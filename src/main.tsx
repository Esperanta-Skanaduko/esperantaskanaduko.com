import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './frontend/App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import './i18n/config';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
