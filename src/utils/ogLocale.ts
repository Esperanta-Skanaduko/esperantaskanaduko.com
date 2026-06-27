/**
 * OG Locale Utility
 *
 * Maps i18next language codes to the Open Graph locale format
 * required by og:locale meta tags (e.g., 'fr' → 'fr_FR').
 *
 * Reference: https://ogp.me/#optional
 * Format: language_TERRITORY (ISO 639-1 + ISO 3166-1 alpha-2)
 *
 * Special cases:
 *  - Esperanto ('eo') has no territory: stays as 'eo'
 *  - Languages with region variants map to the most common region
 *  - Fallback: 'en_US'
 */

const OG_LOCALE_MAP: Record<string, string> = {
  af: 'af_ZA',
  ar: 'ar_AR',
  az: 'az_AZ',
  be: 'be_BY',
  bg: 'bg_BG',
  bn: 'bn_IN',
  bs: 'bs_BA',
  ca: 'ca_ES',
  cs: 'cs_CZ',
  cy: 'cy_GB',
  da: 'da_DK',
  de: 'de_DE',
  el: 'el_GR',
  en: 'en_US',
  eo: 'eo',
  es: 'es_ES',
  et: 'et_EE',
  eu: 'eu_ES',
  fa: 'fa_IR',
  fi: 'fi_FI',
  fr: 'fr_FR',
  ga: 'ga_IE',
  gl: 'gl_ES',
  gu: 'gu_IN',
  he: 'he_IL',
  hi: 'hi_IN',
  hr: 'hr_HR',
  hu: 'hu_HU',
  hy: 'hy_AM',
  id: 'id_ID',
  is: 'is_IS',
  it: 'it_IT',
  ja: 'ja_JP',
  ka: 'ka_GE',
  kk: 'kk_KZ',
  km: 'km_KH',
  kn: 'kn_IN',
  ko: 'ko_KR',
  lt: 'lt_LT',
  lv: 'lv_LV',
  mk: 'mk_MK',
  ml: 'ml_IN',
  mn: 'mn_MN',
  mr: 'mr_IN',
  ms: 'ms_MY',
  mt: 'mt_MT',
  my: 'my_MM',
  nb: 'nb_NO',
  ne: 'ne_NP',
  nl: 'nl_NL',
  pa: 'pa_IN',
  pl: 'pl_PL',
  pt: 'pt_PT',
  'pt-BR': 'pt_BR',
  ro: 'ro_RO',
  ru: 'ru_RU',
  si: 'si_LK',
  sk: 'sk_SK',
  sl: 'sl_SI',
  sq: 'sq_AL',
  sr: 'sr_RS',
  sv: 'sv_SE',
  sw: 'sw_KE',
  ta: 'ta_IN',
  te: 'te_IN',
  th: 'th_TH',
  tl: 'tl_PH',
  tr: 'tr_TR',
  uk: 'uk_UA',
  ur: 'ur_PK',
  uz: 'uz_UZ',
  vi: 'vi_VN',
  zh: 'zh_CN',
  'zh-TW': 'zh_TW',
  'zh-HK': 'zh_HK',
};

/**
 * Convert an i18next language code to the OG locale format.
 *
 * @param langCode - ISO 639-1 language code (e.g. 'fr', 'eo', 'pt-BR')
 * @returns OG locale string (e.g. 'fr_FR', 'eo', 'pt_BR')
 */
export function getOgLocale(langCode: string): string {
  if (!langCode) return 'en_US';

  // Direct match
  if (OG_LOCALE_MAP[langCode]) {
    return OG_LOCALE_MAP[langCode];
  }

  // Try base language (e.g. 'pt-BR' → 'pt' if 'pt-BR' not in map)
  const [hyphenPart] = langCode.split('-');
  const [base] = hyphenPart.split('_');
  if (OG_LOCALE_MAP[base]) {
    return OG_LOCALE_MAP[base];
  }

  // Fallback to en_US
  return 'en_US';
}
