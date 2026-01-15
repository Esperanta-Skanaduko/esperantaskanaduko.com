import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LANGUAGES, type SupportedLanguageCode } from './languages';

// Import all translation files
import af from './locales/af.json';
import ar from './locales/ar.json';
import be from './locales/be.json';
import bg from './locales/bg.json';
import bn from './locales/bn.json';
import br from './locales/br.json';
import bs from './locales/bs.json';
import ca from './locales/ca.json';
import cs from './locales/cs.json';
import cv from './locales/cv.json';
import cy from './locales/cy.json';
import da from './locales/da.json';
import de from './locales/de.json';
import el from './locales/el.json';
import en from './locales/en.json';
import es from './locales/es.json';
import eo from './locales/eo.json';
import et from './locales/et.json';
import eu from './locales/eu.json';
import fa from './locales/fa.json';
import fi from './locales/fi.json';
import fr from './locales/fr.json';
import fy from './locales/fy.json';
import ga from './locales/ga.json';
import gl from './locales/gl.json';
import he from './locales/he.json';
import hi from './locales/hi.json';
import hr from './locales/hr.json';
import hu from './locales/hu.json';
import id from './locales/id.json';
import is from './locales/is.json';
import it from './locales/it.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import lb from './locales/lb.json';
import lt from './locales/lt.json';
import lv from './locales/lv.json';
import mg from './locales/mg.json';
import mk from './locales/mk.json';
import mt from './locales/mt.json';
import nl from './locales/nl.json';
import no from './locales/no.json';
import oc from './locales/oc.json';
import os from './locales/os.json';
import pl from './locales/pl.json';
import pt from './locales/pt.json';
import rm from './locales/rm.json';
import rn from './locales/rn.json';
import ro from './locales/ro.json';
import ru from './locales/ru.json';
import sb from './locales/sb.json';
import sk from './locales/sk.json';
import sl from './locales/sl.json';
import sq from './locales/sq.json';
import sr from './locales/sr.json';
import sv from './locales/sv.json';
import sw from './locales/sw.json';
import te from './locales/te.json';
import tg from './locales/tg.json';
import th from './locales/th.json';
import tl from './locales/tl.json';
import tr from './locales/tr.json';
import uk from './locales/uk.json';
import vi from './locales/vi.json';
import wa from './locales/wa.json';
import zh from './locales/zh.json';

/**
 * i18n Configuration
 *
 * Configures internationalization for 70+ languages.
 * Uses browser language detection and local storage for persistence.
 * Optimized for performance with proper caching and lazy loading support.
 */

/**
 * Re-export for convenience
 */
export { LANGUAGES };
export type SupportedLanguage = SupportedLanguageCode;

/**
 * Language resources
 */
const resources = {
  af: { translation: af },
  ar: { translation: ar },
  be: { translation: be },
  bg: { translation: bg },
  bn: { translation: bn },
  br: { translation: br },
  bs: { translation: bs },
  ca: { translation: ca },
  cs: { translation: cs },
  cv: { translation: cv },
  cy: { translation: cy },
  da: { translation: da },
  de: { translation: de },
  el: { translation: el },
  en: { translation: en },
  es: { translation: es },
  eo: { translation: eo },
  et: { translation: et },
  eu: { translation: eu },
  fa: { translation: fa },
  fi: { translation: fi },
  fr: { translation: fr },
  fy: { translation: fy },
  ga: { translation: ga },
  gl: { translation: gl },
  he: { translation: he },
  hi: { translation: hi },
  hr: { translation: hr },
  hu: { translation: hu },
  id: { translation: id },
  is: { translation: is },
  it: { translation: it },
  ja: { translation: ja },
  ko: { translation: ko },
  lb: { translation: lb },
  lt: { translation: lt },
  lv: { translation: lv },
  mg: { translation: mg },
  mk: { translation: mk },
  mt: { translation: mt },
  nl: { translation: nl },
  no: { translation: no },
  oc: { translation: oc },
  os: { translation: os },
  pl: { translation: pl },
  pt: { translation: pt },
  rm: { translation: rm },
  rn: { translation: rn },
  ro: { translation: ro },
  ru: { translation: ru },
  sb: { translation: sb },
  sk: { translation: sk },
  sl: { translation: sl },
  sq: { translation: sq },
  sr: { translation: sr },
  sv: { translation: sv },
  sw: { translation: sw },
  te: { translation: te },
  tg: { translation: tg },
  th: { translation: th },
  tl: { translation: tl },
  tr: { translation: tr },
  uk: { translation: uk },
  vi: { translation: vi },
  wa: { translation: wa },
  zh: { translation: zh },
} as const;

/**
 * Default language fallback
 */
const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

/**
 * Get all supported language codes
 */
const supportedLngs = Object.keys(LANGUAGES) as SupportedLanguage[];

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
    supportedLngs,

    // Only allow languages we have translations for
    nonExplicitSupportedLngs: false,

    // If detected language is not supported, use fallback
    load: 'languageOnly', // Load only 'en' not 'en-US'
    cleanCode: true,
    lowerCaseLng: true,

    // Language detection configuration
    // First checks localStorage for returning users, then browser settings for new users
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      // Convert browser language codes to our supported codes (e.g., 'en-US' -> 'en')
      convertDetectedLanguage: (lng: string) => lng.split('-')[0].toLowerCase(),
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
  return lang in LANGUAGES;
};

export default i18n;
