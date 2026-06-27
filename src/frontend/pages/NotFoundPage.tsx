import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO';

/**
 * 404 Not Found Page
 *
 * Shown when a user navigates to a route that doesn't exist.
 * Uses i18n keys from errors.notFound namespace.
 */
const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={t('errors.notFound.title', 'Page Not Found')}
        description={t('errors.notFound.message', 'The page you\'re looking for doesn\'t exist or has been moved.')}
      />
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 3,
          }}
        >
          {/* 404 Number */}
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '6rem', sm: '9rem', md: '12rem' },
              fontFamily: 'Copperplate, serif',
              fontWeight: 700,
              color: '#00ff00',
              lineHeight: 1,
              textShadow: '0 0 30px rgba(0, 255, 0, 0.4), 0 0 60px rgba(0, 255, 0, 0.2)',
              letterSpacing: '0.02em',
            }}
          >
            404
          </Typography>

          {/* Title */}
          <Typography
            variant="h3"
            sx={{ color: '#ffffff', fontWeight: 600 }}
          >
            {t('errors.notFound.title', 'Page Not Found')}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 480, lineHeight: 1.7 }}
          >
            {t('errors.notFound.message', 'The page you\'re looking for doesn\'t exist or has been moved.')}
          </Typography>

          {/* Home button */}
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
              border: '1px solid rgba(0, 255, 0, 0.5)',
              color: '#00ff00',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                borderColor: '#00ff00',
              },
            }}
          >
            {t('errors.notFound.action', 'Go Home')}
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default NotFoundPage;
