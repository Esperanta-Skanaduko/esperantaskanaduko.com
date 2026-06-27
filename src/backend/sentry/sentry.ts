/**
 * Sentry integration — thin re-export wrapper.
 *
 * This module intentionally contains no initialisation logic and no
 * environment-variable access.  `Sentry.init()` is called once in main.tsx
 * (a Vite entry point that is never executed by Jest), so the full
 * `import.meta.env` API is available there without Babel compatibility issues.
 *
 * Having a wrapper here means tests can mock '@sentry/react' in setup.ts and
 * any component that imports from this file will automatically receive the
 * no-op mock without any special handling per-test.
 */

export { captureException } from '@sentry/react';
