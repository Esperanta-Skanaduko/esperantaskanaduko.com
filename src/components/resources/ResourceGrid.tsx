import React from 'react';
import { Box } from '@mui/material';
import { Resource } from '../../data/types';
import { ResourceCard } from './ResourceCard';

interface ResourceGridProps {
  resources: Resource[];
}

/**
 * ResourceGrid Component
 *
 * Responsive grid layout for displaying resource cards using CSS Grid:
 * - xs (mobile): 1 column
 * - sm (tablet): 2 columns
 * - md (desktop): 3 columns
 * - lg (large desktop): 4 columns
 *
 * Features:
 * - Consistent spacing between cards
 * - Responsive breakpoints
 * - Accessibility support
 * - Empty state handling (handled by parent)
 */
export const ResourceGrid: React.FC<ResourceGridProps> = ({ resources }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 3,
      }}
      role="list"
      aria-label="Resource cards grid"
    >
      {resources.map((resource) => (
        <Box
          key={resource.id || resource.url}
          role="listitem"
        >
          <ResourceCard resource={resource} />
        </Box>
      ))}
    </Box>
  );
};

export default ResourceGrid;
