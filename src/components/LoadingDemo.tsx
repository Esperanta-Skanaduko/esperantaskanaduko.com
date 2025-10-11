import { useState } from 'react';
import { Box, Button, Typography, Stack, Paper } from '@mui/material';
import { Loading, LoadingPage, LoadingSkeleton } from './Loading';

/**
 * Demo component showcasing all three Loading variants.
 * This demonstrates when and how to use each loading state.
 *
 * Usage: Add this component to any page to see loading variants in action.
 */
export const LoadingDemo = () => {
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [fullscreenLoading, setFullscreenLoading] = useState(false);

  // Simulate async operation for spinner
  const handleSpinnerDemo = () => {
    setSpinnerLoading(true);
    setTimeout(() => setSpinnerLoading(false), 3000);
  };

  // Simulate content loading for skeleton
  const handleSkeletonDemo = () => {
    setSkeletonLoading(true);
    setTimeout(() => setSkeletonLoading(false), 4000);
  };

  // Simulate page transition for fullscreen
  const handleFullscreenDemo = () => {
    setFullscreenLoading(true);
    setTimeout(() => setFullscreenLoading(false), 2000);
  };

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', mb: 4 }}>
        Loading Component Demo
      </Typography>

      <Stack spacing={4}>
        {/* Spinner Variant Demo */}
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem' }}>
            1. Spinner Variant
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Use case:</strong> Quick operations, button loading states, inline loading
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: 'text.secondary' }}>
            Best for: API calls, form submissions, data fetches
          </Typography>

          <Button
            variant="contained"
            onClick={handleSpinnerDemo}
            disabled={spinnerLoading}
          >
            Test Spinner Loading
          </Button>

          <Box sx={{ mt: 3, minHeight: '120px', display: 'flex', alignItems: 'center' }}>
            {spinnerLoading ? (
              <Loading message="Fetching data..." size={60} />
            ) : (
              <Typography variant="body1" sx={{ color: 'success.main' }}>
                ✓ Data loaded successfully!
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              mt: 2,
              padding: 2,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          >
            <Typography variant="caption" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {'<Loading message="Fetching data..." size={60} />'}
            </Typography>
          </Box>
        </Paper>

        {/* Skeleton Variant Demo */}
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem' }}>
            2. Skeleton Variant
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Use case:</strong> Content placeholders, progressive loading, maintaining layout
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: 'text.secondary' }}>
            Best for: Article loading, list items, card content
          </Typography>

          <Button
            variant="contained"
            onClick={handleSkeletonDemo}
            disabled={skeletonLoading}
          >
            Test Skeleton Loading
          </Button>

          <Box sx={{ mt: 3 }}>
            {skeletonLoading ? (
              <LoadingSkeleton lines={4} />
            ) : (
              <Paper elevation={1} sx={{ padding: 3, bgcolor: 'background.default' }}>
                <Typography variant="h3" gutterBottom>
                  Article Title
                </Typography>
                <Typography variant="body1" paragraph>
                  This is the article content that appears after the skeleton loading completes.
                  The skeleton maintains the layout structure while content is being fetched.
                </Typography>
                <Typography variant="body1" paragraph>
                  This prevents layout shift and provides a smooth user experience.
                </Typography>
                <Button variant="outlined">Read More</Button>
              </Paper>
            )}
          </Box>

          <Box
            sx={{
              mt: 2,
              padding: 2,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          >
            <Typography variant="caption" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {'<LoadingSkeleton lines={4} />'}
            </Typography>
          </Box>
        </Paper>

        {/* Fullscreen Variant Demo */}
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem' }}>
            3. Fullscreen Variant
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Use case:</strong> Page transitions, app initialization, major state changes
          </Typography>
          <Typography variant="body2" paragraph sx={{ color: 'text.secondary' }}>
            Best for: Route changes, authentication flows, data migration
          </Typography>

          <Button
            variant="contained"
            onClick={handleFullscreenDemo}
            disabled={fullscreenLoading}
          >
            Test Fullscreen Loading
          </Button>

          <Box
            sx={{
              mt: 2,
              padding: 2,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          >
            <Typography variant="caption" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {'<LoadingPage message="Ŝarĝante..." />'}
            </Typography>
          </Box>
        </Paper>

        {/* Usage Guidelines */}
        <Paper elevation={3} sx={{ padding: 3, bgcolor: 'primary.dark' }}>
          <Typography variant="h2" gutterBottom sx={{ fontSize: '1.8rem' }}>
            Best Practices
          </Typography>

          <Stack spacing={2}>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                ✓ Use Spinner for:
              </Typography>
              <Typography variant="body2" component="ul" sx={{ ml: 2 }}>
                <li>Quick API calls (&lt;2 seconds expected)</li>
                <li>Button loading states</li>
                <li>Inline operations</li>
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                ✓ Use Skeleton for:
              </Typography>
              <Typography variant="body2" component="ul" sx={{ ml: 2 }}>
                <li>Content-heavy pages (articles, profiles)</li>
                <li>Preventing layout shift</li>
                <li>Progressive content loading</li>
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                ✓ Use Fullscreen for:
              </Typography>
              <Typography variant="body2" component="ul" sx={{ ml: 2 }}>
                <li>Page navigation transitions</li>
                <li>App initialization</li>
                <li>Critical operations requiring full attention</li>
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Stack>

      {/* Fullscreen loading overlay */}
      {fullscreenLoading && <LoadingPage message="Ŝarĝante paĝon..." />}
    </Box>
  );
};
