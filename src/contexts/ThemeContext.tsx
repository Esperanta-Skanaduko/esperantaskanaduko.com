import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { Theme } from '@mui/material/styles';
import { createAppTheme, ColorMode } from '../theme/theme';

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'colorMode';
const DEFAULT_MODE: ColorMode = 'dark';

// ─── Context type ─────────────────────────────────────────────────────────────

interface ThemeModeContextType {
  /** Current active color mode */
  mode: ColorMode;
  /** Computed MUI Theme for the current mode */
  theme: Theme;
  /** Toggle between 'dark' and 'light', persisting preference to localStorage */
  toggleTheme: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Access the current color mode, theme, and toggle function.
 *
 * @throws Error if called outside of <ThemeModeProvider>
 */
export const useThemeMode = (): ThemeModeContextType => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return ctx;
};

// ─── Provider ─────────────────────────────────────────────────────────────────

interface ThemeModeProviderProps {
  children: ReactNode;
}

/**
 * Provides color-mode state and a pre-built MUI Theme to the entire app.
 *
 * Preference is persisted to localStorage under the key "colorMode".
 * Defaults to 'dark' if no preference is stored.
 */
export const ThemeModeProvider: React.FC<ThemeModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ColorMode | null;
      return stored === 'light' || stored === 'dark' ? stored : DEFAULT_MODE;
    } catch {
      // localStorage may be unavailable in some environments (SSR, private mode)
      return DEFAULT_MODE;
    }
  });

  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      const next: ColorMode = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Silently ignore if localStorage is unavailable
      }
      return next;
    });
  }, []);

  // Re-build the theme only when mode changes — avoids object churn on every render
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const value = useMemo<ThemeModeContextType>(
    () => ({ mode, theme, toggleTheme }),
    [mode, theme, toggleTheme],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};
