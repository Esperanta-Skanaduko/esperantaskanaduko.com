# Esperanta Skanaduko — Site Improvement Checklist

> **Project**: esperantaskanaduko.com  
> **Stack**: React 18 + TypeScript + Vite + Material UI v7 + Firebase + i18next (66 locales) + React Router v6  
> **Status**: Production-deployed via `gh-pages`. Core features complete. This checklist covers gaps, polish, and growth tasks.

---

## How to Use This Checklist

Each item has:
- A **priority** tag: 🔴 Critical · 🟠 High · 🟡 Medium · 🟢 Low
- A **category** badge
- A ready-to-paste **AI Prompt** you can send to an AI coding assistant to complete the task

Mark items `[x]` when done.

---

## 1. 🖼️ Assets & Open Graph

- [ ] **Create the missing OG social-share image** 🔴 `assets`

  > **Context**: `SEO.tsx` references `/og-image.png` in every `<meta property="og:image" />` tag, but `/public/og-image.png` does not exist. All social shares currently show a blank preview.

  **AI Prompt:**
  ```
  The file /public/og-image.png is missing from this React/Vite project (esperantaskanaduko.com).
  The SEO component at src/components/SEO.tsx references it as the default Open Graph image.
  
  Please generate a Node.js script (scripts/generate-og-image.js) using the `canvas` npm package
  that programmatically creates a 1200×630 PNG with:
  - Black background (#0a0a0a)
  - Subtle green grid/dot pattern overlay (rgba 0,255,0,0.05)
  - Site name "ESPERANTA SKANADUKO" in large bold white Copperplate-style uppercase text, centered
  - Tagline "Learn Esperanto · Lernu Esperanton" in #00ff00 below it
  - A simple green star (⭐ Esperanto symbol) or geometric accent in a corner
  - Saved to /public/og-image.png
  
  Also add a "generate:og" npm script to package.json that runs it.
  Provide instructions to verify with the Facebook Sharing Debugger and Twitter Card Validator.
  ```

- [ ] **Add per-page OG images** 🟡 `assets` `seo`

  **AI Prompt:**
  ```
  In src/components/SEO.tsx, the `image` prop already supports per-page OG images but no pages
  pass a custom image. 
  
  For the following pages, add a relevant `image` prop to their <SEO> component call, pointing to 
  page-specific images that should be created in /public/images/:
  - /library → library-og.png (books/reading theme)
  - /resources → resources-og.png (resources grid theme)
  - /donate → donate-og.png (support/community theme)
  
  Also update the scripts/generate-og-image.js (from the previous task) to generate all four images
  with page-specific text overlaid on the same dark green template.
  ```

---

## 2. 🗺️ Navigation & Routing

- [ ] **Add a 404 / Not Found page** 🔴 `routing`

  > **Context**: `src/frontend/routes/routes.tsx` has no catch-all `*` route. Any typo URL shows a blank screen.

  **AI Prompt:**
  ```
  In the React Router v6 app at src/frontend/routes/routes.tsx there is no catch-all 404 route.
  
  Please:
  1. Create src/frontend/pages/NotFoundPage.tsx — a styled 404 page matching the dark green theme
     (black background, green "#00ff00" accent, Copperplate heading). Include:
     - "404" in large Copperplate typography
     - A short message in both English and Esperanto (use the i18n `useTranslation` hook)
     - A "Return Home" MUI Button that navigates to "/"
     - The floating particles background already used on the homepage
  2. Add the lazy-loaded route to routes.tsx: <Route path="*" element={<RouteWrapper><NotFoundPage /></RouteWrapper>} />
  3. Add i18n translation keys to src/i18n/locales/en.json: notFound.title, notFound.message, notFound.cta
  4. Add the same keys to src/i18n/locales/eo.json with Esperanto translations.
  ```

- [ ] **Add keyboard accessibility to desktop dropdown menus** 🟠 `accessibility` `navigation`

  > **Context**: `src/frontend/components/navBar/desktopNav.tsx` has dropdown sub-menus (Library, Resources). They are likely not navigable via Tab/Enter/Escape keys.

  **AI Prompt:**
  ```
  Review src/frontend/components/navBar/desktopNav.tsx (the desktop dropdown navigation).
  
  Ensure full keyboard accessibility:
  - Dropdown menu opens on Enter/Space when the parent nav item is focused
  - Tab cycles through sub-menu items
  - Escape closes the dropdown and returns focus to the parent item
  - ARIA attributes: aria-haspopup="true", aria-expanded, aria-controls on trigger buttons;
    role="menu" and role="menuitem" on the dropdown and its items
  - Focus trap within open dropdown
  
  Use MUI's existing Menu/MenuItem components if not already in use, since they handle this 
  natively. Do not change visual design — only fix keyboard/ARIA behavior.
  ```

- [ ] **Add breadcrumb navigation to resource sub-pages** 🟡 `navigation` `seo`

  **AI Prompt:**
  ```
  Add breadcrumb navigation to all resource category pages in 
  src/frontend/pages/resources/ (e.g., LearningResourcesPage, MusicResourcesPage, etc.).
  
  Requirements:
  - Use MUI's <Breadcrumbs> component
  - Path: Home > Resources > [Category Name]
  - Each crumb is a React Router <Link> (except the current page)
  - Use the i18n `useTranslation` hook for all labels
  - Place the breadcrumb just below the <NavBar> and above the page title
  - Add JSON-LD BreadcrumbList structured data to each page's <SEO> component
    (the SEO component already supports structured data via the `article` prop pattern —
    add it directly in a <script type="application/ld+json"> tag or extend SEO props)
  - Styled to match the dark theme (subtle green text, no garish borders)
  ```

- [ ] **Clean up the /pdf route (pDFTest.tsx)** 🟡 `housekeeping`

  > **Context**: `src/frontend/pages/pDFTest.tsx` and the `/pdf` route appear to be an unfinished experimental feature. It's exposed publicly but blocked in robots.txt.

  **AI Prompt:**
  ```
  Evaluate src/frontend/pages/pDFTest.tsx and the /pdf route in 
  src/frontend/routes/routes.tsx.
  
  Options (choose whichever applies):
  A) If the PDF feature is abandoned: Remove the page, the route, and the file. 
     Also remove /pdf from robots.txt Disallow list (it would no longer need it).
  B) If it's a real planned feature (e.g., in-browser PDF reader for library books):
     Add a <SEO> component to the page, give it a proper title, and add a note in the 
     navbar or library page linking to it.
  
  Determine which applies based on what you find in the file, then implement accordingly.
  ```

---

## 3. 🏠 Homepage

- [ ] **Add Call-to-Action buttons on the homepage** 🔴 `ux`

  > **Context**: The homepage (`src/frontend/pages/homePage.tsx`) shows only the animated title and subtitle. There are no CTA buttons guiding users into the site's main features.

  **AI Prompt:**
  ```
  The homepage at src/frontend/pages/homePage.tsx shows a title and subtitle but has zero
  call-to-action buttons. Users land on the page with no clear next step.
  
  Between the subtitle and the footer, add a row of 3 MUI Buttons styled as the existing
  glass/green theme:
  1. "Explore Resources" → navigates to /resources
  2. "Browse Library" → navigates to /library  
  3. "Start Learning" → navigates to /resources/learning
  
  Requirements:
  - Use React Router's <Link> component (or useNavigate)
  - Use existing MUI theme: contained variant with the green gradient style already used 
    in DonatePage.tsx
  - Wrap in a <Fade> animation with staggered delays (already used on this page)
  - All labels must go through useTranslation() — add keys: 
    home.cta.resources, home.cta.library, home.cta.learning
  - Add the same keys to en.json and eo.json
  - Must be fully keyboard accessible (focus ring visible)
  ```

- [ ] **Make the homepage particles non-blocking on scroll / fix overflow** 🟡 `ux` `performance`

  > **Context**: `src/index.css` sets `body { overflow: hidden }` which prevents scrolling site-wide. The homepage is fixed-height, but other pages need scroll.

  **AI Prompt:**
  ```
  In src/index.css, `body { overflow: hidden }` is set globally. This was intentional for 
  the full-viewport homepage but breaks scrolling on all other pages (library, resources, etc.)
  that have content taller than the viewport.
  
  Fix this by:
  1. Removing `overflow: hidden` from the global body rule in src/index.css
  2. Moving the overflow restriction only to the homepage: in 
     src/frontend/pages/homePage.tsx, apply `overflow: hidden` to the top-level <Container>
     via its `sx` prop so it only affects that one page
  3. Verify that the floating .particles background (position: fixed) still works correctly
     on the homepage without the global overflow restriction
  4. Test that the resources page, library page, and about page now scroll correctly
  ```

- [ ] **Add a "Features at a Glance" section to the homepage** 🟢 `ux` `content`

  **AI Prompt:**
  ```
  Add a features section to src/frontend/pages/homePage.tsx, positioned between the hero 
  title/subtitle and the footer.
  
  Show 4 feature cards in a responsive MUI Grid (2 columns on desktop, 1 on mobile):
  1. 📚 "200+ Resources" — Curated learning materials
  2. 📖 "Esperanto Library" — Free public domain texts
  3. 🎵 "Music & Culture" — Songs, concerts, community
  4. 🌍 "66 Languages" — Interface in your native language
  
  Style: glass morphism cards (use the `.glass` class from index.css), green icon, white title,
  grey description. Animate in with staggered <Grow> transitions.
  All strings through useTranslation(). Add translation keys home.features.*.title and 
  home.features.*.description to en.json and eo.json.
  ```

---

## 4. 📚 Library Page

- [ ] **Add pagination or infinite scroll to the library** 🟠 `ux` `performance`

  > **Context**: `src/frontend/pages/library/LibraryPage.tsx` renders all `esperantoBooks` at once. As the library grows this will become slow.

  **AI Prompt:**
  ```
  The library page at src/frontend/pages/library/LibraryPage.tsx renders all books in one 
  pass with no pagination.
  
  Add pagination using MUI's <Pagination> component:
  - Show 12 books per page (configurable constant at top of file)
  - <Pagination> at the bottom of the grid
  - Reset to page 1 whenever searchQuery or selectedCategory changes
  - Keep the existing search + category filter working correctly with the paginated slice
  - Scroll to top of the book grid when page changes (use useRef + scrollIntoView)
  - Show "Showing X–Y of Z results" text above the grid (i18n keys: library.pagination.showing)
  - Style pagination with the existing MUI theme (green selected state already defined)
  ```

- [ ] **Add a "Download / Read Online" distinction to library cards** 🟡 `ux`

  **AI Prompt:**
  ```
  In src/frontend/pages/library/LibraryPage.tsx and the Book card UI within it, book entries 
  have a `url` field.
  
  Improve the card UI:
  1. If the URL contains "gutenberg.org" or "wikisource" — label the button "Read Online" with 
     a MenuBookIcon
  2. If the URL is a direct .pdf/.epub/.txt — label it "Download" with a DownloadIcon
  3. Otherwise — label it "Open" with an OpenInNewIcon
  
  All buttons should open in a new tab with rel="noopener noreferrer".
  All label strings through useTranslation(). Keys: library.actions.readOnline, 
  library.actions.download, library.actions.open.
  ```

---

## 5. 📦 Resources Section

- [ ] **Add pagination or "Load More" to ResourcePage.tsx** 🟠 `performance` `ux`

  **AI Prompt:**
  ```
  src/frontend/pages/resources/ResourcePage.tsx currently renders all 116+ resources at once.
  
  Implement "Load More" infinite-scroll-style pagination:
  - Initially show 24 resources
  - A "Load More" MUI Button at the bottom adds 24 more
  - Show progress: "Showing 24 of 116 resources"
  - When search or filter changes, reset to showing the first 24 results
  - The "Load More" button is hidden when all filtered results are visible
  - i18n keys: resources.loadMore, resources.showing (with interpolation for count/total)
  ```

- [ ] **Add deep-link support: shareable filtered URLs** 🟡 `ux` `seo`

  **AI Prompt:**
  ```
  In src/frontend/pages/resources/ResourcePage.tsx, search query and category filter state 
  currently live only in React state. Refreshing the page resets filters.
  
  Sync filter state to URL search params using React Router v6's useSearchParams:
  - ?q=searchterm&category=music
  - On mount, read ?q and ?category from URL to initialize state
  - On filter change, update URL params without causing page reload
  - Update the canonical URL in the <SEO> component to reflect current params
  - The same should apply to each category sub-page (e.g., /resources/music?q=...)
  
  This also makes filtered views indexable by Google and shareable via URL.
  ```

- [ ] **Add resource "Featured" badges to homepage or a dedicated section** 🟢 `ux` `content`

  **AI Prompt:**
  ```
  Many resources in src/data/*.ts have `featured: true`. Currently this information is unused 
  on the homepage.
  
  Create a "Featured Resources" section on the homepage (src/frontend/pages/homePage.tsx):
  - Query all resources where featured === true across all data files
  - Display up to 6 in a horizontal scroll or 2-column grid
  - Use the existing ResourceCard component from src/components/resources/ResourceCard.tsx
  - Section title: "Featured Resources" / "Elstaraj Rimedoj" (i18n)
  - Only shown when resources data is available (guard with data check)
  - Full keyboard and screen reader accessibility
  ```

---

## 6. 🌐 Internationalization (i18n)

- [ ] **Audit translation completeness across all 66 locales** 🟠 `i18n`

  > **Context**: 66 locale JSON files exist but were likely machine-translated and may have missing or mismatched keys vs. the English baseline.

  **AI Prompt:**
  ```
  Write a Node.js script (scripts/audit-translations.js) that:
  1. Reads src/i18n/locales/en.json as the baseline (source of truth)
  2. Recursively flattens all keys from the English JSON (e.g. "common.site.name")
  3. For each of the 65 other locale files in src/i18n/locales/:
     a. Flattens its keys
     b. Reports MISSING keys (in en.json but not in locale)
     c. Reports EXTRA keys (in locale but not in en.json)
     d. Reports EMPTY values (key exists but value is "" or same as key)
  4. Outputs a summary table to the console:
     Locale | Missing | Extra | Empty | Score%
  5. Writes a full report to scripts/translation-audit-report.json
  
  Add "audit:i18n" to package.json scripts.
  ```

- [ ] **Add hreflang alternate links for multilingual SEO** 🟠 `seo` `i18n`

  > **Context**: `src/components/SEO.tsx` sets `<html lang>` but does not output `<link rel="alternate" hreflang="x">` tags needed for Google multilingual search.

  **AI Prompt:**
  ```
  Update src/components/SEO.tsx to emit hreflang alternate link tags when the site is multilingual.
  
  Requirements:
  1. Import the list of supported languages from src/i18n/languages.ts
  2. For each supported language code, output:
     <link rel="alternate" hreflang="{langCode}" href="https://esperantaskanaduko.com{pathname}" />
  3. Also output: <link rel="alternate" hreflang="x-default" href="https://esperantaskanaduko.com{pathname}" />
  4. Use React Router's useLocation() to get the current pathname
  5. The SEO component already uses react-helmet-async — add the links there
  6. Also update public/sitemap.xml to include <xhtml:link> alternate entries for all major language
     codes (at minimum: en, eo, es, fr, de, zh, ja, ru, ar, pt)
  ```

- [ ] **Add language persistence across sessions** 🟡 `i18n` `ux`

  **AI Prompt:**
  ```
  Currently the i18n config at src/i18n/config.ts uses i18next-browser-languagedetector.
  Verify and ensure that language preference is persisted to localStorage so it survives 
  page refreshes and new sessions.
  
  Check that:
  1. The detector order includes 'localStorage' before 'navigator'
  2. The localStorage key is set to something meaningful like 'i18n_lang'
  3. When a user picks a language via the LanguageSwitcher 
     (src/frontend/components/languageSwitcher/languageSwitcher.tsx), i18n.changeLanguage() is 
     called (confirm it is)
  4. On reload, the previously selected language is restored, not the browser default
  
  Also add an ARIA live region announcement when language changes so screen reader users 
  are informed: "Language changed to [language name]".
  ```

- [ ] **Translate the About page content via i18n keys** 🟡 `i18n`

  > **Context**: `src/frontend/pages/about/aboutPage.tsx` uses `isEsperanto` ternary strings directly in JSX instead of i18n translation keys — a pattern inconsistent with the rest of the app.

  **AI Prompt:**
  ```
  src/frontend/pages/about/aboutPage.tsx uses a custom `isEsperanto` boolean ternary pattern 
  to render bilingual text instead of the i18next useTranslation hook used everywhere else.
  
  Refactor this page to use useTranslation():
  1. Remove the isEsperanto constant
  2. Replace every bilingual ternary with t('about.xxx') calls
  3. Add all new keys to src/i18n/locales/en.json under an "about" namespace:
     about.title, about.intro, about.licenseTitle, about.licenseBody, 
     about.missionTitle, about.missionBody
  4. Add the Esperanto translations to src/i18n/locales/eo.json (same keys, eo values)
  5. Confirm the page still renders correctly in both English and Esperanto after the change
  ```

---

## 7. ♿ Accessibility (WCAG 2.1 AA)

- [ ] **Run a full accessibility audit and fix critical violations** 🔴 `accessibility`

  **AI Prompt:**
  ```
  This React app (esperantaskanaduko.com) needs a WCAG 2.1 AA accessibility audit.
  
  Please:
  1. Install axe-core: npm install --save-dev axe-core @axe-core/react
  2. In src/main.tsx (development only), add:
     if (process.env.NODE_ENV !== 'production') {
       const axe = await import('@axe-core/react');
       axe.default(React, ReactDOM, 1000);
     }
  3. List the most common accessibility issues to check manually in this specific codebase:
     a. Color contrast: #a0a0a0 text on #000000 background — check contrast ratio (must be ≥ 4.5:1)
     b. All <img> tags missing alt attributes (check Flag_of_Esperanto.png usage)
     c. Interactive elements without visible focus rings (MuiButton already has some)
     d. Missing aria-label on icon-only buttons (UserMenu, LanguageSwitcher icons)
     e. Cards that are clickable but not keyboard-focusable
  4. For each issue found, provide the fix and the file to edit.
  5. Document which WCAG criteria each fix addresses.
  ```

- [ ] **Fix color contrast for secondary text** 🟠 `accessibility`

  > **Context**: `theme.ts` sets `text.secondary: '#a0a0a0'` on a `#000000` background. The contrast ratio of #a0a0a0 on #000 is approximately 3.95:1 — below the WCAG AA 4.5:1 requirement for normal text.

  **AI Prompt:**
  ```
  In src/theme/theme.ts, text.secondary is '#a0a0a0' and the background is '#000000'.
  The contrast ratio is ~3.95:1, which fails WCAG AA (requires 4.5:1 for normal text, 
  3:1 for large text only).
  
  Fix:
  1. Change text.secondary to '#b0b0b0' (contrast ratio ~4.6:1 on black — passes AA)
  2. Audit all other color combinations in theme.ts that put grey text on dark backgrounds
     and adjust any that fail the 4.5:1 ratio for normal-sized text
  3. Do NOT change the visual identity — keep the dark/green aesthetic, just lift the 
     grey values slightly to pass contrast
  4. Test with the WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
  ```

- [ ] **Add skip-to-content link** 🟠 `accessibility`

  **AI Prompt:**
  ```
  Add a "Skip to main content" accessibility link to the app layout.
  
  In src/frontend/components/Layout.tsx:
  1. Add a visually hidden <a href="#main-content"> link as the very first focusable element
     - Visible only on keyboard focus (use CSS: position absolute, transform translate off-screen, 
       show on :focus)
     - Text: "Skip to main content" (add i18n key accessibility.skipToContent)
  2. Add id="main-content" to the <Box component="main"> element in Layout.tsx
  3. Style the skip link to appear in the top-left when focused, matching the green theme
  4. Verify it works: Tab on any page should show the skip link as the first item, 
     pressing Enter should jump focus to the main content area
  ```

- [ ] **Add aria-labels to icon-only UI controls** 🟠 `accessibility`

  **AI Prompt:**
  ```
  Audit all icon-only interactive elements in this codebase and add missing aria-label attributes.
  
  Files to check:
  - src/components/auth/UserMenu.tsx — the user avatar/icon button
  - src/frontend/components/languageSwitcher/languageSwitcher.tsx — the globe/language icon button
  - src/frontend/components/navBar/mobileNav.tsx — the hamburger menu button
  - src/components/resources/SearchBar.tsx — the clear (X) button
  - src/frontend/pages/AuthPage.tsx — the back arrow button
  
  For each icon button without a text label:
  1. Add aria-label={t('accessibility.xxx')} using the existing useTranslation hook
  2. Add the translation keys to en.json and eo.json
  3. Use MUI's Tooltip component to surface the label visually on hover too
  ```

---

## 8. ⚡ Performance

- [ ] **Reduce bundle size below 500 kB** 🟠 `performance`

  > **Context**: Final Status doc notes current bundle is 589 kB; target is <500 kB.

  **AI Prompt:**
  ```
  The Vite production build of esperantaskanaduko.com produces a ~589 kB main bundle.
  Target is under 500 kB.
  
  Please:
  1. Install rollup-plugin-visualizer: npm install --save-dev rollup-plugin-visualizer
  2. Add it to vite.config.ts to generate stats.html on build
  3. Identify the top contributors to bundle size from the visualization
  4. Implement these standard optimizations in vite.config.ts:
     a. Manual chunk splitting: separate vendor chunks for react, react-dom, @mui/material, 
        firebase, i18next
     b. Example:
        build: {
          rollupOptions: {
            output: {
              manualChunks: {
                'vendor-react': ['react', 'react-dom', 'react-router-dom'],
                'vendor-mui': ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
                'vendor-firebase': ['firebase'],
                'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
              }
            }
          }
        }
  5. Run npm run build and report new bundle sizes
  6. Identify any remaining large packages that could be lazy-loaded
  ```

- [ ] **Implement lazy loading for i18n locale files** 🟠 `performance` `i18n`

  > **Context**: All 66 locale JSON files are likely imported statically. At startup, only the active locale needs to be loaded.

  **AI Prompt:**
  ```
  In src/i18n/config.ts, all 66 locale JSON files are likely imported directly, loading all 
  ~66 × ~15 KB = ~1 MB of translation data on initial load.
  
  Refactor to lazy-load locales on demand using i18next's backend plugin:
  1. Install: npm install i18next-http-backend
  2. Move locale JSON files to /public/locales/{lang}/translation.json 
     (Vite serves /public as static assets)
  3. Update src/i18n/config.ts to use i18next-http-backend instead of static imports:
     import HttpBackend from 'i18next-http-backend';
     i18n.use(HttpBackend).use(LanguageDetector).use(initReactI18next).init({
       backend: { loadPath: '/locales/{{lng}}/translation.json' },
       fallbackLng: 'en',
       ...
     })
  4. Add React.Suspense fallback where needed (already present in routes.tsx)
  5. Verify: Only en.json (or user's locale) is fetched on first load; switching language 
     fetches that locale's JSON lazily
  ```

- [ ] **Add a Lighthouse CI script** 🟡 `performance` `ci`

  **AI Prompt:**
  ```
  Add a Lighthouse performance audit script to this project.
  
  1. Create scripts/lighthouse.sh:
     #!/bin/bash
     npm run build
     npm run preview &
     PREVIEW_PID=$!
     sleep 3
     npx lighthouse http://localhost:4173 \
       --output=html,json \
       --output-path=./lighthouse-report \
       --chrome-flags="--headless" \
       --only-categories=performance,accessibility,best-practices,seo
     kill $PREVIEW_PID
  
  2. Add "audit:lighthouse" to package.json scripts
  3. Document target scores in README: Performance ≥90, Accessibility ≥95, 
     Best Practices ≥90, SEO ≥95
  4. Add lighthouse-report* to .gitignore
  ```

- [ ] **Memoize heavy resource list computations** 🟡 `performance`

  **AI Prompt:**
  ```
  In src/frontend/pages/resources/ResourcePage.tsx, the combined and filtered resource list 
  is computed on every render. This array combines 12 data files (116+ resources) and runs 
  filter/search logic on every keystroke.
  
  Optimize:
  1. Wrap the combined resource array in useMemo with no dependencies (it's static data):
     const allResources = useMemo(() => [...learningResources, ...grammarGuides, ...], []);
  2. Wrap the filtered results in useMemo that depends only on [allResources, searchQuery, 
     selectedCategory, currentPage]:
     const filteredResources = useMemo(() => allResources.filter(...), 
       [allResources, searchQuery, selectedCategory]);
  3. Memoize the category counts similarly
  4. Add React.memo to ResourceCard, CategorySection, and other pure presentational 
     components that receive stable props
  5. Confirm with React DevTools Profiler that re-renders are reduced
  ```

---

## 9. 🔐 Authentication & Security

- [ ] **Add Google Sign-In (social auth)** 🟡 `auth` `ux`

  **AI Prompt:**
  ```
  The Firebase auth at src/backend/firebase/auth.ts currently supports only email/password.
  Add Google Sign-In as a social auth option.
  
  1. In src/backend/firebase/auth.ts:
     - Import GoogleAuthProvider and signInWithPopup from 'firebase/auth'
     - Export: export const signInWithGoogle = async () => signInWithPopup(auth, new GoogleAuthProvider())
  
  2. Update src/contexts/AuthContext.tsx:
     - Add signInWithGoogle to the context interface and provider
  
  3. Update src/components/auth/LogInForm.tsx and SignUpForm.tsx:
     - Add a "Continue with Google" MUI Button with Google icon
     - Style: white background, Google brand colors, placed above the email/password fields
     - On click: call signInWithGoogle from context, then call onSuccess()
     - On error: display error message in the existing error Alert
  
  4. Verify the Google auth provider is enabled in Firebase Console (provide instructions)
  5. All button text through useTranslation(): auth.actions.signInWithGoogle
  ```

- [ ] **Add Firebase config security audit** 🟠 `security`

  > **Context**: Firebase config is in `src/backend/firebase/firebaseConfig.ts`. In a client-side app, API keys are visible in the bundle, but Firebase security rules protect the data. Verify this is correctly set up.

  **AI Prompt:**
  ```
  Audit the Firebase configuration security for esperantaskanaduko.com.
  
  1. Check src/backend/firebase/firebaseConfig.ts — are the Firebase config values 
     hardcoded or loaded from environment variables?
  
  2. If hardcoded: 
     a. Move them to a .env file: VITE_FIREBASE_API_KEY=..., VITE_FIREBASE_AUTH_DOMAIN=..., etc.
     b. Update firebaseConfig.ts to read from import.meta.env.VITE_FIREBASE_*
     c. Add .env to .gitignore (verify it's not already tracked)
     d. Create .env.example with placeholder values for documentation
     e. Update README.md with "Environment Variables" setup section
  
  3. Provide instructions to set Firebase Security Rules in the Firebase Console:
     - Firestore rules to restrict reads/writes to authenticated users only (or public for library)
     - Realtime Database rules similarly
     - Auth domain restrictions to only allow esperantaskanaduko.com
  
  4. Note: In Vite apps, VITE_* env vars are embedded in the bundle at build time — 
     explain in comments why this is acceptable for Firebase (domain restriction + security rules)
  ```

- [ ] **Wrap protected routes with ProtectedRoute component** 🟡 `auth` `routing`

  > **Context**: `src/components/ProtectedRoute.tsx` exists but no routes appear to use it.

  **AI Prompt:**
  ```
  src/components/ProtectedRoute.tsx exists but no routes in 
  src/frontend/routes/routes.tsx use it.
  
  1. Review ProtectedRoute.tsx to understand what it does (redirects unauthenticated users 
     to /auth)
  2. Determine which routes should be protected. Candidates:
     - Any future user-profile or settings page
     - /donate is public, keep it public
  3. If there are no routes that need protection yet: add a comment in routes.tsx explaining 
     when to use <ProtectedRoute> with an example snippet, so it's ready for future features
  4. If any routes should be protected: wrap them in <ProtectedRoute> and verify that 
     unauthenticated access correctly redirects to /auth and back after login
  5. Also verify: after successful auth in AuthPage.tsx, the user is redirected back to 
     the originally requested page (not always home)
  ```

---

## 10. 🔍 SEO

- [ ] **Generate a dynamic sitemap** 🟠 `seo`

  > **Context**: `/public/sitemap.xml` is static and dated 2025-10-11. It needs to be kept in sync manually.

  **AI Prompt:**
  ```
  Create a Vite plugin or build script that auto-generates /public/sitemap.xml at build time.
  
  1. Create scripts/generate-sitemap.js (Node.js):
     - Define all static routes (matches src/frontend/routes/routes.tsx)
     - Set lastmod to today's date (ISO 8601)
     - Set priority: / = 1.0, /resources = 0.9, /library = 0.8, others = 0.7
     - Set changefreq: / and /resources = weekly, others = monthly
     - Include hreflang alternates for en and eo (minimum)
     - Write to public/sitemap.xml
  
  2. Add "generate:sitemap" to package.json scripts
  
  3. Integrate into the build pipeline by updating the "build" script:
     "build": "node scripts/generate-sitemap.js && tsc && vite build"
  
  4. Add structured data (JSON-LD) for the WebSite entity with SearchAction to the homepage 
     (it's already there in homePage.tsx — verify the potentialAction target URL is correct)
  ```

- [ ] **Fix the OG locale meta tag for multilingual pages** 🟡 `seo` `i18n`

  > **Context**: `SEO.tsx` outputs `og:locale` as either `eo` or `en_US`. When the user's language is Spanish/French/German, the OG locale is wrong.

  **AI Prompt:**
  ```
  In src/components/SEO.tsx, the og:locale meta tag is hardcoded to either 'eo' or 'en_US':
    <meta property="og:locale" content={currentLang === 'eo' ? 'eo' : 'en_US'} />
  
  Fix this to output the correct OG locale for any of the 66 supported languages.
  
  1. Create a utility function src/utils/ogLocale.ts that maps i18next language codes 
     to Open Graph locale format (e.g., 'fr' → 'fr_FR', 'zh' → 'zh_CN', 'pt' → 'pt_BR', etc.)
     Handle at minimum: en→en_US, eo→eo, es→es_ES, fr→fr_FR, de→de_DE, zh→zh_CN, 
     ja→ja_JP, ru→ru_RU, ar→ar_SA, pt→pt_BR, and a fallback for unknown codes
  
  2. Import and use this function in SEO.tsx:
     <meta property="og:locale" content={toOgLocale(currentLang)} />
  
  3. Also add og:locale:alternate tags for en and eo as the two primary languages
  ```

- [ ] **Add structured data to the Resources page** 🟡 `seo`

  **AI Prompt:**
  ```
  src/frontend/pages/resources/ResourcePage.tsx has no JSON-LD structured data.
  
  Add a CollectionPage + ItemList schema to the page's <SEO> component:
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Esperanto Resources",
    "description": "...",
    "url": "https://esperantaskanaduko.com/resources",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 116,
      "itemListElement": [
        // First 10 resources as ListItem with url, name, description
      ]
    }
  }
  
  Also add individual resource schemas for each category page 
  (e.g., LearningResourcesPage → "LearningResource" type, MusicResourcesPage → "MusicGroup").
  Use the appropriate Schema.org types for each resource category.
  Inject via <script type="application/ld+json"> tags in JSX (same pattern as LibraryPage.tsx).
  ```

---

## 11. 🎨 UI / Design Polish

- [ ] **Fix the #root max-width constraint breaking full-width layouts** 🟠 `ui`

  > **Context**: `src/index.css` sets `#root { max-width: 1280px; padding: 2rem; }` globally. This constrains page layouts that should be full-width (e.g., the navbar, full-bleed hero sections).

  **AI Prompt:**
  ```
  In src/index.css, the #root selector has:
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 12px;
  
  This creates a "card within a page" appearance and breaks full-width layouts (navbar 
  doesn't span the full viewport width, hero backgrounds are constrained).
  
  Fix:
  1. Remove max-width, margin, padding, border-radius, and background from #root in index.css
  2. Instead, apply layout containment at the component level where needed:
     - In Layout.tsx's <Box component="main">, add padding if needed
     - The NavBar AppBar is already position: sticky and doesn't need containment
     - The homepage Container already controls its own maxWidth
  3. Verify all pages still look correct after removing the #root constraints
  4. Verify the dark background gradient still covers the full viewport
  ```

- [ ] **Add loading skeleton states for resource cards** 🟡 `ux` `performance`

  **AI Prompt:**
  ```
  Currently loading states in this app show a spinner (LoadingFallback.tsx) for entire pages.
  Add skeleton loading for the resource grid so content "appears" faster.
  
  1. Create src/components/resources/ResourceCardSkeleton.tsx using MUI's <Skeleton> component:
     - Same dimensions as ResourceCard
     - Skeleton rectangles for title, description, category chip, and button
     - Use the theme's MuiSkeleton green shimmer style (already defined in theme.ts)
  
  2. In ResourcePage.tsx, when data is loading (or for the initial render before useMemo 
     completes), show 12 ResourceCardSkeleton components in the ResourceGrid instead of 
     an empty state
  
  3. Create a ResourceGrid loading state prop:
     <ResourceGrid loading={isLoading} skeletonCount={12}>
       {resources.map(...)}
     </ResourceGrid>
  ```

- [ ] **Add dark/light mode toggle** 🟢 `ui` `ux`

  **AI Prompt:**
  ```
  This app is dark-mode only (black/green theme). Add an optional light mode.
  
  1. Create a ThemeContext at src/contexts/ThemeContext.tsx that:
     - Stores 'dark' | 'light' preference in localStorage
     - Exposes toggleTheme() function
     - Defaults to 'dark'
  
  2. Create a light theme variant in src/theme/theme.ts:
     - Background: #f5f5f5, Paper: #ffffff
     - Primary: #006600 (darker green for accessibility on white)
     - Text: #1a1a1a
     - Keep the same brand feel but with white backgrounds
  
  3. Add a DarkModeIcon/LightModeIcon toggle button to the NavBar next to LanguageSwitcher
  
  4. Wrap ThemeProvider in App.tsx with the dynamic theme from ThemeContext
  
  5. Add aria-label and tooltip: "Switch to light mode" / "Switch to dark mode" (i18n)
  ```

- [ ] **Standardize page file naming conventions** 🟢 `housekeeping`

  **AI Prompt:**
  ```
  This project has inconsistent component file naming:
  - src/frontend/pages/homePage.tsx (camelCase)
  - src/frontend/pages/about/aboutPage.tsx (camelCase)
  - src/frontend/pages/pDFTest.tsx (inconsistent)
  - src/frontend/components/footer/footer.tsx (lowercase)
  
  The React convention is PascalCase for component files.
  
  Rename the following files to PascalCase and update all imports:
  - homePage.tsx → HomePage.tsx
  - aboutPage.tsx → AboutPage.tsx  
  - pDFTest.tsx → PDFTestPage.tsx (or remove if unused, see routing task)
  - footer.tsx → Footer.tsx
  - subtitle.tsx → Subtitle.tsx
  - title.tsx → Title.tsx
  - gitHubLink.tsx → GitHubLink.tsx
  
  Update imports in:
  - src/frontend/routes/routes.tsx (lazy import paths)
  - src/frontend/components/Layout.tsx
  - Any other files that import these
  
  Note: On case-insensitive file systems (macOS) you may need to use git mv for the rename 
  to be tracked correctly: git mv src/.../homePage.tsx src/.../HomePage.tsx
  ```

---

## 12. 🧪 Testing

- [ ] **Set up React Testing Library + write smoke tests** 🟠 `testing`

  > **Context**: Jest is configured (`tsconfig.test.json` exists) but test coverage is near zero. Only `src/backend/tests/test.test.ts` exists.

  **AI Prompt:**
  ```
  Set up React Testing Library for component testing in this Vite + Jest project.
  
  1. Install missing deps:
     npm install --save-dev @testing-library/react @testing-library/user-event @testing-library/jest-dom
     npm install --save-dev identity-obj-proxy jest-environment-jsdom
  
  2. Update jest.config.js (or create one if absent) with:
     - testEnvironment: 'jsdom'
     - setupFilesAfterEach: ['@testing-library/jest-dom']
     - moduleNameMapper for CSS/static files
  
  3. Write smoke tests for the 5 most critical components:
     a. src/components/SEO.test.tsx — renders without crashing, title is set
     b. src/frontend/components/navBar/navBar.test.tsx — renders nav items, language switcher present
     c. src/frontend/pages/homePage.test.tsx — renders title, subtitle, CTA buttons
     d. src/frontend/pages/resources/ResourcePage.test.tsx — renders search bar, filter chips
     e. src/components/ErrorBoundary.test.tsx — catches errors, shows fallback UI
  
  4. Mock: i18next (return key as value), react-router-dom (MemoryRouter wrapper), 
     firebase (jest.mock), react-helmet-async (passthrough)
  
  5. Target: npm test should pass all 5 smoke tests with no errors
  ```

- [ ] **Add integration tests for auth flow** 🟡 `testing` `auth`

  **AI Prompt:**
  ```
  Write integration tests for the authentication flow using React Testing Library.
  
  Test file: src/frontend/pages/AuthPage.test.tsx
  
  Tests to write:
  1. "shows sign up form by default" — SignUpForm is rendered
  2. "switches to login form when toggle clicked" — LogInForm appears after click
  3. "shows email validation error for invalid email" — type invalid email, submit, check error
  4. "shows password error for short password" — type 3-char password, check error
  5. "calls navigate('/') on successful auth" — mock auth context success, verify navigation
  6. "back button navigates to home" — click back button, verify navigate('/')
  
  Mock the AuthContext with jest.mock to control auth state without real Firebase calls.
  Use @testing-library/user-event for realistic user interactions.
  ```

- [ ] **Add visual regression tests** 🟢 `testing`

  **AI Prompt:**
  ```
  Add visual regression testing to catch unintended UI changes.
  
  1. Install Playwright: npm install --save-dev @playwright/test
  2. Create playwright.config.ts targeting http://localhost:4173 (vite preview)
  3. Write screenshot tests for:
     - Homepage (desktop 1440px and mobile 390px)
     - Resources page with no filters
     - Library page
     - About page
  4. Add "test:visual" script: "playwright test"
  5. Add "test:visual:update" script to update snapshots: "playwright test --update-snapshots"
  6. Add playwright-snapshots/ to .gitignore
  7. Document: screenshots are machine/OS-specific, use Docker for CI consistency
  ```

---

## 13. 🏗️ Code Quality & Developer Experience

- [ ] **Configure TypeScript path aliases** 🟡 `dx` `housekeeping`

  > **Context**: Long relative imports like `../../../components/SEO` could be replaced with `@components/SEO`.

  **AI Prompt:**
  ```
  Add TypeScript path aliases to eliminate long relative import paths.
  
  1. Update tsconfig.json to add:
     "paths": {
       "@/*": ["./src/*"],
       "@components/*": ["./src/components/*"],
       "@pages/*": ["./src/frontend/pages/*"],
       "@hooks/*": ["./src/hooks/*"],
       "@data/*": ["./src/data/*"],
       "@utils/*": ["./src/utils/*"],
       "@types/*": ["./src/types/*"],
       "@i18n/*": ["./src/i18n/*"],
       "@theme/*": ["./src/theme/*"],
       "@contexts/*": ["./src/contexts/*"]
     }
  
  2. Update vite.config.ts to mirror the aliases:
     import path from 'path';
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
         '@components': path.resolve(__dirname, './src/components'),
         // ... etc
       }
     }
  
  3. Update 5 example files to use the new aliases (to prove it works), then note that 
     the rest can be migrated gradually.
  
  4. Verify TypeScript still compiles (npx tsc --noEmit) and Vite builds successfully.
  ```

- [ ] **Clean up remaining ESLint warnings** 🟡 `code-quality`

  > **Context**: 3 console statements in database files and 1 function component style warning remain per the Final Status doc.

  **AI Prompt:**
  ```
  Fix the 4 remaining ESLint warnings in this project (documented in docs/FINAL_STATUS.md):
  
  1. THREE console.log statements in:
     - src/backend/firebase/database/realTimeDatabase/read/getSnapshotFromRealTimeDatabase.ts:17
     - src/backend/firebase/database/realTimeDatabase/write/pushToRealTimeDatabase.ts:6
     - src/backend/firebase/database/realTimeDatabase/write/writeToRealTimeDatabase.ts:11
     
     Fix: Wrap each with: if (process.env.NODE_ENV === 'development') { console.log(...) }
     This keeps them for dev debugging but removes them from production builds.
  
  2. ONE function declaration style in:
     - src/frontend/pages/library/LibraryPage.tsx:26
     
     Fix: Convert `function LibraryPage()` to `const LibraryPage = () =>` for consistency
     with arrow function components used throughout the rest of the codebase.
  
  3. After fixes, run `npm run lint` and confirm 0 warnings, 0 errors.
  ```

- [ ] **Delete legacy code directories** 🟢 `housekeeping`

  > **Context**: The Final Status doc recommends deleting `.legacy/` directories after verification. These contain old auth code that was moved but not deleted.

  **AI Prompt:**
  ```
  The Final Status doc (docs/FINAL_STATUS.md) recommends removing legacy code directories 
  that were archived during the September 2025 refactoring.
  
  Safely remove legacy files:
  1. Find all .legacy directories: find ./src -name "*.legacy" -type d
  2. Verify none of the files in those directories are imported anywhere:
     grep -r "auth.legacy\|legacy/" ./src --include="*.ts" --include="*.tsx"
  3. If no imports exist, delete the directories:
     rm -rf src/backend/firebase/auth.legacy
  4. Run npm run build to confirm the build still succeeds after deletion
  5. Run npm run lint to confirm 0 errors after deletion
  6. Git commit the cleanup: "chore: remove archived legacy auth code"
  ```

- [ ] **Add TypeScript strict null check for Firebase config** 🟡 `code-quality` `security`

  **AI Prompt:**
  ```
  In src/backend/firebase/firebaseConfiguration.ts and firebase.ts, Firebase is initialized 
  with config values. If any config value is undefined (e.g., env var not set), Firebase 
  throws a cryptic runtime error.
  
  Add startup validation:
  1. In src/backend/firebase/firebaseConfig.ts (or wherever config is defined), add a 
     validation function:
     
     const requiredEnvVars = ['VITE_FIREBASE_API_KEY', 'VITE_FIREBASE_AUTH_DOMAIN', ...];
     requiredEnvVars.forEach(key => {
       if (!import.meta.env[key]) {
         throw new Error(`Missing required environment variable: ${key}`);
       }
     });
  
  2. This will fail fast at startup with a clear message rather than a confusing Firebase error
  3. Add a try-catch in src/main.tsx's ErrorBoundary to catch this and show a dev-friendly 
     "Configuration Error" message
  4. Document all required env vars in .env.example
  ```

---

## 14. 🚀 Deployment & Infrastructure

- [ ] **Add GitHub Actions CI/CD pipeline** 🟠 `ci` `deployment`

  **AI Prompt:**
  ```
  Create a GitHub Actions workflow for CI/CD at .github/workflows/ci.yml.
  
  The workflow should:
  
  On pull_request to main:
  1. Install dependencies (npm ci)
  2. Run TypeScript check (npx tsc --noEmit)
  3. Run ESLint (npm run lint)
  4. Run tests (npm test)
  5. Run build (npm run build)
  6. Upload build artifacts
  
  On push to main:
  1. All CI checks above
  2. Deploy to GitHub Pages (npm run deploy)
     - Use peaceiris/actions-gh-pages action
     - Deploy from the dist/ directory
     - Use a deploy token or GITHUB_TOKEN
  
  Cache node_modules using actions/cache with package-lock.json hash as cache key.
  
  Use Node.js 20 (current LTS). 
  Add a badge to README.md: [![CI](github workflow badge URL)].
  ```

- [ ] **Add a Content Security Policy (CSP) header** 🟠 `security`

  **AI Prompt:**
  ```
  This site is deployed to GitHub Pages which doesn't support server-side HTTP headers.
  Add a Content Security Policy via a <meta http-equiv="Content-Security-Policy"> tag.
  
  1. In index.html, add a CSP meta tag that:
     - Allows scripts from 'self' and necessary CDNs
     - Allows styles from 'self' and MUI/emotion inline styles ('unsafe-inline' for MUI, 
       or implement a nonce-based CSP)
     - Allows images from 'self', data:, and external image hosts used by resources 
       (youtube thumbnails, etc.)
     - Allows connections to Firebase domains (firestore.googleapis.com, etc.)
     - Allows frames from youtube.com for embedded concert videos
     - Blocks everything else
  
  2. Test the CSP in browser DevTools console (look for CSP violation errors)
  3. Adjust until there are zero CSP errors while the site functions correctly
  4. Add 'report-uri' or 'report-to' endpoint if a reporting service is available
  ```

- [ ] **Set up Dependabot for automated dependency updates** 🟢 `maintenance`

  **AI Prompt:**
  ```
  Create .github/dependabot.yml to automate dependency update PRs.
  
  Configure:
  1. npm package updates: weekly schedule, grouped into "production-deps" and "dev-deps" 
     PR groups, auto-assign to @Vaporjawn, ignore major version bumps for MUI and Firebase 
     (too breaking), cap open PRs at 10
  2. GitHub Actions updates: monthly schedule
  
  Also create .github/PULL_REQUEST_TEMPLATE.md with sections:
  - Description
  - Type of change (bugfix/feature/chore/docs)
  - Testing done
  - Screenshots (if UI change)
  - Checklist: [ ] Tests pass, [ ] Lint passes, [ ] Build succeeds
  ```

---

## 15. 📄 Content & About Page

- [ ] **Expand the About page with more content** 🟡 `content`

  **AI Prompt:**
  ```
  src/frontend/pages/about/aboutPage.tsx has only 3 brief sections (Welcome, License, Mission).
  Expand it with useful content for visitors:
  
  Add these sections (all bilingual via i18n — add to en.json and eo.json):
  
  1. "Meet the Team / Pri la Teamo" — Victor Williams (@Vaporjawn) with a GitHub link 
     and a 2-3 sentence bio about creating Esperanta Skanaduko
  
  2. "Related Projects / Rilataj Projektoj" — The esperanto-analyzer npm package 
     (already in the footer), with description and a "View on npm" button
  
  3. "How to Contribute / Kiel Kontribui" — brief guide: submit resources via GitHub Issues,
     translate via pull request, or donate
  
  4. "Technology Stack / Teknologio" — React, TypeScript, Material UI, Firebase, i18next, 
     hosted on GitHub Pages
  
  5. "Connect / Konektiĝu" — larger contact section with email and MangaDex links 
     (already in footer — refactor into reusable SocialLinks component)
  
  Style: same Paper/Card components as existing sections, consistent dark green theme.
  ```

- [ ] **Add a "Resources Submission" form or GitHub Issue template** 🟢 `content` `community`

  **AI Prompt:**
  ```
  Community members may want to suggest new Esperanto resources. Add a pathway for this.
  
  Option A (simpler — GitHub Issues):
  1. Create .github/ISSUE_TEMPLATE/resource-suggestion.yml with fields:
     - Resource name and URL
     - Category (dropdown: learning/grammar/music/etc.)
     - Description
     - Why it belongs here
  2. Add a "Suggest a Resource" link in the footer and About page linking to the template:
     https://github.com/Vaporjawn/esperantaskanaduko.com/issues/new?template=resource-suggestion.yml
  
  Option B (in-app form):
  1. Create src/frontend/pages/SuggestResourcePage.tsx with a form
  2. On submit: POST to a Firebase Cloud Function or open a pre-filled GitHub Issue URL
  3. Add /suggest route to routes.tsx
  4. Add "Suggest a Resource" to the navbar's Resources dropdown
  
  Implement Option A first (simpler, no backend needed), with a comment noting Option B 
  for future implementation.
  ```

---

## 16. 📊 Analytics & Monitoring

- [ ] **Verify Firebase Analytics is properly configured** 🟡 `analytics`

  > **Context**: `src/backend/firebase/analytics.ts` exists — verify it's wired up and tracking key events.

  **AI Prompt:**
  ```
  Review src/backend/firebase/analytics.ts and confirm Firebase Analytics is correctly 
  initialized and used in this app.
  
  1. Verify analytics.ts initializes Firebase Analytics correctly
  2. Trace where (if anywhere) analytics events are fired — search codebase for logEvent calls
  3. If no events are tracked, add tracking for key user interactions:
     a. Page views — fire on every route change via a useEffect in App.tsx or Layout.tsx
        that calls logEvent(analytics, 'page_view', { page_path: location.pathname })
     b. Language change — in languageSwitcher.tsx, fire 'language_changed' event
     c. Resource click — in ResourceCard.tsx, fire 'resource_click' event with resource title + URL
     d. Library book click — in LibraryPage.tsx card action, fire 'book_opened' event
     e. Donation button click — in DonatePage.tsx, fire 'donate_initiated' with method name
  4. Add a check: only fire analytics in production (process.env.NODE_ENV === 'production')
  5. Verify analytics works by checking Firebase Console → Analytics → DebugView
  ```

- [ ] **Add error monitoring (Sentry or Firebase Crashlytics)** 🟢 `monitoring`

  **AI Prompt:**
  ```
  Add production error monitoring to this React app. Use Sentry (free tier available).
  
  1. Install: npm install @sentry/react
  2. Initialize Sentry in src/main.tsx before the React render:
     import * as Sentry from "@sentry/react";
     Sentry.init({
       dsn: import.meta.env.VITE_SENTRY_DSN,
       environment: import.meta.env.MODE,
       tracesSampleRate: 0.1, // 10% performance sampling
       enabled: import.meta.env.PROD,
     });
  3. Wrap the root with Sentry.ErrorBoundary (or integrate with the existing ErrorBoundary.tsx)
  4. Add VITE_SENTRY_DSN to .env.example with setup instructions
  5. Add source map upload to vite.config.ts using @sentry/vite-plugin so stack traces 
     map to original TypeScript source
  6. Document: create a free Sentry account at sentry.io, create a project, copy the DSN
  ```

---

## 17. 🌟 Community & Social

- [ ] **Add social media / community links** 🟡 `content` `community`

  **AI Prompt:**
  ```
  The footer at src/frontend/components/footer/footer.tsx only lists MangaDex and email.
  
  Expand with additional community presence (add only what exists or is planned):
  1. Add social link icons using @mui/icons-material: GitHub, Email, and any others
  2. Create a reusable SocialLinks component: src/frontend/components/socialLinks/socialLinks.tsx
     - Props: compact (footer mode) | expanded (about page mode)
     - Each link: MUI IconButton with Tooltip showing platform name + aria-label
  3. Links to include (use real URLs already in the codebase):
     - GitHub: https://github.com/Vaporjawn/esperantaskanaduko.com
     - MangaDex: https://mangadex.org/group/18541/esperanta-skanaduko
     - Email: esperantaSkanaduko@gmail.com
  4. Replace the current footer social section with <SocialLinks compact />
  5. Use <SocialLinks expanded /> in the About page contact section
  6. All links open in new tab with rel="noopener noreferrer"
  ```

- [ ] **Add a "Hall of Fame" or contributor credits section** 🟢 `content` `community`

  **AI Prompt:**
  ```
  Create a contributors section for the About page 
  (src/frontend/pages/about/aboutPage.tsx) that acknowledges community contributors.
  
  1. Create a static data file src/data/contributors.ts with the type:
     interface Contributor { name: string; role: string; github?: string; note?: string; }
     
     Start with at least: Victor Williams (creator/maintainer)
  
  2. Create a Contributors section on the About page that renders the list as MUI Cards
     (avatar placeholder with initials, name, role, optional GitHub link)
  
  3. Leave clear instructions in contributors.ts for how community members can add 
     themselves via a GitHub pull request
  
  4. Style consistently with the existing About page dark green theme
  ```

---

## 18. 📱 Progressive Web App (PWA)

- [ ] **Complete PWA setup** 🟡 `pwa`

  > **Context**: `/src/frontend/assets/favicon/site.webmanifest` exists but may be incomplete, and there's no service worker registered.

  **AI Prompt:**
  ```
  This app has a site.webmanifest at src/frontend/assets/favicon/site.webmanifest but may 
  lack a service worker. Complete the PWA setup.
  
  1. Install vite-plugin-pwa: npm install --save-dev vite-plugin-pwa
  
  2. Configure it in vite.config.ts:
     VitePWA({
       registerType: 'autoUpdate',
       manifest: {
         name: 'Esperanta Skanaduko',
         short_name: 'EsperantaSkan',
         description: 'Learn Esperanto Online',
         theme_color: '#00ff00',
         background_color: '#000000',
         display: 'standalone',
         icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
                 { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }]
       },
       workbox: {
         globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
         runtimeCaching: [{
           urlPattern: /^https:\/\/esperantaskanaduko\.com\/.*/,
           handler: 'StaleWhileRevalidate',
         }]
       }
     })
  
  3. Move favicon files from src/frontend/assets/favicon/ to /public/ (Vite serves these)
  4. Update index.html to link to the web manifest correctly
  5. Test with Chrome DevTools → Application → Service Workers
  6. Test offline mode: cache homepage and resources pages for offline use
  ```

---

## Priority Summary

| Priority | Count | Items |
|----------|-------|-------|
| 🔴 Critical | 3 | OG image, 404 page, Homepage CTAs |
| 🟠 High | 12 | Bundle size, accessibility, auth security, translation audit, CI/CD, breadcrumbs, keyboard nav, color contrast, skip link, aria labels, lazy i18n, pagination |
| 🟡 Medium | 16 | Dark mode, shareable URLs, hreflang, sitemap, per-page OGs, per-page structured data, auth persistence, about page i18n, skeleton loaders, library pagination, Lighthouse CI, env vars, analytics, social links, TS path aliases, ESLint cleanup |
| 🟢 Low | 8 | Light/dark toggle, visual regression tests, Dependabot, Sentry, SocialLinks, contributor credits, PWA, file naming, PDF cleanup |

---

## Quick Wins (do these first, each under 30 min)

- [ ] Fix color contrast: `text.secondary: '#a0a0a0'` → `'#b0b0b0'` in theme.ts
- [ ] Add `aria-label` to icon-only buttons (UserMenu, LanguageSwitcher, mobile hamburger)
- [ ] Add the 404 catch-all route to routes.tsx
- [ ] Wrap console.log calls in dev-only guards in the 3 database files
- [ ] Add `<a href="#main-content">Skip to content</a>` to Layout.tsx
- [ ] Run translation audit script to discover which locales are incomplete

---

*Generated: 2026-06-26 · esperantaskanaduko.com · React 18 + TypeScript + Vite + MUI v7 + Firebase*
