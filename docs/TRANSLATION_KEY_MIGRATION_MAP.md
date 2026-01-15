# Translation Key Migration Map

Quick reference for updating component translation keys after i18n refactoring.

## Find & Replace Patterns

Use your editor's multi-file find & replace feature with these patterns:

### Common Section
```
t('common.siteName')          → t('common.site.name')
t('common.tagline')           → t('common.site.tagline')
t('common.description')       → t('common.site.description')
t('common.home')              → t('common.navigation.home')
t('common.about')             → t('common.navigation.about')
t('common.library')           → t('common.navigation.library')
t('common.loading')           → t('common.ui.loading')
t('common.error')             → t('common.ui.error')
t('common.language')          → t('common.ui.language')
t('common.switchLanguage')    → t('common.ui.switchLanguage')
```

### SEO Section
```
t('seo.resources.title')      → t('seo.pages.resources.title')
t('seo.resources.description') → t('seo.pages.resources.description')
t('seo.resources.keywords')   → t('seo.pages.resources.keywords')
t('seo.library.title')        → t('seo.pages.library.title')
t('seo.library.description')  → t('seo.pages.library.description')
t('seo.library.keywords')     → t('seo.pages.library.keywords')
t('seo.home.title')           → t('seo.pages.home.title')
t('seo.home.description')     → t('seo.pages.home.description')
t('seo.home.keywords')        → t('seo.pages.home.keywords')
t('seo.concerts.title')       → t('seo.pages.concerts.title')
t('seo.concerts.description') → t('seo.pages.concerts.description')
t('seo.concerts.keywords')    → t('seo.pages.concerts.keywords')
```

### Navigation Section
```
t('navigation.home')          → t('navigation.main.home')
t('navigation.library')       → t('navigation.main.library')
t('navigation.about')         → t('navigation.main.about')
t('navigation.resources')     → t('navigation.main.resources')
t('navigation.contact')       → t('navigation.secondary.contact')
t('navigation.donate')        → t('navigation.secondary.donate')
t('navigation.analyzer')      → t('navigation.secondary.analyzer')
```

### Donate Section
```
t('donate.title')             → t('donate.hero.title')
t('donate.subtitle')          → t('donate.hero.subtitle')
t('donate.choosMethod')       → t('donate.sections.methods.title')
t('donate.impact')            → t('donate.sections.impact.title')
t('donate.impactDescription') → t('donate.sections.impact.description')
t('donate.thankYou')          → t('donate.sections.thankYou.title')
t('donate.thankYouMessage')   → t('donate.sections.thankYou.message')
t('donate.donateNow')         → t('donate.actions.donateNow')
```

### Home Section
```
t('home.welcome')             → t('home.hero.welcome')
t('home.description')         → t('home.hero.description')
t('home.getStarted')          → t('home.actions.getStarted')
t('home.learnMore')           → t('home.actions.learnMore')
t('home.features.title')      → t('home.features.title')
t('home.features.library.title') → t('home.features.items.library.title')
t('home.features.library.description') → t('home.features.items.library.description')
t('home.features.interactive.title') → t('home.features.items.interactive.title')
t('home.features.interactive.description') → t('home.features.items.interactive.description')
t('home.features.community.title') → t('home.features.items.community.title')
t('home.features.community.description') → t('home.features.items.community.description')
```

### About Section
```
t('about.title')              → t('about.page.title')
t('about.description')        → t('about.page.description')
t('about.mission.title')      → t('about.sections.mission.title')
t('about.mission.description') → t('about.sections.mission.description')
t('about.esperanto.title')    → t('about.sections.esperanto.title')
t('about.esperanto.description') → t('about.sections.esperanto.description')
```

### Library Section
```
t('library.title')            → t('library.page.title')
t('library.searchPlaceholder') → t('library.search.placeholder')
t('library.categories')       → t('library.filters.categories')
t('library.allBooks')         → t('library.filters.allBooks')
t('library.noResults')        → t('library.results.noResults')
t('library.booksFound')       → t('library.results.booksFound')
```

### Footer Section
```
t('footer.copyright')         → t('footer.legal.copyright')
t('footer.madeWith')          → t('footer.legal.madeWith')
t('footer.forCommunity')      → t('footer.legal.forCommunity')
t('footer.developedBy')       → t('footer.legal.developedBy')
t('footer.relatedProjects')   → t('footer.projects.title')
t('footer.esperantoAnalyzer') → t('footer.projects.esperantoAnalyzer.title')
t('footer.analyzerDescription') → t('footer.projects.esperantoAnalyzer.description')
t('footer.socialLinks')       → t('footer.social.title')
t('footer.links.github')      → t('footer.social.links.github')
t('footer.links.issues')      → t('footer.social.links.issues')
t('footer.links.contribute')  → t('footer.social.links.contribute')
t('footer.acknowledgments.title') → t('footer.acknowledgments.title')
t('footer.acknowledgments.gutenberg') → t('footer.acknowledgments.gutenberg')
```

### Errors Section
```
t('errors.pageNotFound')      → t('errors.notFound.title')
t('errors.goHome')            → t('errors.notFound.action')
t('errors.somethingWrong')    → t('errors.general.title')
t('errors.tryAgain')          → t('errors.general.action')
```

### Auth Section (Most Complex)
```
# Actions
t('auth.signUp')              → t('auth.actions.signUp')
t('auth.logIn')               → t('auth.actions.logIn')
t('auth.signOut')             → t('auth.actions.signOut')

# Fields
t('auth.email')               → t('auth.fields.email')
t('auth.password')            → t('auth.fields.password')
t('auth.confirmPassword')     → t('auth.fields.confirmPassword')

# Links
t('auth.forgotPassword')      → t('auth.links.forgotPassword')
t('auth.alreadyHaveAccount')  → t('auth.links.alreadyHaveAccount')
t('auth.noAccount')           → t('auth.links.noAccount')

# Status
t('auth.createAccount')       → t('auth.status.creatingAccount')
t('auth.welcomeBack')         → t('auth.status.welcomeBack')
t('auth.getStarted')          → t('auth.status.getStarted')

# Validation Errors
t('auth.errors.emailRequired') → t('auth.errors.validation.emailRequired')
t('auth.errors.emailInvalid') → t('auth.errors.validation.emailInvalid')
t('auth.errors.passwordRequired') → t('auth.errors.validation.passwordRequired')
t('auth.errors.passwordTooShort') → t('auth.errors.validation.passwordTooShort')
t('auth.errors.passwordsNoMatch') → t('auth.errors.validation.passwordsNoMatch')

# Firebase Errors
t('auth.errors.emailInUse')   → t('auth.errors.firebase.emailInUse')
t('auth.errors.userNotFound') → t('auth.errors.firebase.userNotFound')
t('auth.errors.wrongPassword') → t('auth.errors.firebase.wrongPassword')
t('auth.errors.tooManyAttempts') → t('auth.errors.firebase.tooManyAttempts')
t('auth.errors.networkError') → t('auth.errors.firebase.networkError')
t('auth.errors.unknownError') → t('auth.errors.firebase.unknownError')

# Success Messages
t('auth.success.accountCreated') → t('auth.success.accountCreated')
t('auth.success.signedIn')    → t('auth.success.signedIn')
t('auth.success.signedOut')   → t('auth.success.signedOut')
```

### Resources Section (Most Complex)
```
# Page
t('resources.title')          → t('resources.page.title')
t('resources.subtitle')       → t('resources.page.subtitle')

# Search
t('resources.search')         → t('resources.search.label')
t('resources.searchPlaceholder') → t('resources.search.placeholder')

# Filters
t('resources.filter')         → t('resources.filters.filterBy')
t('resources.clearFilters')   → t('resources.filters.clearAll')

# Sections
t('resources.featured')       → t('resources.sections.featured')
t('resources.totalResources') → t('resources.sections.total')
t('resources.sections.concertVideos') → t('resources.sections.concertVideos.title')
t('resources.sections.concertVideosDescription') → t('resources.sections.concertVideos.description')

# Results
t('resources.showingResults') → t('resources.results.showing')
t('resources.noResults')      → t('resources.results.noResults')
t('resources.noResultsDescription') → t('resources.results.noResultsDescription')

# Categories (all remain under resources.categories.*)
# No changes needed for categories

# Difficulty (all remain under resources.difficulty.*)
# No changes needed for difficulty levels

# Labels (all remain under resources.labels.*)
# No changes needed for labels

# Actions (all remain under resources.actions.*)
# No changes needed for actions
```

## Regex Patterns for Advanced Find & Replace

If your editor supports regex, use these patterns:

### Common Section
```regex
Find:    t\('common\.(siteName|tagline|description)'\)
Replace: t('common.site.$1')

Find:    t\('common\.(home|about|library)'\)
Replace: t('common.navigation.$1')

Find:    t\('common\.(loading|error|language|switchLanguage)'\)
Replace: t('common.ui.$1')
```

### Navigation Section
```regex
Find:    t\('navigation\.(home|library|about|resources)'\)
Replace: t('navigation.main.$1')

Find:    t\('navigation\.(contact|donate|analyzer)'\)
Replace: t('navigation.secondary.$1')
```

### Donate Section
```regex
Find:    t\('donate\.(title|subtitle)'\)
Replace: t('donate.hero.$1')

Find:    t\('donate\.donateNow'\)
Replace: t('donate.actions.donateNow')
```

### Auth Section
```regex
Find:    t\('auth\.(signUp|logIn|signOut)'\)
Replace: t('auth.actions.$1')

Find:    t\('auth\.(email|password|confirmPassword)'\)
Replace: t('auth.fields.$1')

Find:    t\('auth\.errors\.(emailRequired|emailInvalid|passwordRequired|passwordTooShort|passwordsNoMatch)'\)
Replace: t('auth.errors.validation.$1')

Find:    t\('auth\.errors\.(emailInUse|userNotFound|wrongPassword|tooManyAttempts|networkError|unknownError)'\)
Replace: t('auth.errors.firebase.$1')
```

## Quick Testing Script

After making updates, you can quickly test if you missed any keys:

```bash
# Search for potential old translation keys
grep -r "t('common\.\(siteName\|tagline\|home\|loading\)'" src/
grep -r "t('navigation\.\(home\|donate\|contact\)'" src/
grep -r "t('auth\.\(signUp\|email\|password\)'" src/
grep -r "t('donate\.\(title\|subtitle\|donateNow\)'" src/
grep -r "t('resources\.\(title\|search\|filter\)'" src/

# Or search for all translation calls to manually verify
grep -rn "useTranslation\|t('" src/ | less
```

## VSCode Multi-Cursor Tips

1. Open VSCode search (Cmd+Shift+F on Mac, Ctrl+Shift+F on Windows)
2. Enable regex mode (.*) button
3. Use the patterns above
4. Click "Replace All" or review each replacement individually

## Expected Number of Replacements

Based on typical usage patterns, expect these approximate numbers:

- **common**: 50-100 replacements
- **auth**: 40-80 replacements
- **resources**: 30-60 replacements
- **navigation**: 20-40 replacements
- **donate**: 15-30 replacements
- **home**: 15-25 replacements
- **library**: 10-20 replacements
- **footer**: 10-20 replacements
- **about**: 8-15 replacements
- **errors**: 5-10 replacements
- **seo**: 5-10 replacements

**Total estimated**: 200-400 replacements across the entire codebase

## Verification After Migration

1. **Build the project**: `npm run build` should succeed
2. **Run in dev mode**: `npm run dev` and manually test pages
3. **Check browser console**: No translation warnings like `"Missing translation for key: ..."`
4. **Test language switching**: Switch between English and Esperanto to verify all translations load
5. **Run tests**: `npm test` to ensure no broken tests

## Rollback Plan

If issues arise, the original flat structure is preserved in git history:

```bash
# View the files before refactoring
git diff HEAD~1 src/i18n/locales/en.json
git diff HEAD~1 src/i18n/locales/eo.json

# Rollback if needed (before committing)
git checkout HEAD~1 -- src/i18n/locales/en.json src/i18n/locales/eo.json
```

---

**Last Updated**: September 19, 2025
**Related**: I18N_REFACTORING_COMPLETE.md
