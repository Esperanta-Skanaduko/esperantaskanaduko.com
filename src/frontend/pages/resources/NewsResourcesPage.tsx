import React from 'react';
import { newsLiteratureResources } from '../../../data/newsLiteratureResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * News Resources Page
 *
 * Displays all news and literature resources including magazines, newspapers, and publications.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const NewsResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.news"
      defaultTitle="News & Literature"
      descriptionKey="resources.pages.news.description"
      defaultDescription="Read Esperanto news, magazines, newspapers, and literary publications"
      categoryName="News"
      resources={newsLiteratureResources}
      additionalKeywords={[
        'Esperanto news',
        'Esperanto magazines',
        'Esperanto newspapers',
        'Esperanto publications',
        'read Esperanto news',
      ]}
    />
  );
};

export default NewsResourcesPage;
