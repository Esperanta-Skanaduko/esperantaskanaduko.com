import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Popover,
  Typography,
  ButtonBase,
  Paper,
  InputBase,
  IconButton,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { LANGUAGES } from '../../../i18n/config';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchQuery('');
  };

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const currentLanguage = LANGUAGES[i18n.language as keyof typeof LANGUAGES] || LANGUAGES.en;

  // Filter languages based on search query
  const filteredLanguages = Object.entries(LANGUAGES).filter(([, lang]) => {
    const query = searchQuery.toLowerCase();
    return (
      lang.nativeName.toLowerCase().includes(query) ||
      lang.name.toLowerCase().includes(query) ||
      lang.code.toLowerCase().includes(query)
    );
  });

  return (
    <Box>
      <Button
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        sx={{
          fontSize: '0.9rem',
          fontWeight: 500,
          color: 'text.primary',
          textTransform: 'none',
          padding: '6px 12px',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'rgba(76, 175, 80, 0.08)',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span style={{ fontSize: '1.2rem' }}>{currentLanguage.flag}</span>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {currentLanguage.nativeName}
          </Typography>
        </Box>
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            maxWidth: '90vw',
            width: { xs: '95vw', sm: '600px', md: '700px' },
            maxHeight: '70vh',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {t('common.ui.selectLanguage') || 'Select Language'}
            </Typography>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Search Bar */}
          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              p: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.02)',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'divider',
            }}
            elevation={0}
          >
            <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
            <InputBase
              placeholder={t('common.ui.searchLanguages') || 'Search languages...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ flex: 1, fontSize: '0.9rem' }}
            />
            {searchQuery && (
              <IconButton size="small" onClick={() => setSearchQuery('')}>
                <CloseIcon fontSize="small" />
              </IconButton>
            )}
          </Paper>

          {/* Language Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 1,
              maxHeight: 'calc(70vh - 180px)',
              overflowY: 'auto',
              pr: 1,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(76, 175, 80, 0.5)',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(76, 175, 80, 0.7)',
                },
              },
            }}
          >
            {filteredLanguages.map(([code, lang]) => (
              <ButtonBase
                key={code}
                onClick={() => handleLanguageChange(code)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 8px',
                  borderRadius: '8px',
                  border: '2px solid',
                  borderColor: i18n.language === code ? '#4CAF50' : 'divider',
                  backgroundColor: i18n.language === code ? 'rgba(76, 175, 80, 0.08)' : 'transparent',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.08)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)',
                  },
                }}
              >
                <Typography sx={{ fontSize: '1.8rem', mb: 0.5 }}>{lang.flag}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: i18n.language === code ? 600 : 500,
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    color: i18n.language === code ? '#4CAF50' : 'text.primary',
                  }}
                >
                  {lang.nativeName}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.7rem',
                    mt: 0.25,
                  }}
                >
                  {lang.name}
                </Typography>
              </ButtonBase>
            ))}
          </Box>

          {/* No results message */}
          {filteredLanguages.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="body2" color="text.secondary">
                {t('common.ui.noLanguagesFound') || 'No languages found'}
              </Typography>
            </Box>
          )}

          {/* Footer Info */}
          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center', display: 'block' }}>
              {filteredLanguages.length} {filteredLanguages.length === 1 ? 'language' : 'languages'} available
            </Typography>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};
