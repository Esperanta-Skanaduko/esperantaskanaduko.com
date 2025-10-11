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
    { text: t('navigation.main.home'), link: '/' },
    {
      text: t('navigation.main.library'),
      children: [
        { text: t('library.filters.allBooks'), link: '/library' },
        { text: t('resources.sections.concertVideos.title'), link: '/library/esperanto-live-concert-videos' },
      ],
    },
    {
      text: t('navigation.main.resources'),
      children: [
        { text: t('resources.categories.all'), link: '/resources' },
        { text: t('resources.categories.learning'), link: '/resources?category=learning' },
        { text: t('resources.categories.grammar'), link: '/resources?category=grammar' },
        { text: t('resources.categories.tools'), link: '/resources?category=tools' },
        { text: t('resources.categories.books'), link: '/resources?category=books' },
        { text: t('resources.categories.music'), link: '/resources?category=music' },
        { text: t('resources.categories.audio'), link: '/resources?category=audio' },
        { text: t('resources.categories.video'), link: '/resources?category=video' },
        { text: t('resources.categories.community'), link: '/resources?category=community' },
        { text: t('resources.categories.events'), link: '/resources?category=events' },
        { text: t('resources.categories.organizations'), link: '/resources?category=organizations' },
        { text: t('resources.categories.culture'), link: '/resources?category=culture' },
        { text: t('resources.categories.news'), link: '/resources?category=news' },
      ],
    },
    { text: t('navigation.main.about'), link: '/about' },
    { text: t('navigation.secondary.donate'), link: '/donate' },
    {
      text: 'External',
      children: [
        { text: 'MangaDex', link: 'https://mangadex.org/group/18541/esperanta-skanaduko' },
        { text: t('navigation.secondary.contact'), link: 'mailto:esperantaSkanaduko@gmail.com' },
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
