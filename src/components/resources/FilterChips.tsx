import React from 'react';
import {
  Box,
  Chip,
  Stack,
  Button,
  Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { ResourceCategory } from '../../data/types';

interface FilterChipsProps {
  /** Currently selected categories */
  selectedCategories: ResourceCategory[];
  /** Callback fired when category selection changes */
  onCategoryToggle: (category: ResourceCategory) => void;
  /** Callback fired when all filters are cleared */
  onClearAll: () => void;
}

/**
 * FilterChips Component
 *
 * Multi-select category filtering with Material-UI Chips:
 * - Chip array for all 12 ResourceCategory values
 * - Click to toggle active/inactive state
 * - Multiple categories can be selected simultaneously
 * - Visual feedback for active filters (filled vs outlined)
 * - Clear all filters button
 * - Accessibility: proper ARIA labels and keyboard navigation
 *
 * Features:
 * - Color-coded chips matching ResourceCard categories
 * - Responsive layout with wrapping
 * - Visual count of active filters
 * - Keyboard navigation support
 * - Screen reader announcements
 */
export const FilterChips: React.FC<FilterChipsProps> = ({
  selectedCategories,
  onCategoryToggle,
  onClearAll,
}) => {
  // All available categories with display names
  const categories: { value: ResourceCategory; label: string }[] = [
    { value: 'learning', label: 'Learning' },
    { value: 'grammar', label: 'Grammar' },
    { value: 'tools', label: 'Tools' },
    { value: 'music', label: 'Music' },
    { value: 'audio', label: 'Audio' },
    { value: 'video', label: 'Video' },
    { value: 'community', label: 'Community' },
    { value: 'events', label: 'Events' },
    { value: 'organizations', label: 'Organizations' },
    { value: 'culture', label: 'Culture' },
    { value: 'news', label: 'News' },
    { value: 'books', label: 'Books' },
  ];

  // Category color mapping (matches ResourceCard)
  const getCategoryColor = (category: ResourceCategory): string => {
    const colorMap: Record<string, string> = {
      learning: '#1976d2',
      books: '#7b1fa2',
      music: '#c2185b',
      audio: '#d32f2f',
      video: '#f57c00',
      community: '#00ff00',
      events: '#fbc02d',
      organizations: '#0288d1',
      culture: '#5d4037',
      grammar: '#388e3c',
      tools: '#455a64',
      news: '#616161',
    };
    return colorMap[category] || '#757575';
  };

  const isSelected = (category: ResourceCategory): boolean => {
    return selectedCategories.includes(category);
  };

  const hasActiveFilters = selectedCategories.length > 0;

  return (
    <Box
      role="group"
      aria-label="Filter resources by category"
      sx={{ width: '100%' }}
    >
      {/* Header with filter icon and clear button */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <FilterListIcon color="action" aria-hidden="true" />
          <Typography variant="subtitle1" fontWeight={500}>
            Filter by Category
          </Typography>
          {hasActiveFilters && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                backgroundColor: 'action.selected',
                px: 1,
                py: 0.25,
                borderRadius: 1,
              }}
              aria-live="polite"
            >
              {selectedCategories.length} active
            </Typography>
          )}
        </Stack>

        {hasActiveFilters && (
          <Button
            size="small"
            startIcon={<ClearIcon />}
            onClick={onClearAll}
            aria-label={`Clear all filters (${selectedCategories.length} active)`}
            sx={{
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            Clear All
          </Button>
        )}
      </Stack>

      {/* Filter chips */}
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={1}
        role="list"
        aria-label="Category filter options"
      >
        {categories.map(({ value, label }) => {
          const selected = isSelected(value);
          return (
            <Chip
              key={value}
              label={label}
              onClick={() => onCategoryToggle(value)}
              variant={selected ? 'filled' : 'outlined'}
              role="listitem"
              aria-pressed={selected}
              aria-label={`Filter by ${label}${selected ? ' (active)' : ''}`}
              sx={{
                backgroundColor: selected ? getCategoryColor(value) : 'transparent',
                color: selected ? 'white' : 'text.primary',
                borderColor: selected ? getCategoryColor(value) : 'divider',
                fontWeight: selected ? 600 : 400,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: selected
                    ? getCategoryColor(value)
                    : 'action.hover',
                  borderColor: getCategoryColor(value),
                  transform: 'translateY(-2px)',
                  boxShadow: 2,
                },
                '&:active': {
                  transform: 'translateY(0)',
                },
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default FilterChips;
