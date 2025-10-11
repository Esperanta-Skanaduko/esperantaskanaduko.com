/**
 * GrammarGuideCard Component
 *
 * Specialized card component for displaying Esperanto grammar guide resources.
 * Unlike other specialized cards, this uses a unique vertical layout optimized
 * for displaying grammar rules and examples with collapsible sections.
 *
 * @component
 * @example
 * ```tsx
 * <GrammarGuideCard
 *   resource={{
 *     id: 'accusative-n',
 *     title: 'When to use the -n (accusative)',
 *     description: 'Comprehensive guide to accusative case usage',
 *     category: 'grammar',
 *     rules: [
 *       'Direct object: Mi vidas hundon (I see a dog)',
 *       'Motion towards: Mi iras hejmen (I go home)',
 *       'Duration: Mi studis tri horojn (I studied for three hours)'
 *     ],
 *     examples: [
 *       'Mi amas vin (I love you - direct object)',
 *       'Ŝi venis antaŭ tri tagojn (She came three days ago - time duration)'
 *     ]
 *   }}
 * />
 * ```
 */

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  ExpandMore,
  School,
  Rule,
  LightbulbOutlined,
} from '@mui/icons-material';
import type { GrammarGuide } from '../../data/types';

/**
 * Props interface for GrammarGuideCard component
 * @interface GrammarGuideCardProps
 */
export interface GrammarGuideCardProps {
  /** Grammar guide resource data to display */
  resource: GrammarGuide;
}

/**
 * GrammarGuideCard Component
 *
 * Displays grammar guide resources with specialized layout:
 * - Title and description
 * - Collapsible rules section with numbered list
 * - Collapsible examples section with formatted Esperanto text
 * - Difficulty indicator for grammar complexity
 * - Responsive accordion sections
 *
 * Features:
 * - Vertical card layout optimized for text content
 * - Collapsible sections to manage content density
 * - Monospace-style formatting for Esperanto examples
 * - Proper semantic HTML with lists and headings
 * - Accessibility-compliant with keyboard navigation
 * - Color-coded grammar category
 */
export const GrammarGuideCard: React.FC<GrammarGuideCardProps> = ({ resource }) => {
  const {
    title,
    titleEo,
    category,
    rules = [],
    exceptions = [],
  } = resource;

  const [rulesExpanded, setRulesExpanded] = useState(true);
  const [exceptionsExpanded, setExceptionsExpanded] = useState(false);

  const hasRules = rules.length > 0;
  const hasExceptions = exceptions && exceptions.length > 0;

  // Derive display category name
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

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
      aria-label={`Grammar guide: ${title}`}
    >
      <CardContent sx={{ flexGrow: 1, pb: 2 }}>
        {/* Grammar Badge and Category */}
        <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            icon={<School />}
            label="Grammar"
            size="small"
            sx={{
              backgroundColor: '#388e3c',
              color: 'white',
              fontWeight: 600,
            }}
            aria-label="Grammar guide"
          />
          <Chip
            label={categoryName}
            size="small"
            variant="outlined"
            sx={{
              borderColor: '#388e3c',
              color: '#388e3c',
            }}
            aria-label={`Category: ${categoryName}`}
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
            mb: 1,
          }}
        >
          {title}
        </Typography>

        {/* Esperanto Title */}
        {titleEo && (
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ fontStyle: 'italic', mb: 2 }}
          >
            {titleEo}
          </Typography>
        )}

        {/* Rules Section (Collapsible) */}
        {hasRules && (
          <Accordion
            expanded={rulesExpanded}
            onChange={() => setRulesExpanded(!rulesExpanded)}
            sx={{
              mb: 1,
              '&:before': { display: 'none' },
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="rules-content"
              id="rules-header"
              sx={{
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Rule fontSize="small" color="primary" />
                <Typography variant="subtitle2" fontWeight={600}>
                  Rules ({rules.length})
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense sx={{ py: 0 }}>
                {rules.map((ruleObj, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <ListItem sx={{ px: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
                      <ListItemText
                        primary={
                          <Typography variant="body2" component="div" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {index + 1}. {ruleObj.rule}
                          </Typography>
                        }
                        secondary={
                          ruleObj.ruleEo && (
                            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>
                              {ruleObj.ruleEo}
                            </Typography>
                          )
                        }
                      />
                      {/* Examples for this rule */}
                      {ruleObj.examples && ruleObj.examples.length > 0 && (
                        <Box sx={{ pl: 2, width: '100%' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                            <LightbulbOutlined fontSize="small" color="action" />
                            <Typography variant="caption" fontWeight={600}>
                              Examples:
                            </Typography>
                          </Box>
                          {ruleObj.examples.map((example, exIdx) => (
                            <Box
                              key={exIdx}
                              sx={{
                                mb: 1,
                                p: 1,
                                backgroundColor: 'action.hover',
                                borderRadius: 1,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontFamily: 'monospace',
                                  fontWeight: 600,
                                  color: 'primary.main',
                                }}
                              >
                                {example.esperanto}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {example.english}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      )}
                    </ListItem>
                  </Box>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        )}

        {/* Exceptions Section (Collapsible) */}
        {hasExceptions && (
          <Accordion
            expanded={exceptionsExpanded}
            onChange={() => setExceptionsExpanded(!exceptionsExpanded)}
            sx={{
              '&:before': { display: 'none' },
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'warning.main',
              backgroundColor: 'warning.lighter',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="exceptions-content"
              id="exceptions-header"
              sx={{
                '&:hover': {
                  backgroundColor: 'warning.light',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle2" fontWeight={600} color="warning.dark">
                  ⚠️ Exceptions ({exceptions.length})
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List dense sx={{ py: 0 }}>
                {exceptions.map((exception, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText
                      primary={
                        <Typography variant="body2" component="div">
                          • {exception}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};
