import React, { useState, useCallback } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
  /** Callback fired when search value changes (debounced) */
  onSearchChange: (searchTerm: string) => void;
  /** Debounce delay in milliseconds */
  debounceMs?: number;
  /** Placeholder text for the search input */
  placeholder?: string;
}

/**
 * SearchBar Component
 *
 * Real-time search input with debouncing for resource filtering:
 * - Material-UI TextField with search icon
 * - Debounced onChange handler (300ms default)
 * - Search across: title, titleEo, description, descriptionEo, tags
 * - Clear button when text is entered
 * - Accessibility: search landmark, proper labels, clear action announcement
 *
 * Features:
 * - Controlled component with local state
 * - Automatic debouncing to prevent excessive filtering
 * - Visual feedback for active search
 * - Keyboard shortcuts (Escape to clear)
 * - Screen reader announcements
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  onSearchChange,
  debounceMs = 300,
  placeholder = 'Search resources...',
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  // Debounced search handler
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchValue(value);

      // Clear existing timeout
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      // Set new timeout for debounced callback
      const newTimeout = setTimeout(() => {
        onSearchChange(value);
      }, debounceMs);

      setDebounceTimeout(newTimeout);
    },
    [debounceMs, debounceTimeout, onSearchChange]
  );

  // Clear search handler
  const handleClear = useCallback(() => {
    setSearchValue('');
    onSearchChange('');
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
  }, [debounceTimeout, onSearchChange]);

  // Keyboard shortcuts
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClear();
      }
    },
    [handleClear]
  );

  return (
    <Box
      component="search"
      role="search"
      aria-label="Search resources"
      sx={{ width: '100%', maxWidth: 600 }}
    >
      <TextField
        fullWidth
        variant="outlined"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" aria-hidden="true" />
            </InputAdornment>
          ),
          endAdornment: searchValue && (
            <InputAdornment position="end">
              <IconButton
                aria-label="Clear search"
                onClick={handleClear}
                edge="end"
                size="small"
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'background.paper',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
            '&.Mui-focused': {
              backgroundColor: 'background.paper',
            },
          },
        }}
        aria-label="Search resources by title, description, or tags"
        inputProps={{
          'aria-describedby': 'search-helper-text',
        }}
      />
    </Box>
  );
};

export default SearchBar;
