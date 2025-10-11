import React, { useState } from 'react';
import { SignUpForm } from '../../components/auth/SignUpForm';
import { LogInForm } from '../../components/auth/LogInForm';
import { SEO } from '../../components/SEO';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { LanguageSwitcher } from '../components/languageSwitcher/languageSwitcher';

/**
 * Authentication Page
 * Combines Sign Up and Log In forms with toggle functionality
 */
const AuthPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(true);

  const handleAuthSuccess = () => {
    // Navigate to home page after successful authentication
    navigate('/');
  };

  return (
    <>
      <SEO
        title={showSignUp ? t('auth.signUp') : t('auth.logIn')}
        description={t('common.description')}
      />

      {/* Navigation Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          marginBottom: '2rem',
        }}
      >
        {/* Back Button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <IconButton
            onClick={() => navigate('/')}
            sx={{
              color: '#00ff00',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 0, 0.1)',
              },
            }}
            aria-label={t('navigation.home')}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              color: '#00ff00',
              fontFamily: 'Courier New, Courier, monospace',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => navigate('/')}
          >
            {t('navigation.home')}
          </Typography>
        </Box>

        {/* Language Switcher */}
        <LanguageSwitcher />
      </Box>

      {/* Auth Forms */}
      {showSignUp ? (
        <SignUpForm
          onSwitchToLogIn={() => setShowSignUp(false)}
          onSuccess={handleAuthSuccess}
        />
      ) : (
        <LogInForm
          onSwitchToSignUp={() => setShowSignUp(true)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
};

export default AuthPage;
