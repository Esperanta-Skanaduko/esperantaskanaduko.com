import { Box, Container, Fade, Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Subtitle from '../components/subtitle';
import Title from '../components/title';
import { SEO } from '../../components/SEO';
import { useTranslation } from 'react-i18next';

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
        />
      );
    }
    return particles;
  };

  return (
    <>
      <SEO
        title={t('seo.pages.home.title', 'Esperanta Skanaduko - Learn Esperanto Online')}
        description={t('seo.pages.home.description', 'Your comprehensive hub for learning Esperanto. Access resources, books, music, community connections, and interactive tools to master the international language.')}
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
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      {/* Floating particles background */}
      <div className="particles">
        {createParticles()}
      </div>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100vh',
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
          </Box>
        </Box>

        {/* Footer Section */}
        <Fade in={loaded} timeout={800} style={{ transitionDelay: '900ms' }}>
          <Box
            className="glass"
            sx={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              borderRadius: '16px',
              padding: { xs: 1, md: 2 },
              marginTop: 'auto',
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
