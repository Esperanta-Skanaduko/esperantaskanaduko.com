import React from 'react';
import {
  Box,
  CircularProgress,
  Typography,
  Skeleton,
  Stack,
  Container,
} from '@mui/material';

interface LoadingProps {
  /**
   * Variant of the loading component
   * - 'spinner': Circular progress indicator
   * - 'skeleton': Content placeholder skeletons
   * - 'fullscreen': Full-page loading overlay
   */
  variant?: 'spinner' | 'skeleton' | 'fullscreen';

  /**
   * Optional loading message
   */
  message?: string;

  /**
   * Size of the spinner (only for 'spinner' variant)
   */
  size?: number;

  /**
   * Number of skeleton lines (only for 'skeleton' variant)
   */
  lines?: number;
}

/**
 * Loading Component
 * Reusable loading states with Esperanto green theme integration
 * Supports multiple variants for different use cases
 */
export const Loading: React.FC<LoadingProps> = ({
  variant = 'spinner',
  message,
  size = 60,
  lines = 3,
}) => {
  // Fullscreen loading overlay
  if (variant === 'fullscreen') {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          gap: 3,
        }}
      >
        <CircularProgress
          size={size}
          thickness={4}
          sx={{
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />

        {message && (
          <Typography
            variant="h6"
            sx={{
              color: '#00ff00',
              textShadow: '0 0 8px rgba(0, 255, 0, 0.5)',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.6 },
              },
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    );
  }

  // Skeleton loading placeholder
  if (variant === 'skeleton') {
    return (
      <Container maxWidth="md">
        <Stack spacing={2} sx={{ py: 3 }}>
          {/* Title skeleton */}
          <Skeleton
            variant="text"
            width="60%"
            height={60}
            sx={{ mx: 'auto' }}
          />

          {/* Content skeletons */}
          {Array.from({ length: lines }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={80}
              sx={{
                borderRadius: 2,
                animation: `wave 2s ease-in-out ${index * 0.2}s infinite`,
              }}
            />
          ))}

          {/* Button skeletons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <Skeleton variant="rectangular" width={120} height={42} sx={{ borderRadius: 2 }} />
            <Skeleton variant="rectangular" width={120} height={42} sx={{ borderRadius: 2 }} />
          </Box>
        </Stack>
      </Container>
    );
  }

  // Default spinner variant
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        py: 4,
      }}
    >
      <CircularProgress
        size={size}
        thickness={4}
        sx={{
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />

      {message && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            animation: 'fadeIn 0.5s ease-in',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

/**
 * LoadingPage Component
 * Convenience component for full-page loading states
 */
export const LoadingPage: React.FC<{ message?: string }> = ({ message = 'Ŝarĝante...' }) => (
  <Loading variant="fullscreen" message={message} size={80} />
);

/**
 * LoadingSkeleton Component
 * Convenience component for content placeholder loading
 */
export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <Loading variant="skeleton" lines={lines} />
);
