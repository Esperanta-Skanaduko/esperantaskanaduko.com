/**
 * Smoke tests — verify that core components mount without crashing.
 *
 * Strategy:
 *   - Global mocks (firebase, i18next, react-helmet-async, react-router-dom)
 *     are declared in setup.ts and applied to every test file.
 *   - Each test renders the component with the minimum required props /
 *     context wrappers and asserts that key content is visible.
 *
 * These tests guard against import-time crashes and provider mis-wiring.
 * Detailed behavioral tests belong in dedicated test files.
 */

import { render, screen } from './testUtils';
import { MemoryRouter } from 'react-router-dom';

// ─── 1. SEO smoke test ────────────────────────────────────────────────────────
import { SEO } from '../components/SEO';

describe('SEO', () => {
  it('renders without crashing when given a title', () => {
    render(
      <MemoryRouter>
        <SEO title="Test Page" description="A test description" />
      </MemoryRouter>,
    );
    // SEO renders a Helmet head — no visible DOM content, just confirm no throw.
    expect(true).toBe(true);
  });
});

// ─── 2. NavBar smoke test ─────────────────────────────────────────────────────
import { NavBar } from '../frontend/components/navBar/navBar';

describe('NavBar', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    // NavBar always renders an <header> / AppBar role="banner"
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});

// ─── 3. ErrorBoundary smoke test ──────────────────────────────────────────────
import { ErrorBoundary } from '../components/ErrorBoundary';

describe('ErrorBoundary', () => {
  // Suppress console.error for the intentional throw
  beforeEach(() => {
    // eslint-disable-next-line no-console
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });
  afterEach(() => {
    // eslint-disable-next-line no-console
    (console.error as jest.Mock).mockRestore();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <span>all good</span>
      </ErrorBoundary>,
    );
    expect(screen.getByText('all good')).toBeInTheDocument();
  });

  it('renders fallback UI when a child throws', () => {
    const ThrowingComponent = () => {
      throw new Error('Test error');
    };
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    );
    // ErrorBoundary's fallback renders at least one action button
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});

// ─── 4. ThemeModeProvider / toggle smoke test ─────────────────────────────────
import { ThemeModeProvider, useThemeMode } from '../contexts/ThemeContext';
import { renderHook, act } from '@testing-library/react';

describe('ThemeModeProvider', () => {
  it('defaults to dark mode', () => {
    const { result } = renderHook(() => useThemeMode(), {
      wrapper: ThemeModeProvider,
    });
    expect(result.current.mode).toBe('dark');
  });

  it('toggleTheme switches between dark and light', () => {
    const { result } = renderHook(() => useThemeMode(), {
      wrapper: ThemeModeProvider,
    });
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.mode).toBe('light');
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.mode).toBe('dark');
  });
});

// ─── 5. AuthContext smoke test ────────────────────────────────────────────────
import { AuthProvider, useAuth } from '../contexts/AuthContext';

describe('AuthProvider', () => {
  it('renders children without crashing', () => {
    render(
      <AuthProvider>
        <span>auth ready</span>
      </AuthProvider>,
    );
    // AuthProvider waits until Firebase auth is initialized before rendering;
    // with onAuthStateChanged mocked to fire synchronously, children appear.
    expect(screen.getByText('auth ready')).toBeInTheDocument();
  });

  it('exposes logIn, signUp, logOut functions', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    expect(typeof result.current.logIn).toBe('function');
    expect(typeof result.current.signUp).toBe('function');
    expect(typeof result.current.logOut).toBe('function');
  });
});
