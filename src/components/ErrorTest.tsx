import { useState } from 'react';
import { Button, Box, Typography, Paper } from '@mui/material';

/**
 * Test component to demonstrate ErrorBoundary functionality.
 * This component intentionally throws an error when the "Trigger Error" button is clicked.
 *
 * Usage:
 * 1. Add this component to any page wrapped by ErrorBoundary
 * 2. Click "Trigger Error" to see the ErrorBoundary fallback UI
 * 3. Click "Try Again" in the error UI to reset the boundary
 *
 * Example:
 * ```tsx
 * import { ErrorTest } from './components/ErrorTest';
 *
 * <ErrorBoundary>
 *   <ErrorTest />
 * </ErrorBoundary>
 * ```
 */
export const ErrorTest = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    // Intentionally throw an error to test ErrorBoundary
    throw new Error('This is a test error from ErrorTest component!');
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          maxWidth: '600px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          ErrorBoundary Test Component
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Click the button below to trigger an intentional error.
          This will demonstrate how the ErrorBoundary catches errors
          and displays a graceful fallback UI.
        </Typography>

        <Button
          variant="contained"
          color="error"
          onClick={() => setShouldThrow(true)}
          sx={{
            padding: '12px 32px',
            fontSize: '1.1rem',
          }}
        >
          Trigger Error
        </Button>

        <Typography
          variant="caption"
          display="block"
          sx={{ mt: 2, color: 'text.secondary' }}
        >
          Note: This component is for testing purposes only.
          Remove it from production builds.
        </Typography>
      </Paper>
    </Box>
  );
};
