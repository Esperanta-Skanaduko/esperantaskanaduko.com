/**
 * Firebase Analytics — production-only event logging.
 *
 * Design constraints:
 *   • Only active in production (process.env.NODE_ENV === 'production').
 *   • All callers receive a safe no-op in development and test environments.
 *   • Uses isSupported() before init to handle browsers that block Analytics
 *     (private browsing, strict ad-blockers, sandboxed iframes, etc.).
 *   • Lazy-initialised: the Firebase Analytics SDK is not loaded until the
 *     first call so it does not affect initial page performance.
 *   • Uses process.env.NODE_ENV (not import.meta.env.PROD) so the guard is
 *     safe for both Vite production builds and Babel/Jest test runs.
 *   • Avoids import.meta.env entirely — Babel cannot parse it and would crash
 *     the test suite even if the expression is in a dead code branch.
 *
 * Usage:
 *   import { logAnalyticsEvent } from '@backend/firebase/analytics';
 *   logAnalyticsEvent('page_view', { page_path: '/about' });
 */

import {
  Analytics,
  getAnalytics,
  isSupported,
  logEvent,
} from 'firebase/analytics';
import { firebaseApp } from './firebase';

// ─── Types ────────────────────────────────────────────────────────────────────

/** Recognised custom event names for this application. */
export type AppAnalyticsEvent =
  | 'page_view'
  | 'language_changed'
  | 'resource_click'
  | 'book_opened'
  | 'donate_initiated';

export type EventParams = Record<string, string | number | boolean>;

// ─── Lazy singleton ───────────────────────────────────────────────────────────

let analyticsPromise: Promise<Analytics | null> | null = null;

/**
 * Returns the Analytics instance, or null if:
 *   - Not in production
 *   - The browser does not support Firebase Analytics
 *   - Analytics initialisation throws for any reason (missing Measurement ID,
 *     network error, ad-blocker, etc.) — caught and resolved to null.
 */
function getAnalyticsInstance(): Promise<Analytics | null> {
  if (process.env.NODE_ENV !== 'production') {
    return Promise.resolve(null);
  }

  if (!analyticsPromise) {
    // isSupported() checks for browser compatibility (private browsing, etc.).
    // The .catch handles a missing/invalid VITE_FIREBASE_MEASUREMENT_ID too.
    analyticsPromise = isSupported()
      .then((supported) => {
        if (!supported) return null;
        return getAnalytics(firebaseApp);
      })
      .catch(() => null);          // never let Analytics init crash the app
  }

  return analyticsPromise;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Log a Firebase Analytics event.
 *
 * Safe to call in any environment — silently no-ops when Analytics is not
 * active (development, test, unsupported browser, missing Measurement ID).
 *
 * @param event  - One of the recognised AppAnalyticsEvent names.
 * @param params - Optional key/value pairs attached to the event.
 */
export async function logAnalyticsEvent(
  event: AppAnalyticsEvent,
  params?: EventParams,
): Promise<void> {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;
  // Cast to string to bypass Firebase's predefined-event overloads (e.g.
  // page_view has a stricter param signature than our generic EventParams).
  // Our own AppAnalyticsEvent type enforces valid names at the call site.
  logEvent(analytics, event as string, params);
}
