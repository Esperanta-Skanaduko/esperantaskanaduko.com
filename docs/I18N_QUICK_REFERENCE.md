# Quick Reference: Adding i18n to Components

## Basic Usage

### 1. Import the hook
```typescript
import { useTranslation } from 'react-i18next';
```

### 2. Use in component
```typescript
const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.welcome')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
};
```

## Common Patterns

### Simple Text Replacement
```typescript
// Before
<h1>Welcome to Esperanta Skanaduko</h1>

// After
const { t } = useTranslation();
<h1>{t('home.welcome')}</h1>
```

### Button Text
```typescript
// Before
<button>Get Started</button>

// After
const { t } = useTranslation();
<button>{t('home.getStarted')}</button>
```

### Placeholder Text
```typescript
// Before
<input placeholder="Search books..." />

// After
const { t } = useTranslation();
<input placeholder={t('library.searchPlaceholder')} />
```

### Dynamic Content
```typescript
const { t } = useTranslation();
const count = 5;

// With interpolation (if needed)
<p>{count} {t('library.booksFound')}</p>
```

## Accessing Current Language

```typescript
const { i18n } = useTranslation();

// Get current language code
console.log(i18n.language); // 'en' or 'eo'

// Change language programmatically
i18n.changeLanguage('eo');
```

## Adding New Translation Keys

### 1. Add to en.json
```json
{
  "yourSection": {
    "newKey": "English translation"
  }
}
```

### 2. Add to eo.json
```json
{
  "yourSection": {
    "newKey": "Esperanto traduko"
  }
}
```

### 3. Use in component
```typescript
const { t } = useTranslation();
<p>{t('yourSection.newKey')}</p>
```

## Translation Key Naming Convention

Use descriptive, hierarchical keys:

✅ **Good:**
```json
{
  "library": {
    "search": {
      "placeholder": "Search books...",
      "button": "Search",
      "noResults": "No books found"
    }
  }
}
```

❌ **Avoid:**
```json
{
  "searchPlaceholder": "Search books...",
  "searchBtn": "Search",
  "noResults": "No books found"
}
```

## Examples from Existing Components

### Title Component (with line break handling)
```typescript
import { useTranslation } from 'react-i18next';

const Title = () => {
  const { t } = useTranslation();
  const titleText = t('common.siteName');
  const titleParts = titleText.split('\n');

  return (
    <h1>
      {titleParts.map((part, index) => (
        <span key={index}>
          {part}
          {index < titleParts.length - 1 && <br />}
        </span>
      ))}
    </h1>
  );
};
```

### Subtitle Component (simple usage)
```typescript
import { useTranslation } from 'react-i18next';

const Subtitle = () => {
  const { t } = useTranslation();

  return (
    <h2>
      {t('common.tagline')}
    </h2>
  );
};
```

### Language Switcher Component (with language change)
```typescript
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../../i18n/config';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div>
      <label>{t('common.language')}:</label>
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
          <option key={code} value={code}>
            {String(name)}
          </option>
        ))}
      </select>
    </div>
  );
};
```

## Testing Translations

### 1. Run dev server
```bash
npm run dev
```

### 2. Open browser
Navigate to http://localhost:5173/

### 3. Use language switcher
Toggle between English and Esperanto

### 4. Check localStorage
Open browser DevTools → Application → Local Storage → http://localhost:5173
Look for key: `i18nextLng`

## Troubleshooting

### Translation not showing
1. Check if key exists in both en.json and eo.json
2. Verify key path is correct: `t('section.subsection.key')`
3. Check console for i18next warnings
4. Make sure i18n config is imported in main.tsx

### Language not persisting
1. Check localStorage in DevTools
2. Verify LanguageDetector is configured in config.ts
3. Clear localStorage and test again

### TypeScript errors
1. Ensure json.d.ts exists in src/types/
2. Check that locale files are valid JSON
3. Restart TypeScript server (VS Code: Cmd+Shift+P → "Restart TypeScript Server")

## Available Translation Sections

Current translation keys available:

- `common.*` - Site-wide common text (siteName, tagline, navigation labels)
- `navigation.*` - Navigation menu items
- `home.*` - Homepage content (welcome, features, descriptions)
- `about.*` - About page content (mission, description)
- `library.*` - Library/search page content
- `footer.*` - Footer content (copyright, links, acknowledgments)
- `errors.*` - Error messages (404, generic errors)

## Best Practices

1. **Always add keys to both language files** (en.json and eo.json)
2. **Use descriptive key names** that indicate content purpose
3. **Group related keys** under common parent objects
4. **Keep translations short** when possible for UI elements
5. **Test both languages** after adding new translations
6. **Document special characters** like \n for line breaks

## Common Mistakes to Avoid

❌ Forgetting to add translation to both files
❌ Using hardcoded text instead of t() function
❌ Incorrect key path (typos in dot notation)
❌ Not importing useTranslation hook
❌ Missing i18n config import in main.tsx
