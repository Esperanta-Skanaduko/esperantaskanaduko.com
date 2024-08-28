import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './frontend/App.tsx';
import './frontend/index.css';
import Firebase from './backend/firebase/firebase.ts';

Firebase();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
