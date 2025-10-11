/**
 * Shared Type Definitions Barrel Export
 * Centralizes all TypeScript types and interfaces
 */

// Re-export existing types
export type { Children } from '../backend/types/children';
export type { ClassName } from '../backend/types/className';
export type { Style } from '../backend/types/style';
export type { LanguageCode } from '../backend/translations/types/languageCode';

// Component Props Types
export interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface PageProps extends BaseComponentProps {
  title?: string;
}

// Route Types
export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<unknown>>;
  protected?: boolean;
}

// Form Types
export interface FormField<T = string> {
  value: T;
  error?: string;
  touched?: boolean;
}

export interface FormState<T extends Record<string, unknown>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}

// User Types
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  createdAt?: string;
  lastLoginAt?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
}

// Theme Types
export type ThemeMode = 'light' | 'dark';

export interface ThemeConfig {
  mode: ThemeMode;
  primaryColor: string;
  secondaryColor: string;
}

// i18n Types
export type { SupportedLanguage } from '../i18n/config';

// Library/Resource Types
export interface LibraryItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url?: string;
  downloadUrl?: string;
  tags?: string[];
  createdAt: string;
  updatedAt?: string;
}

export interface ResourceCategory {
  id: string;
  name: string;
  description: string;
  items: LibraryItem[];
}

// Video Types
export interface VideoItem {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;
  description?: string;
  publishedAt?: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  path: string;
  icon?: React.ComponentType;
  badge?: string | number;
  external?: boolean;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// Error Types
export interface AppError extends Error {
  code?: string;
  status?: number;
  details?: unknown;
}

// Loading State Types
export interface LoadingState {
  isLoading: boolean;
  loadingMessage?: string;
  progress?: number;
}

// Validation Types
export type ValidationRule<T = unknown> = (_value: T) => string | undefined;

export type ValidationSchema<T extends Record<string, unknown>> = {
  [K in keyof T]?: ValidationRule<T[K]>[];
};

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Event Handler Types
export type ChangeHandler = (_event: React.ChangeEvent<HTMLInputElement>) => void;
export type SubmitHandler = (_event: React.FormEvent<HTMLFormElement>) => void;
export type ClickHandler = (_event: React.MouseEvent<HTMLElement>) => void;
export type KeyboardHandler = (_event: React.KeyboardEvent<HTMLElement>) => void;

// Async Types
export type AsyncFunction<T = void> = () => Promise<T>;
export type AsyncCallback<T = void, R = void> = (_data: T) => Promise<R>;

// Status Types
export type Status = 'idle' | 'loading' | 'success' | 'error';

// Sort Types
export type SortDirection = 'asc' | 'desc';

export interface SortConfig<T = string> {
  field: T;
  direction: SortDirection;
}

// Filter Types
export interface FilterConfig<T = unknown> {
  field: string;
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan' | 'in' | 'between';
  value: T;
}
