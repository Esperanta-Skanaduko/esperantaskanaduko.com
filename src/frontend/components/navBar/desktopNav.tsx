import React, { useState, useEffect, useRef } from 'react';
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

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // Track the trigger button element so we can return focus to it on close
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Cleanup all timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    };
  }, []);

  // Close dropdown immediately when route changes
  useEffect(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    setAnchorEl(null);
    setOpenMenu(null);
    setIsNavigating(true);
    navigationTimeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
    }, 600);
  }, [location.pathname]);

  const closeMenu = (returnFocus = false) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setAnchorEl(null);
    setOpenMenu(null);
    if (returnFocus && triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, text: string) => {
    if (isNavigating) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setAnchorEl(event.currentTarget);
    setOpenMenu(text);
  };

  const handleMenuClose = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setOpenMenu(null);
    }, 150);
  };

  /** Keyboard: Enter/Space toggles; Escape closes and returns focus */
  const handleTriggerKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    item: NavItem,
    buttonEl: HTMLButtonElement | null,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (openMenu === item.text) {
        closeMenu(true);
      } else {
        if (buttonEl) {
          triggerRef.current = buttonEl;
          setAnchorEl(buttonEl);
        }
        setOpenMenu(item.text);
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
    }
  };

  /** Escape inside the popover closes and returns focus to trigger */
  const handlePopoverKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
    }
  };

  const prefetchData = (link: string) => {
    if (link === '/library/esperanto-live-concert-videos') {
      queryClient.prefetchQuery({
        queryKey: ['esperantoLiveConcertVideos'],
        queryFn: () =>
          import('../../../data/esperantoLiveConcertVideos').then(
            (mod) => mod.listicleDB,
          ),
      });
    }
  };

  const handlePopoverEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handlePopoverLeave = () => {
    closeMenu();
  };

  const handleItemClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeMenu();
    setIsNavigating(true);
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
              aria-haspopup="menu"
              aria-expanded={openMenu === item.text}
              aria-controls={openMenu === item.text ? `menu-${item.text}` : undefined}
              onKeyDown={(e) =>
                handleTriggerKeyDown(e, item, e.currentTarget as HTMLButtonElement)
              }
              sx={{
                color: 'white',
                textTransform: 'none',
                fontSize: '1rem',
                pointerEvents: isNavigating ? 'none' : 'auto',
              }}
              endIcon={openMenu === item.text ? <ArrowDropUp /> : <ArrowDropDown />}
              onMouseEnter={() =>
                !isNavigating &&
                item.children?.forEach((child) => prefetchData(child.link || ''))
              }
            >
              {item.text}
            </Button>
            <Popover
              id={`menu-${item.text}`}
              open={!isNavigating && openMenu === item.text}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              onClose={() => closeMenu()}
              disableRestoreFocus
              disableScrollLock
              slotProps={{
                paper: {
                  onMouseEnter: handlePopoverEnter,
                  onMouseLeave: handlePopoverLeave,
                  onKeyDown: handlePopoverKeyDown,
                  sx: { pointerEvents: 'auto', mt: 0.5 },
                },
              }}
            >
              <Paper
                role="menu"
                sx={{
                  background: 'rgba(0, 20, 0, 0.9)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(0, 255, 0, 0.2)',
                  minWidth: 200,
                }}
              >
                {item.children.map((child) => (
                  <Button
                    key={child.text}
                    component={Link}
                    to={child.link || '#'}
                    role="menuitem"
                    onClick={handleItemClick}
                    sx={{
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textTransform: 'none',
                      padding: '10px 20px',
                      justifyContent: 'flex-start',
                      '&:hover': { backgroundColor: 'rgba(0, 255, 0, 0.1)' },
                      '&:focus-visible': {
                        backgroundColor: 'rgba(0, 255, 0, 0.15)',
                        outline: '2px solid #00ff00',
                        outlineOffset: -2,
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
              pointerEvents: isNavigating ? 'none' : 'auto',
              '&:focus-visible': {
                outline: '2px solid #00ff00',
                outlineOffset: 2,
              },
            }}
            onMouseEnter={() => !isNavigating && prefetchData(item.link || '')}
          >
            {item.text}
          </Button>
        ),
      )}
    </Box>
  );
};
