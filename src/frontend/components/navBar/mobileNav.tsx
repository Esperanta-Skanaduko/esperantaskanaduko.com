import React, { useState } from 'react';
import { Box, IconButton, Drawer, List, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

interface NavItem {
  text: string;
  link?: string;
  children?: NavItem[];
}

interface MobileNavProps {
  navItems: NavItem[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ navItems }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const prefetchData = (link: string) => {
    if (link === '/library/esperanto-live-concert-videos') {
      queryClient.prefetchQuery({
        queryKey: ['esperantoLiveConcertVideos'],
        queryFn: () => import('../../../data/esperantoLiveConcertVideos').then(mod => mod.listicleDB),
      });
    }
  };

  const handleSubMenuClick = (item: NavItem) => {
    const newOpenSubMenu = openSubMenu === item.text ? null : item.text;
    setOpenSubMenu(newOpenSubMenu);
    if (newOpenSubMenu && item.children) {
      item.children.forEach(child => prefetchData(child.link || ''));
    }
  };

  const list = () => (
    <Box
      sx={{ width: 250, background: 'rgba(0, 20, 0, 0.95)', height: '100%', color: 'white' }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) =>
          item.children ? (
            <React.Fragment key={item.text}>
              <ListItemButton onClick={() => handleSubMenuClick(item)}>
                <ListItemText primary={item.text} />
                {openSubMenu === item.text ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSubMenu === item.text} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItemButton key={child.text} sx={{ pl: 4 }} component={Link} to={child.link || '#'} onClick={toggleDrawer(false)}>
                      <ListItemText primary={child.text} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItemButton key={item.text} component={Link} to={item.link || '#'} onClick={toggleDrawer(false)} onMouseEnter={() => prefetchData(item.link || '')}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ '& .MuiDrawer-paper': { background: 'transparent' } }}
      >
        {list()}
      </Drawer>
    </>
  );
};
