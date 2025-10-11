import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import eo from './locales/eo.json';

/**
 * i18n Configuration
 *
 * Configures internationalization for English and Esperanto languages.
 * Uses browser language detection and local storage for persistence.
 * Optimized for performance with proper caching and lazy loading support.
 */

/**
 * Supported languages definition
 */
export const SUPPORTED_LANGUAGES = {
  en: 'English',
  eo: 'Esperanto',
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

/**
 * Language resources
 */
const resources = {
  en: { translation: en },
  eo: { translation: eo },
} as const;

/**
 * Default language fallback
 */
const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

/**
 * Initialize i18next with configuration
 */
i18n
  // Detect user language from browser/localStorage
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize with configuration
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ['en', 'eo'],

    // Language detection configuration
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    // Interpolation configuration
    interpolation: {
      escapeValue: false, // React already escapes values
      formatSeparator: ',',
    },

    // React specific configuration
    react: {
      useSuspense: false, // Set to true if you want to use Suspense
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    },

    // Performance optimizations
    load: 'languageOnly', // Load only 'en' not 'en-US'
    cleanCode: true,
    lowerCaseLng: true,

    // Debug mode (disable in production)
    debug: process.env.NODE_ENV === 'development',

    // Namespace configuration
    defaultNS: 'translation',
    ns: ['translation'],

    // Missing key handling
    saveMissing: false,
    missingKeyHandler: (lng, _ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
      }
    },
  });

/**
 * Helper function to change language
 * @param lang - Language code to switch to
 */
export const changeLanguage = async (lang: SupportedLanguage): Promise<void> => {
  await i18n.changeLanguage(lang);
};

/**
 * Get current language
 * @returns Current language code
 */
export const getCurrentLanguage = (): SupportedLanguage => {
  return (i18n.language as SupportedLanguage) || DEFAULT_LANGUAGE;
};

/**
 * Check if language is supported
 * @param lang - Language code to check
 * @returns True if language is supported
 */
export const isLanguageSupported = (lang: string): lang is SupportedLanguage => {
  return lang in SUPPORTED_LANGUAGES;
};

export default i18n;
