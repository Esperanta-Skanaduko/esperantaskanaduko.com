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
 */

export const SUPPORTED_LANGUAGES = {
  en: 'English',
  eo: 'Esperanto'
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

const resources = {
  en: { translation: en },
  eo: { translation: eo }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'eo'],

    // Language detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },

    interpolation: {
      escapeValue: false // React already escapes values
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;
