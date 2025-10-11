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
import { Visibility, VisibilityOff, PersonAdd } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Loading } from '../Loading';
import { FirebaseError } from 'firebase/app';

interface SignUpFormProps {
  onSwitchToLogIn: () => void;
  onSuccess?: () => void;
}

/**
 * Sign Up Component
 * MUI form for creating new user accounts with Firebase Auth
 */
export const SignUpForm: React.FC<SignUpFormProps> = ({ onSwitchToLogIn, onSuccess }) => {
  const { t } = useTranslation();
  const { signUp } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form validation
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

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
    if (password.length < 6) {
      setPasswordError(t('auth.errors.validation.passwordTooShort'));
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateConfirmPassword = (password: string, confirmPassword: string): boolean => {
    if (password !== confirmPassword) {
      setConfirmPasswordError(t('auth.errors.validation.passwordsNoMatch'));
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate all fields
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);

    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      return;
    }

    try {
      setLoading(true);
      await signUp(email, password);
      setSuccess(t('auth.success.accountCreated'));

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
        case 'auth/email-already-in-use':
          setError(t('auth.errors.firebase.emailInUse'));
          break;
        case 'auth/invalid-email':
          setError(t('auth.errors.firebase.emailInvalid'));
          break;
        case 'auth/weak-password':
          setError(t('auth.errors.firebase.passwordTooShort'));
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
    return <Loading variant='fullscreen' message={t('auth.status.creatingAccount')} />;
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
        <PersonAdd sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant='h4' component='h1' gutterBottom>
          {t('auth.status.getStarted')}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
          {t('auth.status.creatingAccount')}
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
              autoComplete='new-password'
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

            <TextField
              label={t('auth.fields.confirmPassword')}
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (confirmPasswordError) validateConfirmPassword(password, e.target.value);
              }}
              onBlur={() => validateConfirmPassword(password, confirmPassword)}
              error={!!confirmPasswordError}
              helperText={confirmPasswordError}
              fullWidth
              required
              autoComplete='new-password'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge='end'
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
              {t('auth.actions.signUp')}
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            {t('auth.links.alreadyHaveAccount')}{' '}
            <Link
              component='button'
              variant='body2'
              onClick={onSwitchToLogIn}
              sx={{ cursor: 'pointer' }}
            >
              {t('auth.actions.logIn')}
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
