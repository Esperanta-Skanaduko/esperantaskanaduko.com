import { Box, Button, Container, Fade, Grid, Grow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SchoolIcon from '@mui/icons-material/School';
import Footer from '../components/footer/Footer';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import { SEO } from '../../components/SEO';

/** Stats displayed in the features section */
interface StatItem {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
}

const Homepage = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Structured data for homepage
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Esperanta Skanaduko',
    alternateName: 'Esperanto Learning Platform',
    url: 'https://esperantaskanaduko.com',
    description: t('seo.pages.home.description', 'Your comprehensive hub for learning Esperanto'),
    inLanguage: ['en', 'eo'],
    about: {
      '@type': 'Language',
      name: 'Esperanto',
      alternateName: 'International Language',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://esperantaskanaduko.com/resources?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const stats: StatItem[] = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#00ff00' }} />,
      titleKey: 'home.features.stats.resources.title',
      descKey: 'home.features.stats.resources.description',
    },
    {
      icon: <LibraryBooksIcon sx={{ fontSize: 40, color: '#00ff00' }} />,
      titleKey: 'home.features.stats.library.title',
      descKey: 'home.features.stats.library.description',
    },
    {
      icon: <MenuBookIcon sx={{ fontSize: 40, color: '#00ff00' }} />,
      titleKey: 'home.features.stats.music.title',
      descKey: 'home.features.stats.music.description',
    },
    {
      icon: (
        <Typography sx={{ fontSize: 40, lineHeight: 1, color: '#00ff00', fontWeight: 700 }}>
          🌍
        </Typography>
      ),
      titleKey: 'home.features.stats.languages.title',
      descKey: 'home.features.stats.languages.description',
    },
  ];

  // Create floating particles effect
  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />,
      );
    }
    return particles;
  };

  return (
    <>
      <SEO
        title={t('seo.pages.home.title', 'Esperanta Skanaduko - Learn Esperanto Online')}
        description={t(
          'seo.pages.home.description',
          'Your comprehensive hub for learning Esperanto. Access resources, books, music, community connections, and interactive tools to master the international language.',
        )}
        keywords={[
          'learn Esperanto',
          'Esperanto learning',
          'international language',
          'constructed language',
          'language learning platform',
          'Esperanto resources',
          'Esperanto books',
          'Esperanto music',
          'Esperanto community',
          'free language learning',
        ]}
        canonical="https://esperantaskanaduko.com"
        type="website"
      />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* Floating particles background */}
      <div className="particles">{createParticles()}</div>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
          padding: { xs: 1, md: 2 },
          overflow: 'hidden',
        }}
      >
        {/* Main Content Area */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              marginBottom: { xs: 2, md: 3 },
              padding: { xs: 1, md: 2 },
            }}
          >
            <Grow in={loaded} timeout={1000}>
              <Box sx={{ marginBottom: { xs: 2, md: 3 } }}>
                <Title />
              </Box>
            </Grow>

            <Fade in={loaded} timeout={1200} style={{ transitionDelay: '300ms' }}>
              <Box>
                <Subtitle />
              </Box>
            </Fade>

            {/* CTA Buttons */}
            <Fade in={loaded} timeout={1200} style={{ transitionDelay: '600ms' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                  mt: 4,
                }}
              >
                <Button
                  component={Link}
                  to="/resources"
                  variant="contained"
                  size="large"
                  startIcon={<SchoolIcon />}
                  sx={{
                    backgroundColor: 'rgba(0, 255, 0, 0.15)',
                    border: '1px solid rgba(0, 255, 0, 0.6)',
                    color: '#00ff00',
                    fontWeight: 700,
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 255, 0, 0.25)',
                      borderColor: '#00ff00',
                      boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                    },
                  }}
                >
                  {t('home.cta.exploreResources', 'Explore Resources')}
                </Button>

                <Button
                  component={Link}
                  to="/library"
                  variant="outlined"
                  size="large"
                  startIcon={<LibraryBooksIcon />}
                  sx={{
                    borderColor: 'rgba(0, 255, 0, 0.4)',
                    color: '#ffffff',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      borderColor: 'rgba(0, 255, 0, 0.7)',
                      backgroundColor: 'rgba(0, 255, 0, 0.05)',
                    },
                  }}
                >
                  {t('home.cta.browseLibrary', 'Browse Library')}
                </Button>

                <Button
                  component={Link}
                  to="/resources/learning"
                  variant="text"
                  size="large"
                  startIcon={<MenuBookIcon />}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 600,
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': {
                      color: '#ffffff',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  {t('home.cta.startLearning', 'Start Learning')}
                </Button>
              </Box>
            </Fade>
          </Box>

          {/* Features / Stats Section */}
          <Fade in={loaded} timeout={1200} style={{ transitionDelay: '900ms' }}>
            <Box sx={{ width: '100%', maxWidth: '1200px', mt: { xs: 3, md: 5 }, px: 2 }}>
              <Grid container spacing={3} justifyContent="center">
                {stats.map((stat, index) => (
                  <Grid key={index} size={{ xs: 6, sm: 3 }}>
                    <Box
                      className="glass"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: { xs: 2, md: 3 },
                        borderRadius: '12px',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 24px rgba(0, 255, 0, 0.2)',
                        },
                      }}
                    >
                      <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#ffffff',
                          fontFamily: 'Copperplate, serif',
                          fontWeight: 700,
                          fontSize: { xs: '0.85rem', md: '1rem' },
                          mb: 0.5,
                        }}
                      >
                        {t(stat.titleKey)}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.7rem', md: '0.8rem' },
                          lineHeight: 1.4,
                        }}
                      >
                        {t(stat.descKey)}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Box>

        {/* Footer Section */}
        <Fade in={loaded} timeout={800} style={{ transitionDelay: '1100ms' }}>
          <Box
            className="glass"
            sx={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              borderRadius: '16px',
              padding: { xs: 1, md: 2 },
              mt: 4,
            }}
          >
            <Footer />
          </Box>
        </Fade>
      </Container>
    </>
  );
};

export default Homepage;
