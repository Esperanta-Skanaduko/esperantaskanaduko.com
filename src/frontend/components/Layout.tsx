import React from 'react';
import { Box } from '@mui/material';
import { NavBar } from './navBar/navBar';

/**
 * Layout Component
 *
 * Provides consistent layout structure across all pages
 * - NavBar at the top (sticky)
 * - Main content area
 * - Footer (if needed in the future)
 */
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};
