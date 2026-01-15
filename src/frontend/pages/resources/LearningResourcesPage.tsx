import React from 'react';
import { learningResources } from '../../../data/learningResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Learning Resources Page
 *
 * Displays all learning resources including courses, lessons, and educational materials.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const LearningResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.learning"
      defaultTitle="Learning Resources"
      descriptionKey="resources.pages.learning.description"
      defaultDescription="Comprehensive courses, lessons, and materials for learning Esperanto at all levels"
      categoryName="Learning"
      resources={learningResources}
      additionalKeywords={[
        'Esperanto courses',
        'learn Esperanto online',
        'Esperanto lessons',
        'Esperanto tutorials',
        'language learning courses',
        'beginner Esperanto',
      ]}
    />
  );
};

export default LearningResourcesPage;
