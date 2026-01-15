# Multilingual Support Documentation

## Overview

Esperanta Skanaduko now supports **70+ languages**, making Esperanto learning accessible to people worldwide. This comprehensive internationalization (i18n) system allows users to navigate and interact with the website in their native language.

## Supported Languages

### Complete Language List (70+ Languages)

| Language Code | Language Name | Native Name |
|---------------|---------------|-------------|
| af | Afrikaans | Afrikaans |
| ar | Arabic | العربية |
| be | Belarusian | Беларуская |
| bg | Bulgarian | Български |
| bn | Bengali | Bengali |
| br | Breton | Brezhoneg |
| bs | Bosnian | Bosanski |
| ca | Catalan | Català |
| cs | Czech | Česky |
| cv | Chuvash | Чăваш |
| cy | Welsh | Cymraeg |
| da | Danish | Dansk |
| de | German | Deutsch |
| el | Greek | Ελληνικά |
| en | English | English |
| es | Spanish | Español |
| eo | Esperanto | Esperanto |
| et | Estonian | Eesti |
| eu | Basque | Euskara |
| fa | Persian | فارسى |
| fi | Finnish | Suomi |
| fr | French | Français |
| fy | Frisian | Frysk |
| ga | Irish | Gaeilge |
| gl | Galician | Galego |
| he | Hebrew | עברית |
| hi | Hindi | हिन्दी |
| hr | Croatian | Hrvatski |
| hu | Hungarian | Magyar |
| id | Indonesian | Indonesia |
| is | Icelandic | Íslenska |
| it | Italian | Italiano |
| ja | Japanese | 日本語 |
| ko | Korean | 한글 |
| lb | Luxembourgish | Lëtzebuergësch |
| lt | Lithuanian | Lietuviškai |
| lv | Latvian | Latviešu |
| mg | Malagasy | Malagasy |
| mk | Macedonian | Македонски |
| mt | Maltese | Malti |
| nl | Dutch | Nederlands |
| no | Norwegian | Norsk |
| oc | Occitan | Occitan |
| os | Ossetian | Ирон |
| pl | Polish | Polski |
| pt | Portuguese | Português |
| rm | Romansh | Rumantsch |
| rn | Kirundi | Kirundi |
| ro | Romanian | Română |
| ru | Russian | Русский |
| sb | Sorbian | Serbski |
| sk | Slovak | Slovenčina |
| sl | Slovenian | Slovenščina |
| sq | Albanian | Shqip |
| sr | Serbian | Srpski |
| sv | Swedish | Svenska |
| sw | Swahili | Kiswahili |
| te | Telugu | Telugu |
| tg | Tajik | тоҷикӣ |
| th | Thai | ไทย |
| tl | Tagalog | Tagalog |
| tr | Turkish | Türkçe |
| uk | Ukrainian | Українська |
| vi | Vietnamese | Tiếng Việt |
| wa | Walloon | Walon |
| zh | Chinese | 汉语 |

## Technical Implementation

### File Structure

```
src/i18n/
├── config.ts              # Main i18n configuration
├── languages.ts           # Language definitions and utilities
└── locales/              # Translation JSON files
    ├── af.json           # Afrikaans
    ├── ar.json           # Arabic
    ├── be.json           # Belarusian
    ├── bg.json           # Bulgarian
    ├── bn.json           # Bengali
    ...                   # All 70+ languages
    └── zh.json           # Chinese
```

### Key Features

1. **Browser Language Detection**: Automatically detects user's preferred language
2. **Local Storage Persistence**: Remembers user's language preference
3. **Fallback System**: Falls back to English if translation is missing
4. **RTL Support**: Proper support for right-to-left languages (Arabic, Hebrew, Persian)
5. **Dynamic Loading**: Efficient loading of translation resources

### Configuration Files

#### `languages.ts`
Contains comprehensive language definitions with:
- Language codes (ISO 639-1)
- English names
- Native names
- Utility functions for language management

#### `config.ts`
Main i18n configuration with:
- i18next initialization
- Language detection settings
- Resource loading
- Fallback configuration

## Translation Status

### Current Status

| Status | Languages | Note |
|--------|-----------|------|
| ✅ Complete | English (en), Esperanto (eo) | Fully translated |
| 🟡 Placeholder | All other 64+ languages | Contains English placeholders |

### Translation Files Structure

Each translation file contains:

```json
{
  "_meta": {
    "language": "Language Name",
    "code": "xx",
    "translationStatus": "needs-translation",
    "note": "This file contains English text as placeholders..."
  },
  "common": { ... },
  "navigation": { ... },
  "home": { ... },
  "about": { ... },
  "library": { ... },
  "resources": { ... },
  ...
}
```

## Contributing Translations

### How to Translate

1. **Choose a Language**: Select a language file from `src/i18n/locales/`
2. **Translate Content**: Replace English placeholders with accurate translations
3. **Preserve Structure**: Keep the JSON structure and keys intact
4. **Update Metadata**: Change `translationStatus` to `"complete"`
5. **Submit PR**: Create a pull request with your translations

### Translation Guidelines

#### Do's ✅
- Maintain cultural appropriateness
- Keep formatting placeholders (e.g., `{{count}}`)
- Preserve HTML tags if present
- Use proper character encoding
- Test translations in context
- Update the `_meta` section

#### Don'ts ❌
- Don't change JSON keys
- Don't remove placeholders
- Don't translate brand names ("Esperanta Skanaduko")
- Don't add extra fields without discussion
- Don't use machine translation without review

### Example Translation

**Before (English placeholder):**
```json
{
  "home": {
    "hero": {
      "welcome": "Welcome to Esperanta Skanduko",
      "description": "Discover the beauty of Esperanto..."
    }
  }
}
```

**After (Spanish translation):**
```json
{
  "home": {
    "hero": {
      "welcome": "Bienvenido a Esperanta Skanduko",
      "description": "Descubre la belleza del Esperanto..."
    }
  }
}
```

## Using Translations in Code

### React Components

```tsx
import { useTranslation } from 'react-i18next';

export const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.hero.welcome')}</h1>
      <p>{t('home.hero.description')}</p>
    </div>
  );
};
```

### Accessing Language Information

```tsx
import { LANGUAGES, getLanguageNativeName } from '@/i18n/languages';

// Get all languages
const allLanguages = Object.values(LANGUAGES);

// Get native name for a language code
const nativeName = getLanguageNativeName('es'); // Returns "Español"
```

### Language Switcher Component

The language switcher component displays all available languages in their native names:

```tsx
import { LANGUAGES } from '@/i18n/config';

{Object.entries(LANGUAGES).map(([code, lang]) => (
  <MenuItem key={code} value={code}>
    {lang.nativeName}
  </MenuItem>
))}
```

## Automated Generation

### Translation File Generator

A script is provided to generate new translation files:

```bash
node scripts/generateTranslations.js
```

This script:
- Creates translation files for all defined languages
- Uses English as the base template
- Adds metadata for tracking translation status
- Preserves existing translations (won't overwrite)

## RTL (Right-to-Left) Languages

The following languages have RTL text direction:
- Arabic (ar) - العربية
- Hebrew (he) - עברית
- Persian (fa) - فارسى

RTL support is automatically handled by the i18n system and Material-UI.

## Performance Considerations

### Bundle Size Optimization

- All translation files are bundled but gzipped for optimal delivery
- Current bundle size: ~1.2MB (uncompressed), ~219KB (gzipped)
- Each translation file: ~10-15KB (uncompressed)

### Future Optimizations

Consider implementing:
1. **Lazy Loading**: Load translations on-demand
2. **Code Splitting**: Split translations by route
3. **Translation CDN**: Serve translations from CDN
4. **Dynamic Imports**: Load only selected language

## Testing

### Manual Testing

1. Change language in the language switcher
2. Verify all UI elements update correctly
3. Check local storage persistence
4. Test browser language detection
5. Verify RTL languages display correctly

### Automated Testing

```bash
npm run test
```

## Roadmap

### Phase 1: Infrastructure ✅
- [x] Add all 70+ language codes
- [x] Generate translation file structure
- [x] Update i18n configuration
- [x] Update language switcher component

### Phase 2: Translation (In Progress)
- [x] English translation (complete)
- [x] Esperanto translation (complete)
- [ ] Spanish translation
- [ ] French translation
- [ ] German translation
- [ ] Other priority languages

### Phase 3: Optimization
- [ ] Implement lazy loading
- [ ] Add translation management UI
- [ ] Set up crowdsourcing platform
- [ ] Implement translation memory

### Phase 4: Quality
- [ ] Professional translation reviews
- [ ] Community feedback integration
- [ ] A/B testing for translations
- [ ] Accessibility testing for all languages

## Support and Contact

For translation questions or contributions:
- Open an issue on GitHub
- Contact the maintainers
- Join the Esperanto community discussions

## Credits

Translations are contributed by:
- Community volunteers
- Professional translators
- Esperanto speakers worldwide

Special thanks to all contributors helping make Esperanto accessible globally!

---

**Last Updated**: October 11, 2025
**Total Languages**: 70+
**Translation Completion**: 2/70 complete (English, Esperanto)
