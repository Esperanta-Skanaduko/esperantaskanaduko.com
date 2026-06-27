import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeModeProvider, useThemeMode } from '../contexts/ThemeContext';
import Routes from './routes/routes';
import { RouteTracker } from './components/RouteTracker';
import { queryClient } from '../config/queryClient';
import { ErrorBoundary } from '../components/ErrorBoundary';

/**
 * Inner component — consumes ThemeModeProvider so that useThemeMode() is in scope.
 * Wraps the rest of the app with the dynamically-computed MUI theme.
 */
const ThemedApp: React.FC = () => {
  const { theme } = useThemeMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <RouteTracker />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

/**
 * Main Application Component
 *
 * Provider order (outermost → innermost):
 *   ErrorBoundary → QueryClientProvider → ThemeModeProvider → ThemedApp
 *   (ThemedApp itself wraps ThemeProvider → BrowserRouter → Routes)
 *
 * Note: AuthProvider lives in main.tsx, above this component.
 */
const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <ThemedApp />
      </ThemeModeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
