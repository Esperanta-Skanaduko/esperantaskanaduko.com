/**
 * Comprehensive language definitions for the Esperanto learning platform
 * Supporting 70+ languages to make Esperanto accessible worldwide
 */

export interface LanguageDefinition {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: Record<string, LanguageDefinition> = {
  af: { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', flag: '🇿🇦' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  be: { code: 'be', name: 'Belarusian', nativeName: 'Беларуская', flag: '🇧🇾' },
  bg: { code: 'bg', name: 'Bulgarian', nativeName: 'Български', flag: '🇧🇬' },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'Bengali', flag: '🇧🇩' },
  br: { code: 'br', name: 'Breton', nativeName: 'Brezhoneg', flag: '🏴' },
  bs: { code: 'bs', name: 'Bosnian', nativeName: 'Bosanski', flag: '🇧🇦' },
  ca: { code: 'ca', name: 'Catalan', nativeName: 'Català', flag: '🏴' },
  cs: { code: 'cs', name: 'Czech', nativeName: 'Česky', flag: '🇨🇿' },
  cv: { code: 'cv', name: 'Chuvash', nativeName: 'Чăваш', flag: '🇷🇺' },
  cy: { code: 'cy', name: 'Welsh', nativeName: 'Cymraeg', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  da: { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  el: { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  eo: { code: 'eo', name: 'Esperanto', nativeName: 'Esperanto', flag: '🌟' },
  et: { code: 'et', name: 'Estonian', nativeName: 'Eesti', flag: '🇪🇪' },
  eu: { code: 'eu', name: 'Basque', nativeName: 'Euskara', flag: '🏴' },
  fa: { code: 'fa', name: 'Persian', nativeName: 'فارسى', flag: '🇮🇷' },
  fi: { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  fy: { code: 'fy', name: 'Frisian', nativeName: 'Frysk', flag: '🇳🇱' },
  ga: { code: 'ga', name: 'Irish', nativeName: 'Gaeilge', flag: '🇮🇪' },
  gl: { code: 'gl', name: 'Galician', nativeName: 'Galego', flag: '🏴' },
  he: { code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱' },
  hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  hr: { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski', flag: '🇭🇷' },
  hu: { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Indonesia', flag: '🇮🇩' },
  is: { code: 'is', name: 'Icelandic', nativeName: 'Íslenska', flag: '🇮🇸' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  ko: { code: 'ko', name: 'Korean', nativeName: '한글', flag: '🇰🇷' },
  lb: { code: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergësch', flag: '🇱🇺' },
  lt: { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuviškai', flag: '🇱🇹' },
  lv: { code: 'lv', name: 'Latvian', nativeName: 'Latviešu', flag: '🇱🇻' },
  mg: { code: 'mg', name: 'Malagasy', nativeName: 'Malagasy', flag: '🇲🇬' },
  mk: { code: 'mk', name: 'Macedonian', nativeName: 'Македонски', flag: '🇲🇰' },
  mt: { code: 'mt', name: 'Maltese', nativeName: 'Malti', flag: '🇲🇹' },
  nl: { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  no: { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴' },
  oc: { code: 'oc', name: 'Occitan', nativeName: 'Occitan', flag: '🏴' },
  os: { code: 'os', name: 'Ossetian', nativeName: 'Ирон', flag: '🇬🇪' },
  pl: { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  pt: { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  rm: { code: 'rm', name: 'Romansh', nativeName: 'Rumantsch', flag: '🇨🇭' },
  rn: { code: 'rn', name: 'Kirundi', nativeName: 'Kirundi', flag: '🇧🇮' },
  ro: { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  sb: { code: 'sb', name: 'Sorbian', nativeName: 'Serbski', flag: '🇩🇪' },
  sk: { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', flag: '🇸🇰' },
  sl: { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina', flag: '🇸🇮' },
  sq: { code: 'sq', name: 'Albanian', nativeName: 'Shqip', flag: '🇦🇱' },
  sr: { code: 'sr', name: 'Serbian', nativeName: 'Srpski', flag: '🇷🇸' },
  sv: { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  sw: { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇹🇿' },
  te: { code: 'te', name: 'Telugu', nativeName: 'Telugu', flag: '🇮🇳' },
  tg: { code: 'tg', name: 'Tajik', nativeName: 'тоҷикӣ', flag: '🇹🇯' },
  th: { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  tl: { code: 'tl', name: 'Tagalog', nativeName: 'Tagalog', flag: '🇵🇭' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  uk: { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦' },
  vi: { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  wa: { code: 'wa', name: 'Walloon', nativeName: 'Walon', flag: '🇧🇪' },
  zh: { code: 'zh', name: 'Chinese', nativeName: '汉语', flag: '🇨🇳' },
} as const;

export type SupportedLanguageCode = keyof typeof LANGUAGES;

/**
 * Get language name in the language itself (native name)
 */
export const getLanguageNativeName = (code: string): string => {
  return LANGUAGES[code as SupportedLanguageCode]?.nativeName || code;
};

/**
 * Get language name in English
 */
export const getLanguageName = (code: string): string => {
  return LANGUAGES[code as SupportedLanguageCode]?.name || code;
};

/**
 * Check if a language code is supported
 */
export const isLanguageSupported = (code: string): code is SupportedLanguageCode => {
  return code in LANGUAGES;
};

/**
 * Get all supported language codes
 */
export const getAllLanguageCodes = (): SupportedLanguageCode[] => {
  return Object.keys(LANGUAGES) as SupportedLanguageCode[];
};

/**
 * Get all languages as an array
 */
export const getAllLanguages = (): LanguageDefinition[] => {
  return Object.values(LANGUAGES);
};
