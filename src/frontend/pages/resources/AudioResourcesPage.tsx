import React from 'react';
import { audioResources } from '../../../data/audioResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Audio Resources Page
 *
 * Displays all audio resources including podcasts, radio shows, and audio lessons.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const AudioResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.audio"
      defaultTitle="Audio & Podcasts"
      descriptionKey="resources.pages.audio.description"
      defaultDescription="Listen to Esperanto podcasts, radio shows, and audio lessons"
      categoryName="Audio"
      resources={audioResources}
      additionalKeywords={[
        'Esperanto podcasts',
        'Esperanto audio',
        'Esperanto radio',
        'listen to Esperanto',
        'Esperanto listening practice',
      ]}
    />
  );
};

export default AudioResourcesPage;
