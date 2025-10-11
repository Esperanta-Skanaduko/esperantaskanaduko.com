import { useTranslation } from 'react-i18next';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { SUPPORTED_LANGUAGES } from '../../../i18n/config';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <FormControl
        sx={{
          minWidth: 120,
          '& .MuiOutlinedInput-root': {
            fontSize: '0.9rem',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4CAF50',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4CAF50',
              boxShadow: '0 0 0 2px rgba(76, 175, 80, 0.2)',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.9rem',
            fontWeight: 500,
            '&.Mui-focused': {
              color: '#4CAF50',
            },
          },
        }}
        size="small"
      >
        <InputLabel id="language-select-label">{t('common.language')}</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={i18n.language}
          label={t('common.language')}
          onChange={handleLanguageChange}
        >
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => (
            <MenuItem key={code} value={code}>
              {String(name)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
