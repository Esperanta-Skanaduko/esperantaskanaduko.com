/**
 * audit-translations.js
 * Compares all locale JSON files against en.json as the baseline.
 * Reports missing keys, extra keys, and empty values.
 *
 * Run: node scripts/audit-translations.js
 * Or:  npm run audit:translations
 *
 * Exit codes:
 *   0 — all locales complete
 *   1 — one or more locales have issues
 */

import { readdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = join(__dirname, '..', 'src', 'i18n', 'locales');

/**
 * Flatten a nested JSON object into dot-notation keys.
 * e.g. { a: { b: 'c' } } → { 'a.b': 'c' }
 */
function flatten(obj, prefix = '') {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(acc, flatten(value, fullKey));
    } else {
      acc[fullKey] = value;
    }
    return acc;
  }, {});
}

function loadLocale(file) {
  const raw = readFileSync(join(LOCALES_DIR, file), 'utf-8');
  return JSON.parse(raw);
}

// Load baseline
const baseline = flatten(loadLocale('en.json'));
const baselineKeys = new Set(Object.keys(baseline));

// Find all locale files
const localeFiles = readdirSync(LOCALES_DIR)
  .filter((f) => f.endsWith('.json'))
  .sort();

let totalIssues = 0;

console.log(`\n📊 Translation Audit — ${localeFiles.length} locales\n`);
console.log(`Baseline: en.json (${baselineKeys.size} keys)\n`);
console.log('─'.repeat(60));

for (const file of localeFiles) {
  if (file === 'en.json') continue;

  const lang = file.replace('.json', '');
  let locale;
  try {
    locale = flatten(loadLocale(file));
  } catch (err) {
    console.error(`❌ ${lang}: Failed to parse — ${err.message}`);
    totalIssues++;
    continue;
  }

  const localeKeys = new Set(Object.keys(locale));

  const missing = [...baselineKeys].filter((k) => !localeKeys.has(k));
  const extra = [...localeKeys].filter((k) => !baselineKeys.has(k));
  const empty = [...localeKeys].filter(
    (k) => locale[k] === '' || locale[k] === null || locale[k] === undefined,
  );

  const issueCount = missing.length + empty.length;
  totalIssues += issueCount;

  if (issueCount === 0 && extra.length === 0) {
    console.log(`✅ ${lang} — complete (${localeKeys.size} keys)`);
  } else {
    const coverage = (
      ((baselineKeys.size - missing.length) / baselineKeys.size) *
      100
    ).toFixed(1);

    console.log(`\n⚠️  ${lang} — ${coverage}% complete`);

    if (missing.length > 0) {
      console.log(`   Missing keys (${missing.length}):`);
      missing.slice(0, 20).forEach((k) => console.log(`     - ${k}`));
      if (missing.length > 20) {
        console.log(`     ... and ${missing.length - 20} more`);
      }
    }

    if (empty.length > 0) {
      console.log(`   Empty values (${empty.length}):`);
      empty.slice(0, 10).forEach((k) => console.log(`     - ${k}`));
    }

    if (extra.length > 0) {
      console.log(`   Extra keys not in en.json (${extra.length}):`);
      extra.slice(0, 10).forEach((k) => console.log(`     + ${k}`));
    }
  }
}

console.log('\n' + '─'.repeat(60));
if (totalIssues === 0) {
  console.log(`\n✅ All ${localeFiles.length - 1} locales are complete!\n`);
  process.exit(0);
} else {
  console.log(`\n❌ Found ${totalIssues} issue(s) across ${localeFiles.length - 1} locales.\n`);
  process.exit(1);
}
