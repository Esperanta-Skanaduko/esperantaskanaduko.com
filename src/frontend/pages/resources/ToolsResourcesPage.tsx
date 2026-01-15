import React from 'react';
import { toolsResources } from '../../../data/toolsResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Tools Resources Page
 *
 * Displays all tools including keyboards, dictionaries, and utilities.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const ToolsResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.tools"
      defaultTitle="Tools & Keyboards"
      descriptionKey="resources.pages.tools.description"
      defaultDescription="Essential tools, keyboards, dictionaries, and utilities for working with Esperanto"
      categoryName="Tools"
      resources={toolsResources}
      additionalKeywords={[
        'Esperanto keyboard',
        'Esperanto dictionary',
        'Esperanto tools',
        'Esperanto typing',
        'language tools',
      ]}
    />
  );
};

export default ToolsResourcesPage;
