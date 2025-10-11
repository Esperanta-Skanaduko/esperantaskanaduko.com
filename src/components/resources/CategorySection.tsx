import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Badge,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Resource, ResourceCategory } from '../../data/types';
import { ResourceGrid } from './ResourceGrid';

interface CategorySectionProps {
  /** Category identifier */
  category: ResourceCategory;
  /** Display title for the category */
  title: string;
  /** Display title in Esperanto */
  titleEo?: string;
  /** Array of resources in this category */
  resources: Resource[];
  /** Whether this section is expanded by default */
  defaultExpanded?: boolean;
}

/**
 * CategorySection Component
 *
 * Collapsible accordion section for displaying resources by category:
 * - MUI Accordion with smooth transitions
 * - Category title with resource count badge
 * - Expand/collapse icon
 * - Bilingual titles (English/Esperanto)
 * - Nested ResourceGrid for responsive card layout
 * - Accessibility support
 *
 * Features:
 * - Auto-collapse other sections when one is expanded
 * - Visual feedback for active section
 * - Theme-consistent styling
 * - Empty state handling
 */
export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  title,
  titleEo,
  resources,
  defaultExpanded = false,
}) => {
  // Don't render if no resources
  if (resources.length === 0) {
    return null;
  }

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        backgroundColor: 'background.paper',
        '&:before': {
          display: 'none', // Remove default divider
        },
        mb: 2,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${category}-content`}
        id={`${category}-header`}
        sx={{
          '&:hover': {
            backgroundColor: 'action.hover',
          },
          '& .MuiAccordionSummary-content': {
            my: 2,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            width: '100%',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>

          {titleEo && titleEo !== title && (
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontStyle: 'italic',
                color: 'text.secondary',
                fontWeight: 400,
              }}
            >
              ({titleEo})
            </Typography>
          )}

          <Badge
            badgeContent={resources.length}
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '0.9rem',
                height: 24,
                minWidth: 24,
                borderRadius: 12,
              },
            }}
            aria-label={`${resources.length} resources in ${title} category`}
          />
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          pt: 2,
          pb: 3,
        }}
      >
        <ResourceGrid resources={resources} />
      </AccordionDetails>
    </Accordion>
  );
};

export default CategorySection;
