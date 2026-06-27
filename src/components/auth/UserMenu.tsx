import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Divider,
  ListItemIcon,
} from '@mui/material';
import {
  AccountCircle,
  Logout as LogoutIcon,
  Login as LoginIcon,
  PersonAdd,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * User Menu Component
 * Displays authentication status and user menu
 * Shows sign up/log in buttons when logged out
 * Shows user menu with sign out option when logged in
 */
export const UserMenu: React.FC = () => {
  const { t } = useTranslation();
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      handleMenuClose();
      navigate('/');
    } catch (_error) {
      // Error signing out - could show a toast/snackbar here
      handleMenuClose();
    }
  };

  const handleNavigateToAuth = () => {
    navigate('/auth');
  };

  // Logged out state - show sign up and log in buttons
  if (!currentUser) {
    return (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant='outlined'
          startIcon={<LoginIcon />}
          onClick={handleNavigateToAuth}
          size='small'
        >
          {t('auth.actions.logIn')}
        </Button>
        <Button
          variant='contained'
          startIcon={<PersonAdd />}
          onClick={handleNavigateToAuth}
          size='small'
        >
          {t('auth.actions.signUp')}
        </Button>
      </Box>
    );
  }

  // Logged in state - show user menu
  return (
    <Box>
      <IconButton
        onClick={handleMenuOpen}
        size='large'
        aria-label={t('accessibility.openUserMenu', 'Open user menu')}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl)}
        sx={{
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.08)',
          },
        }}
      >
        {currentUser.photoURL ? (
          <Avatar src={currentUser.photoURL} alt={currentUser.email || 'User'} />
        ) : (
          <AccountCircle sx={{ fontSize: 32 }} />
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant='subtitle2' color='text.secondary'>
            {t('auth.status.welcomeBack')}
          </Typography>
          <Typography variant='body2' sx={{ fontWeight: 600 }}>
            {currentUser.email}
          </Typography>
        </Box>

        <Divider />

        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <LogoutIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='body2'>{t('auth.actions.signOut')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
