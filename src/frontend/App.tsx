import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider } from '@tanstack/react-query';
import { theme } from '../theme/theme';
import Routes from './routes/routes';
import { queryClient } from '../config/queryClient';
import { ErrorBoundary } from '../components/ErrorBoundary';

/**
 * Main Application Component
 *
 * Provides global context providers and routing configuration.
 * Wrapped with necessary providers for:
 * - React Query (data fetching)
 * - Material UI theming
 * - React Router navigation
 * - Error boundaries
 */
const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
