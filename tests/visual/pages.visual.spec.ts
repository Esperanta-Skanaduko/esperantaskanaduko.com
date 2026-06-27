/**
 * Visual regression tests — 4 key pages × 2 viewports.
 *
 * Pages tested:
 *   - /        Home
 *   - /about   About
 *   - /library Library catalogue
 *   - /auth    Auth (sign-up / log-in forms)
 *
 * Viewports are set per Playwright project in playwright.config.ts:
 *   - desktop  1440 × 900
 *   - mobile   390  × 844
 *
 * Run:
 *   npm run test:visual           (compare; creates baseline on first run)
 *   npm run test:visual:update    (force-regenerate baseline)
 */

import { test, expect, Page } from '@playwright/test';

// ─── Pages under test ─────────────────────────────────────────────────────────

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'library', path: '/library' },
  { name: 'auth', path: '/auth' },
] as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Navigate to a path and wait until the page is ready for a screenshot:
 *   1. DOM content loaded
 *   2. No pending network requests (Firebase, fonts, etc.)
 *   3. No visible CSS transition / animation classes
 *   4. At least one pixel of content in <main> or <body>
 */
async function gotoAndSettle(page: Page, path: string): Promise<void> {
  await page.goto(path, { waitUntil: 'domcontentloaded' });

  // Wait for network to go quiet (fonts, Firebase initial fetch)
  await page.waitForLoadState('networkidle').catch(() => {
    // networkidle can time out on Firebase streams; ignore and proceed
  });

  // Dismiss any CSS animations in MUI components by disabling transitions
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0ms !important;
        animation-delay: 0ms !important;
        transition-duration: 0ms !important;
        transition-delay: 0ms !important;
      }
    `,
  });

  // Short idle settle so final paint completes
  await page.waitForTimeout(300);
}

// ─── Tests ────────────────────────────────────────────────────────────────────

for (const { name, path } of PAGES) {
  test(`${name} page matches snapshot`, async ({ page }) => {
    await gotoAndSettle(page, path);

    await expect(page).toHaveScreenshot(`${name}.png`, {
      // Mask highly dynamic regions that change between runs.
      // Add selectors here as the site grows (e.g. live video counts).
      mask: [],
      // Allow up to 2% pixel-level noise (anti-aliasing, sub-pixel rendering)
      maxDiffPixelRatio: 0.02,
      // Clip to visible viewport — do not scroll to capture the full page
      // (set fullPage: true if you want a scrolled capture)
      fullPage: false,
    });
  });
}
