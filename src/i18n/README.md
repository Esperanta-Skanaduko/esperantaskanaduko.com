# Internationalization (i18n) Directory

This directory contains all internationalization configuration and translation files for the Esperanto learning website.

## 📁 Directory Structure

```
src/i18n/
├── README.md                 ← You are here
├── config.ts                 ← i18next configuration and initialization
├── languages.ts              ← Language definitions and utilities
└── locales/                  ← Translation files (JSON)
    ├── en.json               ← English (complete)
    ├── eo.json               ← Esperanto (complete)
    ├── es.json               ← Spanish (needs translation)
    ├── fr.json               ← French (needs translation)
    ├── de.json               ← German (needs translation)
    └── ... (61 more languages)
```

## 🌍 Supported Languages

**Total**: 70+ languages
**Fully Translated**: 2 (English, Esperanto)
**Awaiting Translation**: 64 languages

See [TRANSLATION_PROGRESS.md](../../../TRANSLATION_PROGRESS.md) for complete list and status.

## 📖 Quick Start

### For Developers

1. **Import translation hook in component**:
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('navigation.home')}</h1>;
}
```

2. **Access current language**:
```tsx
const { i18n } = useTranslation();
console.log(i18n.language); // 'en', 'eo', 'es', etc.
```

3. **Change language programmatically**:
```tsx
i18n.changeLanguage('es');
```

### For Translators

1. **Choose a language** from [TRANSLATION_PROGRESS.md](../../../TRANSLATION_PROGRESS.md)
2. **Read** [TRANSLATION_GUIDE.md](../../../TRANSLATION_GUIDE.md)
3. **Edit** the appropriate JSON file in `locales/`
4. **Submit** a pull request

## 📄 File Descriptions

### config.ts

**Purpose**: Configures and initializes i18next library
**What it does**:
- Imports all 66 translation files
- Sets up language detection (browser, localStorage)
- Configures fallback languages
- Defines supported languages
- Exports language utilities

**Key exports**:
```typescript
export { LANGUAGES };           // Language definitions
export type { SupportedLanguage }; // TypeScript type
```

**When to modify**:
- Adding a new translation file
- Changing fallback behavior
- Updating i18next configuration

### languages.ts

**Purpose**: Central language definition system
**What it contains**:
- Language code mappings
- Native language names
- Utility functions for language operations

**Key exports**:
```typescript
export const LANGUAGES;                    // All language definitions
export const getLanguageNativeName();      // Get native name by code
export const getLanguageName();            // Get English name by code
export const isLanguageSupported();        // Check if language exists
export const getAllLanguageCodes();        // Get array of all codes
export const getAllLanguages();            // Get all language objects
```

**Example usage**:
```typescript
import { LANGUAGES, getLanguageNativeName } from './languages';

console.log(LANGUAGES.es.nativeName);     // "Español"
console.log(getLanguageNativeName('ja')); // "日本語"
```

**When to modify**:
- Adding a new language
- Updating language names
- Adding new utility functions

### locales/*.json

**Purpose**: Translation content for each language
**Format**: JSON with nested namespaces

**Structure**:
```json
{
  "_meta": {
    "language": "Spanish",
    "code": "es",
    "translationStatus": "needs-translation",
    "note": "English placeholders - needs human translation"
  },
  "common": {
    "language": "Language",
    "loading": "Loading...",
    "error": "Error"
  },
  "navigation": {
    "home": "Home",
    "about": "About"
  }
}
```

**Namespaces**:
- `_meta`: File metadata (don't translate)
- `common`: Common UI elements
- `navigation`: Navigation menu items
- `home`: Homepage content
- `about`: About page content
- `library`: Library page content
- `resources`: Resources page content
- `auth`: Authentication flows
- `seo`: SEO metadata

**When to modify**:
- Translating content to a new language
- Adding new translation keys
- Updating existing translations

## 🔧 Common Tasks

### Add a New Translation Key

1. **Add to English file** (`en.json`):
```json
{
  "common": {
    "newKey": "New Value"
  }
}
```

2. **Regenerate all files**:
```bash
cd ../../..  # Go to project root
node scripts/generateTranslations.js
```

3. **Verify**:
```bash
grep "newKey" locales/*.json
```

### Translate a Language

1. **Open language file**:
```bash
code locales/es.json  # Or any language code
```

2. **Translate all values**:
```json
{
  "common": {
    "language": "Idioma",    // ← Translate this
    "loading": "Cargando...", // ← And this
    "error": "Error"          // ← And this
  }
}
```

3. **Update metadata**:
```json
{
  "_meta": {
    "translationStatus": "complete",  // ← Change to "complete"
    "translator": "Your Name",        // ← Add your name
    "lastUpdated": "2025-01-19"      // ← Add date
  }
}
```

4. **Test locally**:
```bash
cd ../../..  # Go to project root
npm run dev
# Open http://localhost:5173
# Change language to your translated language
# Verify all text appears correctly
```

### Check Translation Status

```bash
# From this directory (src/i18n/)

# Count translated files
grep -l '"translationStatus": "complete"' locales/*.json | wc -l

# List languages needing translation
grep -l '"translationStatus": "needs-translation"' locales/*.json

# Check specific language status
grep "translationStatus" locales/es.json
```

## 🎨 Translation Guidelines

### Do's ✅

- **Keep JSON structure intact**
- **Translate values, not keys**
- **Use proper grammar and spelling**
- **Maintain formatting** (bold, italics, links)
- **Respect cultural context**
- **Test your translation** before submitting
- **Update metadata** when complete

### Don'ts ❌

- **Don't translate keys** (left side of colon)
- **Don't break JSON syntax**
- **Don't use machine translation only**
- **Don't translate the `_meta` object values**
- **Don't translate Esperanto terms** (keep "saluton", "dankon", etc.)
- **Don't forget to test** your translation

### Example

❌ **Wrong**:
```json
{
  "inicio": "Inicio"  // Don't translate the key!
}
```

✅ **Correct**:
```json
{
  "home": "Inicio"    // Translate only the value
}
```

## 🌐 Special Considerations

### RTL Languages

For right-to-left languages (Arabic, Hebrew, Persian):
- Text direction is **automatically handled**
- Test UI layout carefully
- Verify buttons and icons don't break

**Languages affected**:
- `ar` - Arabic (العربية)
- `he` - Hebrew (עברית)
- `fa` - Persian (فارسى)

### Asian Languages

For Asian languages (Chinese, Japanese, Korean, Thai):
- Use **UTF-8 encoding** (already configured)
- Font rendering may vary by system
- Test on multiple devices and browsers
- Line breaking may differ from Latin scripts

**Languages affected**:
- `zh` - Chinese (汉语)
- `ja` - Japanese (日本語)
- `ko` - Korean (한글)
- `th` - Thai (ไทย)
- `hi` - Hindi (हिन्दी)
- `bn` - Bengali
- `te` - Telugu

### Esperanto-Specific Content

When translating Esperanto learning content:
- Keep Esperanto words in **Esperanto** (don't translate "saluton" to "hello")
- Translate **explanations** of Esperanto concepts
- Maintain **educational value** and clarity
- Use **simple language** for beginners

**Example**:
```json
{
  "greeting": "In Esperanto, you say 'saluton' for hello"
  // In Spanish: "En esperanto, se dice 'saluton' para hola"
  // Keep 'saluton' in Esperanto!
}
```

## 🧪 Testing Your Translation

### Local Testing

1. **Start dev server**:
```bash
cd ../../..  # Project root
npm run dev
```

2. **Open browser**: http://localhost:5173

3. **Change language**: Use language selector in navigation

4. **Check**:
   - ✅ All text shows in your language
   - ✅ No English fallbacks
   - ✅ Formatting intact (bold, links, etc.)
   - ✅ No broken UI elements
   - ✅ Special characters display correctly
   - ✅ RTL layout works (if applicable)

### Validation

```bash
# From project root

# Validate JSON syntax
node -e "JSON.parse(require('fs').readFileSync('src/i18n/locales/es.json'))"

# Type check
npx tsc --noEmit

# Build test
npm run build
```

## 📚 Resources

### Documentation

- **TRANSLATION_GUIDE.md**: Complete translation instructions
- **MULTILINGUAL_SUPPORT.md**: Technical implementation details
- **TRANSLATION_PROGRESS.md**: Track translation status
- **COMMAND_REFERENCE.md**: Useful commands

### Tools

- **JSON Editor**: https://jsoneditoronline.org/
- **Language Tool**: https://languagetool.org/ (grammar check)
- **Google Translate**: For reference only (don't copy directly!)

### Getting Help

- **GitHub Issues**: Tag with "translation" label
- **Documentation**: Read guides in project root
- **Questions**: Create a discussion on GitHub

## 🏆 Recognition

Contributors who translate one or more languages will be:
- Listed in **TRANSLATION_PROGRESS.md**
- Credited in **_meta** object of translation file
- Featured in project **README.md**
- Recognized in **release notes**

## 📊 Statistics

```
Directory Size:        ~2 MB (uncompressed)
Gzipped Size:          ~220 KB
Total Files:           66 JSON files
Translation Keys:      ~150 per file
Total Translations:    ~10,000 strings (when complete)
```

## 🚀 Next Steps

### For New Contributors

1. Read [TRANSLATION_GUIDE.md](../../../TRANSLATION_GUIDE.md)
2. Check [TRANSLATION_PROGRESS.md](../../../TRANSLATION_PROGRESS.md)
3. Choose a language to translate
4. Create a GitHub issue to claim it
5. Start translating!

### For Developers

1. Read [MULTILINGUAL_SUPPORT.md](../../../MULTILINGUAL_SUPPORT.md)
2. Understand the i18next setup in `config.ts`
3. Use translation hooks in components
4. Add new translation keys as needed
5. Maintain backward compatibility

## 📞 Contact

Questions about the i18n implementation?

- **Technical**: Create GitHub issue with "i18n" label
- **Translation**: Create issue with "translation" label
- **Bugs**: Create issue with "bug" and "i18n" labels

---

**Maintained by**: Victor Williams (@Vaporjawn)
**Last Updated**: January 2025
**Status**: Production Ready

---

*Thank you for helping make Esperanto accessible worldwide! 🌍*
