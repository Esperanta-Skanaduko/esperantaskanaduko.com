import { Box, Typography, Paper, Container } from '@mui/material';
import { SEO } from '../../../components/SEO';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { i18n } = useTranslation();
  const isEsperanto = i18n.language === 'eo';

  return (
    <>
      <SEO
        title={isEsperanto ? 'Pri ni - Esperanta Skanaduko' : 'About - Esperanta Skanaduko'}
        description={isEsperanto
          ? 'Lernu pri Esperanta Skanaduko - reta esperanta biblioteko provizanta bone organizitajn originalajn kaj tradukitajn tekstojn en la publika domajno.'
          : 'Learn about Esperanta Skanaduko - an online Esperanto library providing well-organized original and translated texts in the public domain.'
        }
        keywords={['Esperanto library', 'public domain texts', 'Esperanto literature', 'translated texts', 'biblioteko', 'esperanto']}
      />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#000000',
          background: 'linear-gradient(135deg, #000000 0%, #001a00 50%, #000000 100%)',
          paddingY: { xs: '1rem', md: '2rem' },
        }}
      >
        <Container maxWidth="xl">
          {/* Page Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                maxWidth: '900px',
                width: '100%',
                backgroundColor: 'rgba(18, 20, 21, 0.9)',
                border: '1px solid rgba(0, 255, 0, 0.2)',
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                animation: 'scaleIn 0.8s ease-out both',
              }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#00ff00',
                  fontFamily: 'Copperplate',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  marginBottom: '2rem',
                }}
              >
                {isEsperanto ? 'Pri la Retejo' : 'About the Website'}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                {isEsperanto
                  ? 'Bonvenon al Esperanta Skanaduko, nova reta esperanta biblioteko. La celo de ĉi tiu projekto estas provizi bone organizitan bibliotekon de originalaj kaj tradukitaj tekstoj.'
                  : 'Welcome to Esperanta Skanaduko, a new online Esperanto library. This project\'s goal is to provide a well-organized library of original and translated texts.'}
              </Typography>

              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#00ff00',
                  fontFamily: 'Copperplate',
                  textTransform: 'uppercase',
                  marginTop: '3rem',
                  marginBottom: '1rem',
                }}
              >
                {isEsperanto ? 'Licencaj Aferoj' : 'License Issues'}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                {isEsperanto
                  ? 'Multaj tekstoj estas sufiĉe malnovaj por aŭtomate esti en la publika domajno, multaj estas en la publika domajno en iuj landoj dum ankoraŭ kopirajtataj en aliaj. Ĉi tiu retejo publikigas verkojn por kiuj la internacia minimumo de 50 jaroj post la morto de la aŭtoro estas kontentita. Estas la respondeco de la leganto koni la kopirajt-leĝojn de sia lando.'
                  : 'Many texts are old enough to automatically be in the public domain, many are in the public domain in some countries while copyrighted in others. This website publishes works for which the international minimum of 50 years after the author\'s death is satisfied. It is the reader\'s responsibility to know his or her country\'s copyright laws.'}
              </Typography>

              {/* Mission Statement */}
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#00ff00',
                  fontFamily: 'Copperplate',
                  textTransform: 'uppercase',
                  marginTop: '3rem',
                  marginBottom: '1rem',
                }}
              >
                {isEsperanto ? 'Nia Misio' : 'Our Mission'}
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                {isEsperanto
                  ? 'Ni klopodas fari Esperanton pli alirebla al ĉiuj, provizante liberan kaj ampleksan kolekton de literaturo. Ĉu vi estas komencanto aŭ sperta Esperanto-parolanto, ĉi tiu biblioteko ofertas ion por ĉiuj.'
                  : 'We strive to make Esperanto more accessible to everyone by providing a free and comprehensive collection of literature. Whether you are a beginner or an experienced Esperanto speaker, this library offers something for everyone.'}
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
