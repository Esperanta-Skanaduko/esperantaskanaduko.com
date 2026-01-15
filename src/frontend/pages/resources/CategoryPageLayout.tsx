import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, NavigateNext } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../../components/SEO';

// Import all Phase 3 components
import {
  ResourceCard,
  SearchBar,
  EventCard,
  OrganizationCard,
  MusicCard,
  GrammarGuideCard,
} from '../../../components/resources';

// Import types
import type {
  Resource,
  EventResource,
  OrganizationResource,
  MusicResource,
  GrammarGuide,
} from '../../../data/types';

interface CategoryPageLayoutProps {
  /** Page title translation key */
  titleKey: string;
  /** Default title if translation not found */
  defaultTitle: string;
  /** Page description translation key */
  descriptionKey: string;
  /** Default description if translation not found */
  defaultDescription: string;
  /** Category name for breadcrumbs and SEO */
  categoryName: string;
  /** Resources to display (can be Resource[] or GrammarGuide[]) */
  resources: (Resource | GrammarGuide)[];
  /** Optional additional keywords for SEO */
  additionalKeywords?: string[];
  /** Optional structured data override */
  structuredData?: Record<string, unknown>;
}

/**
 * CategoryPageLayout Component
 *
 * Reusable layout for all resource category pages.
 * Provides consistent structure with search, breadcrumbs, SEO, and grid display.
 */
export const CategoryPageLayout: React.FC<CategoryPageLayoutProps> = ({
  titleKey,
  defaultTitle,
  descriptionKey,
  defaultDescription,
  categoryName,
  resources,
  additionalKeywords = [],
  structuredData,
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter resources based on search
  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        !searchTerm ||
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ('titleEo' in resource && resource.titleEo?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        ('description' in resource && resource.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        ('descriptionEo' in resource && resource.descriptionEo?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        ('tags' in resource && resource.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase())));

      return matchesSearch;
    });
  }, [resources, searchTerm]);

  // Render appropriate card based on resource type
  const renderResourceCard = (resource: Resource | GrammarGuide) => {
    // Type detection for specialized cards
    if ('eventType' in resource) {
      return <EventCard key={resource.id} resource={resource as EventResource} />;
    }
    if ('organizationType' in resource) {
      return <OrganizationCard key={resource.id} resource={resource as OrganizationResource} />;
    }
    if ('name' in resource && 'links' in resource) {
      return <MusicCard key={resource.id} resource={resource as MusicResource} />;
    }
    if ('level' in resource && 'pdfUrl' in resource) {
      return <GrammarGuideCard key={resource.id} resource={resource as GrammarGuide} />;
    }

    // Default to base ResourceCard
    return <ResourceCard key={resource.id} resource={resource as Resource} />;
  };

  // Generate structured data for search engines
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t(titleKey, defaultTitle),
    description: t(descriptionKey, defaultDescription),
    url: `https://esperantaskanaduko.com/resources/${categoryName.toLowerCase()}`,
    inLanguage: ['en', 'eo'],
    about: {
      '@type': 'Language',
      name: 'Esperanto',
      alternateName: 'Esperanto Language',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Esperanta Skanaduko',
      url: 'https://esperantaskanaduko.com',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://esperantaskanaduko.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Resources',
          item: 'https://esperantaskanaduko.com/resources',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: categoryName,
          item: `https://esperantaskanaduko.com/resources/${categoryName.toLowerCase()}`,
        },
      ],
    },
    numberOfItems: resources.length,
  };

  const baseKeywords = [
    'Esperanto learning resources',
    'learn Esperanto',
    `Esperanto ${categoryName.toLowerCase()}`,
    'international language',
    'language learning',
  ];

  return (
    <>
      <SEO
        title={t(titleKey, defaultTitle)}
        description={t(descriptionKey, defaultDescription)}
        keywords={[...baseKeywords, ...additionalKeywords]}
        canonical={`https://esperantaskanaduko.com/resources/${categoryName.toLowerCase()}`}
        type="website"
        meta={[
          {
            name: 'application-name',
            content: 'Esperanta Skanaduko',
          },
          {
            property: 'og:type',
            content: 'website',
          },
        ]}
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ mb: 3 }}
        >
          <MuiLink
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <Home sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </MuiLink>
          <MuiLink
            component={Link}
            to="/resources"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            Resources
          </MuiLink>
          <Typography color="text.primary">{categoryName}</Typography>
        </Breadcrumbs>

        {/* Hero Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #00ff00 30%, #00cc00 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            {t(titleKey, defaultTitle)}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            {t(descriptionKey, defaultDescription)}
          </Typography>

          {/* Search Control */}
          <Stack spacing={3} sx={{ maxWidth: 800, mx: 'auto' }}>
            <SearchBar onSearchChange={setSearchTerm} />
          </Stack>
        </Box>

        {/* Results Summary */}
        {searchTerm && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" color="text.secondary">
              Showing {filteredResources.length} of {resources.length} resources
            </Typography>
          </Box>
        )}

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
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
          >
            {filteredResources.map((resource) => renderResourceCard(resource))}
          </Box>
        ) : (
          /* Empty State */
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              No resources found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try adjusting your search
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
};
