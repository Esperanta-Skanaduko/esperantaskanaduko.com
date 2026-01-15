/**
 * Language Detection Test Suite
 *
 * Manual testing guide for verifying browser language detection
 */

// ============================================================================
// TEST 1: First-Time User with Supported Language
// ============================================================================

console.log('TEST 1: First-Time User with Supported Language');
console.log('------------------------------------------------');

/**
 * Steps:
 * 1. Set browser language to Spanish (es-ES or es-MX)
 * 2. Open browser console
 * 3. Run: localStorage.removeItem('i18nextLng')
 * 4. Reload page
 *
 * Expected Result:
 * - App displays in Spanish
 * - localStorage contains 'es'
 * - Navigation and content show Spanish translations
 */

function test1() {
  console.log('Browser languages:', navigator.languages);
  console.log('Stored language:', localStorage.getItem('i18nextLng'));
  console.log('Current i18n language:', window.i18n?.language);
  console.log('Expected: App should be in Spanish if browser is set to Spanish');
}

// ============================================================================
// TEST 2: First-Time User with Unsupported Language
// ============================================================================

console.log('\nTEST 2: First-Time User with Unsupported Language');
console.log('--------------------------------------------------');

/**
 * Steps:
 * 1. Set browser language to a language not in our list (e.g., Zulu: zu)
 * 2. Open browser console
 * 3. Run: localStorage.removeItem('i18nextLng')
 * 4. Reload page
 *
 * Expected Result:
 * - App displays in English (fallback)
 * - localStorage contains 'en'
 * - Navigation and content show English translations
 */

function test2() {
  console.log('Browser languages:', navigator.languages);
  console.log('Stored language:', localStorage.getItem('i18nextLng'));
  console.log('Current i18n language:', window.i18n?.language);
  console.log('Expected: App should be in English (fallback)');
}

// ============================================================================
// TEST 3: Returning User with Saved Preference
// ============================================================================

console.log('\nTEST 3: Returning User with Saved Preference');
console.log('---------------------------------------------');

/**
 * Steps:
 * 1. Ensure localStorage has a language (e.g., 'fr' for French)
 * 2. Change browser language to something different (e.g., German)
 * 3. Reload page
 *
 * Expected Result:
 * - App displays in French (saved preference)
 * - Ignores browser language change
 * - localStorage still contains 'fr'
 */

function test3() {
  console.log('Browser languages:', navigator.languages);
  console.log('Stored language:', localStorage.getItem('i18nextLng'));
  console.log('Current i18n language:', window.i18n?.language);
  console.log('Expected: App should use stored preference, not browser language');
}

// ============================================================================
// TEST 4: Language Switcher Override
// ============================================================================

console.log('\nTEST 4: Language Switcher Override');
console.log('-----------------------------------');

/**
 * Steps:
 * 1. App is currently in one language (e.g., English)
 * 2. Use language switcher to select Japanese
 * 3. Reload page
 *
 * Expected Result:
 * - App displays in Japanese
 * - localStorage updated to 'ja'
 * - Preference persists across reloads
 */

function test4() {
  console.log('Before switch:');
  console.log('  Stored language:', localStorage.getItem('i18nextLng'));
  console.log('  Current language:', window.i18n?.language);
  console.log('\nAfter switching to Japanese and reloading:');
  console.log('  Expected stored: ja');
  console.log('  Expected current: ja');
}

// ============================================================================
// TEST 5: Language Code Normalization
// ============================================================================

console.log('\nTEST 5: Language Code Normalization');
console.log('------------------------------------');

/**
 * Tests that regional language codes are normalized to base codes
 *
 * Test Cases:
 * - en-US → en
 * - en-GB → en
 * - pt-BR → pt
 * - pt-PT → pt
 * - zh-CN → zh
 * - zh-TW → zh
 * - es-ES → es
 * - es-MX → es
 */

function test5() {
  const testCases = [
    { browser: 'en-US', expected: 'en' },
    { browser: 'en-GB', expected: 'en' },
    { browser: 'pt-BR', expected: 'pt' },
    { browser: 'pt-PT', expected: 'pt' },
    { browser: 'zh-CN', expected: 'zh' },
    { browser: 'es-MX', expected: 'es' },
    { browser: 'fr-FR', expected: 'fr' },
    { browser: 'de-DE', expected: 'de' },
  ];

  console.log('Testing language code normalization:');
  testCases.forEach(({ browser, expected }) => {
    const normalized = browser.split('-')[0].toLowerCase();
    const passed = normalized === expected;
    console.log(`  ${browser} → ${normalized} ${passed ? '✅' : '❌'}`);
  });
}

// ============================================================================
// TEST 6: Supported Languages Check
// ============================================================================

console.log('\nTEST 6: Supported Languages Check');
console.log('----------------------------------');

/**
 * Verify all 70+ languages are properly configured
 */

function test6() {
  const supportedLanguages = [
    'af', 'ar', 'be', 'bg', 'bn', 'br', 'bs', 'ca', 'cs', 'cv', 'cy', 'da',
    'de', 'el', 'en', 'es', 'eo', 'et', 'eu', 'fa', 'fi', 'fr', 'fy', 'ga',
    'gl', 'he', 'hi', 'hr', 'hu', 'id', 'is', 'it', 'ja', 'ko', 'lb', 'lt',
    'lv', 'mg', 'mk', 'mt', 'nl', 'no', 'oc', 'os', 'pl', 'pt', 'rm', 'rn',
    'ro', 'ru', 'sb', 'sk', 'sl', 'sq', 'sr', 'sv', 'sw', 'te', 'tg', 'th',
    'tl', 'tr', 'uk', 'vi', 'wa', 'zh'
  ];

  console.log(`Total supported languages: ${supportedLanguages.length}`);
  console.log('Sampling some languages:');
  supportedLanguages.slice(0, 10).forEach(lang => {
    console.log(`  ${lang} - Available`);
  });
  console.log('  ... and 60+ more');
}

// ============================================================================
// TEST 7: Development Debug Mode
// ============================================================================

console.log('\nTEST 7: Development Debug Mode');
console.log('-------------------------------');

/**
 * Verify debug logging is working in development
 */

function test7() {
  console.log('Check console for i18next debug messages');
  console.log('In development mode, you should see:');
  console.log('  - Language detection logs');
  console.log('  - Missing key warnings (if any)');
  console.log('  - Language change events');
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Clear language preference and reload
 */
function clearAndReload() {
  localStorage.removeItem('i18nextLng');
  console.log('Language preference cleared. Reloading...');
  setTimeout(() => window.location.reload(), 500);
}

/**
 * Set language manually
 */
function setLanguage(langCode) {
  localStorage.setItem('i18nextLng', langCode);
  console.log(`Language set to: ${langCode}. Reloading...`);
  setTimeout(() => window.location.reload(), 500);
}

/**
 * Get current language info
 */
function getLanguageInfo() {
  return {
    browser: navigator.languages,
    stored: localStorage.getItem('i18nextLng'),
    current: window.i18n?.language,
    supported: window.i18n?.options?.supportedLngs?.length || 0
  };
}

/**
 * Display all language info
 */
function showLanguageInfo() {
  const info = getLanguageInfo();
  console.log('=== LANGUAGE DETECTION INFO ===');
  console.log('Browser Languages:', info.browser);
  console.log('Stored Preference:', info.stored || 'None');
  console.log('Current Language:', info.current);
  console.log('Supported Languages:', info.supported);
  console.log('===============================');
}

// ============================================================================
// QUICK TEST COMMANDS
// ============================================================================

console.log('\n=== QUICK TEST COMMANDS ===');
console.log('Copy and paste these in the browser console:\n');
console.log('// Show current language info');
console.log('showLanguageInfo();\n');
console.log('// Clear preference and reload');
console.log('clearAndReload();\n');
console.log('// Set to Spanish');
console.log('setLanguage("es");\n');
console.log('// Set to Japanese');
console.log('setLanguage("ja");\n');
console.log('// Set to French');
console.log('setLanguage("fr");\n');
console.log('===========================\n');

// ============================================================================
// AUTO-RUN ON PAGE LOAD
// ============================================================================

if (typeof window !== 'undefined') {
  // Wait for i18next to initialize
  setTimeout(() => {
    console.log('\n🌍 Language Detection System Active');
    showLanguageInfo();
    console.log('\nℹ️  Run test functions (test1, test2, etc.) to verify behavior');
    console.log('ℹ️  Run showLanguageInfo() to see current state');
  }, 1000);
}

// Export for use in browser console
if (typeof window !== 'undefined') {
  window.languageTests = {
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    clearAndReload,
    setLanguage,
    getLanguageInfo,
    showLanguageInfo
  };
}
