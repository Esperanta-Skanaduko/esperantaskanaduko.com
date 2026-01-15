import React from 'react';
import { organizationResources } from '../../../data/organizationResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Organizations Resources Page
 *
 * Displays all organization resources including associations, institutions, and foundations.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const OrganizationsResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.organizations"
      defaultTitle="Organizations"
      descriptionKey="resources.pages.organizations.description"
      defaultDescription="Explore Esperanto organizations, associations, and institutions worldwide"
      categoryName="Organizations"
      resources={organizationResources}
      additionalKeywords={[
        'Esperanto organizations',
        'Esperanto associations',
        'Esperanto institutions',
        'Esperanto foundations',
        'Esperanto groups',
      ]}
    />
  );
};

export default OrganizationsResourcesPage;
