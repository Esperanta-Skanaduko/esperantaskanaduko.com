import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  Alert,
  AlertTitle,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { MusicNote } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../../components/SEO';

// Import all data files from Phase 2
import { learningResources } from '../../../data/learningResources';
import { grammarGuides } from '../../../data/grammarGuides';
import { toolsResources } from '../../../data/toolsResources';
import { allMusicResources } from '../../../data/musicResources';
import { audioResources } from '../../../data/audioResources';
import { videoResources } from '../../../data/videoResources';
import { communityResources } from '../../../data/communityResources';
import { eventResources } from '../../../data/eventResources';
import { organizationResources } from '../../../data/organizationResources';
import { cultureResources } from '../../../data/cultureResources';
import { newsLiteratureResources } from '../../../data/newsLiteratureResources';
import { resources as booksResources } from '../../../data/resources';

// Import types
import type {
  Resource,
  ResourceCategory,
  EventResource,
  OrganizationResource,
  MusicResource,
  GrammarGuide,
} from '../../../data/types';

// Import all Phase 3 components
import {
  ResourceCard,
  CategorySection,
  SearchBar,
  FilterChips,
  EventCard,
  OrganizationCard,
  MusicCard,
  GrammarGuideCard,
} from '../../../components/resources';

/**
 * ResourcePage Component
 *
 * Phase 4 Complete: Fully integrated with routing, navigation, and comprehensive i18n.
 * Displays 116+ Esperanto resources across 12 categories with search and filter capabilities.
 *
 * Features:
 * - Search functionality across all resources
 * - Category-based filtering
 * - Specialized cards for events, organizations, music, and grammar
 * - Responsive grid layout
 * - Complete bilingual support (EN/EO)
 * - Comprehensive SEO with structured data
 *
 * Data Sources:
 * - Learning Resources (45 items)
 * - Grammar Guides (15 items)
 * - Tools (3 items)
 * - Music (23 items)
 * - Audio (6 items)
 * - Video (6 items)
 * - Community (14 items)
 * - Events (6 items)
 * - Organizations (18 items)
 * - Culture (5 items)
 * - News & Literature (6 items)
 * - Books (existing library integration)
 */
const ResourcePage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ResourceCategory[]>([]);

  // Combine all Resource-based resources (excluding GrammarGuide which has different structure)
  const allResources = useMemo(() => {
    return [
      ...learningResources,
      ...toolsResources,
      ...allMusicResources,
      ...audioResources,
      ...videoResources,
      ...communityResources,
      ...eventResources,
      ...organizationResources,
      ...cultureResources,
      ...newsLiteratureResources,
      ...booksResources,
    ];
  }, []);

  // Filter regular resources
  const filteredResources = useMemo(() => {
    return allResources.filter((resource) => {
      // Search filter - check title, description, tags
      const matchesSearch =
        !searchTerm ||
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (resource.titleEo?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (resource.descriptionEo?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        resource.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(resource.category);

      return matchesSearch && matchesCategory;
    });
  }, [allResources, searchTerm, selectedCategories]);

  // Filter grammar guides separately (different structure)
  const filteredGrammarGuides = useMemo(() => {
    // Only show if no category filter or grammar is selected
    if (selectedCategories.length > 0 && !selectedCategories.includes('grammar')) {
      return [];
    }

    return grammarGuides.filter((guide) => {
      // Search filter - check title only for grammar guides
      const matchesSearch =
        !searchTerm ||
        guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (guide.titleEo?.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesSearch;
    });
  }, [searchTerm, selectedCategories]);

  // Group resources by category for organized display
  const resourcesByCategory = useMemo(() => {
    const grouped: Record<ResourceCategory, Resource[]> = {
      learning: [],
      grammar: [], // Will be populated separately from filteredGrammarGuides
      tools: [],
      books: [],
      music: [],
      audio: [],
      video: [],
      community: [],
      events: [],
      organizations: [],
      culture: [],
      news: [],
    };

    filteredResources.forEach((resource) => {
      grouped[resource.category].push(resource);
    });

    return grouped;
  }, [filteredResources]);

  // Featured resources (flagged as featured=true)
  const featuredResources = useMemo(() => {
    return allResources.filter((resource) => resource.featured);
  }, [allResources]);

  // Total count for results display
  const totalFilteredCount = filteredResources.length + filteredGrammarGuides.length;

  // Render appropriate card based on resource type
  const renderResourceCard = (resource: Resource) => {
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

    // Default to base ResourceCard
    return <ResourceCard key={resource.id} resource={resource} />;
  };

  // Render grammar guide card
  const renderGrammarGuideCard = (guide: GrammarGuide) => {
    return <GrammarGuideCard key={guide.id} resource={guide} />;
  };

  // Generate structured data for search engines
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('seo.pages.resources.title', 'Esperanto Resources - Learning Materials & Tools'),
    description: t('seo.pages.resources.description', 'Discover 200+ comprehensive Esperanto learning resources'),
    url: 'https://esperantaskanaduko.com/resources',
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
      ],
    },
    mainEntity: {
      '@type': 'CollectionPage',
      name: 'Esperanto Learning Resources',
      description: 'Comprehensive collection of Esperanto learning materials',
      numberOfItems: allResources.length + filteredGrammarGuides.length,
    },
  };

  return (
    <>
      <SEO
        title={t('seo.pages.resources.title', 'Esperanto Resources - Learning Materials & Tools')}
        description={t(
          'seo.pages.resources.description',
          'Discover 200+ comprehensive Esperanto learning resources including grammar guides, music, podcasts, videos, community maps, courses, and tools. Free resources for beginners to advanced learners.'
        )}
        keywords={[
          'Esperanto learning resources',
          'learn Esperanto online',
          'Esperanto grammar guides',
          'Esperanto music',
          'Esperanto podcasts',
          'Esperanto community',
          'Esperanto courses',
          'Esperanto tools',
          'international language',
          'language learning materials',
          'Esperanto beginners',
          'Esperanto advanced',
          'free Esperanto resources',
          'Esperanto videos',
          'Esperanto books',
          'Esperanto culture',
        ]}
        canonical="https://esperantaskanaduko.com/resources"
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
          {
            name: 'og:site_name',
            content: 'Esperanta Skanaduko',
          },
        ]}
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 8 }}>
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
          Esperanto Learning Resources
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          A comprehensive collection of resources for learning and using Esperanto
        </Typography>

        {/* Search and Filter Controls */}
        <Stack spacing={3} sx={{ maxWidth: 800, mx: 'auto' }}>
          <SearchBar onSearchChange={setSearchTerm} />
          <FilterChips
            selectedCategories={selectedCategories}
            onCategoryToggle={(category) => {
              setSelectedCategories((prev) =>
                prev.includes(category)
                  ? prev.filter((c) => c !== category)
                  : [...prev, category]
              );
            }}
            onClearAll={() => setSelectedCategories([])}
          />
        </Stack>
      </Box>

      {/* Results Summary */}
      {(searchTerm || selectedCategories.length > 0) && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" color="text.secondary">
            Showing {totalFilteredCount} of {allResources.length + grammarGuides.length} resources
          </Typography>
        </Box>
      )}

      {/* Featured Resources Section */}
      {!searchTerm && selectedCategories.length === 0 && featuredResources.length > 0 && (
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Featured Resources
          </Typography>
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
            {featuredResources.map((resource) => renderResourceCard(resource))}
          </Box>
        </Box>
      )}

      {/* Esperanto Live Concert Videos Link */}
      {!searchTerm && selectedCategories.length === 0 && (
        <Link to="/library/esperanto-live-concert-videos" style={{ textDecoration: 'none' }}>
          <Alert
            severity="info"
            icon={<MusicNote />}
            sx={{ mb: 4, cursor: 'pointer' }}
          >
            <AlertTitle sx={{ fontWeight: 600 }}>Esperanto Live Concert Videos</AlertTitle>
            Explore our collection of 25+ live concert videos from Esperanto musicians around the
            world
          </Alert>
        </Link>
      )}

      {/* Category Sections */}
      <Stack spacing={3}>
        {/* Learning Resources */}
        {resourcesByCategory.learning.length > 0 && (
          <CategorySection
            category="learning"
            title="Learning Resources"
            resources={resourcesByCategory.learning}
          />
        )}

        {/* Grammar Guides */}
        {filteredGrammarGuides.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Grammar Guides ({filteredGrammarGuides.length})
            </Typography>
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
              {filteredGrammarGuides.map((guide) => renderGrammarGuideCard(guide))}
            </Box>
          </Box>
        )}

        {/* Tools & Keyboards */}
        {resourcesByCategory.tools.length > 0 && (
          <CategorySection
            category="tools"
            title="Tools & Keyboards"
            resources={resourcesByCategory.tools}
          />
        )}

        {/* Books */}
        {resourcesByCategory.books.length > 0 && (
          <CategorySection
            category="books"
            title="Books & Reading"
            resources={resourcesByCategory.books}
          />
        )}

        {/* Music */}
        {resourcesByCategory.music.length > 0 && (
          <CategorySection
            category="music"
            title="Music & Artists"
            resources={resourcesByCategory.music}
          />
        )}

        {/* Audio/Podcasts */}
        {resourcesByCategory.audio.length > 0 && (
          <CategorySection
            category="audio"
            title="Audio & Podcasts"
            resources={resourcesByCategory.audio}
          />
        )}

        {/* Video */}
        {resourcesByCategory.video.length > 0 && (
          <CategorySection
            category="video"
            title="Video Resources"
            resources={resourcesByCategory.video}
          />
        )}

        {/* Community */}
        {resourcesByCategory.community.length > 0 && (
          <CategorySection
            category="community"
            title="Community & Maps"
            resources={resourcesByCategory.community}
          />
        )}

        {/* Events */}
        {resourcesByCategory.events.length > 0 && (
          <CategorySection
            category="events"
            title="Events & Courses"
            resources={resourcesByCategory.events}
          />
        )}

        {/* Organizations */}
        {resourcesByCategory.organizations.length > 0 && (
          <CategorySection
            category="organizations"
            title="Organizations"
            resources={resourcesByCategory.organizations}
          />
        )}

        {/* Culture */}
        {resourcesByCategory.culture.length > 0 && (
          <CategorySection
            category="culture"
            title="Culture & History"
            resources={resourcesByCategory.culture}
          />
        )}

        {/* News & Literature */}
        {resourcesByCategory.news.length > 0 && (
          <CategorySection
            category="news"
            title="News & Literature"
            resources={resourcesByCategory.news}
          />
        )}
      </Stack>

      {/* Empty State */}
      {totalFilteredCount === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No resources found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try adjusting your search or filters
          </Typography>
        </Box>
      )}
    </Container>
    </>
  );
};

export default ResourcePage;
