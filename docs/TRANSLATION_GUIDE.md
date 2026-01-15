# Translation Contribution Guide

Welcome! Thank you for your interest in helping make Esperanta Skanaduko accessible in multiple languages.

## Quick Start

### 1. Choose Your Language

Navigate to `src/i18n/locales/` and find your language file (e.g., `es.json` for Spanish, `fr.json` for French).

### 2. Understand the Structure

Each translation file has this structure:

```json
{
  "_meta": {
    "language": "Your Language Name",
    "code": "xx",
    "translationStatus": "needs-translation",
    "note": "..."
  },
  "common": { ... },
  "navigation": { ... },
  "home": { ... },
  ...
}
```

### 3. Translate the Content

Replace English text with your translations while keeping the structure intact.

**Example:**

Before:
```json
"home": {
  "hero": {
    "welcome": "Welcome to Esperanta Skanduko"
  }
}
```

After (Spanish):
```json
"home": {
  "hero": {
    "welcome": "Bienvenido a Esperanta Skanduko"
  }
}
```

### 4. Important Rules

✅ **DO:**
- Translate all text values
- Preserve JSON keys (the parts before the colon)
- Keep placeholders like `{{count}}` or `{{name}}`
- Maintain HTML tags if present (e.g., `<strong>`, `<br>`)
- Use proper punctuation and grammar
- Consider cultural context

❌ **DON'T:**
- Change JSON structure
- Translate the brand name "Esperanta Skanaduko"
- Remove or modify placeholders (`{{...}}`)
- Use pure machine translation without review
- Change the `_meta` code field

### 5. Test Your Translation

1. Save your changes
2. Run `npm run build` to check for errors
3. Start the dev server with `npm run dev`
4. Switch to your language in the language selector
5. Navigate through the site to verify translations

### 6. Submit Your Work

1. Fork the repository
2. Create a new branch: `git checkout -b translate/your-language`
3. Commit your changes: `git commit -m "Add [Language] translation"`
4. Push to your fork: `git push origin translate/your-language`
5. Open a Pull Request on GitHub

## Translation Tips

### Special Formatting

#### Placeholders
Keep variable placeholders intact:
```json
"showing": "Showing {{count}} resources"  // Don't remove {{count}}
```

Spanish:
```json
"showing": "Mostrando {{count}} recursos"  // {{count}} stays
```

#### Line Breaks
Preserve `\n` for line breaks:
```json
"name": "Esperanta\nSkanaduko"  // \n creates a line break
```

#### Pluralization
Some strings may have plural forms:
```json
"booksFound": "{{count}} book",
"booksFound_plural": "{{count}} books"
```

Translate both:
```json
"booksFound": "{{count}} libro",
"booksFound_plural": "{{count}} libros"
```

### Context Matters

Some words have different meanings in different contexts. Check where the translation is used:

- `"library"` in navigation = "Biblioteca"
- `"library"` as a collection = "Biblioteca" or "Colección"

### Cultural Adaptation

Adapt phrases to sound natural in your language, not just literal translations:

English: "Made with ❤️ for the Esperanto community"
Spanish: "Hecho con ❤️ para la comunidad Esperanto"
French: "Fait avec ❤️ pour la communauté Esperanto"

## Priority Sections

If you want to start with the most important sections:

1. **Common UI** (`common.ui`) - Navigation, buttons, basic interactions
2. **Navigation** (`navigation`) - Main menu items
3. **Home Page** (`home`) - Landing page content
4. **Resources** (`resources`) - Learning materials section
5. **Library** (`library`) - Book collection section

## Translation Quality

### Good Translation
- Natural sounding in the target language
- Culturally appropriate
- Maintains the same tone as English
- Grammatically correct

### What to Avoid
- Word-for-word literal translations
- Awkward phrasing
- Lost meaning or context
- Machine translation without human review

## Getting Help

### Need Clarification?

- Check the context by looking at the component that uses the text
- Ask in the GitHub issue or PR comments
- Check existing translations in similar languages
- Consult the [project documentation](./MULTILINGUAL_SUPPORT.md)

### Common Questions

**Q: Should I translate technical terms?**
A: Use commonly accepted terms in your language. For example, "email" might stay as "email" in many languages.

**Q: What about brand names?**
A: Keep "Esperanta Skanaduko" and "Esperanto" as-is. These are proper nouns.

**Q: Can I use machine translation?**
A: Machine translation can be a starting point, but always review and improve it. Natural-sounding translations require human judgment.

**Q: What if a phrase doesn't make sense in my language?**
A: Adapt it! The goal is natural, understandable content, not literal translation.

## Recognition

All translators will be:
- Listed in the project's CONTRIBUTORS.md file
- Credited in the translation file's metadata
- Thanked in project announcements

## Example: Complete Translation Process

Let's translate the home page welcome message to Spanish:

### Step 1: Find the Text
```json
// src/i18n/locales/en.json
{
  "home": {
    "hero": {
      "welcome": "Welcome to Esperanta Skanduko",
      "description": "Discover the beauty of Esperanto through our comprehensive collection of learning resources, books, and interactive tools."
    }
  }
}
```

### Step 2: Translate
```json
// src/i18n/locales/es.json
{
  "home": {
    "hero": {
      "welcome": "Bienvenido a Esperanta Skanduko",
      "description": "Descubre la belleza del Esperanto a través de nuestra completa colección de recursos de aprendizaje, libros y herramientas interactivas."
    }
  }
}
```

### Step 3: Update Metadata
```json
{
  "_meta": {
    "language": "Español",
    "code": "es",
    "translationStatus": "in-progress",  // Changed from "needs-translation"
    "note": "Translation by [Your Name]",
    "lastUpdated": "2025-10-11"
  },
  ...
}
```

### Step 4: Test and Submit

Run the site, verify the translation appears correctly, and submit your PR!

## Thank You!

Your contribution helps make Esperanto learning accessible to millions of people worldwide. Every translation matters!

---

**Questions?** Open an issue on GitHub or contact the maintainers.

**Ready to start?** Pick a language and dive in!
