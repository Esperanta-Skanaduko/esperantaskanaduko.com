import { createTheme } from '@mui/material/styles';

/**
 * Material UI Theme Configuration
 * Comprehensive dark theme with Esperanto-inspired green accents
 * Features custom typography, spacing, and component overrides
 */
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00',
      light: '#33ff33',
      dark: '#008000',
      contrastText: '#000000',
    },
    secondary: {
      main: '#646cff',
      light: '#747bff',
      dark: '#535ac8',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: 'rgb(18, 20, 21)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      disabled: '#666666',
    },
    error: {
      main: '#ff0000',
      light: '#ff3333',
      dark: '#cc0000',
    },
    warning: {
      main: '#ffa500',
      light: '#ffb733',
      dark: '#cc8400',
    },
    info: {
      main: '#646cff',
      light: '#747bff',
      dark: '#535ac8',
    },
    success: {
      main: '#00ff00',
      light: '#33ff33',
      dark: '#008000',
    },
    divider: 'rgba(0, 255, 0, 0.1)',
    action: {
      active: '#00ff00',
      hover: 'rgba(0, 255, 0, 0.08)',
      selected: 'rgba(0, 255, 0, 0.16)',
      disabled: '#666666',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Copperplate',
      fontSize: '90px',
      lineHeight: 0.85,
      textTransform: 'uppercase',
      textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
      color: 'white',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: 'Courier New',
      fontSize: '32px',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      textShadow: '0 0 8px rgba(0, 255, 0, 0.5), 0 0 2px white',
      color: '#00ff00',
      marginTop: '1rem',
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#ffffff',
    },
    h4: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#ffffff',
    },
    h5: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#ffffff',
    },
    h6: {
      fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: '#00ff00',
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75,
      color: '#a0a0a0',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      color: '#a0a0a0',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#ffffff',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
      color: '#a0a0a0',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      textTransform: 'none',
      letterSpacing: '0.02857em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
      color: '#a0a0a0',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 2.66,
      textTransform: 'uppercase',
      letterSpacing: '0.08333em',
      color: '#a0a0a0',
    },
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,255,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,255,0,0.1),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,255,0,0.1),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,255,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,255,0,0.1),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,255,0,0.1),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,255,0,0.1),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,255,0,0.1),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,255,0,0.1),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,255,0,0.1),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,255,0,0.1),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,255,0,0.1),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,255,0,0.1),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,255,0,0.1),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,255,0,0.1),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,255,0,0.1),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,255,0,0.1),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,255,0,0.1),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,255,0,0.1),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,255,0,0.1),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,255,0,0.1),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,255,0,0.1),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,255,0,0.1),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,255,0,0.1),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        '@keyframes slideInLeft': {
          from: {
            opacity: 0,
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        '@keyframes slideInRight': {
          from: {
            opacity: 0,
            transform: 'translateX(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        '@keyframes scaleIn': {
          from: {
            opacity: 0,
            transform: 'scale(0.9)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        '@keyframes pulse': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.8,
          },
        },
        body: {
          backgroundColor: '#000000',
          background: 'linear-gradient(135deg, #000000 0%, #001a00 50%, #000000 100%)',
          backgroundAttachment: 'fixed',
          margin: 0,
          display: 'flex',
          placeItems: 'center',
          minWidth: '320px',
          minHeight: '100vh',
          scrollbarWidth: 'thin',
          scrollbarColor: '#00ff00 #000000',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#000000',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#00ff00',
            borderRadius: '4px',
            '&:hover': {
              background: '#00cc00',
            },
          },
        },
        '#root': {
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '12px',
        },
        'a': {
          fontWeight: 500,
          color: '#646cff',
          textDecoration: 'inherit',
          transition: 'color 0.25s',
          '&:hover': {
            color: '#00ff00',
          },
        },
        'code': {
          fontFamily: 'Courier New, monospace',
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '0.9em',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: false,
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '0.6em 1.2em',
          fontSize: '1em',
          fontWeight: 500,
          textTransform: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 8px 16px rgba(0, 255, 0, 0.3), 0 0 20px rgba(0, 255, 0, 0.1)',
          },
          '&:active': {
            transform: 'translateY(-1px) scale(0.98)',
            transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
        contained: {
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          border: '1px solid rgba(0, 255, 0, 0.3)',
          color: '#00ff00',
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: '#00ff00',
          },
        },
        outlined: {
          borderColor: 'rgba(0, 255, 0, 0.3)',
          color: '#00ff00',
          '&:hover': {
            borderColor: '#00ff00',
            backgroundColor: 'rgba(0, 255, 0, 0.05)',
          },
        },
        text: {
          color: '#a0a0a0',
          '&:hover': {
            color: '#00ff00',
            backgroundColor: 'rgba(0, 255, 0, 0.05)',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#646cff',
          textDecoration: 'none',
          transition: 'color 0.25s',
          cursor: 'pointer',
          '&:hover': {
            color: '#00ff00',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 20, 21, 0.9)',
          backgroundImage: 'none',
          border: '1px solid rgba(0, 255, 0, 0.1)',
        },
        elevation1: {
          boxShadow: '0 2px 4px rgba(0, 255, 0, 0.1)',
        },
        elevation2: {
          boxShadow: '0 4px 8px rgba(0, 255, 0, 0.15)',
        },
        elevation3: {
          boxShadow: '0 8px 16px rgba(0, 255, 0, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 20, 21, 0.9)',
          border: '1px solid rgba(0, 255, 0, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: 'rgba(0, 255, 0, 0.5)',
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 16px 32px rgba(0, 255, 0, 0.3), 0 0 40px rgba(0, 255, 0, 0.1)',
            '& .MuiCardContent-root': {
              transform: 'scale(1.01)',
            },
          },
          '&:active': {
            transform: 'translateY(-2px) scale(1)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 255, 0, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 255, 0, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00ff00',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#00ff00',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 255, 0, 0.2)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 255, 0, 0.4)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#00ff00',
          },
        },
        icon: {
          color: '#00ff00',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.08)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 255, 0, 0.16)',
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.24)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          color: '#00ff00',
          border: '1px solid rgba(0, 255, 0, 0.3)',
        },
        deleteIcon: {
          color: '#00ff00',
          '&:hover': {
            color: '#00cc00',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 255, 0, 0.1)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          color: '#00ff00',
          border: '1px solid rgba(0, 255, 0, 0.3)',
          fontSize: '0.875rem',
        },
        arrow: {
          color: 'rgba(0, 0, 0, 0.95)',
          '&::before': {
            border: '1px solid rgba(0, 255, 0, 0.3)',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          border: '1px solid',
        },
        standardSuccess: {
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          color: '#00ff00',
          borderColor: 'rgba(0, 255, 0, 0.3)',
        },
        standardError: {
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          color: '#ff0000',
          borderColor: 'rgba(255, 0, 0, 0.3)',
        },
        standardWarning: {
          backgroundColor: 'rgba(255, 165, 0, 0.1)',
          color: '#ffa500',
          borderColor: 'rgba(255, 165, 0, 0.3)',
        },
        standardInfo: {
          backgroundColor: 'rgba(100, 108, 255, 0.1)',
          color: '#646cff',
          borderColor: 'rgba(100, 108, 255, 0.3)',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#00ff00',
            '& + .MuiSwitch-track': {
              backgroundColor: '#00ff00',
              opacity: 0.5,
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: 'rgba(0, 255, 0, 0.5)',
          '&.Mui-checked': {
            color: '#00ff00',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'rgba(0, 255, 0, 0.5)',
          '&.Mui-checked': {
            color: '#00ff00',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
        },
        bar: {
          backgroundColor: '#00ff00',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#00ff00',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(18, 20, 21, 0.95)',
          backgroundImage: 'none',
          border: '1px solid rgba(0, 255, 0, 0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 20, 21, 0.9)',
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(0, 255, 0, 0.1)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(18, 20, 21, 0.95)',
          backgroundImage: 'none',
          borderRight: '1px solid rgba(0, 255, 0, 0.1)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#a0a0a0',
          '&.Mui-selected': {
            color: '#00ff00',
          },
          '&:hover': {
            color: '#00ff00',
            opacity: 0.8,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#00ff00',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          '&::after': {
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.2), transparent)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 255, 0, 0.1)',
          color: '#ffffff',
        },
        head: {
          color: '#00ff00',
          fontWeight: 600,
          backgroundColor: 'rgba(0, 255, 0, 0.05)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.05)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.15)',
            },
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            color: '#a0a0a0',
            borderColor: 'rgba(0, 255, 0, 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(0, 255, 0, 0.08)',
              borderColor: 'rgba(0, 255, 0, 0.4)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(0, 255, 0, 0.16)',
              borderColor: '#00ff00',
              color: '#00ff00',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 0, 0.24)',
              },
            },
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          color: '#00ff00',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'rgba(0, 255, 0, 0.3)',
          '&.Mui-active': {
            color: '#00ff00',
          },
          '&.Mui-completed': {
            color: '#00ff00',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: '#a0a0a0',
          '&.Mui-active': {
            color: '#00ff00',
          },
          '&.Mui-completed': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 20, 21, 0.9)',
          border: '1px solid rgba(0, 255, 0, 0.1)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            borderColor: 'rgba(0, 255, 0, 0.3)',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 0, 0.05)',
          },
          '&.Mui-expanded': {
            backgroundColor: 'rgba(0, 255, 0, 0.08)',
          },
        },
        expandIconWrapper: {
          color: '#00ff00',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: '#00ff00',
        },
        iconHover: {
          color: '#33ff33',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: '#00ff00',
          color: '#000000',
          fontWeight: 600,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: 'rgba(18, 20, 21, 0.95)',
            border: '1px solid rgba(0, 255, 0, 0.3)',
          },
        },
      },
    },
  },
});
