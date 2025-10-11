import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Alert,
  Link,
  Stack,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff, Login as LoginIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Loading } from '../Loading';
import { FirebaseError } from 'firebase/app';

interface LogInFormProps {
  onSwitchToSignUp: () => void;
  onSuccess?: () => void;
}

/**
 * Log In Component
 * MUI form for authenticating existing users with Firebase Auth
 */
export const LogInForm: React.FC<LogInFormProps> = ({ onSwitchToSignUp, onSuccess }) => {
  const { t } = useTranslation();
  const { logIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Form validation
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setEmailError(t('auth.errors.validation.emailRequired'));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t('auth.errors.validation.emailInvalid'));
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError(t('auth.errors.validation.passwordRequired'));
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate all fields
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      setLoading(true);
      await logIn(email, password);
      setSuccess(t('auth.status.signedIn'));

      // Call success callback after short delay
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
      }, 1500);
    } catch (err) {
      const firebaseError = err as FirebaseError;

      // Handle Firebase specific errors
      switch (firebaseError.code) {
        case 'auth/user-not-found':
          setError(t('auth.errors.firebase.userNotFound'));
          break;
        case 'auth/wrong-password':
          setError(t('auth.errors.firebase.wrongPassword'));
          break;
        case 'auth/invalid-email':
          setError(t('auth.errors.validation.emailInvalid'));
          break;
        case 'auth/too-many-requests':
          setError(t('auth.errors.firebase.tooManyAttempts'));
          break;
        case 'auth/network-request-failed':
          setError(t('auth.errors.firebase.networkError'));
          break;
        default:
          setError(t('auth.errors.firebase.unknownError'));
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading variant='fullscreen' message={t('auth.status.loggingIn')} />;
  }

  return (
    <Container maxWidth='sm'>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LoginIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant='h4' component='h1' gutterBottom>
          {t('auth.status.welcomeBack')}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
          {t('auth.actions.logIn')}
        </Typography>

        {error && (
          <Alert severity='error' sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity='success' sx={{ width: '100%', mb: 2 }}>
            {success}
          </Alert>
        )}

        <Box component='form' onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <Stack spacing={2}>
            <TextField
              label={t('auth.fields.email')}
              type='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) validateEmail(e.target.value);
              }}
              onBlur={() => validateEmail(email)}
              error={!!emailError}
              helperText={emailError}
              fullWidth
              required
              autoComplete='email'
            />

            <TextField
              label={t('auth.fields.password')}
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) validatePassword(e.target.value);
              }}
              onBlur={() => validatePassword(password)}
              error={!!passwordError}
              helperText={passwordError}
              fullWidth
              required
              autoComplete='current-password'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type='submit'
              variant='contained'
              size='large'
              fullWidth
              sx={{ mt: 2 }}
            >
              {t('auth.actions.logIn')}
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            {t('auth.links.noAccount')}{' '}
            <Link
              component='button'
              variant='body2'
              onClick={onSwitchToSignUp}
              sx={{ cursor: 'pointer' }}
            >
              {t('auth.actions.signUp')}
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
