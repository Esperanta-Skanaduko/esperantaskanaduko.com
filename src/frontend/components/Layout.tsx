import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavBar } from './navBar/navBar';

/**
 * Layout Component
 *
 * Provides consistent layout structure across all pages
 * - Skip-to-main-content link (WCAG 2.1 AA)
 * - NavBar at the top (sticky)
 * - Main content area (id="main-content" for skip link target)
 * - Footer (if needed in the future)
 */
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Skip to main content – visually hidden until focused */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          top: '-100%',
          left: 8,
          zIndex: 9999,
          px: 3,
          py: 1.5,
          backgroundColor: '#00ff00',
          color: '#000000',
          fontWeight: 700,
          fontSize: '0.9rem',
          borderRadius: 1,
          textDecoration: 'none',
          transition: 'top 0.1s ease',
          '&:focus': {
            top: 8,
            outline: '3px solid #000000',
            outlineOffset: 2,
          },
        }}
      >
        {t('accessibility.skipToContent', 'Skip to main content')}
      </Box>

      <NavBar />

      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{
          flexGrow: 1,
          '&:focus': {
            outline: 'none',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
