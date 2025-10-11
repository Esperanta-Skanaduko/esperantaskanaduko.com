/**
 * EventCard Component
 *
 * Specialized card component for displaying event-specific Esperanto resources.
 * Extends the base ResourceCard pattern with event metadata including type,
 * location, frequency, and age group information.
 *
 * @component
 * @example
 * ```tsx
 * <EventCard
 *   resource={{
 *     id: 'uk-2024',
 *     title: 'Universala Kongreso',
 *     url: 'https://uea.org/uk',
 *     description: 'Annual international Esperanto congress',
 *     category: 'events',
 *     type: 'conference',
 *     location: 'Various',
 *     frequency: 'annual'
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
  CalendarToday,
  LocationOn,
  Event,
  People,
} from '@mui/icons-material';
import type { EventResource } from '../../data/types';

/**
 * Props interface for EventCard component
 * @interface EventCardProps
 */
export interface EventCardProps {
  /** Event resource data to display */
  resource: EventResource;
}

/**
 * Maps event types to their display colors
 * @param eventType - Event type
 * @returns MUI color string
 */
const getEventTypeColor = (eventType: EventResource['eventType']): string => {
  const colorMap: Record<EventResource['eventType'], string> = {
    conference: '#fbc02d', // Yellow - matches 'events' category
    course: '#388e3c',     // Green - educational
    workshop: '#7b1fa2',   // Purple
    meetup: '#0288d1',     // Blue - community
    cultural: '#c2185b',   // Pink - arts/culture
    other: '#616161',      // Gray
  };
  return colorMap[eventType];
};

/**
 * EventCard Component
 *
 * Displays event resources with specialized metadata:
 * - Event type badge (conference, course, meeting, cultural)
 * - Location information with map pin icon
 * - Frequency indicator (annual, monthly, weekly, one-time)
 * - Age group targeting if specified
 * - External link to event details
 *
 * Features:
 * - Responsive card layout
 * - Hover elevation effect
 * - Color-coded event types
 * - Accessibility-compliant with ARIA labels
 * - Bilingual support (English/Esperanto)
 */
export const EventCard: React.FC<EventCardProps> = ({ resource }) => {
  const {
    title,
    titleEo,
    url,
    description,
    descriptionEo,
    eventType,
    location,
    frequency,
    ageGroup,
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
      aria-label={`Event: ${title}`}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Event Type Badge */}
        <Box sx={{ mb: 2 }}>
          <Chip
            icon={<Event />}
            label={eventType.charAt(0).toUpperCase() + eventType.slice(1)}
            size="small"
            sx={{
              backgroundColor: getEventTypeColor(eventType),
              color: 'white',
              fontWeight: 600,
            }}
            aria-label={`Event type: ${eventType}`}
          />
        </Box>

        {/* Title */}
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

        {/* Esperanto Title (if available) */}
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

        {/* Event Metadata */}
        <Stack spacing={1}>
          {/* Location */}
          {location && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {location}
              </Typography>
            </Box>
          )}

          {/* Frequency */}
          {frequency && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarToday fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {frequency.charAt(0).toUpperCase() + frequency.slice(1).replace('-', ' ')}
              </Typography>
            </Box>
          )}

          {/* Age Group */}
          {ageGroup && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <People fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {ageGroup}
              </Typography>
            </Box>
          )}
        </Stack>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          size="small"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNew />}
          sx={{
            color: getEventTypeColor(eventType),
            '&:hover': {
              backgroundColor: `${getEventTypeColor(eventType)}15`,
            },
          }}
          aria-label={`Visit event page for ${title} (opens in new tab)`}
        >
          Event Details
        </Button>
      </CardActions>
    </Card>
  );
};
