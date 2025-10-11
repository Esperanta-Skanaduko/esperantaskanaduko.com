/**
 * MusicCard Component
 *
 * Specialized card component for displaying Esperanto music resources.
 * Extends the base ResourceCard pattern with music platform links including
 * YouTube, Spotify, Bandcamp, Apple Music, SoundCloud, and artist websites.
 *
 * @component
 * @example
 * ```tsx
 * <MusicCard
 *   resource={{
 *     id: 'jonny-m',
 *     name: 'Jonny M',
 *     genre: 'Reggae',
 *     description: 'Reggae artist performing in Esperanto',
 *     links: {
 *       youtube: 'https://youtube.com/@jonnym',
 *       spotify: 'https://open.spotify.com/artist/...',
 *       website: 'https://jonnym.com'
 *     }
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
  IconButton,
  Tooltip,
  Stack,
  Link,
} from '@mui/material';
import {
  YouTube,
  Language,
  MusicNote,
} from '@mui/icons-material';
import type { MusicResource } from '../../data/types';

/**
 * Props interface for MusicCard component
 * @interface MusicCardProps
 */
export interface MusicCardProps {
  /** Music resource data to display */
  resource: MusicResource;
}

/**
 * Platform link configuration for music services
 */
interface PlatformLink {
  name: string;
  icon: React.ReactNode;
  color: string;
  url?: string;
}

/**
 * MusicCard Component
 *
 * Displays music resources with platform links:
 * - Artist/band name and genre
 * - Description with Esperanto translation
 * - Clickable platform icons (YouTube, Spotify, Bandcamp, etc.)
 * - External website link
 * - Featured badge for highlighted artists
 *
 * Features:
 * - Responsive card layout
 * - Hover elevation effect
 * - Platform icon grid with tooltips
 * - Accessibility-compliant with ARIA labels
 * - Color-coded platform branding
 */
export const MusicCard: React.FC<MusicCardProps> = ({ resource }) => {
  const {
    name,
    genre,
    description,
    descriptionEo,
    links,
    featured,
  } = resource;

  // Build platform links array
  const platformLinks: PlatformLink[] = [
    {
      name: 'YouTube',
      icon: <YouTube />,
      color: '#FF0000',
      url: links.youtube,
    },
    {
      name: 'Spotify',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      color: '#1DB954',
      url: links.spotify,
    },
    {
      name: 'Bandcamp',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M0 18.75l7.437-13.5h16.563l-7.438 13.5z"/>
        </svg>
      ),
      color: '#629AA9',
      url: links.bandcamp,
    },
    {
      name: 'Website',
      icon: <Language />,
      color: '#c2185b',
      url: links.website,
    },
  ].filter(link => link.url); // Only show platforms with URLs

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
      aria-label={`Music artist: ${name}`}
    >
      {/* Featured Badge */}
      {featured && (
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 1,
          }}
        >
          <Chip
            icon={<MusicNote />}
            label="Featured"
            size="small"
            sx={{
              backgroundColor: '#fbc02d',
              color: 'white',
              fontWeight: 600,
            }}
            aria-label="Featured artist"
          />
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Genre Badge */}
        {genre && (
          <Box sx={{ mb: 2 }}>
            <Chip
              label={genre}
              size="small"
              variant="outlined"
              sx={{
                borderColor: '#c2185b',
                color: '#c2185b',
              }}
              aria-label={`Genre: ${genre}`}
            />
          </Box>
        )}

        {/* Artist/Band Name */}
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            pr: featured ? 8 : 0, // Space for featured badge
          }}
        >
          {name}
        </Typography>

        {/* Description */}
        {description && (
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
        )}

        {/* Esperanto Description */}
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
      </CardContent>

      {/* Platform Links */}
      {platformLinks.length > 0 && (
        <CardActions sx={{ p: 2, pt: 0, justifyContent: 'center' }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
            }}
            role="list"
            aria-label="Music platform links"
          >
            {platformLinks.map((platform) => (
              <Tooltip key={platform.name} title={`Listen on ${platform.name}`} arrow>
                <Link
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'inline-flex' }}
                  aria-label={`Listen to ${name} on ${platform.name} (opens in new tab)`}
                >
                  <IconButton
                    size="medium"
                    sx={{
                      color: platform.color,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: `${platform.color}15`,
                        transform: 'scale(1.1)',
                      },
                    }}
                    role="listitem"
                  >
                    {platform.icon}
                  </IconButton>
                </Link>
              </Tooltip>
            ))}
          </Stack>
        </CardActions>
      )}
    </Card>
  );
};
