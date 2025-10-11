import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Paper, Container } from '@mui/material';
import RefreshOutlined from '@mui/icons-material/RefreshOutlined';
import HomeOutlined from '@mui/icons-material/HomeOutlined';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * Provides graceful error handling with themed UI
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error in development (disable ESLint for this line as it's intentional)
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    // TODO: Send error to logging service (e.g., Firebase Analytics, Sentry)
    // logErrorToService(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleGoHome = (): void => {
    window.location.href = '/';
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI with Esperanto green theme
      return (
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              gap: 3,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                maxWidth: 600,
                width: '100%',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: '2.5rem',
                  textShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
                }}
              >
                Oops! Io fuŝiĝis
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Something went wrong
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                We apologize for the inconvenience. An unexpected error has occurred.
              </Typography>

              {error && process.env.NODE_ENV === 'development' && (
                <Paper
                  sx={{
                    p: 2,
                    mb: 3,
                    bgcolor: 'rgba(255, 0, 0, 0.05)',
                    border: '1px solid rgba(255, 0, 0, 0.2)',
                    textAlign: 'left',
                    overflow: 'auto',
                    maxHeight: 200,
                  }}
                >
                  <Typography
                    variant="caption"
                    component="pre"
                    sx={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.75rem',
                      color: '#ff3333',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {error.toString()}
                  </Typography>
                </Paper>
              )}

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<RefreshOutlined />}
                  onClick={this.handleReset}
                  sx={{ minWidth: 150 }}
                >
                  Try Again
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<HomeOutlined />}
                  onClick={this.handleGoHome}
                  sx={{ minWidth: 150 }}
                >
                  Go Home
                </Button>
              </Box>
            </Paper>

            <Typography
              variant="caption"
              color="text.disabled"
              sx={{ mt: 2 }}
            >
              Error ID: {Date.now().toString(36).toUpperCase()}
            </Typography>
          </Box>
        </Container>
      );
    }

    return children;
  }
}
