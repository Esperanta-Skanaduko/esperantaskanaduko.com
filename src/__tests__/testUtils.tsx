/**
 * Shared test utilities — custom render with required providers.
 */
import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeModeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';

/** Wrap components with every provider the app needs. */
const AllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Fresh QueryClient per test so tests don't share cache state
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeModeProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
