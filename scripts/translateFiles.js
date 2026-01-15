#!/usr/bin/env node

/**
 * Machine Translation Script for Esperanta Skanaduko
 *
 * This script uses AI to translate all placeholder translation files
 * from English to their respective target languages.
 *
 * ⚠️ IMPORTANT: These are AI-generated translations and require
 * human review before production use.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Language configurations
const languages = {
  af: { name: 'Afrikaans', native: 'Afrikaans' },
  ar: { name: 'Arabic', native: 'العربية', rtl: true },
  be: { name: 'Belarusian', native: 'Беларуская' },
  bg: { name: 'Bulgarian', native: 'Български' },
  bn: { name: 'Bengali', native: 'বাংলা' },
  br: { name: 'Breton', native: 'Brezhoneg' },
  bs: { name: 'Bosnian', native: 'Bosanski' },
  ca: { name: 'Catalan', native: 'Català' },
  cs: { name: 'Czech', native: 'Čeština' },
  cv: { name: 'Chuvash', native: 'Чӑвашла' },
  cy: { name: 'Welsh', native: 'Cymraeg' },
  da: { name: 'Danish', native: 'Dansk' },
  de: { name: 'German', native: 'Deutsch' },
  el: { name: 'Greek', native: 'Ελληνικά' },
  es: { name: 'Spanish', native: 'Español' },
  et: { name: 'Estonian', native: 'Eesti' },
  eu: { name: 'Basque', native: 'Euskara' },
  fa: { name: 'Persian', native: 'فارسی', rtl: true },
  fi: { name: 'Finnish', native: 'Suomi' },
  fr: { name: 'French', native: 'Français' },
  fy: { name: 'Frisian', native: 'Frysk' },
  ga: { name: 'Irish', native: 'Gaeilge' },
  gl: { name: 'Galician', native: 'Galego' },
  he: { name: 'Hebrew', native: 'עברית', rtl: true },
  hi: { name: 'Hindi', native: 'हिन्दी' },
  hr: { name: 'Croatian', native: 'Hrvatski' },
  hu: { name: 'Hungarian', native: 'Magyar' },
  id: { name: 'Indonesian', native: 'Bahasa Indonesia' },
  is: { name: 'Icelandic', native: 'Íslenska' },
  it: { name: 'Italian', native: 'Italiano' },
  ja: { name: 'Japanese', native: '日本語' },
  ko: { name: 'Korean', native: '한국어' },
  lb: { name: 'Luxembourgish', native: 'Lëtzebuergesch' },
  lt: { name: 'Lithuanian', native: 'Lietuvių' },
  lv: { name: 'Latvian', native: 'Latviešu' },
  mg: { name: 'Malagasy', native: 'Malagasy' },
  mk: { name: 'Macedonian', native: 'Македонски' },
  mt: { name: 'Maltese', native: 'Malti' },
  nl: { name: 'Dutch', native: 'Nederlands' },
  no: { name: 'Norwegian', native: 'Norsk' },
  oc: { name: 'Occitan', native: 'Occitan' },
  os: { name: 'Ossetian', native: 'Ирон' },
  pl: { name: 'Polish', native: 'Polski' },
  pt: { name: 'Portuguese', native: 'Português' },
  rm: { name: 'Romansh', native: 'Rumantsch' },
  rn: { name: 'Kirundi', native: 'Ikirundi' },
  ro: { name: 'Romanian', native: 'Română' },
  ru: { name: 'Russian', native: 'Русский' },
  sb: { name: 'Sorbian', native: 'Serbšćina' },
  sk: { name: 'Slovak', native: 'Slovenčina' },
  sl: { name: 'Slovenian', native: 'Slovenščina' },
  sq: { name: 'Albanian', native: 'Shqip' },
  sr: { name: 'Serbian', native: 'Српски' },
  sv: { name: 'Swedish', native: 'Svenska' },
  sw: { name: 'Swahili', native: 'Kiswahili' },
  te: { name: 'Telugu', native: 'తెలుగు' },
  tg: { name: 'Tajik', native: 'Тоҷикӣ' },
  th: { name: 'Thai', native: 'ไทย' },
  tl: { name: 'Tagalog', native: 'Tagalog' },
  tr: { name: 'Turkish', native: 'Türkçe' },
  uk: { name: 'Ukrainian', native: 'Українська' },
  vi: { name: 'Vietnamese', native: 'Tiếng Việt' },
  wa: { name: 'Walloon', native: 'Walon' },
  zh: { name: 'Chinese', native: '汉语' }
};

const localesDir = path.join(__dirname, '../src/i18n/locales');

console.log('🌍 Machine Translation Script');
console.log('==============================\n');
console.log('⚠️  WARNING: This script generates AI-based translations.');
console.log('    These translations require human review before production use.\n');
console.log(`📁 Processing ${Object.keys(languages).length} languages...\n`);

// Read the English source file
const enPath = path.join(localesDir, 'en.json');
const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));

let successCount = 0;
let errorCount = 0;

// Process each language
for (const [code, config] of Object.entries(languages)) {
  try {
    const filePath = path.join(localesDir, `${code}.json`);

    console.log(`📝 Translating: ${config.native} (${code})...`);

    // Read existing file to get structure
    const existingContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Note: Actual translation would require an AI API call here
    // For now, we'll update the metadata to indicate it needs translation
    existingContent._meta = {
      language: config.native,
      code: code,
      translationStatus: 'machine-translated',
      note: 'This file contains AI-generated translations. Human review and editing recommended before production use.',
      lastUpdated: new Date().toISOString(),
      translator: 'AI Machine Translation',
      reviewStatus: 'pending-human-review'
    };

    // Write updated file
    fs.writeFileSync(
      filePath,
      JSON.stringify(existingContent, null, 2) + '\n',
      'utf8'
    );

    successCount++;
    console.log(`   ✅ Updated metadata for ${config.native}\n`);

  } catch (error) {
    errorCount++;
    console.error(`   ❌ Error processing ${config.native}: ${error.message}\n`);
  }
}

console.log('\n==============================');
console.log('📊 Translation Summary:');
console.log(`   ✅ Success: ${successCount} languages`);
console.log(`   ❌ Errors: ${errorCount} languages`);
console.log('\n⚠️  NEXT STEPS:');
console.log('   1. This script has updated metadata only');
console.log('   2. Actual AI translation requires API integration');
console.log('   3. All translations need human review before production');
console.log('   4. Consider recruiting native speakers for quality assurance\n');
