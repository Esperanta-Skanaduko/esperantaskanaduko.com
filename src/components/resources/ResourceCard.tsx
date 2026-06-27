import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  Link,
  Stack,
} from '@mui/material';
import { logAnalyticsEvent } from '../../backend/firebase/analytics';
import {
  OpenInNew as ExternalLinkIcon,
  Star as StarIcon,
  AccountCircle as AccountIcon,
} from '@mui/icons-material';
import { Resource } from '../../data/types';

interface ResourceCardProps {
  resource: Resource;
}

/**
 * ResourceCard Component
 *
 * Displays an individual resource with:
 * - Title (English/Esperanto)
 * - Description (English/Esperanto)
 * - Category badge with color coding
 * - Difficulty indicator (if applicable)
 * - Cost label (Free/Paid/Freemium)
 * - Featured badge (star icon)
 * - External link indicator
 * - Account requirement indicator
 * - Hover elevation effect
 * - Full accessibility support
 */
export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  // Category color mapping for visual consistency
  const getCategoryColor = (category: string): string => {
    const colorMap: Record<string, string> = {
      learning: '#1976d2',      // blue
      books: '#7b1fa2',         // purple
      music: '#c2185b',         // pink
      audio: '#d32f2f',         // red
      video: '#f57c00',         // orange
      community: '#00ff00',     // esperanto green
      events: '#fbc02d',        // yellow
      organizations: '#0288d1', // light blue
      culture: '#5d4037',       // brown
      grammar: '#388e3c',       // green
      tools: '#455a64',         // blue grey
      news: '#616161',          // grey
    };
    return colorMap[category] || '#757575';
  };

  // Difficulty badge color mapping
  const getDifficultyColor = (difficulty?: string): 'success' | 'warning' | 'error' | 'default' => {
    switch (difficulty) {
      case 'Beginner':
        return 'success';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
      role="article"
      aria-label={`${resource.title} resource card`}
    >
      {/* Featured badge */}
      {resource.featured && (
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
          }}
        >
          <StarIcon
            sx={{
              color: '#ffd700',
              fontSize: 28,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            }}
            aria-label="Featured resource"
          />
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        {/* Title */}
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            pr: resource.featured ? 5 : 0,
          }}
        >
          {resource.title}
        </Typography>

        {/* Esperanto title (if different) */}
        {resource.titleEo && resource.titleEo !== resource.title && (
          <Typography
            variant="subtitle2"
            color="text.secondary"
            gutterBottom
            sx={{ fontStyle: 'italic', mb: 1.5 }}
          >
            {resource.titleEo}
          </Typography>
        )}

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {resource.description}
        </Typography>

        {/* Metadata chips */}
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 1 }}>
          {/* Category chip */}
          <Chip
            label={resource.category}
            size="small"
            sx={{
              backgroundColor: getCategoryColor(resource.category),
              color: 'white',
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
            aria-label={`Category: ${resource.category}`}
          />

          {/* Difficulty chip */}
          {resource.difficulty && (
            <Chip
              label={resource.difficulty}
              size="small"
              color={getDifficultyColor(resource.difficulty)}
              variant="outlined"
              aria-label={`Difficulty: ${resource.difficulty}`}
            />
          )}

          {/* Cost chip */}
          {resource.cost && (
            <Chip
              label={resource.cost}
              size="small"
              color={resource.cost === 'Free' ? 'success' : 'default'}
              variant={resource.cost === 'Free' ? 'filled' : 'outlined'}
              aria-label={`Cost: ${resource.cost}`}
            />
          )}

          {/* Requires account indicator */}
          {resource.requiresAccount && (
            <Chip
              icon={<AccountIcon />}
              label="Account Required"
              size="small"
              variant="outlined"
              color="info"
              aria-label="Account required"
            />
          )}
        </Stack>

        {/* Tags */}
        {resource.tags && resource.tags.length > 0 && (
          <Box sx={{ mt: 1 }}>
            {resource.tags.slice(0, 3).map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  mr: 0.5,
                  mb: 0.5,
                  fontSize: '0.7rem',
                  height: 20,
                }}
                aria-label={`Tag: ${tag}`}
              />
            ))}
            {resource.tags.length > 3 && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 0.5 }}
              >
                +{resource.tags.length - 3} more
              </Typography>
            )}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
        <Link
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          onClick={() => logAnalyticsEvent('resource_click', { resource_name: resource.title, resource_url: resource.url })}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'primary.main',
            fontWeight: 500,
            '&:hover': {
              color: 'primary.dark',
            },
          }}
          aria-label={`Visit ${resource.title} (opens in new tab)`}
        >
          Visit Resource
          {resource.external !== false && (
            <ExternalLinkIcon fontSize="small" aria-hidden="true" />
          )}
        </Link>
      </CardActions>
    </Card>
  );
};

export default ResourceCard;
