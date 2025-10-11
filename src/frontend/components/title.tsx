import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

const Title = ({ title }: { title?: string }) => {
  const { t } = useTranslation();
  const titleText = title ?? t('common.siteName');
  const titleParts = titleText.split('\n');

  return (
    <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
      {titleParts.map((part, index) => (
        <span key={index}>
          {part}
          {index < titleParts.length - 1 && <br />}
        </span>
      ))}
    </Typography>
  );
};

export default Title;
