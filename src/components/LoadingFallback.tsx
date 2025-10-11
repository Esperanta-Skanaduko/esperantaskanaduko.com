import { useTranslation } from 'react-i18next';
import { Loading } from './Loading';

/**
 * LoadingFallback Component
 *
 * Provides an internationalized loading fallback for React Suspense.
 * Uses the i18n translation system to display loading messages in the user's selected language.
 *
 * @returns Loading component with translated message
 */
export const LoadingFallback = () => {
  const { t } = useTranslation();

  return (
    <Loading
      variant='fullscreen'
      message={t('common.ui.loading', 'Ŝarĝante...')}
    />
  );
};
