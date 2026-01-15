/**
 * Translation File Generator
 *
 * This script generates translation JSON files for all supported languages.
 * For now, it creates English-based templates that need manual translation.
 *
 * Usage: node scripts/generateTranslations.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languages = {
  af: 'Afrikaans',
  ar: 'العربية',
  be: 'Беларуская',
  bg: 'Български',
  bn: 'Bengali',
  br: 'Brezhoneg',
  bs: 'Bosanski',
  ca: 'Català',
  cs: 'Česky',
  cv: 'Чăваш',
  cy: 'Cymraeg',
  da: 'Dansk',
  de: 'Deutsch',
  el: 'Ελληνικά',
  en: 'English',
  es: 'Español',
  eo: 'Esperanto',
  et: 'Eesti',
  eu: 'Euskara',
  fa: 'فارسى',
  fi: 'Suomi',
  fr: 'Français',
  fy: 'Frysk',
  ga: 'Gaeilge',
  gl: 'Galego',
  he: 'עברית',
  hi: 'हिन्दी',
  hr: 'Hrvatski',
  hu: 'Magyar',
  id: 'Indonesia',
  is: 'Íslenska',
  it: 'Italiano',
  ja: '日本語',
  ko: '한글',
  lb: 'Lëtzebuergësch',
  lt: 'Lietuviškai',
  lv: 'Latviešu',
  mg: 'Malagasy',
  mk: 'Македонски',
  mt: 'Malti',
  nl: 'Nederlands',
  no: 'Norsk',
  oc: 'Occitan',
  os: 'Ирон',
  pl: 'Polski',
  pt: 'Português',
  rm: 'Rumantsch',
  rn: 'Kirundi',
  ro: 'Română',
  ru: 'Русский',
  sb: 'Serbski',
  sk: 'Slovenčina',
  sl: 'Slovenščina',
  sq: 'Shqip',
  sr: 'Srpski',
  sv: 'Svenska',
  sw: 'Kiswahili',
  te: 'Telugu',
  tg: 'тоҷикӣ',
  th: 'ไทย',
  tl: 'Tagalog',
  tr: 'Türkçe',
  uk: 'Українська',
  vi: 'Tiếng Việt',
  wa: 'Walon',
  zh: '汉语',
};

// Read the English template
const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
const enFilePath = path.join(localesDir, 'en.json');
const englishTemplate = JSON.parse(fs.readFileSync(enFilePath, 'utf-8'));

// Generate translation files for each language
Object.keys(languages).forEach((langCode) => {
  // Skip if file already exists (en and eo)
  const filePath = path.join(localesDir, `${langCode}.json`);

  if (fs.existsSync(filePath)) {
    console.log(`✓ ${langCode}.json already exists, skipping...`);
    return;
  }

  // Create a copy of the English template
  // In production, these would be actual translations
  const translationData = JSON.parse(JSON.stringify(englishTemplate));

  // Add a comment at the top indicating this needs translation
  const fileContent = {
    _meta: {
      language: languages[langCode],
      code: langCode,
      translationStatus: 'needs-translation',
      note: 'This file contains English text as placeholders. Professional translation is required.'
    },
    ...translationData
  };

  // Write the file
  fs.writeFileSync(
    filePath,
    JSON.stringify(fileContent, null, 2),
    'utf-8'
  );

  console.log(`✓ Created ${langCode}.json (${languages[langCode]})`);
});

console.log('\n✅ Translation file generation complete!');
console.log(`📁 Total files: ${Object.keys(languages).length}`);
console.log('⚠️  Note: Files contain English placeholders and need professional translation.');
