import { Box, Container, Fade, Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import Footer from '../components/footer/footer';
import Subtitle from '../components/subtitle';
import Title from '../components/title';
import { SEO } from '../../components/SEO';
import { NavBar } from '../components/navBar/navBar';

const Homepage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
        title='Home'
        description='Learn Esperanto through an engaging digital experience. Free resources and tools for learning the international language.'
        keywords={['Esperanto homepage', 'start learning Esperanto', 'Esperanto resources']}
      />
      <NavBar />
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
