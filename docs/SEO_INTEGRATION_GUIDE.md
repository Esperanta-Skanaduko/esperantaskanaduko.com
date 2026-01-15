# SEO Integration Guide

## Quick Reference for Adding SEO to Remaining Pages

This guide provides step-by-step instructions for integrating the SEO component into the remaining pages (Homepage, Library, About, Donate, Concert Videos).

---

## ✅ ResourcePage Example (Completed)

The ResourcePage implementation serves as the template for all other pages. Here's what was done:

### 1. Import Required Modules
```typescript
import { useTranslation } from 'react-i18next';
import { SEO } from '../../../components/SEO';
```

### 2. Add Translation Hook
```typescript
const ComponentName: React.FC = () => {
  const { t } = useTranslation();
  // ... rest of component
```

### 3. Create Structured Data Object
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: t('seo.resources.title'),
  description: t('seo.resources.description'),
  url: 'https://esperantaskanaduko.com/resources',
  inLanguage: ['en', 'eo'],
  // ... additional schema properties
};
```

### 4. Wrap Return Statement in Fragment
```typescript
return (
  <>
    <SEO
      title={t('seo.resources.title')}
      description={t('seo.resources.description')}
      keywords={[/* array of keywords */]}
      canonical="https://esperantaskanaduko.com/resources"
      type="website"
    />
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
    <Container maxWidth="xl">
      {/* Existing page content */}
    </Container>
  </>
);
```

---

## 📋 Remaining Pages Implementation Checklist

### 1. Homepage (`/src/frontend/pages/homePage.tsx`)

**i18n Metadata** (Already Added):
```json
"seo": {
  "home": {
    "title": "Esperanta Skanaduko - Learn Esperanto Online",
    "description": "Your comprehensive hub for learning Esperanto...",
    "keywords": "learn Esperanto, Esperanto learning, international language..."
  }
}
```

**Implementation Steps**:

**Step 1**: Add imports at the top of homePage.tsx
```typescript
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO';
```

**Step 2**: Add translation hook inside component
```typescript
const HomePage: React.FC = () => {
  const { t } = useTranslation();
  // ... existing code
```

**Step 3**: Create structured data
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Esperanta Skanaduko',
  description: t('seo.home.description'),
  url: 'https://esperantaskanaduko.com',
  inLanguage: ['en', 'eo'],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://esperantaskanaduko.com/resources?search={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  author: {
    '@type': 'Person',
    name: 'Victor Williams',
    url: 'https://github.com/Vaporjawn'
  }
};
```

**Step 4**: Wrap return in fragment with SEO
```typescript
return (
  <>
    <SEO
      title={t('seo.home.title')}
      description={t('seo.home.description')}
      keywords={[
        'learn Esperanto',
        'Esperanto learning',
        'international language',
        'constructed language',
        'language learning platform',
        'Esperanto resources',
        'Esperanto community',
        'Esperanto online'
      ]}
      canonical="https://esperantaskanaduko.com/"
      type="website"
    />
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
    {/* Existing page content */}
  </>
);
```

**Estimated Time**: 15-20 minutes

---

### 2. Library Page (`/src/frontend/pages/library/LibraryPage.tsx`)

**i18n Metadata** (Already Added):
```json
"seo": {
  "library": {
    "title": "Esperanto Library - Books & Reading Materials",
    "description": "Browse our curated collection of Esperanto books...",
    "keywords": "Esperanto books, Esperanto library, Esperanto reading..."
  }
}
```

**Implementation Steps**:

**Step 1**: Add imports
```typescript
import { useTranslation } from 'react-i18next';
import { SEO } from '../../../components/SEO';
```

**Step 2**: Add translation hook
```typescript
const LibraryPage: React.FC = () => {
  const { t } = useTranslation();
  // ... existing code
```

**Step 3**: Create structured data
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: t('seo.library.title'),
  description: t('seo.library.description'),
  url: 'https://esperantaskanaduko.com/library',
  inLanguage: ['en', 'eo'],
  mainEntity: {
    '@type': 'ItemList',
    name: 'Esperanto Books Collection',
    description: 'Curated collection of Esperanto literature',
    // Add numberOfItems if you have access to resources array
    // numberOfItems: resources.length
  }
};
```

**Step 4**: Wrap return with SEO
```typescript
return (
  <>
    <SEO
      title={t('seo.library.title')}
      description={t('seo.library.description')}
      keywords={[
        'Esperanto books',
        'Esperanto library',
        'Esperanto reading',
        'Esperanto literature',
        'learn Esperanto reading',
        'Esperanto novels',
        'Esperanto authors',
        'free Esperanto books'
      ]}
      canonical="https://esperantaskanaduko.com/library"
      type="website"
    />
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
    {/* Existing page content */}
  </>
);
```

**Estimated Time**: 15-20 minutes

---

### 3. Concert Videos Page (`/src/frontend/pages/library/EsperantoLiveConcertVideosPage.tsx`)

**i18n Metadata** (Already Added):
```json
"seo": {
  "concerts": {
    "title": "Esperanto Live Concert Videos",
    "description": "Watch live performances from Esperanto musicians worldwide...",
    "keywords": "Esperanto music, Esperanto concerts, Esperanto musicians..."
  }
}
```

**Implementation Steps**:

**Step 1**: Add imports
```typescript
import { useTranslation } from 'react-i18next';
import { SEO } from '../../../components/SEO';
```

**Step 2**: Add translation hook
```typescript
const EsperantoLiveConcertVideosPage: React.FC = () => {
  const { t } = useTranslation();
  // ... existing code
```

**Step 3**: Create structured data
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: t('seo.concerts.title'),
  description: t('seo.concerts.description'),
  url: 'https://esperantaskanaduko.com/library/esperanto-live-concert-videos',
  inLanguage: ['en', 'eo'],
  mainEntity: {
    '@type': 'VideoGallery',
    name: 'Esperanto Live Concert Videos',
    description: 'Collection of live music performances in Esperanto',
    // Add numberOfItems if you have access to videos array
    // numberOfItems: videos.length
  }
};
```

**Step 4**: Wrap return with SEO
```typescript
return (
  <>
    <SEO
      title={t('seo.concerts.title')}
      description={t('seo.concerts.description')}
      keywords={[
        'Esperanto music',
        'Esperanto concerts',
        'Esperanto musicians',
        'Esperanto culture',
        'live music',
        'Esperanto performers',
        'world music',
        'Esperanto songs'
      ]}
      canonical="https://esperantaskanaduko.com/library/esperanto-live-concert-videos"
      type="website"
    />
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
    {/* Existing page content */}
  </>
);
```

**Estimated Time**: 15-20 minutes

---

### 4. About Page (`/src/frontend/pages/about/aboutPage.tsx`)

**First: Add i18n Metadata** (Not yet added):

**Edit `/src/i18n/locales/en.json`**:
```json
"seo": {
  "about": {
    "title": "About Esperanta Skanaduko - Mission & Vision",
    "description": "Learn about Esperanta Skanaduko's mission to promote Esperanto learning through comprehensive resources and community building. Discover our vision for the international language.",
    "keywords": "about Esperanto, Esperanto mission, language learning platform, international language community, Esperanto education, constructed language, Victor Williams"
  }
}
```

**Edit `/src/i18n/locales/eo.json`**:
```json
"seo": {
  "about": {
    "title": "Pri Esperanta Skanaduko - Misio kaj Vizio",
    "description": "Lernu pri la misio de Esperanta Skanaduko promocii Esperantan lernadon per ampleksaj rimedoj kaj komunuma konstruado. Malkovru nian vizion por la internacia lingvo.",
    "keywords": "pri Esperanto, Esperanta misio, lingvolerna platformo, internacia lingva komunumo, Esperanta edukado, konstruita lingvo, Victor Williams"
  }
}
```

**Then: Implement SEO**:

**Step 1**: Add imports
```typescript
import { useTranslation } from 'react-i18next';
import { SEO } from '../../../components/SEO';
```

**Step 2**: Add translation hook
```typescript
const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  // ... existing code
```

**Step 3**: Create structured data
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: t('seo.about.title'),
  description: t('seo.about.description'),
  url: 'https://esperantaskanaduko.com/about',
  inLanguage: ['en', 'eo'],
  author: {
    '@type': 'Person',
    name: 'Victor Williams',
    url: 'https://github.com/Vaporjawn'
  },
  about: {
    '@type': 'Organization',
    name: 'Esperanta Skanaduko',
    description: 'Platform for learning Esperanto online',
    url: 'https://esperantaskanaduko.com'
  }
};
```

**Step 4**: Wrap return with SEO
```typescript
return (
  <>
    <SEO
      title={t('seo.about.title')}
      description={t('seo.about.description')}
      keywords={[
        'about Esperanto',
        'Esperanto mission',
        'language learning platform',
        'international language community',
        'Esperanto education',
        'constructed language',
        'Victor Williams',
        'Esperanto vision'
      ]}
      canonical="https://esperantaskanaduko.com/about"
      type="website"
    />
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
    {/* Existing page content */}
  </>
);
```

**Estimated Time**: 25-30 minutes (includes i18n metadata creation)

---

### 5. Donate Page (`/src/frontend/pages/DonatePage.tsx`)

**First: Add i18n Metadata** (Not yet added):

**Edit `/src/i18n/locales/en.json`**:
```json
"seo": {
  "donate": {
    "title": "Support Esperanta Skanaduko - Donate",
    "description": "Support our mission to provide free Esperanto learning resources. Your donation helps maintain and expand our comprehensive collection of materials for learners worldwide.",
    "keywords": "donate Esperanto, support Esperanto learning, Esperanto funding, language education donation, support language learning, nonprofit Esperanto"
  }
}
```

**Edit `/src/i18n/locales/eo.json`**:
```json
"seo": {
  "donate": {
    "title": "Subtenu Esperantan Skanaduko - Donaci",
    "description": "Subtenu nian mision provizi senpagajn Esperantajn lernrimedojn. Via donaco helpas daŭrigi kaj vastigi nian ampleksan kolekton de materialoj por lernantoj tutmonde.",
    "keywords": "donaci Esperanton, subteni Esperantan lernadon, Esperanta financado, lingvoeduka donaco, subteni lingvolernadon, senprofit-organizo Esperanto"
  }
}
```

**Then: Implement SEO**:

**Step 1**: Add imports
```typescript
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO';
```

**Step 2**: Add translation hook
```typescript
const DonatePage: React.FC = () => {
  const { t } = useTranslation();
  // ... existing code
```

**Step 3**: Create structured data
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: t('seo.donate.title'),
  description: t('seo.donate.description'),
  url: 'https://esperantaskanaduko.com/donate',
  inLanguage: ['en', 'eo'],
  about: {
    '@type': 'Organization',
    name: 'Esperanta Skanaduko',
    description: 'Platform providing free Esperanto learning resources',
    url: 'https://esperantaskanaduko.com'
  }
};
```

**Step 4**: Wrap return with SEO
```typescript
return (
  <>
    <SEO
      title={t('seo.donate.title')}
      description={t('seo.donate.description')}
      keywords={[
        'donate Esperanto',
        'support Esperanto learning',
        'Esperanto funding',
        'language education donation',
        'support language learning',
        'nonprofit Esperanto',
        'contribute to Esperanto'
      ]}
      canonical="https://esperantaskanaduko.com/donate"
      type="website"
    />
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
    {/* Existing page content */}
  </>
);
```

**Estimated Time**: 25-30 minutes (includes i18n metadata creation)

---

## 🔧 Common Issues & Solutions

### Issue 1: Fragment Errors
**Problem**: "JSX fragment has no corresponding closing tag"

**Solution**: Always ensure you have matching `<>` and `</>` tags:
```typescript
return (
  <>
    <SEO ... />
    <script>...</script>
    <Container>...</Container>
  </>  // ← Don't forget this!
);
```

### Issue 2: Translation Key Not Found
**Problem**: `t('seo.page.title')` returns the key string instead of translation

**Solution**:
1. Verify the key exists in both `en.json` and `eo.json`
2. Check for typos in the key path
3. Restart dev server to reload i18n files

### Issue 3: Structured Data Errors
**Problem**: JSON-LD script shows errors in Google Rich Results Test

**Solution**:
1. Validate JSON syntax (use `JSON.stringify()` to ensure valid JSON)
2. Check Schema.org documentation for required properties
3. Use Google Rich Results Test to identify specific errors

### Issue 4: Variable Reference Errors
**Problem**: `Cannot find name 'searchTerm'` or similar

**Solution**:
1. Check that state variable names match usage
2. Use consistent naming (e.g., `searchQuery` everywhere or `searchTerm` everywhere)
3. If changing variable names, update ALL references

---

## ✅ Implementation Verification Checklist

After implementing SEO on each page:

- [ ] **Build succeeds**: `npm run build` completes without errors
- [ ] **No TypeScript errors**: Check with `get_errors` tool
- [ ] **Meta tags render**: View page source and verify `<title>`, `<meta>` tags present
- [ ] **Structured data valid**: Test with Google Rich Results Test
- [ ] **i18n works**: Switch language and verify translations load
- [ ] **Canonical URL correct**: Check canonical tag points to right URL
- [ ] **Keywords present**: Verify keywords meta tag includes relevant terms

---

## 📊 SEO Component Props Reference

### Required Props
- `title` (string): Page title (will append " | Esperanta Skanaduko")
- `description` (string): Meta description (150-160 characters optimal)

### Optional Props
- `keywords` (string[]): Array of SEO keywords
- `canonical` (string): Canonical URL for duplicate content prevention
- `image` (string): Open Graph image URL (1200x630px recommended)
- `type` ('website' | 'article' | 'profile'): Open Graph type
- `twitterCard` ('summary' | 'summary_large_image' | 'app' | 'player'): Twitter Card type
- `article` (object): Article metadata (publishedTime, modifiedTime, author, section, tags)
- `meta` (Array<{name?, property?, content}>): Custom meta tags
- `lang` (string): Language override (defaults to current i18n language)

### Default Values
```typescript
{
  type: 'website',
  twitterCard: 'summary_large_image',
  keywords: [
    'Esperanto',
    'learn Esperanto',
    'Esperanto learning',
    'language learning',
    'constructed language',
    'international language'
  ]
}
```

---

## 🎯 Keyword Strategy Guide

### Homepage Keywords
Focus on broad, informational terms:
- learn Esperanto
- Esperanto learning
- international language
- language learning platform
- Esperanto community
- Esperanto online

### Resource Pages Keywords
Focus on specific content types:
- Esperanto [content type] (e.g., "Esperanto books", "Esperanto music")
- learn Esperanto [method] (e.g., "learn Esperanto online", "learn Esperanto grammar")
- Esperanto [skill level] (e.g., "Esperanto beginners", "Esperanto advanced")

### Informational Pages Keywords
Focus on organizational/mission terms:
- about Esperanto
- Esperanto mission
- support Esperanto
- donate to Esperanto
- Esperanto education

---

## 🚀 Next Steps After All Pages Complete

1. **Submit Sitemap to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools

2. **Validate All Pages**:
   - Google Rich Results Test
   - Facebook Sharing Debugger
   - Twitter Card Validator

3. **Monitor Performance**:
   - Set up Google Search Console
   - Track keyword rankings
   - Monitor organic traffic growth

4. **Optimize Based on Data**:
   - Review search console queries
   - Update meta descriptions based on CTR
   - Adjust keywords based on actual search terms

---

**Total Estimated Time for All Remaining Pages**: 2-3 hours

**Recommended Order**:
1. Homepage (most important, highest traffic)
2. Library (already has i18n metadata)
3. Concert Videos (already has i18n metadata)
4. About (needs i18n metadata first)
5. Donate (needs i18n metadata first)

---

**Created**: October 11, 2025
**Last Updated**: October 11, 2025
**Author**: Victor Williams (@Vaporjawn)
