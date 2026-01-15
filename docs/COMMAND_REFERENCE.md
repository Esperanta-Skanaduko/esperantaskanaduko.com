# Quick Command Reference

## Essential Commands for Multilingual Website

This guide provides all the commands you need to work with the multilingual implementation.

---

## 🚀 Development

### Start Development Server

```bash
npm run dev
```

**What it does**: Starts Vite dev server at `http://localhost:5173`
**When to use**: Daily development work
**Output**: "VITE ready in [X]ms"

### Build for Production

```bash
npm run build
```

**What it does**: Creates optimized production build in `dist/`
**When to use**: Before deployment
**Output**: Build time, bundle sizes, chunk analysis
**Expected**: ~3-4 seconds, ~1.2MB uncompressed, ~219KB gzipped

### Preview Production Build

```bash
npm run preview
```

**What it does**: Serves production build locally
**When to use**: Test production build before deployment
**Output**: Preview server URL

---

## 🔧 TypeScript

### Type Check

```bash
npx tsc --noEmit
```

**What it does**: Checks TypeScript without building
**When to use**: Before committing code
**Expected Output**: No errors (silence = success)

### Watch Mode

```bash
npx tsc --noEmit --watch
```

**What it does**: Continuous type checking
**When to use**: During active development

---

## 🌍 Translation Management

### Generate New Translation Files

```bash
node scripts/generateTranslations.js
```

**What it does**: Creates translation files for all languages
**When to use**:
- Initial setup (already done)
- Adding new translation keys to all languages
- Recovering deleted translation files

**Output**:
```
✓ Created af.json
✓ Created ar.json
...
✓ Translation generation complete!
✓ Created 64 new translation files
✓ Skipped 2 existing files (en, eo)
✓ Total files: 66
```

**Note**: Won't overwrite existing files

### Verify Translation Files

```bash
# Count translation files
ls -1 src/i18n/locales/*.json | wc -l
# Should output: 66

# List all translation files
ls src/i18n/locales/

# Check specific language file
cat src/i18n/locales/es.json | head -20
```

### Validate JSON Syntax

```bash
# Single file
node -e "JSON.parse(require('fs').readFileSync('src/i18n/locales/es.json'))"

# All files
for file in src/i18n/locales/*.json; do
  echo "Checking $file..."
  node -e "JSON.parse(require('fs').readFileSync('$file'))"
done
```

**Expected**: No output means valid JSON
**Error**: Syntax error message with line number

---

## 🧪 Testing

### Run All Tests

```bash
npm test
```

**What it does**: Runs Jest test suite
**When to use**: Before committing, after changes

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

**What it does**: Re-runs tests on file changes
**When to use**: During active development

### Run Tests with Coverage

```bash
npm test -- --coverage
```

**What it does**: Generates coverage report
**Output**: Coverage table + HTML report in `coverage/`

---

## 🔍 Code Quality

### Lint Code

```bash
npm run lint
```

**What it does**: Runs ESLint on all files
**When to use**: Before committing
**Expected**: Warnings about console.logs are OK in scripts

### Format Code

```bash
npm run format
# or
npx prettier --write "src/**/*.{ts,tsx,json}"
```

**What it does**: Formats code with Prettier
**When to use**: Before committing

---

## 📦 Package Management

### Install Dependencies

```bash
npm install
```

**When to use**:
- Initial setup
- After pulling new code
- After package.json changes

### Check for Updates

```bash
npm outdated
```

**What it does**: Shows outdated packages

### Update Dependencies

```bash
npm update
```

**What it does**: Updates packages within semver range

---

## 🐛 Debugging

### Check for Errors

In browser console:
```javascript
// Check current language
i18n.language

// Check available languages
Object.keys(i18n.services.resourceStore.data)

// Get translation
i18n.t('navigation.home')

// Change language
i18n.changeLanguage('es')
```

### Verify Language Files Loaded

Browser DevTools → Network tab:
- Filter by "locale" or "json"
- Should see requests for language files
- Check response content

### Debug Translation Keys

```typescript
// In any component
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();

  console.log('Current language:', i18n.language);
  console.log('Translation:', t('some.key'));
  console.log('All languages:', i18n.languages);

  return <div>{t('some.key')}</div>;
}
```

---

## 🗂️ File Operations

### Find Translation Keys

```bash
# Search for specific translation key
grep -r "navigation.home" src/i18n/locales/

# Count total translation keys
cat src/i18n/locales/en.json | grep -c '":"'

# Find untranslated keys (still in English)
grep -A 2 '"translationStatus": "needs-translation"' src/i18n/locales/*.json
```

### Backup Translation Files

```bash
# Create backup
tar -czf translations-backup-$(date +%Y%m%d).tar.gz src/i18n/locales/

# Restore from backup
tar -xzf translations-backup-20250119.tar.gz
```

### Compare Translation Files

```bash
# Compare two language files
diff src/i18n/locales/en.json src/i18n/locales/es.json

# Show only differences
diff --side-by-side src/i18n/locales/en.json src/i18n/locales/es.json | grep '|'
```

---

## 🚢 Deployment

### Pre-Deployment Checklist

```bash
# 1. Type check
npx tsc --noEmit

# 2. Run tests
npm test

# 3. Lint code
npm run lint

# 4. Build production
npm run build

# 5. Preview build
npm run preview

# 6. Check build size
ls -lh dist/assets/
```

### Deploy to GitHub Pages

```bash
npm run build
# Then follow your hosting platform's deployment instructions
```

### Environment Variables

Create `.env.local`:
```
VITE_API_URL=your-api-url
VITE_FIREBASE_CONFIG=your-firebase-config
```

**Note**: Never commit `.env.local`

---

## 📊 Analytics

### Check Bundle Size

```bash
npm run build

# Detailed analysis
npx vite-bundle-visualizer
```

### Analyze Translation File Sizes

```bash
# Individual file sizes
ls -lh src/i18n/locales/

# Total size
du -sh src/i18n/locales/

# Largest files
du -h src/i18n/locales/*.json | sort -rh | head -10
```

---

## 🆘 Common Issues

### Issue: "Module not found" error

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors after update

```bash
# Rebuild TypeScript cache
rm -rf dist
npx tsc --noEmit
```

### Issue: Translation not showing

```bash
# 1. Check file exists
ls src/i18n/locales/[language-code].json

# 2. Verify import in config.ts
grep "[language-code]" src/i18n/config.ts

# 3. Clear browser cache
# DevTools → Application → Clear Storage
```

### Issue: Build warnings about chunk size

**Solution**: This is expected with 70+ translation files. Future optimization:

```bash
# TODO: Implement lazy loading
# See MULTILINGUAL_SUPPORT.md section on performance
```

---

## 📝 Git Commands

### Create Translation Branch

```bash
git checkout -b translation/spanish
```

### Commit Translation

```bash
git add src/i18n/locales/es.json
git commit -m "feat: Add Spanish translation"
git push origin translation/spanish
```

### Check Changed Files

```bash
git status
git diff src/i18n/locales/
```

---

## 🔗 Quick Links

### File Locations

```bash
# Language definitions
src/i18n/languages.ts

# i18n configuration
src/i18n/config.ts

# Translation files
src/i18n/locales/*.json

# Language selector component
src/frontend/components/languageSwitcher/languageSwitcher.tsx

# Translation generator script
scripts/generateTranslations.js
```

### Open Files in Editor

```bash
# VS Code
code src/i18n/languages.ts

# Vim
vim src/i18n/locales/es.json

# Nano
nano src/i18n/locales/es.json
```

---

## 📚 Documentation Quick Access

```bash
# View documentation
cat MULTILINGUAL_SUPPORT.md
cat TRANSLATION_GUIDE.md
cat MULTILINGUAL_QUICK_REFERENCE.md
cat LANGUAGE_SELECTOR_GUIDE.md
cat TRANSLATION_PROGRESS.md

# Search documentation
grep -i "lazy loading" *.md
```

---

## 🎯 Common Workflows

### Add New Translation Key

1. **Add to English file**:
```bash
code src/i18n/locales/en.json
# Add new key-value pair
```

2. **Regenerate all files**:
```bash
# Backup first!
cp -r src/i18n/locales src/i18n/locales.backup

# Generate
node scripts/generateTranslations.js
```

3. **Verify**:
```bash
grep "your.new.key" src/i18n/locales/*.json
```

### Test New Translation

1. **Start dev server**:
```bash
npm run dev
```

2. **Open browser**: http://localhost:5173

3. **Change language**: Use language selector

4. **Verify**: Check if new translation appears

### Create Pull Request for Translation

```bash
# 1. Create branch
git checkout -b translation/[language-name]

# 2. Make changes
code src/i18n/locales/[lang].json

# 3. Commit
git add src/i18n/locales/[lang].json
git commit -m "feat: Add [language] translation"

# 4. Push
git push origin translation/[language-name]

# 5. Create PR on GitHub
```

---

## 💡 Pro Tips

### Speed Up Development

```bash
# Use alias in ~/.zshrc or ~/.bashrc
alias dev="npm run dev"
alias build="npm run build"
alias test="npm test"
alias tc="npx tsc --noEmit"

# Reload shell
source ~/.zshrc  # or source ~/.bashrc
```

### Watch for Changes

```bash
# Terminal 1: Dev server
npm run dev

# Terminal 2: Type checking
npx tsc --noEmit --watch

# Terminal 3: Tests
npm test -- --watch
```

### Quick JSON Validation

```bash
# Add to .zshrc or .bashrc
function validate-json() {
  python3 -m json.tool "$1" > /dev/null && echo "✓ Valid JSON" || echo "✗ Invalid JSON"
}

# Usage
validate-json src/i18n/locales/es.json
```

---

## 📞 Getting Help

### Check Logs

```bash
# Vite dev server logs
# Already visible in terminal where you ran `npm run dev`

# Browser console
# Open DevTools → Console tab

# Check for errors
grep -i "error" [log-file]
```

### Report Issues

```bash
# Create GitHub issue with details:
# 1. Command run
# 2. Expected behavior
# 3. Actual behavior
# 4. Error messages
# 5. Environment (OS, Node version, npm version)

# Get environment info
node --version
npm --version
npx vite --version
```

---

## 📌 Bookmark These

**Most Used Commands**:
```bash
npm run dev          # Start development
npm run build        # Build production
npx tsc --noEmit     # Type check
npm test             # Run tests
```

**Translation Commands**:
```bash
node scripts/generateTranslations.js  # Generate files
ls src/i18n/locales/                 # List languages
cat src/i18n/locales/en.json         # View English
```

**Debugging Commands**:
```bash
npm run build        # Check build
git status          # Check changes
git diff            # See differences
```

---

**Last Updated**: January 2025
**For More Info**: See MULTILINGUAL_SUPPORT.md

---

*Keep this reference handy for quick command lookup! 📖*
