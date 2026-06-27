import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for visual regression tests.
 *
 * Usage:
 *   npm run test:visual           — run comparisons (generates baseline on first run)
 *   npm run test:visual:update    — force-update all baseline snapshots
 *   npm run test:visual:ui        — open Playwright UI for interactive debugging
 *
 * Snapshots are stored in ./playwright-snapshots/ (git-ignored; local-only).
 * To share baselines across machines, remove the .gitignore entry and commit them.
 */
export default defineConfig({
  testDir: './tests/visual',

  /* Snapshot storage — one folder per OS/browser to prevent cross-platform drift */
  snapshotDir: './playwright-snapshots',
  snapshotPathTemplate:
    '{snapshotDir}/{projectName}/{testFilePath}/{arg}{ext}',

  /* Fail if toHaveScreenshot() is called with no existing baseline */
  ignoreSnapshots: false,

  /* Tolerate minor anti-aliasing differences (0–1 scale) */
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,  // allow up to 2% pixel difference
      animations: 'disabled',
    },
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],

  use: {
    baseURL: 'http://localhost:5173',
    /* Only capture on failure to keep artifacts small */
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'off',
  },

  /**
   * Start the Vite dev server automatically before running tests.
   * In CI, the server must already be running (set CI=true env var).
   */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },

  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'mobile',
      use: {
        ...devices['Pixel 5'],
        viewport: { width: 390, height: 844 },
      },
    },
  ],
});
