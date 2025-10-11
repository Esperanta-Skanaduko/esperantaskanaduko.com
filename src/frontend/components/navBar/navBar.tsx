import React from 'react';
import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../languageSwitcher/languageSwitcher';
import { UserMenu } from '../../../components/auth/UserMenu';
import { DesktopNav } from './desktopNav';
import { MobileNav } from './mobileNav';

export const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { text: t('navigation.home'), link: '/' },
    {
      text: t('navigation.library'),
      children: [
        { text: t('library.allBooks'), link: '/library' },
        { text: 'Esperanto Concerts', link: '/library/esperanto-live-concert-videos' },
      ],
    },
    { text: t('navigation.resources'), link: '/resources' },
    { text: t('navigation.about'), link: '/about' },
    { text: t('navigation.donate'), link: '/donate' },
    {
      text: 'External',
      children: [
        { text: 'MangaDex', link: 'https://mangadex.org/group/18541/esperanta-skanaduko' },
        { text: t('navigation.contact'), link: 'mailto:esperantaSkanaduko@gmail.com' },
      ],
    },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(0, 20, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(0, 255, 0, 0.1)',
        borderBottom: '1px solid rgba(0, 255, 0, 0.2)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center' }}>
          {isMobile ? (
            <MobileNav navItems={navItems} />
          ) : (
            <DesktopNav navItems={navItems} />
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LanguageSwitcher />
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
