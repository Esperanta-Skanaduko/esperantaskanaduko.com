import React, { useState } from 'react';
import { Box, Button, Popover, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

interface NavItem {
  text: string;
  link?: string;
  children?: NavItem[];
}

interface DesktopNavProps {
  navItems: NavItem[];
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<null | string>(null);
  const timeoutRef = React.useRef<number | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, text: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setAnchorEl(event.currentTarget);
    setOpenMenu(text);
  };

  const handleMenuClose = () => {
    timeoutRef.current = window.setTimeout(() => {
      setAnchorEl(null);
      setOpenMenu(null);
    }, 200);
  };

  const handlePopoverEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handlePopoverLeave = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {navItems.map((item) =>
        item.children ? (
          <Box
            key={item.text}
            onMouseEnter={(e) => handleMenuOpen(e, item.text)}
            onMouseLeave={handleMenuClose}
          >
            <Button
              aria-owns={openMenu === item.text ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}
              endIcon={openMenu === item.text ? <ArrowDropUp /> : <ArrowDropDown />}
            >
              {item.text}
            </Button>
            <Popover
              id="mouse-over-popover"
              open={openMenu === item.text}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleMenuClose}
              disableRestoreFocus
              PaperProps={{
                onMouseEnter: handlePopoverEnter,
                onMouseLeave: handlePopoverLeave,
                sx: { pointerEvents: 'auto' }
              }}
            >
              <Paper sx={{ background: 'rgba(0, 20, 0, 0.9)', backdropFilter: 'blur(5px)', border: '1px solid rgba(0, 255, 0, 0.2)' }}>
                {item.children.map((child) => (
                  <Button
                    key={child.text}
                    component={Link}
                    to={child.link || '#'}
                    onClick={handlePopoverLeave}
                    sx={{ display: 'block', width: '100%', color: 'white', textTransform: 'none', padding: '10px 20px' }}
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
            sx={{ color: 'white', textTransform: 'none', fontSize: '1rem' }}
          >
            {item.text}
          </Button>
        )
      )}
    </Box>
  );
};
