import React from 'react';
import { communityResources } from '../../../data/communityResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Community Resources Page
 *
 * Displays all community resources including maps, forums, and social groups.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const CommunityResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.community"
      defaultTitle="Community & Maps"
      descriptionKey="resources.pages.community.description"
      defaultDescription="Connect with Esperanto speakers worldwide through communities, forums, and interactive maps"
      categoryName="Community"
      resources={communityResources}
      additionalKeywords={[
        'Esperanto community',
        'Esperanto speakers',
        'Esperanto forums',
        'Esperanto groups',
        'find Esperanto speakers',
      ]}
    />
  );
};

export default CommunityResourcesPage;
