import React from 'react';
import { grammarGuides } from '../../../data/grammarGuides';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Grammar Resources Page
 *
 * Displays all grammar guides and reference materials.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const GrammarResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.grammar"
      defaultTitle="Grammar Guides"
      descriptionKey="resources.pages.grammar.description"
      defaultDescription="Comprehensive grammar guides and references for mastering Esperanto grammar"
      categoryName="Grammar"
      resources={grammarGuides}
      additionalKeywords={[
        'Esperanto grammar',
        'Esperanto grammar rules',
        'learn Esperanto grammar',
        'Esperanto reference',
        'grammar guides',
      ]}
    />
  );
};

export default GrammarResourcesPage;
