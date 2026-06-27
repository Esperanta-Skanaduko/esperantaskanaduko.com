import { FirebaseConfiguration } from './firebaseConfiguration';

/**
 * Firebase Configuration
 *
 * All values are loaded from environment variables (import.meta.env.VITE_FIREBASE_*).
 * Never commit real credentials — copy .env.example to .env.local and fill in the values.
 *
 * For GitHub Pages deployment, add these secrets under:
 *   Settings → Secrets and variables → Actions
 */

// ─── Env-var validation ───────────────────────────────────────────────────────
// Runs at module initialisation so the app fails immediately (not later during
// a Firebase call) when required environment variables are missing.
// In tests the entire module is mocked via jest.mock() so this block is skipped.

const REQUIRED_VARS = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
] as const;

const missing = REQUIRED_VARS.filter(
  (key) => !import.meta.env[key],
);

if (missing.length > 0) {
  throw new Error(
    [
      '🔥 Firebase configuration is incomplete.',
      '',
      'Missing environment variables:',
      ...missing.map((k) => `  • ${k}`),
      '',
      'Fix: copy .env.example to .env.local and fill in the Firebase project values.',
      'For CI/CD, add the variables as GitHub Actions secrets.',
    ].join('\n'),
  );
}

// ─── Config object ────────────────────────────────────────────────────────────

const FirebaseConfig: FirebaseConfiguration = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID as string,
  measurementId:     import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
};

export default FirebaseConfig;
