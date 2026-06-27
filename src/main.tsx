import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './frontend/App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import './i18n/config';
import './index.css';

// ─── Sentry initialisation (production only) ──────────────────────────────────
// VITE_SENTRY_DSN must be set in the CI/CD environment (GitHub Actions secret).
// When absent or in non-production builds, Sentry stays dormant — all
// captureException calls in the app are silent no-ops.
if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    // Capture 100 % of transactions in production.
    // Lower this (e.g. 0.1) once traffic grows to control Sentry quota.
    tracesSampleRate: 1.0,
    // Only send events from our own domain (suppress browser extension noise).
    allowUrls: [/esperantaskanaduko\.com/],
    // Release tag — injected by vite.config.ts so Sentry can map source maps.
    release: import.meta.env.VITE_SENTRY_RELEASE,
    environment: 'production',
  });
}

// ─── Config-error fallback ────────────────────────────────────────────────────
// If Firebase env vars are missing, firebaseConfig.ts throws during module
// initialisation — before React has a chance to render. We catch that error
// here and paint a developer-friendly message directly into #root so the page
// is not a blank white screen.
window.addEventListener('error', (event) => {
  const root = document.getElementById('root');
  // Only show the fallback when React hasn't rendered anything yet
  if (!root || root.childElementCount > 0) return;

  const message = event.error?.message ?? event.message ?? 'Unknown error';
  const isConfigError = message.includes('Firebase configuration');

  root.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #000;
      color: #00ff00;
      font-family: 'Courier New', Courier, monospace;
      padding: 2rem;
      box-sizing: border-box;
    ">
      <h1 style="color: #ff4444; font-size: 1.5rem; margin-bottom: 1rem;">
        ${isConfigError ? '⚙️ Configuration Error' : '💥 Startup Error'}
      </h1>
      <pre style="
        color: #ffcc00;
        background: rgba(255, 204, 0, 0.05);
        border: 1px solid rgba(255, 204, 0, 0.2);
        border-radius: 8px;
        padding: 1.5rem;
        max-width: 640px;
        width: 100%;
        white-space: pre-wrap;
        word-break: break-word;
        font-size: 0.9rem;
        line-height: 1.6;
      ">${message}</pre>
      ${isConfigError ? `
      <p style="color: #888; font-size: 0.85rem; margin-top: 1rem; text-align: center;">
        See <code style="color:#00ff00;">.env.example</code> for the list of required variables.
      </p>` : ''}
    </div>
  `;
});

// ─── Accessibility audit (dev only) ──────────────────────────────────────────
// Logs WCAG violations to the browser console.
// Run: npm run dev — then check the console for axe violations.
if (import.meta.env.DEV) {
  import('@axe-core/react').then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);
  });
}

// ─── React tree ──────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>,
);
