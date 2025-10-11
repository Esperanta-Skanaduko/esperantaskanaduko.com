# Next Steps: Component Translation Key Updates

**Status**: Translation files refactored ✅ | Components need updating ⏳
**Date**: September 19, 2025
**Estimated Time**: 30-45 minutes for all updates

---

## Critical Priority Files (Update These First)

These are the primary component files that use translation keys and need immediate updates:

### 1. **DonatePage.tsx** (Highest Usage - ~30+ translation calls)
**Location**: `src/frontend/pages/DonatePage.tsx`

**Current Issues**:
- Uses old `donate.title` → Should be `donate.hero.title`
- Uses old `donate.subtitle` → Should be `donate.hero.subtitle`
- Uses old `donate.methodsTitle` → Should be `donate.sections.methods.title`
- Uses old `donate.impactTitle` → Should be `donate.sections.impact.title`
- Uses old `donate.impactDescription` → Should be `donate.sections.impact.description`
- Uses old `donate.donateNow` → Should be `donate.actions.donateNow`
- Uses old `donate.impact.*` → Should be `donate.impacts.*` (correct already)
- Uses old `donate.methods.*` → Should be `donate.methods.*` (correct already)
- Uses old `donate.thankYou.title` → Should be `donate.sections.thankYou.title`
- Uses old `donate.thankYou.message` → Should be `donate.sections.thankYou.message`

**Action Required**: Open this file and update all donation-related keys.

---

### 2. **ResourcePage.tsx** (High Usage - ~15+ translation calls)
**Location**: `src/frontend/pages/resources/ResourcePage.tsx`

**Current Issues**:
- Uses `seo.resources.title` → Should be `seo.pages.resources.title`
- Uses `seo.resources.description` → Should be `seo.pages.resources.description`
- Likely uses `resources.title` → Should be `resources.page.title`
- Likely uses `resources.search` → Should be `resources.search.label`
- Likely uses `resources.filter` → Should be `resources.filters.filterBy`
- Likely uses `resources.featured` → Should be `resources.sections.featured`

**Action Required**: Search file for all `t('resources.` and `t('seo.resources` patterns.

---

### 3. **aboutPage.tsx** (Medium Usage - ~10+ translation calls)
**Location**: `src/frontend/pages/about/aboutPage.tsx`

**Current Issues**:
- Uses `about.seo.title` → Should be `seo.pages.about.title` (or doesn't exist in SEO yet)
- Uses `about.pageTitle` → Should be `about.page.title`
- Uses `about.intro` → Should be `about.page.description` or new nested structure
- Uses `about.mission.title` → Should be `about.sections.mission.title` ✅ (already correct structure)
- Uses `about.mission.content` → Should be `about.sections.mission.description`

**Action Required**: Update all about page keys, especially page metadata.

---

### 4. **EsperantoLiveConcertVideosPage.tsx** (Low Usage - ~4 translation calls)
**Location**: `src/frontend/pages/library/EsperantoLiveConcertVideosPage.tsx`

**Current Issues**:
- Uses `seo.concerts.title` → Should be `seo.pages.concerts.title` ✅ (correct)
- Uses `seo.concerts.description` → Should be `seo.pages.concerts.description` ✅ (correct)

**Action Required**: Actually looks good! SEO keys are already using new structure.

---

## Components Likely Needing Updates (Not Yet Scanned)

These files probably use translation keys but weren't in the initial search:

### Navigation Components
- **navBar** (`src/frontend/components/navBar/...`?)
  - Likely uses `navigation.home`, `navigation.library`, etc.
  - **Needs**: `navigation.main.home`, `navigation.main.library`, etc.

### Footer Component
- **Footer** (likely in `src/frontend/components/` or `src/components/`)
  - Likely uses `footer.copyright`, `footer.links.github`, etc.
  - **Needs**: `footer.legal.copyright`, `footer.social.links.github`, etc.

### Auth Components
- **AuthPage** (`src/frontend/pages/AuthPage.tsx`)
  - Likely uses `auth.signUp`, `auth.email`, `auth.password`, etc.
  - **Needs**: `auth.actions.signUp`, `auth.fields.email`, `auth.fields.password`, etc.

### Home Page
- **homePage** (`src/frontend/pages/homePage.tsx`)
  - Likely uses `home.welcome`, `home.getStarted`, etc.
  - **Needs**: `home.hero.welcome`, `home.actions.getStarted`, etc.

### Library Components
- **LibraryPage** (`src/frontend/pages/library/LibraryPage.tsx`)
  - Likely uses `library.title`, `library.searchPlaceholder`, etc.
  - **Needs**: `library.page.title`, `library.search.placeholder`, etc.

### Error Components
- **Error pages/boundaries** (possibly in `src/components/`)
  - Likely uses `errors.pageNotFound`, `errors.somethingWrong`, etc.
  - **Needs**: `errors.notFound.title`, `errors.general.title`, etc.

---

## Step-by-Step Update Process

### Step 1: Create a Backup Branch
```bash
git checkout -b refactor/update-translation-keys
```

### Step 2: Update DonatePage.tsx
```bash
# Open the file
code src/frontend/pages/DonatePage.tsx

# Find and replace these patterns:
t('donate.title'              → t('donate.hero.title'
t('donate.subtitle'           → t('donate.hero.subtitle'
t('donate.methodsTitle'       → t('donate.sections.methods.title'
t('donate.impactTitle'        → t('donate.sections.impact.title'
t('donate.impactDescription'  → t('donate.sections.impact.description'
t('donate.donateNow'          → t('donate.actions.donateNow'
t('donate.thankYou.title'     → t('donate.sections.thankYou.title'
t('donate.thankYou.message'   → t('donate.sections.thankYou.message'
```

### Step 3: Update ResourcePage.tsx
```bash
code src/frontend/pages/resources/ResourcePage.tsx

# Find and replace:
t('seo.resources.title'       → t('seo.pages.resources.title'
t('seo.resources.description' → t('seo.pages.resources.description'
t('seo.resources.keywords'    → t('seo.pages.resources.keywords'
t('resources.title'           → t('resources.page.title'
t('resources.subtitle'        → t('resources.page.subtitle'
t('resources.search'          → t('resources.search.label'
t('resources.searchPlaceholder' → t('resources.search.placeholder'
t('resources.filter'          → t('resources.filters.filterBy'
t('resources.clearFilters'    → t('resources.filters.clearAll'
t('resources.featured'        → t('resources.sections.featured'
t('resources.totalResources'  → t('resources.sections.total'
t('resources.showingResults'  → t('resources.results.showing'
t('resources.noResults'       → t('resources.results.noResults'
t('resources.noResultsDescription' → t('resources.results.noResultsDescription'
```

### Step 4: Update aboutPage.tsx
```bash
code src/frontend/pages/about/aboutPage.tsx

# Find and replace:
t('about.pageTitle'           → t('about.page.title'
t('about.intro'               → t('about.page.description'
t('about.mission.content'     → t('about.sections.mission.description'
t('about.esperanto.content'   → t('about.sections.esperanto.description'
```

### Step 5: Find All Other Translation Usage
```bash
# Search for all files using useTranslation
grep -r "useTranslation" src/frontend/

# Search for all t( function calls
grep -rn "t('" src/frontend/ | grep -v node_modules

# Search specifically for old patterns
grep -rn "t('common\." src/frontend/
grep -rn "t('navigation\." src/frontend/
grep -rn "t('auth\." src/frontend/
grep -rn "t('home\." src/frontend/
grep -rn "t('library\." src/frontend/
grep -rn "t('footer\." src/frontend/
grep -rn "t('errors\." src/frontend/
```

### Step 6: Test Each Page
```bash
# Start dev server
npm run dev

# Test each page manually:
# - Home page: http://localhost:5173/
# - About page: http://localhost:5173/about
# - Library page: http://localhost:5173/library
# - Resources page: http://localhost:5173/resources
# - Donate page: http://localhost:5173/donate
# - Auth page: http://localhost:5173/auth
```

### Step 7: Check Browser Console
- Open browser DevTools (F12)
- Look for warnings like:
  - `"Missing translation for key: donate.title"`
  - `"Translation key not found: ..."`
- Fix any missing keys found

### Step 8: Test Language Switching
- Switch between English and Esperanto
- Verify all text changes correctly
- Check for any missing translations

### Step 9: Run Build
```bash
npm run build
```
- Verify build succeeds with no errors
- Check for any TypeScript errors related to translation keys

### Step 10: Commit Changes
```bash
git add .
git commit -m "refactor: update component translation keys to new nested structure

- Updated DonatePage to use donate.hero.*, donate.sections.*, donate.actions.*
- Updated ResourcePage to use resources.page.*, resources.search.*, resources.filters.*
- Updated aboutPage to use about.page.*, about.sections.*
- Updated all SEO keys to use seo.pages.*
- Updated navigation keys to use navigation.main.*, navigation.secondary.*
- Updated all other components to use new hierarchical translation structure

Related: I18N_REFACTORING_COMPLETE.md, TRANSLATION_KEY_MIGRATION_MAP.md"
```

---

## Quick Testing Checklist

After updates, verify these work correctly:

### ✅ All Pages Load
- [ ] Home page loads without errors
- [ ] About page loads without errors
- [ ] Library page loads without errors
- [ ] Resources page loads without errors
- [ ] Donate page loads without errors
- [ ] Auth page loads without errors
- [ ] Concert videos page loads without errors

### ✅ Language Switching
- [ ] Switch to Esperanto - all text changes
- [ ] Switch back to English - all text changes
- [ ] No console warnings about missing keys
- [ ] Both languages display correctly

### ✅ All Features Work
- [ ] Navigation menu works
- [ ] Footer links work
- [ ] Search functionality works
- [ ] Filtering works
- [ ] Forms work (if any)
- [ ] Auth flow works (if applicable)

### ✅ No Errors
- [ ] No browser console errors
- [ ] No TypeScript errors
- [ ] Build succeeds (`npm run build`)
- [ ] Tests pass (if applicable)

---

## Expected Results

### Before Updates (Current State)
- ❌ Pages may show translation keys instead of text
- ❌ Browser console shows "Missing translation" warnings
- ❌ Language switching may show mixed content or errors

### After Updates (Target State)
- ✅ All pages display text correctly in both languages
- ✅ No console warnings about missing translations
- ✅ Clean language switching with no errors
- ✅ Build succeeds with no errors

---

## Troubleshooting Guide

### Issue: "Missing translation for key: donate.title"
**Solution**: You missed updating this key. Search for `t('donate.title'` and replace with `t('donate.hero.title'`

### Issue: Page shows translation key instead of text
**Solution**: The key doesn't exist in new structure. Check `TRANSLATION_KEY_MIGRATION_MAP.md` for correct path.

### Issue: One language works but other doesn't
**Solution**: Both `en.json` and `eo.json` should have identical structure. Verify both files have the same nested keys.

### Issue: TypeScript error on translation keys
**Solution**: If using typed i18n, regenerate types from new translation files.

### Issue: Build fails after updates
**Solution**: Check for syntax errors in replacements. Ensure all `t('` calls have matching closing parentheses.

---

## Time Estimates

- **DonatePage updates**: 10 minutes
- **ResourcePage updates**: 10 minutes
- **aboutPage updates**: 5 minutes
- **Finding other components**: 5 minutes
- **Updating remaining components**: 15 minutes
- **Testing all pages**: 10 minutes
- **Final verification**: 5 minutes

**Total Estimated Time**: 60 minutes maximum

---

## Additional Resources

- **Complete Refactoring Documentation**: `I18N_REFACTORING_COMPLETE.md`
- **Migration Map with All Keys**: `TRANSLATION_KEY_MIGRATION_MAP.md`
- **Original Audit Report**: `I18N_COMPREHENSIVE_AUDIT.md`
- **Translation Files**:
  - English: `src/i18n/locales/en.json`
  - Esperanto: `src/i18n/locales/eo.json`

---

## Success Criteria

You'll know you're done when:

1. ✅ `npm run dev` starts with no errors
2. ✅ All pages load and display text correctly
3. ✅ Language switching works perfectly in both directions
4. ✅ No browser console warnings about missing translations
5. ✅ `npm run build` completes successfully
6. ✅ Code is committed to git with clear commit message

---

**Last Updated**: September 19, 2025
**Related Files**: I18N_REFACTORING_COMPLETE.md, TRANSLATION_KEY_MIGRATION_MAP.md
