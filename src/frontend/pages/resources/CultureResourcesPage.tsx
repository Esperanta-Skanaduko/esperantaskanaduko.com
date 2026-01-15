import React from 'react';
import { cultureResources } from '../../../data/cultureResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Culture Resources Page
 *
 * Displays all culture resources including history, traditions, and cultural information.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const CultureResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.culture"
      defaultTitle="Culture & History"
      descriptionKey="resources.pages.culture.description"
      defaultDescription="Learn about Esperanto culture, history, traditions, and the global Esperanto movement"
      categoryName="Culture"
      resources={cultureResources}
      additionalKeywords={[
        'Esperanto culture',
        'Esperanto history',
        'Esperanto movement',
        'Esperanto traditions',
        'Zamenhof',
      ]}
    />
  );
};

export default CultureResourcesPage;
