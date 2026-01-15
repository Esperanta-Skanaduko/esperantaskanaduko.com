import React from 'react';
import { allMusicResources } from '../../../data/musicResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Music Resources Page
 *
 * Displays all music resources including artists, bands, and albums.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const MusicResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.music"
      defaultTitle="Music & Artists"
      descriptionKey="resources.pages.music.description"
      defaultDescription="Discover Esperanto musicians, bands, and music from around the world"
      categoryName="Music"
      resources={allMusicResources}
      additionalKeywords={[
        'Esperanto music',
        'Esperanto musicians',
        'Esperanto songs',
        'Esperanto bands',
        'Esperanto artists',
      ]}
    />
  );
};

export default MusicResourcesPage;
