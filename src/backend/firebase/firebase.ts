import { FirebaseApp, initializeApp, getApps, getApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

/**
 * Firebase Application Singleton
 *
 * Ensures only one Firebase app instance is created.
 * Prevents multiple initialization errors during hot module replacement.
 *
 * @returns {FirebaseApp} The initialized Firebase app instance
 */
const initializeFirebase = (): FirebaseApp => {
  // Check if Firebase app is already initialized
  const apps = getApps();
  if (apps.length > 0) {
    return getApp();
  }
  return initializeApp(firebaseConfig);
};

// Initialize Firebase once and export the instance
export const firebaseApp = initializeFirebase();

// Legacy default export for backward compatibility
export default initializeFirebase;
