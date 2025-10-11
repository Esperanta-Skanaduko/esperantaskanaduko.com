/**
 * Application Constants
 * Centralized configuration values and constants
 */

/**
 * Site Information
 */
export const SITE_CONFIG = {
  name: 'Esperanta Skanaduko',
  url: 'https://esperantaskanaduko.com',
  description: 'Learn Esperanto through an engaging digital experience',
  author: {
    name: 'Victor Williams',
    email: 'victor.williams.dev@gmail.com',
    github: 'https://github.com/Vaporjawn',
    twitter: '@Vaporjawn',
  },
  social: {
    github: 'https://github.com/Vaporjawn/esperantaskanaduko.com',
  },
} as const;

/**
 * Supported Languages
 */
export const LANGUAGES = {
  EN: 'en',
  EO: 'eo',
} as const;

export const LANGUAGE_NAMES = {
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.EO]: 'Esperanto',
} as const;

/**
 * Route Paths
 */
export const ROUTES = {
  HOME: '/',
  LIBRARY: '/library',
  RESOURCES: '/resources',
  ABOUT: '/about',
  DONATE: '/donate',
  AUTH: '/auth',
  PDF_TEST: '/pdf',
  ESPERANTO_VIDEOS: '/library/esperanto-live-concert-videos',
} as const;

/**
 * API Endpoints (if needed)
 */
export const API_ENDPOINTS = {
  // Add API endpoints here when needed
} as const;

/**
 * Local Storage Keys
 */
export const STORAGE_KEYS = {
  LANGUAGE: 'i18nextLng',
  THEME: 'theme-preference',
  AUTH_TOKEN: 'auth-token',
} as const;

/**
 * Query Keys for React Query
 */
export const QUERY_KEYS = {
  USER: 'user',
  LIBRARY: 'library',
  RESOURCES: 'resources',
  VIDEOS: 'videos',
  ESPERANTO_LIVE_VIDEOS: 'esperanto-live-videos',
} as const;

/**
 * Theme Configuration
 */
export const THEME_CONFIG = {
  primaryColor: '#00ff00',
  secondaryColor: '#646cff',
  backgroundColor: '#000000',
  paperBackground: 'rgb(18, 20, 21)',
  borderRadius: 8,
  spacing: 8,
} as const;

/**
 * Animation Durations (ms)
 */
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

/**
 * Breakpoints (matches MUI theme)
 */
export const BREAKPOINTS = {
  XS: 0,
  SM: 600,
  MD: 900,
  LG: 1200,
  XL: 1536,
} as const;

/**
 * Firebase Collection Names
 */
export const COLLECTIONS = {
  USERS: 'users',
  LIBRARY: 'library',
  RESOURCES: 'resources',
  VIDEOS: 'videos',
} as const;

/**
 * Validation Rules
 */
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
} as const;

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
  GENERIC: 'An unexpected error occurred',
  NETWORK: 'Network error. Please check your connection.',
  AUTH_REQUIRED: 'Authentication required',
  UNAUTHORIZED: 'You do not have permission to access this resource',
  NOT_FOUND: 'The requested resource was not found',
  VALIDATION_FAILED: 'Validation failed. Please check your input.',
} as const;

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  AUTH_LOGIN: 'Successfully logged in',
  AUTH_LOGOUT: 'Successfully logged out',
  AUTH_SIGNUP: 'Account created successfully',
  PASSWORD_RESET: 'Password reset email sent',
  SAVE_SUCCESS: 'Changes saved successfully',
} as const;
