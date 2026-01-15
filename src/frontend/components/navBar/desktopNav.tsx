import React, { useState, useEffect } from 'react';
import { Box, Button, Popover, Paper } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { useQueryClient } from '@tanstack/react-query';

interface NavItem {
  text: string;
  link?: string;
  children?: NavItem[];
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<null | string>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const navigationTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Cleanup all timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    };
  }, []);

  // Close dropdown immediately when route changes
  useEffect(() => {
    // Clear all pending timeouts
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    
    // Immediately close any open menus
    setAnchorEl(null);
    setOpenMenu(null);
    
    // Block hover interactions during navigation
    setIsNavigating(true);
    navigationTimeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
    }, 600);
  }, [location.pathname]);

  const closeMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, text: string) => {
    // Block if currently navigating
    if (isNavigating) return;

    // Clear any pending close timeout
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    
    setAnchorEl(event.currentTarget);
    setOpenMenu(text);
  };

  const handleMenuClose = () => {
    // Use timeout for smooth hover UX
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    
    hoverTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setOpenMenu(null);
    }, 150);
  };

  const prefetchData = (link: string) => {
    if (link === '/library/esperanto-live-concert-videos') {
      queryClient.prefetchQuery({
        queryKey: ['esperantoLiveConcertVideos'],
        queryFn: () => import('../../../data/esperantoLiveConcertVideos').then(mod => mod.listicleDB),
      });
    }
  };

  const handlePopoverEnter = () => {
    // Cancel any pending close when entering popover
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handlePopoverLeave = () => {
    // Immediate close when leaving popover
    closeMenu();
  };

  const handleItemClick = (e: React.MouseEvent) => {
    // Prevent any event bubbling
    e.stopPropagation();
    
    // Immediately close and block reopening
    closeMenu();
    setIsNavigating(true);
    
    // Clear existing navigation timeout
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    
    navigationTimeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
    }, 600);
  };

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {navItems.map((item) =>
        item.children ? (
          <Box
            key={item.text}
            onMouseEnter={(e) => !isNavigating && handleMenuOpen(e, item.text)}
            onMouseLeave={handleMenuClose}
            sx={{ position: 'relative' }}
          >
            <Button
              aria-owns={openMenu === item.text ? `menu-${item.text}` : undefined}
              aria-haspopup="true"
              sx={{ 
                color: 'white', 
                textTransform: 'none', 
                fontSize: '1rem',
                pointerEvents: isNavigating ? 'none' : 'auto'
              }}
              endIcon={openMenu === item.text ? <ArrowDropUp /> : <ArrowDropDown />}
              onMouseEnter={() => !isNavigating && item.children?.forEach(child => prefetchData(child.link || ''))}
            >
              {item.text}
            </Button>
            <Popover
              id={`menu-${item.text}`}
              open={!isNavigating && openMenu === item.text}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={closeMenu}
              disableRestoreFocus
              disableScrollLock
              slotProps={{
                paper: {
                  onMouseEnter: handlePopoverEnter,
                  onMouseLeave: handlePopoverLeave,
                  sx: { 
                    pointerEvents: 'auto',
                    mt: 0.5,
                  }
                }
              }}
            >
              <Paper sx={{ 
                background: 'rgba(0, 20, 0, 0.9)', 
                backdropFilter: 'blur(5px)', 
                border: '1px solid rgba(0, 255, 0, 0.2)',
                minWidth: 200,
              }}>
                {item.children.map((child) => (
                  <Button
                    key={child.text}
                    component={Link}
                    to={child.link || '#'}
                    onClick={handleItemClick}
                    sx={{ 
                      display: 'block', 
                      width: '100%', 
                      color: 'white', 
                      textTransform: 'none', 
                      padding: '10px 20px',
                      justifyContent: 'flex-start',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                      },
                    }}
                  >
                    {child.text}
                  </Button>
                ))}
              </Paper>
            </Popover>
          </Box>
        ) : (
          <Button
            key={item.text}
            component={Link}
            to={item.link || '#'}
            sx={{ 
              color: 'white', 
              textTransform: 'none', 
              fontSize: '1rem',
              pointerEvents: isNavigating ? 'none' : 'auto'
            }}
            onMouseEnter={() => !isNavigating && prefetchData(item.link || '')}
          >
            {item.text}
          </Button>
        )
      )}
    </Box>
  );
};
