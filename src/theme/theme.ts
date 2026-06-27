import { createTheme, Theme } from '@mui/material/styles';

/**
 * Supported color modes for the application theme.
 */
export type ColorMode = 'dark' | 'light';

// ─── Design Tokens ───────────────────────────────────────────────────────────

interface ThemeTokens {
  accent: string;
  accentDark: string;
  accentLight: string;
  bg: string;
  paper: string;
  paperSolid: string;
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  navbarBg: string;
  bodyGradient: string;
  accentHoverBg: string;
  accentSelectedBg: string;
  accentSubtle: string;
  accentSubtleHover: string;
  divider: string;
  codeBackground: string;
  tooltipBg: string;
  tooltipText: string;
  tooltipBorder: string;
  backdropBg: string;
  h2Shadow: string;
}

const darkTokens: ThemeTokens = {
  accent: '#00ff00',
  accentDark: '#008000',
  accentLight: '#33ff33',
  bg: '#000000',
  paper: 'rgba(18, 20, 21, 0.9)',
  paperSolid: 'rgba(18, 20, 21, 0.95)',
  textPrimary: '#ffffff',
  textSecondary: '#b0b0b0',
  textDisabled: '#666666',
  navbarBg: 'rgba(0, 20, 0, 0.8)',
  bodyGradient: 'linear-gradient(135deg, #000000 0%, #001a00 50%, #000000 100%)',
  accentHoverBg: 'rgba(0, 255, 0, 0.08)',
  accentSelectedBg: 'rgba(0, 255, 0, 0.16)',
  accentSubtle: 'rgba(0, 255, 0, 0.1)',
  accentSubtleHover: 'rgba(0, 255, 0, 0.2)',
  divider: 'rgba(0, 255, 0, 0.1)',
  codeBackground: 'rgba(0, 255, 0, 0.1)',
  tooltipBg: 'rgba(0, 0, 0, 0.95)',
  tooltipText: '#00ff00',
  tooltipBorder: 'rgba(0, 255, 0, 0.3)',
  backdropBg: 'rgba(0, 0, 0, 0.8)',
  h2Shadow: '0 0 8px rgba(0, 255, 0, 0.5), 0 0 2px white',
};

const lightTokens: ThemeTokens = {
  accent: '#006600',
  accentDark: '#004d00',
  accentLight: '#008800',
  bg: '#f5f5f5',
  paper: 'rgba(255, 255, 255, 0.95)',
  paperSolid: 'rgba(255, 255, 255, 0.98)',
  textPrimary: '#1a1a1a',
  textSecondary: '#555555',
  textDisabled: '#999999',
  navbarBg: 'rgba(232, 245, 232, 0.92)',
  bodyGradient: 'linear-gradient(135deg, #f5f5f5 0%, #e8f5e8 50%, #f5f5f5 100%)',
  accentHoverBg: 'rgba(0, 102, 0, 0.06)',
  accentSelectedBg: 'rgba(0, 102, 0, 0.12)',
  accentSubtle: 'rgba(0, 102, 0, 0.08)',
  accentSubtleHover: 'rgba(0, 102, 0, 0.14)',
  divider: 'rgba(0, 102, 0, 0.15)',
  codeBackground: 'rgba(0, 102, 0, 0.08)',
  tooltipBg: 'rgba(30, 30, 30, 0.92)',
  tooltipText: '#e8ffe8',
  tooltipBorder: 'rgba(0, 102, 0, 0.4)',
  backdropBg: 'rgba(0, 0, 0, 0.5)',
  h2Shadow: '0 0 6px rgba(0, 102, 0, 0.25), 0 0 1px rgba(0, 0, 0, 0.15)',
};

// ─── Theme Factory ────────────────────────────────────────────────────────────

/**
 * Create a Material UI theme for the given color mode.
 *
 * Dark mode:  black background (#000000), neon green (#00ff00) accent
 * Light mode: light grey (#f5f5f5) background, accessible green (#006600) accent
 *
 * @param mode - 'dark' | 'light'
 * @returns A fully configured MUI Theme
 */
export function createAppTheme(mode: ColorMode): Theme {
  const tk = mode === 'dark' ? darkTokens : lightTokens;
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: tk.accent,
        light: tk.accentLight,
        dark: tk.accentDark,
        contrastText: isDark ? '#000000' : '#ffffff',
      },
      secondary: {
        main: '#646cff',
        light: '#747bff',
        dark: '#535ac8',
        contrastText: '#ffffff',
      },
      background: {
        default: tk.bg,
        paper: tk.paper,
      },
      text: {
        primary: tk.textPrimary,
        secondary: tk.textSecondary,
        disabled: tk.textDisabled,
      },
      error: {
        main: '#e53935',
        light: '#ef5350',
        dark: '#c62828',
      },
      warning: {
        main: '#fb8c00',
        light: '#ffa726',
        dark: '#e65100',
      },
      info: {
        main: '#646cff',
        light: '#747bff',
        dark: '#535ac8',
      },
      success: {
        main: tk.accent,
        light: tk.accentLight,
        dark: tk.accentDark,
      },
      divider: tk.divider,
      action: {
        active: tk.accent,
        hover: tk.accentHoverBg,
        selected: tk.accentSelectedBg,
        disabled: tk.textDisabled,
        disabledBackground: isDark
          ? 'rgba(255, 255, 255, 0.12)'
          : 'rgba(0, 0, 0, 0.08)',
      },
    },

    spacing: 8,
    shape: { borderRadius: 8 },

    breakpoints: {
      values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
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
        color: isDark ? 'white' : '#1a1a1a',
        fontWeight: 700,
        letterSpacing: '0.02em',
      },
      h2: {
        fontFamily: 'Courier New',
        fontSize: '32px',
        fontWeight: 'normal',
        textTransform: 'uppercase',
        textShadow: tk.h2Shadow,
        color: tk.accent,
        marginTop: '1rem',
        letterSpacing: '0.01em',
      },
      h3: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.2,
        color: tk.textPrimary,
      },
      h4: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.3,
        color: tk.textPrimary,
      },
      h5: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: tk.textPrimary,
      },
      h6: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        fontSize: '1.25rem',
        fontWeight: 600,
        lineHeight: 1.5,
        color: tk.accent,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.75,
        color: tk.textSecondary,
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
        color: tk.textSecondary,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: tk.textPrimary,
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        color: tk.textSecondary,
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
        color: tk.textSecondary,
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 2.66,
        textTransform: 'uppercase',
        letterSpacing: '0.08333em',
        color: tk.textSecondary,
      },
    },

    shadows: [
      'none',
      `0px 2px 1px -1px ${tk.accentSubtle},0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)`,
      `0px 3px 1px -2px ${tk.accentSubtle},0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)`,
      `0px 3px 3px -2px ${tk.accentSubtle},0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)`,
      `0px 2px 4px -1px ${tk.accentSubtle},0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)`,
      `0px 3px 5px -1px ${tk.accentSubtle},0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)`,
      `0px 3px 5px -1px ${tk.accentSubtle},0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)`,
      `0px 4px 5px -2px ${tk.accentSubtle},0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)`,
      `0px 5px 5px -3px ${tk.accentSubtle},0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)`,
      `0px 5px 6px -3px ${tk.accentSubtle},0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)`,
      `0px 6px 6px -3px ${tk.accentSubtle},0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)`,
      `0px 6px 7px -4px ${tk.accentSubtle},0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)`,
      `0px 7px 8px -4px ${tk.accentSubtle},0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)`,
      `0px 7px 8px -4px ${tk.accentSubtle},0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)`,
      `0px 7px 9px -4px ${tk.accentSubtle},0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)`,
      `0px 8px 9px -5px ${tk.accentSubtle},0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)`,
      `0px 8px 10px -5px ${tk.accentSubtle},0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)`,
      `0px 8px 11px -5px ${tk.accentSubtle},0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)`,
      `0px 9px 11px -5px ${tk.accentSubtle},0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)`,
      `0px 9px 12px -6px ${tk.accentSubtle},0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)`,
      `0px 10px 13px -6px ${tk.accentSubtle},0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)`,
      `0px 10px 13px -6px ${tk.accentSubtle},0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)`,
      `0px 10px 14px -6px ${tk.accentSubtle},0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)`,
      `0px 11px 14px -7px ${tk.accentSubtle},0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)`,
      `0px 11px 15px -7px ${tk.accentSubtle},0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)`,
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
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          '@keyframes slideInLeft': {
            from: { opacity: 0, transform: 'translateX(-30px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          '@keyframes slideInRight': {
            from: { opacity: 0, transform: 'translateX(30px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
          },
          '@keyframes scaleIn': {
            from: { opacity: 0, transform: 'scale(0.9)' },
            to: { opacity: 1, transform: 'scale(1)' },
          },
          '@keyframes pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.8 },
          },
          body: {
            backgroundColor: tk.bg,
            background: tk.bodyGradient,
            backgroundAttachment: 'fixed',
            margin: 0,
            minWidth: '320px',
            minHeight: '100vh',
            transition: 'background 0.3s ease, background-color 0.3s ease',
          },
          a: {
            fontWeight: 500,
            color: '#646cff',
            textDecoration: 'inherit',
            transition: 'color 0.25s',
            '&:hover': { color: tk.accent },
          },
          code: {
            fontFamily: 'Courier New, monospace',
            backgroundColor: tk.codeBackground,
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
              boxShadow: `0 8px 16px ${tk.accentSubtleHover}, 0 0 20px ${tk.accentSubtle}`,
            },
            '&:active': {
              transform: 'translateY(-1px) scale(0.98)',
              transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
            },
          },
          contained: {
            backgroundColor: tk.accentSubtle,
            border: `1px solid ${tk.divider}`,
            color: tk.accent,
            '&:hover': {
              backgroundColor: tk.accentSubtleHover,
              borderColor: tk.accent,
            },
          },
          outlined: {
            borderColor: tk.divider,
            color: tk.accent,
            '&:hover': {
              borderColor: tk.accent,
              backgroundColor: tk.accentSubtle,
            },
          },
          text: {
            color: tk.textSecondary,
            '&:hover': {
              color: tk.accent,
              backgroundColor: tk.accentSubtle,
            },
          },
        },
      },

      MuiLink: {
        defaultProps: { underline: 'none' },
        styleOverrides: {
          root: {
            color: '#646cff',
            textDecoration: 'none',
            transition: 'color 0.25s',
            cursor: 'pointer',
            '&:hover': { color: tk.accent },
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: tk.paper,
            backgroundImage: 'none',
            border: `1px solid ${tk.divider}`,
          },
          elevation1: { boxShadow: `0 2px 4px ${tk.accentSubtle}` },
          elevation2: { boxShadow: `0 4px 8px ${tk.accentSubtleHover}` },
          elevation3: { boxShadow: `0 8px 16px ${tk.accentSubtleHover}` },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: tk.paper,
            border: `1px solid ${tk.divider}`,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              borderColor: isDark
                ? 'rgba(0, 255, 0, 0.5)'
                : 'rgba(0, 102, 0, 0.4)',
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: `0 16px 32px ${tk.accentSubtleHover}, 0 0 40px ${tk.accentSubtle}`,
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
              '& fieldset': { borderColor: tk.divider },
              '&:hover fieldset': { borderColor: tk.accentSubtleHover },
              '&.Mui-focused fieldset': { borderColor: tk.accent },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: tk.accent,
            },
          },
        },
      },

      MuiSelect: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': { borderColor: tk.divider },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: tk.accentSubtleHover,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: tk.accent,
            },
          },
          icon: { color: tk.accent },
        },
      },

      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&:hover': { backgroundColor: tk.accentHoverBg },
            '&.Mui-selected': {
              backgroundColor: tk.accentSelectedBg,
              '&:hover': {
                backgroundColor: isDark
                  ? 'rgba(0, 255, 0, 0.24)'
                  : 'rgba(0, 102, 0, 0.18)',
              },
            },
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            backgroundColor: tk.accentSubtle,
            color: tk.accent,
            border: `1px solid ${tk.divider}`,
          },
          deleteIcon: {
            color: tk.accent,
            '&:hover': { color: tk.accentDark },
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: { borderColor: tk.divider },
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: tk.tooltipBg,
            color: tk.tooltipText,
            border: `1px solid ${tk.tooltipBorder}`,
            fontSize: '0.875rem',
          },
          arrow: {
            color: tk.tooltipBg,
            '&::before': { border: `1px solid ${tk.tooltipBorder}` },
          },
        },
      },

      MuiAlert: {
        styleOverrides: {
          root: { border: '1px solid' },
          standardSuccess: {
            backgroundColor: tk.accentSubtle,
            color: tk.accent,
            borderColor: tk.divider,
          },
          standardError: {
            backgroundColor: 'rgba(229, 57, 53, 0.08)',
            color: isDark ? '#ff5252' : '#c62828',
            borderColor: 'rgba(229, 57, 53, 0.3)',
          },
          standardWarning: {
            backgroundColor: 'rgba(251, 140, 0, 0.08)',
            color: isDark ? '#ffa726' : '#e65100',
            borderColor: 'rgba(251, 140, 0, 0.3)',
          },
          standardInfo: {
            backgroundColor: 'rgba(100, 108, 255, 0.08)',
            color: '#646cff',
            borderColor: 'rgba(100, 108, 255, 0.3)',
          },
        },
      },

      MuiSwitch: {
        styleOverrides: {
          root: {
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: tk.accent,
              '& + .MuiSwitch-track': {
                backgroundColor: tk.accent,
                opacity: 0.5,
              },
            },
          },
        },
      },

      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: tk.divider,
            '&.Mui-checked': { color: tk.accent },
          },
        },
      },

      MuiRadio: {
        styleOverrides: {
          root: {
            color: tk.divider,
            '&.Mui-checked': { color: tk.accent },
          },
        },
      },

      MuiLinearProgress: {
        styleOverrides: {
          root: { backgroundColor: tk.accentSubtle },
          bar: { backgroundColor: tk.accent },
        },
      },

      MuiCircularProgress: {
        styleOverrides: {
          root: { color: tk.accent },
        },
      },

      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: tk.backdropBg,
            backdropFilter: 'blur(4px)',
          },
        },
      },

      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: tk.paperSolid,
            backgroundImage: 'none',
            border: `1px solid ${tk.divider}`,
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: tk.navbarBg,
            backgroundImage: 'none',
            borderBottom: `1px solid ${tk.divider}`,
          },
        },
      },

      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: tk.paperSolid,
            backgroundImage: 'none',
            borderRight: `1px solid ${tk.divider}`,
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            color: tk.textSecondary,
            '&.Mui-selected': { color: tk.accent },
            '&:hover': { color: tk.accent, opacity: 0.8 },
          },
        },
      },

      MuiTabs: {
        styleOverrides: {
          indicator: { backgroundColor: tk.accent },
        },
      },

      MuiSkeleton: {
        styleOverrides: {
          root: {
            backgroundColor: tk.accentSubtle,
            '&::after': {
              background: `linear-gradient(90deg, transparent, ${tk.accentSubtleHover}, transparent)`,
            },
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: tk.divider,
            color: tk.textPrimary,
          },
          head: {
            color: tk.accent,
            fontWeight: 600,
            backgroundColor: tk.accentSubtle,
          },
        },
      },

      MuiTableRow: {
        styleOverrides: {
          root: {
            '&:hover': { backgroundColor: tk.accentSubtle },
            '&.Mui-selected': {
              backgroundColor: tk.accentSelectedBg,
              '&:hover': { backgroundColor: tk.accentSubtleHover },
            },
          },
        },
      },

      MuiPagination: {
        styleOverrides: {
          root: {
            '& .MuiPaginationItem-root': {
              color: tk.textSecondary,
              borderColor: tk.divider,
              '&:hover': {
                backgroundColor: tk.accentHoverBg,
                borderColor: tk.accentSubtleHover,
              },
              '&.Mui-selected': {
                backgroundColor: tk.accentSelectedBg,
                borderColor: tk.accent,
                color: tk.accent,
                '&:hover': { backgroundColor: tk.accentSubtleHover },
              },
            },
          },
        },
      },

      MuiBreadcrumbs: {
        styleOverrides: {
          separator: { color: tk.accent },
        },
      },

      MuiStepIcon: {
        styleOverrides: {
          root: {
            color: tk.divider,
            '&.Mui-active': { color: tk.accent },
            '&.Mui-completed': { color: tk.accent },
          },
        },
      },

      MuiStepLabel: {
        styleOverrides: {
          label: {
            color: tk.textSecondary,
            '&.Mui-active': { color: tk.accent },
            '&.Mui-completed': { color: tk.textPrimary },
          },
        },
      },

      MuiAccordion: {
        styleOverrides: {
          root: {
            backgroundColor: tk.paper,
            border: `1px solid ${tk.divider}`,
            '&:before': { display: 'none' },
            '&.Mui-expanded': { borderColor: tk.accentSubtleHover },
          },
        },
      },

      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            '&:hover': { backgroundColor: tk.accentSubtle },
            '&.Mui-expanded': { backgroundColor: tk.accentHoverBg },
          },
          expandIconWrapper: { color: tk.accent },
        },
      },

      MuiRating: {
        styleOverrides: {
          iconFilled: { color: tk.accent },
          iconHover: { color: tk.accentLight },
        },
      },

      MuiBadge: {
        styleOverrides: {
          badge: {
            backgroundColor: tk.accent,
            color: isDark ? '#000000' : '#ffffff',
            fontWeight: 600,
          },
        },
      },

      MuiSnackbar: {
        styleOverrides: {
          root: {
            '& .MuiPaper-root': {
              backgroundColor: tk.paperSolid,
              border: `1px solid ${tk.divider}`,
            },
          },
        },
      },
    },
  });
}

// ─── Pre-built theme instances ────────────────────────────────────────────────

/** Dark theme (neon green on black) */
export const darkTheme = createAppTheme('dark');

/** Light theme (accessible green on white/grey) */
export const lightTheme = createAppTheme('light');

/** Default export — dark theme, kept for backward compatibility */
export const theme = darkTheme;
