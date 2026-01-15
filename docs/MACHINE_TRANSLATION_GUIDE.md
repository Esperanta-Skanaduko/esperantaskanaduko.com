# Machine Translation Implementation Guide

## Overview

This document explains how to implement AI-powered machine translation for all 64 language files in the Esperanta Skanaduko project.

**⚠️ CRITICAL WARNING**: These translations are AI-generated and MUST be reviewed by native speakers before production use.

---

## Quick Start

### Option 1: Automated Translation (Recommended)

We've created a Python script that automatically translates all 64 language files using Google Translate API (free, no API key required).

#### Prerequisites

```bash
# Install Python 3.8 or higher (check your version)
python3 --version

# Install the translation library
pip3 install deep-translator
```

#### Running the Script

```bash
# Navigate to project root
cd /Users/victorwilliams/Documents/GitHub/esperantaskanaduko.com

# Run the translation script
python3 scripts/translate_all_files.py
```

#### What the Script Does

1. **Reads** all 64 placeholder JSON files from `src/i18n/locales/`
2. **Translates** every English string to the target language
3. **Preserves**:
   - JSON structure and keys
   - Site name: "Esperanta\nSkanaduko" (with newline)
   - Interpolation syntax: `{{count}}`
   - Special characters and Unicode
4. **Updates** metadata:
   - `translationStatus`: "machine-translated"
   - `note`: Warning about AI translation
   - `translator`: "Google Translate API (deep-translator)"
   - `reviewStatus`: "pending-human-review"
5. **Outputs** detailed progress and summary

#### Expected Runtime

- **Per file**: 2-5 minutes (depending on API rate limits)
- **Total**: 2-5 hours for all 64 languages
- Script includes progress indicators and error handling

---

## Option 2: Manual Translation Service

If you prefer using a professional translation service:

### Prepare Export

```bash
# Extract all English text for professional translation
node scripts/exportForTranslation.js
```

This creates a CSV file with all translatable strings that you can send to:
- Professional translators
- Translation agencies (ProZ, Gengo, etc.)
- Community volunteers

---

## Supported Languages

### ✅ Fully Supported (54 languages)
Google Translate API supports these languages:

**Latin Script**: Afrikaans (af), Bosnian (bs), Catalan (ca), Czech (cs), Welsh (cy), Danish (da), German (de), Spanish (es), Estonian (et), Basque (eu), Finnish (fi), French (fr), Frisian (fy), Irish (ga), Galician (gl), Croatian (hr), Hungarian (hu), Indonesian (id), Icelandic (is), Italian (it), Lithuanian (lt), Latvian (lv), Malagasy (mg), Maltese (mt), Dutch (nl), Norwegian (no), Polish (pl), Portuguese (pt), Romanian (ro), Slovak (sk), Slovenian (sl), Albanian (sq), Swedish (sv), Swahili (sw), Tagalog (tl), Turkish (tr), Vietnamese (vi)

**Cyrillic Script**: Belarusian (be), Bulgarian (bg), Macedonian (mk), Russian (ru), Serbian (sr), Ukrainian (uk)

**Asian Scripts**: Bengali (bn), Hindi (hi), Japanese (ja), Korean (ko), Telugu (te), Thai (th), Chinese (zh)

**Right-to-Left**: Arabic (ar), Persian (fa), Hebrew (he)

**Greek**: Greek (el)

### ⚠️ Requires Manual Translation (10 languages)
These are NOT supported by Google Translate:

- Breton (br)
- Chuvash (cv)
- Luxembourgish (lb)
- Occitan (oc)
- Ossetian (os)
- Romansh (rm)
- Kirundi (rn)
- Sorbian (sb)
- Tajik (tg)
- Walloon (wa)

**For these languages**, the script will:
- Update metadata to "needs-manual-translation"
- Keep English placeholder text
- Add note: "This language is not supported by automatic translation. Manual translation required."

---

## File Structure

Each translation file follows this structure:

```json
{
  "_meta": {
    "language": "Native Language Name",
    "code": "xx",
    "translationStatus": "machine-translated",
    "note": "AI-generated. Needs human review.",
    "lastUpdated": "2025-10-11",
    "translator": "Google Translate API",
    "reviewStatus": "pending-human-review"
  },
  "common": { ... },
  "seo": { ... },
  "navigation": { ... },
  // ... all other namespaces
}
```

---

## Special Cases Handled

### 1. **Site Name Preservation**
```json
"name": "Esperanta\nSkanaduko"
```
- Newline character `\n` is preserved
- Name stays in Esperanto (not translated)

### 2. **Interpolation Syntax**
```json
"showing": "Showing {{count}} resources"
```
- `{{count}}` placeholder is preserved in all languages
- Translations wrap around the placeholder

### 3. **Right-to-Left Languages** (Arabic, Hebrew, Persian)
- Text direction is handled by CSS
- Unicode RTL markers are not added to JSON
- Browser handles RTL rendering automatically

### 4. **Proper Nouns**
These are typically NOT translated:
- "Esperanto"
- "PayPal"
- "GitHub"
- "Esperanta Skanaduko"

However, AI might translate them - **human review required**.

---

## Testing After Translation

### 1. Build Verification
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Should show: No errors
```

### 2. Production Build Test
```bash
# Build for production
npm run build

# Should complete successfully
```

### 3. Development Server Test
```bash
# Start dev server
npm run dev

# Visit: http://localhost:5173
```

### 4. Language Switcher Test
1. Open the website
2. Use language switcher in navigation
3. Test several languages:
   - Spanish (Latin script)
   - Russian (Cyrillic)
   - Japanese (Asian script)
   - Arabic (RTL)
4. Verify:
   - ✅ Text displays correctly
   - ✅ No encoding issues
   - ✅ Layout works with RTL languages
   - ✅ Interpolation values appear
   - ✅ No broken translations

---

## Quality Assurance Process

### Phase 1: Automated Translation
✅ Completed by running the Python script

### Phase 2: Technical Validation
- [ ] All JSON files are valid
- [ ] TypeScript compiles with zero errors
- [ ] Production build succeeds
- [ ] Dev server runs without errors
- [ ] All languages load in browser
- [ ] No console errors

### Phase 3: Native Speaker Review (CRITICAL)
For each language, you need:
- [ ] Native speaker review of translations
- [ ] Cultural appropriateness check
- [ ] Technical terminology verification
- [ ] Formal/informal register adjustment
- [ ] Grammar and spelling corrections

### Phase 4: User Testing
- [ ] Beta test with native speakers
- [ ] Collect feedback on translation quality
- [ ] Iterate based on feedback
- [ ] Final approval from language coordinators

---

## Translation Quality Expectations

### ⭐⭐⭐⭐⭐ Excellent
- English (original)
- Esperanto (professionally translated)

### ⭐⭐⭐⭐ Good
- Major European languages (Spanish, French, German, Italian, Portuguese)
- Google Translate performs well with these

### ⭐⭐⭐ Acceptable
- Other European and Asian languages
- Generally understandable but may have issues
- Definitely needs native speaker review

### ⭐⭐ Poor
- Less common languages
- May have significant errors
- **MUST be reviewed before production**

### ❌ Not Translated
- 10 unsupported languages (manual translation required)

---

## Known Limitations

### AI Translation Issues
1. **Context Loss**: AI doesn't understand website context
2. **Cultural Nuances**: May miss cultural appropriateness
3. **Technical Terms**: May mistranslate Esperanto-specific terminology
4. **Tone**: May choose wrong formality level
5. **Grammar**: May have grammatical errors in complex sentences
6. **Idioms**: May translate idioms literally

### Google Translate Specific
1. **Rate Limiting**: Script may be throttled (handles this gracefully)
2. **Character Limits**: Very long strings split automatically
3. **No Context**: Translates each string independently
4. **Free Tier**: No official API key needed but subject to limits

---

## Next Steps After Translation

### Immediate (Before Testing)
1. ✅ Run the translation script
2. ⏳ Verify all files generated successfully
3. ⏳ Check for any error messages
4. ⏳ Run build verification
5. ⏳ Test in browser

### Short-term (This Week)
1. ⏳ Create GitHub issues for native speaker review
2. ⏳ Recruit volunteers from Esperanto community
3. ⏳ Set up translation review workflow
4. ⏳ Create contributor guidelines for translators

### Medium-term (This Month)
1. ⏳ Complete native speaker reviews for top 10 languages
2. ⏳ Fix critical translation errors
3. ⏳ Test with real users
4. ⏳ Iterate based on feedback

### Long-term (Ongoing)
1. ⏳ Continuous improvement of translations
2. ⏳ Add more languages if requested
3. ⏳ Maintain translations when content updates
4. ⏳ Build translation community

---

## Troubleshooting

### Script Errors

**"ModuleNotFoundError: No module named 'deep_translator'"**
```bash
pip3 install deep-translator
```

**"Translation failed for language XX"**
- Check internet connection
- API might be rate-limited (wait and retry)
- Some text may be too long (script handles this)

**"JSONDecodeError"**
- Translation may have corrupted JSON
- Check the specific file manually
- May need to restore from backup

### Build Errors After Translation

**"Unexpected token" in JSON file**
- File may be corrupted
- Restore from backup: `cp src/i18n/locales/en.json src/i18n/locales/XX.json`
- Re-run translation for that file

**TypeScript errors**
- Usually means JSON structure changed
- Check that all keys are preserved
- Verify metadata structure

---

## File Manifest

### Created/Modified Files

**New Scripts**:
- `scripts/translate_all_files.py` - Automated translation script
- `scripts/translateFiles.js` - Node.js metadata updater

**Documentation**:
- `MACHINE_TRANSLATION_GUIDE.md` - This file

**Modified Files** (all 64 languages):
- `src/i18n/locales/af.json` - Afrikaans
- `src/i18n/locales/ar.json` - Arabic
- `src/i18n/locales/be.json` - Belarusian
- `src/i18n/locales/bg.json` - Bulgarian
- ... (60 more files)
- `src/i18n/locales/zh.json` - Chinese

---

## Support & Resources

### Translation Help
- **Esperanto Community**: https://reddit.com/r/esperanto
- **Facebook Groups**: Esperanto learning groups
- **Discord**: Esperanto language learning servers

### Technical Support
- **Project Issues**: https://github.com/Vaporjawn/esperantaskanaduko.com/issues
- **React i18next Docs**: https://react.i18next.com/
- **Google Translate**: https://translate.google.com

### Professional Services
If you need professional translation:
- **Gengo**: https://gengo.com
- **ProZ**: https://www.proz.com
- **E-Traductor**: Esperanto-specific services

---

## Conclusion

This machine translation implementation provides a **quick start** for multilingual support, but should be considered a **first draft only**.

**Remember**: AI translation is a tool, not a replacement for human translators. Every language **must** be reviewed by a native speaker before production deployment.

Good luck with your translations! 🌍

---

**Last Updated**: October 11, 2025
**Version**: 1.0
**Author**: Victor Williams (with AI assistance)
