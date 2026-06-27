import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Skeleton,
  Box,
  Stack,
} from '@mui/material';

interface ResourceCardSkeletonProps {
  /** Number of skeleton cards to render (default: 1) */
  count?: number;
}

/**
 * ResourceCardSkeleton Component
 *
 * Loading placeholder that mirrors ResourceCard's exact DOM structure and
 * dimensions. Renders animated skeletons for:
 * - Title line
 * - Optional sub-title line (Esperanto title)
 * - Three-line description block
 * - Metadata chip row (category, difficulty, cost)
 * - Tag chip row
 * - Action link
 *
 * Usage:
 *   // Single card
 *   <ResourceCardSkeleton />
 *
 *   // Grid of 12 loading cards
 *   <ResourceCardSkeleton count={12} />
 */
const SingleResourceCardSkeleton: React.FC = () => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
    aria-hidden="true"
  >
    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
      {/* Title — matches Typography variant="h6" */}
      <Skeleton
        variant="text"
        sx={{ fontSize: '1.25rem', mb: 0.5 }}
        width="75%"
        animation="wave"
      />

      {/* Esperanto sub-title — matches Typography variant="subtitle2" */}
      <Skeleton
        variant="text"
        sx={{ fontSize: '0.875rem', mb: 1.5 }}
        width="50%"
        animation="wave"
      />

      {/* Description block — matches 3-line clamped body2 */}
      <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} width="100%" animation="wave" />
      <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} width="92%" animation="wave" />
      <Skeleton
        variant="text"
        sx={{ fontSize: '0.875rem', mb: 2 }}
        width="70%"
        animation="wave"
      />

      {/* Metadata chips row — category + difficulty + cost */}
      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 1 }}>
        <Skeleton variant="rounded" width={80} height={24} animation="wave" />
        <Skeleton variant="rounded" width={90} height={24} animation="wave" />
        <Skeleton variant="rounded" width={50} height={24} animation="wave" />
      </Stack>

      {/* Tag chips row — up to 3 tags shown */}
      <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        <Skeleton variant="rounded" width={60} height={20} animation="wave" />
        <Skeleton variant="rounded" width={72} height={20} animation="wave" />
        <Skeleton variant="rounded" width={55} height={20} animation="wave" />
      </Box>
    </CardContent>

    {/* Action link — matches "Visit Resource" link */}
    <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
      <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} width={110} animation="wave" />
    </CardActions>
  </Card>
);

export const ResourceCardSkeleton: React.FC<ResourceCardSkeletonProps> = ({ count = 1 }) => {
  if (count === 1) {
    return <SingleResourceCardSkeleton />;
  }

  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <SingleResourceCardSkeleton key={index} />
      ))}
    </>
  );
};

export default ResourceCardSkeleton;
