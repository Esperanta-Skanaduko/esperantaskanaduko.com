/**
 * OrganizationCard Component
 *
 * Specialized card component for displaying Esperanto organization resources.
 * Extends the base ResourceCard pattern with organization-specific metadata
 * including country, membership type, and organization type.
 *
 * @component
 * @example
 * ```tsx
 * <OrganizationCard
 *   resource={{
 *     id: 'uea',
 *     name: 'Universala Esperanto-Asocio',
 *     url: 'https://uea.org',
 *     description: 'The largest international Esperanto organization',
 *     type: 'international',
 *     country: 'Netherlands',
 *     membershipRequired: true
 *   }}
 * />
 * ```
 */

import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Box,
  Button,
  Stack,
} from '@mui/material';
import {
  OpenInNew,
  Public,
  LocationOn,
  CardMembership,
  Business,
} from '@mui/icons-material';
import type { OrganizationResource } from '../../data/types';

/**
 * Props interface for OrganizationCard component
 * @interface OrganizationCardProps
 */
export interface OrganizationCardProps {
  /** Organization resource data to display */
  resource: OrganizationResource;
}

/**
 * Maps organization types to their display colors
 * @param organizationType - Organization type
 * @returns MUI color string
 */
const getOrganizationTypeColor = (organizationType: OrganizationResource['organizationType']): string => {
  const colorMap: Record<OrganizationResource['organizationType'], string> = {
    international: '#0288d1', // Blue
    national: '#7b1fa2',      // Purple
    regional: '#388e3c',      // Green
    'special-interest': '#d32f2f', // Red
  };
  return colorMap[organizationType];
};

/**
 * OrganizationCard Component
 *
 * Displays organization resources with specialized metadata:
 * - Organization type badge (international, national, regional, special-interest)
 * - Country/location information
 * - Membership requirement indicator
 * - Membership link if available
 * - External link to organization website
 *
 * Features:
 * - Responsive card layout
 * - Hover elevation effect
 * - Color-coded organization types
 * - Accessibility-compliant with ARIA labels
 * - Bilingual support (English/Esperanto)
 */
export const OrganizationCard: React.FC<OrganizationCardProps> = ({ resource }) => {
  const {
    title,
    titleEo,
    url,
    description,
    descriptionEo,
    organizationType,
    country,
    membershipRequired,
    membershipUrl,
  } = resource;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
      role="article"
      aria-label={`Organization: ${title}`}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Organization Type Badge */}
        <Box sx={{ mb: 2 }}>
          <Chip
            icon={<Business />}
            label={organizationType.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            size="small"
            sx={{
              backgroundColor: getOrganizationTypeColor(organizationType),
              color: 'white',
              fontWeight: 600,
            }}
            aria-label={`Organization type: ${organizationType}`}
          />
        </Box>

        {/* Name */}
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>

        {/* Esperanto Name (if available) */}
        {titleEo && (
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ fontStyle: 'italic', mb: 1 }}
          >
            {titleEo}
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
          {description}
        </Typography>

        {/* Esperanto Description (if available) */}
        {descriptionEo && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontStyle: 'italic',
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {descriptionEo}
          </Typography>
        )}

        {/* Organization Metadata */}
        <Stack spacing={1}>
          {/* Country */}
          {country && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {country}
              </Typography>
            </Box>
          )}

          {/* Membership Info */}
          {membershipRequired !== undefined && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CardMembership fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {membershipRequired ? 'Membership Available' : 'Open to All'}
              </Typography>
            </Box>
          )}

          {/* Organization Scope */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Public fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {organizationType === 'international' ? 'Worldwide' :
               organizationType === 'national' ? 'National' :
               organizationType === 'regional' ? 'Regional' : 'Special Interest'}
            </Typography>
          </Box>
        </Stack>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ p: 2, pt: 0, flexWrap: 'wrap', gap: 1 }}>
        <Button
          size="small"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNew />}
          sx={{
            color: getOrganizationTypeColor(organizationType),
            '&:hover': {
              backgroundColor: `${getOrganizationTypeColor(organizationType)}15`,
            },
          }}
          aria-label={`Visit ${title} website (opens in new tab)`}
        >
          Visit Website
        </Button>

        {/* Membership Link (if available and required) */}
        {membershipRequired && membershipUrl && (
          <Button
            size="small"
            href={membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<CardMembership />}
            variant="outlined"
            sx={{
              borderColor: getOrganizationTypeColor(organizationType),
              color: getOrganizationTypeColor(organizationType),
              '&:hover': {
                backgroundColor: `${getOrganizationTypeColor(organizationType)}15`,
                borderColor: getOrganizationTypeColor(organizationType),
              },
            }}
            aria-label={`Join ${title} (opens in new tab)`}
          >
            Join
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
