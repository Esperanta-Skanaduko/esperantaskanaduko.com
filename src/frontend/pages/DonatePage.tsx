import { Box, Typography, Button, Card, CardContent, Container, Fade, Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import { SEO } from '../../components/SEO';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/LocalCafe';
import PaymentIcon from '@mui/icons-material/Payment';
import { useTranslation } from 'react-i18next';

const DonatePage = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const donationOptions = [
    {
      title: t('donate.methods.paypal.title', 'PayPal'),
      description: t('donate.methods.paypal.description', 'Secure one-time or recurring donations'),
      icon: <PaymentIcon sx={{ fontSize: 40, color: '#00ff00' }} />,
      url: 'https://www.paypal.com/donate?business=FSQHDN6NA2AJA&item_name=financado+por+Esperanta+Skanaduko&currency_code=USD',
      color: 'rgba(0, 80, 255, 0.1)',
      borderColor: 'rgba(0, 80, 255, 0.3)',
    },
    {
      title: t('donate.methods.coffee.title', 'Buy Me a Coffee'),
      description: t('donate.methods.coffee.description', 'Support with a coffee donation'),
      icon: <CoffeeIcon sx={{ fontSize: 40, color: '#00ff00' }} />,
      url: 'https://buymeacoffee.com/Vaporjawn',
      color: 'rgba(255, 221, 0, 0.1)',
      borderColor: 'rgba(255, 221, 0, 0.3)',
    },
    {
      title: t('donate.methods.patreon.title', 'Patreon'),
      description: t('donate.methods.patreon.description', 'Monthly support for ongoing development'),
      icon: <FavoriteIcon sx={{ fontSize: 40, color: '#00ff00' }} />,
      url: 'https://www.patreon.com/c/u64402381',
      color: 'rgba(255, 98, 54, 0.1)',
      borderColor: 'rgba(255, 98, 54, 0.3)',
    },
  ];

  const impactAreas = [
    {
      title: t('donate.impact.hosting.title', 'Server Hosting'),
      description: t('donate.impact.hosting.description', 'Keep the website running 24/7 for global access'),
      amount: t('donate.impact.hosting.amount', '$10/month'),
    },
    {
      title: t('donate.impact.content.title', 'Content Creation'),
      description: t('donate.impact.content.description', 'Develop new learning materials and resources'),
      amount: t('donate.impact.content.amount', '$25/month'),
    },
    {
      title: t('donate.impact.development.title', 'Development Tools'),
      description: t('donate.impact.development.description', 'Maintain and improve the platform features'),
      amount: t('donate.impact.development.amount', '$15/month'),
    },
    {
      title: t('donate.impact.community.title', 'Community Support'),
      description: t('donate.impact.community.description', 'Moderate and support the Esperanto community'),
      amount: t('donate.impact.community.amount', '$20/month'),
    },
  ];

  return (
    <>
      <SEO
        title={t('seo.pages.donate.title', 'Donate - Support Esperanta Skanaduko')}
        description={t('seo.pages.donate.description', 'Support the development and maintenance of Esperanta Skanaduko. Help us continue providing free Esperanto resources to learners worldwide.')}
        keywords={['donate', 'support Esperanto', 'Esperanta Skanaduko donation', 'contribute']}
      />

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, rgba(0, 20, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
          padding: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg" sx={{ paddingY: { xs: 4, md: 6 } }}>
          {/* Header Section */}
          <Fade in={loaded} timeout={1000}>
            <Box sx={{ textAlign: 'center', marginBottom: { xs: 4, md: 6 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
                <FavoriteIcon sx={{ fontSize: 48, color: '#00ff00', marginRight: 2 }} />
                <Typography
                  variant="h2"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
                  }}
                >
                  {t('donate.hero.title', 'Support Our Mission')}
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: '#a0a0a0',
                  fontWeight: 400,
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                }}
              >
                {t('donate.hero.subtitle', 'Help us keep Esperanta Skanaduko free and accessible to learners worldwide. Your support enables us to maintain the platform, create new content, and grow the community.')}
              </Typography>
            </Box>
          </Fade>

          {/* Donation Options */}
          <Grow in={loaded} timeout={1200} style={{ transformOrigin: 'center' }}>
            <Box sx={{ marginBottom: { xs: 4, md: 6 } }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#00ff00',
                  textAlign: 'center',
                  marginBottom: 3,
                  fontWeight: 600,
                  textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                {t('donate.sections.methods.title', 'Choose Your Preferred Method')}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                {donationOptions.map((option, index) => (
                  <Box key={option.title} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', lg: '1 1 30%' }, maxWidth: { xs: '100%', sm: '400px', lg: '350px' } }}>
                    <Fade in={loaded} timeout={1000} style={{ transitionDelay: `${300 + index * 200}ms` }}>
                      <Card
                        className="glass"
                        sx={{
                          background: option.color,
                          border: `2px solid ${option.borderColor}`,
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          height: '100%',
                          '&:hover': {
                            transform: 'translateY(-8px) scale(1.02)',
                            boxShadow: '0 20px 40px rgba(0, 255, 0, 0.2)',
                            borderColor: '#00ff00',
                          },
                        }}
                        onClick={() => window.open(option.url, '_blank')}
                      >
                        <CardContent sx={{ padding: 4, textAlign: 'center' }}>
                          <Box sx={{ marginBottom: 2 }}>
                            {option.icon}
                          </Box>
                          <Typography
                            variant="h5"
                            sx={{
                              color: '#ffffff',
                              fontWeight: 600,
                              marginBottom: 1,
                            }}
                          >
                            {option.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#a0a0a0',
                              marginBottom: 3,
                              lineHeight: 1.6,
                            }}
                          >
                            {option.description}
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              background: 'linear-gradient(45deg, #00ff00, #00cc00)',
                              color: '#000000',
                              fontWeight: 600,
                              padding: '12px 24px',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #33ff33, #00ff00)',
                                transform: 'scale(1.05)',
                              },
                            }}
                          >
                            {t('donate.actions.donateNow', 'Donate Now')}
                          </Button>
                        </CardContent>
                      </Card>
                    </Fade>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grow>

          {/* Impact Section */}
          <Fade in={loaded} timeout={1000} style={{ transitionDelay: '800ms' }}>
            <Box sx={{ marginBottom: { xs: 4, md: 6 } }}>
              <Typography
                variant="h4"
                sx={{
                  color: '#00ff00',
                  textAlign: 'center',
                  marginBottom: 3,
                  fontWeight: 600,
                  textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                {t('donate.sections.impact.title', 'Your Impact')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#a0a0a0',
                  textAlign: 'center',
                  marginBottom: 4,
                  maxWidth: '600px',
                  margin: '0 auto 2rem auto',
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                }}
              >
                {t('donate.sections.impact.description', 'Every donation, no matter the size, helps us continue our mission. Here\'s how your support makes a difference:')}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                {impactAreas.map((area, index) => (
                  <Box key={area.title} sx={{ flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1 1 22%' }, minWidth: '250px' }}>
                    <Grow in={loaded} timeout={800} style={{ transitionDelay: `${1000 + index * 150}ms` }}>
                      <Card
                        className="glass"
                        sx={{
                          height: '100%',
                          background: 'rgba(0, 30, 0, 0.2)',
                          border: '1px solid rgba(0, 255, 0, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            borderColor: 'rgba(0, 255, 0, 0.4)',
                            boxShadow: '0 12px 24px rgba(0, 255, 0, 0.15)',
                          },
                        }}
                      >
                        <CardContent sx={{ padding: 3, textAlign: 'center' }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#00ff00',
                              fontWeight: 600,
                              marginBottom: 1,
                            }}
                          >
                            {area.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#a0a0a0',
                              marginBottom: 2,
                              lineHeight: 1.5,
                            }}
                          >
                            {area.description}
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: '#ffffff',
                              fontWeight: 700,
                            }}
                          >
                            {area.amount}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grow>
                  </Box>
                ))}
              </Box>
            </Box>
          </Fade>

          {/* Thank You Section */}
          <Fade in={loaded} timeout={1000} style={{ transitionDelay: '1200ms' }}>
            <Box
              className="glass"
              sx={{
                textAlign: 'center',
                padding: { xs: 3, md: 4 },
                background: 'rgba(0, 50, 0, 0.2)',
                border: '2px solid rgba(0, 255, 0, 0.3)',
                borderRadius: '24px',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#00ff00',
                  fontWeight: 600,
                  marginBottom: 2,
                  textShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                {t('donate.sections.thankYou.title', 'Dankon! Thank You!')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#ffffff',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                }}
              >
                {t('donate.sections.thankYou.message', 'Your generosity helps preserve and share the beauty of Esperanto with learners around the world. Together, we\'re building bridges across cultures and languages.')}
              </Typography>
              <Box sx={{ marginTop: 3 }}>
                <FavoriteIcon sx={{ fontSize: 32, color: '#ff6b6b', animation: 'pulse 2s infinite' }} />
              </Box>
            </Box>
          </Fade>
        </Container>
      </Container>
    </>
  );
};

export default DonatePage;