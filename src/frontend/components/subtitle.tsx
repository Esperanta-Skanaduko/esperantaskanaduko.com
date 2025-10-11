import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const Subtitle = ({ subtitle }: { subtitle?: string }) => {
  const { t } = useTranslation();

  return (
    <Typography
      variant="h2"
      component="h2"
      sx={{
        textAlign: 'center',
        marginTop: '1rem',
        textRendering: 'optimizeLegibility',
      }}
    >
      {subtitle ?? t('common.site.tagline')}
    </Typography>
  );
};

export default Subtitle;
